package pageModels;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;

import dataSet.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;


public class BasePage extends variableEnvironments{

	variableEnvironments variableenvironments = new variableEnvironments();
	
	public WebDriver driver;
	
	public String user = "user-name";
	public String pwd = "password";
	public String loginBtn = "login-button";
	public String loginErrorMsg = "//h3[@data-test='error']";
	public String productNameOnHome = "//a[contains(@id,'item_')]/div[@class='inventory_item_name']";
	public String cartBtn = "shopping_cart_container";
	public String hamburger = "//div[@class='bm-burger-button']";
	public String hamburgerBtn = "//div[@class='bm-burger-button']//button";
	public String sortDropDown = "//select[@class='product_sort_container']";
	public String allItems = "//a[@class='bm-item menu-item' and contains(text(), 'All Items')]";
	public String appLogo = "//div[@class='app_logo']";
	public String about = "//a[@class='bm-item menu-item' and contains(text(), 'About')]";
	public String resetAppState = "reset_sidebar_link";
	public String logout = "logout_sidebar_link";
	public String prodName = "//button[@class='btn_primary btn_inventory']";
	public String addToCartBtnOnDetailsPage = "//div[@class='inventory_details']/button";
	public String addtoCartBtn = "//button[@class='btn_primary btn_inventory' and contains(text(),'ADD TO CART')]";
	public String cartValue = "//div[@id='shopping_cart_container']//span";
	public String continueShoppingBtn = "//*[@class='btn_secondary']";
	public String checkoutBtn = "//*[@class='btn_action checkout_button']";
	public String header = "//div[@class='subheader']";
	public String checkoutInfoContinueBtn = "//*[@class='btn_primary cart_button']";
	public String errorMsgYourInfoPage = "//h3[@data-test='error']";
	public String cancelBtnYoutInfoPage = "//*[@class='cart_cancel_link btn_secondary']";
	public String buyerFirstName = "first-name";
	public String buyerLastName = "last-name";
	public String buyerPostalCode = "postal-code";
	public String finishBtn = "//*[@class='btn_action cart_button']";
	public String productsHeader = "//div[contains(text(),'Products')]";
	
	public void clickElementByXpath(String xpath) {
		driver.findElement(By.xpath(xpath)).click();
	}
	
	public void clickElementByID(String id) {
		driver.findElement(By.id(id)).click();
	}
	
	public void sendKeysByID(String id, String keysToSend) {
		driver.findElement(By.id(id)).sendKeys(keysToSend);;
	}
	
	public boolean isElementDisplayedByXpath(String xpath) {
		return driver.findElement(By.xpath(xpath)).isDisplayed();
	}
	
	public boolean isElementDisplayedByID(String id) {
		return driver.findElement(By.id(id)).isDisplayed();
	}
	
	public String getElementTextByXpath(String xpath) {
		return driver.findElement(By.xpath(xpath)).getText();
	}
	
	public WebElement findElementsByXpath(String xpath) {
		return driver.findElement(By.xpath(xpath));
	}
	
	public void browserSetup()
	{
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--headless", "--disable-gpu", "--window-size=1920,1200","--ignore-certificate-errors");
		String browser = System.getProperty("BROWSER");
		System.out.println(browser);
		if(browser==null)
		{
			browser = variableenvironments.BROWSER;
			System.out.println(browser);
			if(browser==null)
			{
				browser = "chrome";
			}
		}
		switch (browser) {
		case "chrome":
			driver = new ChromeDriver(options);
			break;
		case "firefox":
			driver = new FirefoxDriver();
			break;
		default:
			driver = new ChromeDriver(options);
			break;
		}
		System.out.println("Opening Browser..................." + browser);

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(variableenvironments.url);
		Assert.assertEquals("Swag Labs", driver.getTitle());
	}
	
	public void homePage()
	{
		String Title = driver.getTitle();
		System.out.println("Home Page Title: " + Title);
		Assert.assertEquals("Swag Labs", driver.getTitle());
		Assert.assertEquals("Products", driver.findElement(By.xpath(productsHeader)).getText());
	}
	
	public void findAndVerifyProducts()
	{
		List<WebElement> elements = driver.findElements(By.xpath(productNameOnHome));
		int len = elements.size();
		String[] names = new String[len+1];
		for (int j = 1; j <= len; j++){
			String prodName = "(//a[contains(@id, 'item_')]/div[@class='inventory_item_name'])["+j+"]";
			if(driver.findElement(By.xpath(prodName)).isDisplayed()) {
				names[j] = driver.findElement(By.xpath(prodName)).getText();
				Assert.assertEquals(productslist[j-1], names[j]);
				System.out.println("Expected: " + productslist[j-1] + "  Actual: " + names[j]);
			}else {
				break;
			}
		}
	}
	
}
