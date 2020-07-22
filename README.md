#### Swag Labs ####
-------------------------------------------------------------------------------------------------------
#### Intoduction
The main objective of this project is to develop automation scripts of Swag Labs using the Selenium-based Cucumber Behavior Driven Development (BDD) framework.

#### Pre-requisites
1. Java installed in the system
2. IDE installed in the system
3. Selenium WebDrivers downloaded in the system
4. Browser Drivers downloaded in the system
5. Maven installed in the system

#### Folder Structure of SauceDemo Maven Project

--SauceDemo
	|--src/main/java
	|	|--featues
	|		|--SauceDemo.feature
	|--src/test/java
	|	|--dataset
	|		|--variableEnvironments.java
	|	|--pageModels
	|		|--BasePage.java
	|	|--runner
	|		|--TestRunner.java	
	|	|--stepDefinitions
	|		|--SauceDemoStepDefinition.java
	|--JRE System Library
	|--Maven Dependencies
	|--Documents
	|	|--Setting Up Selenium WEbDriver.docx
	|	|--Swag Labs Test Cases.xlsx
	|	|--Swag Labs Test Plan.docx
	|--Drivers
	|	|--chromedriver.exe
	|	|--geckodriver.exe
	|--src
	|--target
	|--debug.log
	|--pom.xml
	|--README.md
	
#### Writing Features
````
Feature: Sauce Demo Application Testing Feature
###Test Scenario 1

@login 
Scenario Outline: Swag Labs Login with Valid User

Given user enters "<username>" and "<password>" and clicks on login button
Then user is on home page and check for prodcuts

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|
````

#### Writing Step Definitions
```
public class SauceDemoStepDefinition extends BasePage {
	@Given("^user enters \"([^\"]*)\" and \"([^\"]*)\" and clicks on login button$")
	public void user_enters_username_and_password(String username, String password){
		sendKeysByID(user, username);
		sendKeysByID(pwd, password);
		clickElementByID(loginBtn);
	}
}
```

#### TestRunner

```
@CucumberOptions(
		features = "C:\\Users\\Administrator\\Automation\\RakutenCucumber\\SauceDemo\\src\\main\\java\\features" //the path of the feature files
		,glue= {"stepDefinitions"}// the path of the stepDefeinition files
		,plugin = {"pretty", "html:target/cucumber-html-report", 
				"json:target/cucumber-reports/cucumber-reports/cucumber.json", 
				"junit:target/cucumber-reports/cucumber.xml"
				}
		,monochrome = true // display the console output in a proper readable format
		,strict = false
		,dryRun = false
		//,tags = {"@test"} //To run only the tests with specific tag(s)
		)
```
	
#### How to run Scripts from Eclipse IDE

* Fork this repo, keep the folder the structure intact
````
Open TestRunner.java file.
Run as JUnit Test from Eclipse IDE
* The scripts should run successfully in **Chrome** browser by default.
````
*To run in Firefox, Open variableEnvironments.java under dataset package
Change BROWSER= "firefox" and save it
Run as JUnit Test from Eclipse IDE
`````

#### How to run Scripts from command line

* Fork this repo, keep the folder the structure intact
* Run the following maven command from command line 
```
mvn clean test
```
* The scripts should run successfully in **Chrome** browser by default.
* Target folder should be created with cucumber-html-report and surefire-reports.
```
*To run in Firefox
mvn -DBROWSER=firefox test
```