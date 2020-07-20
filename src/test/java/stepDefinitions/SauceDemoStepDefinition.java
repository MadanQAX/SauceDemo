package stepDefinitions;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import dataSet.*;
import pageModels.*;

public class SauceDemoStepDefinition extends BasePage{
	
	BasePage basePage = new BasePage();	
	variableEnvironments variableenvironments = new variableEnvironments();
	
	public SauceDemoStepDefinition(){
		super();
	}
	
	@Before(order=0)
	public void beforeSetupStart(){
		System.out.println("-----------------------------Start of Scenario---------------------------------------------");
	}
	
	@Before(order=1)
	public void setUp(){
		browserSetup();
	}
	
	@After(order=0)
	public void beforeTeardown(){
		System.out.println("-----------------------------End of Scenario---------------------------------------------");
	}
	
	@After(order=1)
	public void tearDown(){
		driver.quit();
	}
	
	@Given("^user enters \"([^\"]*)\" and \"([^\"]*)\" and clicks on login button$")
	public void user_enters_username_and_password(String username, String password){
		sendKeysByID(user, username);
		sendKeysByID(pwd, password);
		clickElementByID(loginBtn);
	}

	@Then("^user is on home page and check for prodcuts$")
	public void user_is_on_home_page_and_check_for_products(){
		homePage();
	}
	
	@Then("^verify error message \"(.*)\"$")
	public void verify_error_message(String message){
		System.out.println("Error Message: " + getElementTextByXpath(loginErrorMsg));
		Assert.assertEquals(message, getElementTextByXpath(loginErrorMsg));
	}
	
	@When("^user is on swag labs home page$")
	public void user_is_on_swag_labs_home_page_(){
		homePage();
	}
	
	@Then("^verify products on home page$")
	public void verify_products_on_home_page(){
		findAndVerifyProducts();
		Assert.assertTrue(isElementDisplayedByID(cartBtn));
		Assert.assertTrue(isElementDisplayedByXpath(hamburger));
		Assert.assertTrue(isElementDisplayedByXpath(sortDropDown));
	}
	
	
	@Then("^verify user can sort products$")
	public void verify_user_can_sort_products(DataTable sortoptions){
		for(Map<String, String> data : sortoptions.asMaps(String.class, String.class)) {
			Select select = new Select(driver.findElement(By.xpath(sortDropDown)));
			select.selectByValue(data.get("value"));
			System.out.println(data.get("message") + getElementTextByXpath(productNameOnHome));
			Assert.assertEquals(data.get("firstproduct"), getElementTextByXpath(productNameOnHome));
		}}
	
	
	@Then("^user clicks on all items$")
	public void user_clicks_on_all_items(){
		clickElementByXpath(hamburgerBtn);
		clickElementByXpath(allItems);
		Assert.assertTrue(isElementDisplayedByXpath(appLogo));
	}

	@Then("^user clicks on about$")
	public void user_clicks_on_about() throws InterruptedException{
		clickElementByXpath(hamburgerBtn);
		clickElementByXpath(about);
		Assert.assertEquals("Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs", driver.getTitle());
		driver.navigate().back();
	}

	@Then("^user clicks on Reset App State$")
	public void user_clicks_on__Reset_App_State(){
		clickElementByXpath(addtoCartBtn);
		clickElementByXpath(hamburgerBtn);
		clickElementByID(resetAppState);	
	}

	@Then("^user clicks on logout$")
	public void user_clicks_on_logout(){
		clickElementByXpath(hamburgerBtn);
		clickElementByID(logout);
		Assert.assertEquals("Swag Labs", driver.getTitle());
	}
		
	@Then("^user adds product from home page$")
	public void verify_user_adds_product_from_home_page(DataTable productname) {
		int i = 1;
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
		clickElementByXpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]/../../../div[3]/button");
		Assert.assertEquals(i, Integer.parseInt(getElementTextByXpath(cartValue)));
		i = i+1;}
		clickElementByID(cartBtn);
		findAndVerifyProducts();
		driver.navigate().back();
	}
	
	@Then("^user removes product on home page$")
	public void user_removes_product_on_home_page(DataTable productname){
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
		clickElementByXpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]/../../../div[3]/button");
	}}
	
	@Then("^user adds product from product details page$")
	public void user_adds_product_from_product_details_page(DataTable productname) {
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
		System.out.println(data.get("productname"));
		clickElementByXpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]");
		clickElementByXpath(prodName);
		clickElementByXpath(addToCartBtnOnDetailsPage);
	}	}	
	
	@Then("^user removes products from product details page$")
	public void user_removes_products_from_product_details_page(DataTable productname)
	{
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
			clickElementByXpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]");
			clickElementByXpath("//*[@class='inventory_details_name' and contains(text(),'"+data.get("productname")+"')]/../button");
			driver.navigate().back();
	}}
	
	@Then("^user removes products from cart$")
	public void user_removes_products_from_cart(DataTable productname){
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
		clickElementByID(cartBtn);
		clickElementByXpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]/../../div[2]/button");
	}}
	
	@Then("^user continue shopping from cart$")
	public void user_continue_shopping_from_cart(){
		clickElementByID(cartBtn);
		clickElementByXpath(continueShoppingBtn);
	}
	
	@Then("^user checkout product from cart$")
	public void user_checkout_product_from_cart(){
		clickElementByID(cartBtn);
		clickElementByXpath(checkoutBtn);
	}
	
	@Then("^user tries to checkout product from cart without buyer data$")
	public void user_tries_to_checkout_product_from_cart_without_buyer_data()
	{
		Assert.assertEquals("Checkout: Your Information", getElementTextByXpath(header));
		clickElementByXpath(checkoutInfoContinueBtn);
		
		Assert.assertEquals("Error: First Name is required", getElementTextByXpath(errorMsgYourInfoPage));
		sendKeysByID(buyerFirstName, variableenvironments.buyerFirstName);
		clickElementByXpath(checkoutInfoContinueBtn);
		
		Assert.assertEquals("Error: Last Name is required", getElementTextByXpath(errorMsgYourInfoPage));
		sendKeysByID(buyerLastName, variableenvironments.buyerLastName);
		clickElementByXpath(checkoutInfoContinueBtn);
		
		Assert.assertEquals("Error: Postal Code is required", getElementTextByXpath(errorMsgYourInfoPage));
	}
	
	@Then("^user cancels checkout process$")
	public void user_cancels_checkout_process(){
		clickElementByXpath(cancelBtnYoutInfoPage);
	}
	
	@Then("^user continue checkout with buyer data$")
	public void user_continue_checkout_with_buyer_data(){
		Assert.assertEquals("Checkout: Your Information", getElementTextByXpath(header));
		sendKeysByID(buyerFirstName, variableenvironments.buyerFirstName);
		sendKeysByID(buyerLastName, variableenvironments.buyerLastName);
		sendKeysByID(buyerPostalCode, variableenvironments.buyerPostalCode);
		clickElementByXpath(checkoutInfoContinueBtn);
	}
	
	@Then("^user finish checkout process$")
	public void user_finish_checkout_process(){
		Assert.assertEquals("Checkout: Overview", getElementTextByXpath(header));
		clickElementByXpath(finishBtn);
		Assert.assertEquals("Finish", getElementTextByXpath(header));
	}
}