package stepDefinitions;


import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import dataSet.*;

public class SauceDemoStepDefinition extends variableEnvironments{

	variableEnvironments data = new variableEnvironments();
	public SauceDemoStepDefinition()
	{
		super();
		
	}
	WebDriver driver;
	
	@Before(order=0)
	public void beforeSetupStart()
	{
		System.out.println("-----------------------------Start of Scenario---------------------------------------------");
	}
	
	@Before(order=1)
	public void setUp()
	{
		String browser = System.getProperty("BROWSER");
		if(browser==null)
		{
			browser = System.getenv("BROWSER");
			if(browser==null)
			{
				browser = "chrome";
			}
		}
		switch (browser) {
		case "chrome":
			driver = new ChromeDriver();
			break;
		case "firefox":
			driver = new FirefoxDriver();
			break;
		default:
			driver = new ChromeDriver();
			break;
		}
		System.out.println("Opening Browser..................." + browser);

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.saucedemo.com/");
		String title = driver.getTitle();
		System.out.println("Login Page Title: " + title);
		Assert.assertEquals("Swag Labs", title);
	}
	
	@After(order=0)
	public void beforeTeardown()
	{
		System.out.println("-----------------------------End of Scenario---------------------------------------------");
	}
	
	
	@After(order=1)
	public void tearDown()
	{
		driver.quit();
	}
	
	@Given("^user enters \"([^\"]*)\" and \"([^\"]*)\" and clicks on login button$")
	public void user_enters_username_and_password(String username, String password)
	{
		driver.findElement(By.id("user-name")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.id("login-button")).click();
	}

	@Then("^user is on home page and check for prodcuts$")
	public void user_is_on_home_page_and_check_for_products()
	{
		String title = driver.getTitle();
		System.out.println("\nHome Page Title: " + title);
		Assert.assertEquals("Swag Labs", title);
		driver.findElement(By.xpath("//div[contains(text(),\"Products\")]"));
	}
	
	@Then("^verify error message \"(.*)\"$")
	public void verify_error_message(String message)
	{
		String errorMessage = driver.findElement(By.xpath("//h3[@data-test=\"error\"]")).getText();
		System.out.println("Error Message: " + errorMessage);
		Assert.assertEquals(message, errorMessage);
	}
	
	
	@When("^user is on swag labs home page$")
	public void user_is_on_swag_labs_home_page_()
	{
		String title = driver.getTitle();
		System.out.println("\nHome Page Title: " + title);
		Assert.assertEquals("Swag Labs", title);
		driver.findElement(By.xpath("//div[contains(text(),\"Products\")]"));
	}
	

	@Then("^verify products on home page$")
	public void verify_products_on_home_page()
	{
		List<WebElement> elements = driver.findElements(By.xpath("//a[contains(@id,'item_')]/div[@class='inventory_item_name']"));
		int len = elements.size();
		System.out.println(len);
		String[] names = new String[len+1];
		for (int i = 1; i <= len; i++){
			String prodName = "(//a[contains(@id, 'item_')]/div[@class='inventory_item_name'])["+i+"]";
			if(driver.findElement(By.xpath(prodName)).isDisplayed()) {
				names[i] = driver.findElement(By.xpath(prodName)).getText();
				Assert.assertEquals(data.productslist[i-1], names[i]);
				System.out.println("Expected: " + data.productslist[i-1] + "  Actual: " + names[i]);
			}else {
				break;
			}
		}
		WebElement cart = driver.findElement(By.id("shopping_cart_container"));
		cart.isDisplayed();
		WebElement hamburger = driver.findElement(By.xpath("//div[@class=\"bm-burger-button\"]"));
		hamburger.isDisplayed();
		WebElement sortDropDown = driver.findElement(By.xpath("//select[@class=\"product_sort_container\"]"));
		sortDropDown.isDisplayed();
	}
	
	
	@Then("^verify user can sort products$")
	public void verify_user_can_sort_products(DataTable sortoptions) throws InterruptedException
	{
		for(Map<String, String> data : sortoptions.asMaps(String.class, String.class)) {
		Select select = new Select(driver.findElement(By.xpath("//*[@class=\"product_sort_container\"]")));
		select.selectByValue(data.get("value"));
		String sortProduct = driver.findElement(By.xpath("//div[@class=\"inventory_item_name\"]")).getText();
		System.out.println(data.get("message") + sortProduct);
		Assert.assertEquals(data.get("firstproduct"), sortProduct);
		}	
	}
	
	@Then("^verify hamburger options$")
	public void verify_hamburger_options() throws InterruptedException
	{
		//Below code is for All Items option
		driver.findElement(By.xpath("//div[@class=\"bm-burger-button\"]//button")).click();;	
		driver.findElement(By.xpath("//a[@class=\"bm-item menu-item\" and contains(text(), \"All Items\")]")).click();;
		Assert.assertTrue(driver.findElement(By.xpath("//div[@class='app_logo']")).isDisplayed());
		//Below code is for About option
		driver.findElement(By.xpath("//div[@class=\"bm-burger-button\"]//button")).click();
		driver.findElement(By.xpath("//a[@class=\"bm-item menu-item\" and contains(text(), \"About\")]")).click();;
		Assert.assertEquals("Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs", driver.getTitle());
		driver.navigate().back();
		//Below code is for Reset App State option
		driver.findElement(By.xpath("//*[@class='inventory_item_name' and contains(text(),'Sauce Labs Backpack')]/../../../div[3]/button")).click();;
		driver.findElement(By.xpath("//div[@class=\"bm-burger-button\"]//button")).click();
		driver.findElement(By.id("reset_sidebar_link")).click();
		//Below code is for Logout option
		driver.findElement(By.id("logout_sidebar_link")).click();
		Assert.assertEquals("Swag Labs", driver.getTitle());
	}
	
		
	@Then("^user adds product from home page$")
	public void verify_user_adds_product_from_home_page(DataTable productname) 
	{
		int i = 1;
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
		WebElement addToCartBtn = driver.findElement(By.xpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]/../../../div[3]/button"));		
		addToCartBtn.click();
		Assert.assertEquals(i, Integer.parseInt(driver.findElement(By.xpath("//span[@class=\"fa-layers-counter shopping_cart_badge\"]")).getText()));
		i = i+1;
		}
		driver.findElement(By.id("shopping_cart_container")).click();
		List<WebElement> elements = driver.findElements(By.xpath("//a[contains(@id,'item_')]/div[@class='inventory_item_name']"));
		int len = elements.size();
		System.out.println(len);
		String[] names = new String[len+1];
		
			for (int j = 1; j <= len; j++){
			String prodName = "(//a[contains(@id, 'item_')]/div[@class='inventory_item_name'])["+j+"]";
			if(driver.findElement(By.xpath(prodName)).isDisplayed()) {
				names[j] = driver.findElement(By.xpath(prodName)).getText();
				Assert.assertEquals(data.productslist[j-1], names[j]);
				System.out.println("Expected: " + data.productslist[j-1] + "  Actual: " + names[j]);
			}else {
				break;
			}
		}
	}
	
	@Then("^verify user adds product from product details page$")
	public void verify_user_adds_product_from_product_details_page(DataTable productname) 
	{
		for (Map<String, String> data : productname.asMaps(String.class, String.class)){
			System.out.println(data.get("productname"));
		WebElement productName = driver.findElement(By.xpath("//*[@class='inventory_item_name' and contains(text(),'"+data.get("productname")+"')]"));
		productName.click();
		driver.findElement(By.xpath("//button[@class='btn_primary btn_inventory']")).click();
		driver.findElement(By.xpath("//div[@class='inventory_details']/button")).click();
	}	
	}	
	
	@Then("^user continue shopping from cart$")
	public void user_continue_shopping_from_cart()
	{
		driver.findElement(By.id("shopping_cart_container")).click();
		driver.findElement(By.xpath("//*[@class='btn_secondary']")).click();
	}
	
	
	@Then("^user removes product from cart$")
	public void user_removes_product_from_cart()
	{
		driver.findElement(By.id("shopping_cart_container")).click();
		driver.findElement(By.xpath("//*[@class=\"btn_secondary cart_button\"]")).click();
		driver.findElement(By.xpath("//*[@class=\"btn_secondary\"]")).click();
	}
	
	@Then("^user checkout product from cart$")
	public void user_checkout_product_from_cart()
	{
		driver.findElement(By.id("shopping_cart_container")).click();
		driver.findElement(By.xpath("//*[@class=\"btn_action checkout_button\"]")).click();
	}
	
	@Then("^user tries to checkout product from cart without buyer data$")
	public void user_tries_to_checkout_product_from_cart_without_buyer_data()
	{
		String checkoutYourInfoHdr = driver.findElement(By.xpath("//div[@class=\"subheader\"]")).getText();
		Assert.assertEquals("Checkout: Your Information", checkoutYourInfoHdr);
		
		WebElement continueBtn = driver.findElement(By.xpath("//*[@class=\"btn_primary cart_button\"]"));
		continueBtn.click();
		
		String fNameError = driver.findElement(By.xpath("//h3[@data-test=\"error\"]")).getText();
		System.out.println("Error Message: " + fNameError);
		Assert.assertEquals("Error: First Name is required", fNameError);
		driver.findElement(By.id("first-name")).sendKeys("FirstName");
		continueBtn.click();
		
		String lNameError = driver.findElement(By.xpath("//h3[@data-test=\"error\"]")).getText();
		System.out.println("Error Message: " + lNameError);
		Assert.assertEquals("Error: Last Name is required", lNameError);
		driver.findElement(By.id("last-name")).sendKeys("LastName");
		continueBtn.click();
		
		String postalCodeError = driver.findElement(By.xpath("//h3[@data-test=\"error\"]")).getText();
		System.out.println("Error Message: " + postalCodeError);
		Assert.assertEquals("Error: Postal Code is required", postalCodeError);
	}
	
	@Then("^user cancels checkout process$")
	public void user_cancels_checkout_process()
	{
		driver.findElement(By.xpath("//*[@class=\"cart_cancel_link btn_secondary\"]")).click();
	}
	

	@Then("^user continue checkout with buyer data$")
	public void user_continue_checkout_with_buyer_data()
	{
		String checkoutYourInfoHdr = driver.findElement(By.xpath("//div[@class=\"subheader\"]")).getText();
		Assert.assertEquals("Checkout: Your Information", checkoutYourInfoHdr);
		
		driver.findElement(By.id("first-name")).sendKeys("FirstName");
		driver.findElement(By.id("last-name")).sendKeys("LastName");
		driver.findElement(By.id("postal-code")).sendKeys("23654");
		
		WebElement continueBtn = driver.findElement(By.xpath("//*[@class=\"btn_primary cart_button\"]"));
		continueBtn.click();
		
	}
	
	@Then("^user finish checkout process$")
	public void user_finish_checkout_process()
	{
		String checkoutOverviewHdr = driver.findElement(By.xpath("//div[@class=\"subheader\"]")).getText();
		Assert.assertEquals("Checkout: Overview", checkoutOverviewHdr);
		
		driver.findElement(By.xpath("//*[@class=\"btn_action cart_button\"]")).click();
		
		String finishHdr = driver.findElement(By.xpath("//div[@class=\"subheader\"]")).getText();
		Assert.assertEquals("Finish", finishHdr);
	}

	
}
