package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Administrator\\Automation\\RakutenCucumber\\SauceDemo\\src\\main\\java\\features" //the path of the feature files
		,glue= {"stepDefinitions"}// the path of the stepDefeinition files
		,plugin = {"pretty", "html:target/cucumber-html-report", 
				"json:target/cucumber-reports/cucumber-reports/cucumber.json", 
				"junit:target/cucumber-reports/cucumber.xml"
				}
		//format is used to genearate different types of reporting
		,monochrome = true // display the console output in a proper readable format
		,strict = false
		,dryRun = false
		//,tags = {"@test"}
		//ORed : tags ={"@smoke , @negativecases"} -- executes all tests tagged as @smoke OR @negativecases
		//ANDed : tags ={"@smoke" , "@negativecases"} -- executes all tests tagged as @smoke AND @negativecases
		// use 	~ for ignoring the test cases of particular tag like tags = {"~@smoke", "@negativecases"}
		)

public class TestRunner {

}
