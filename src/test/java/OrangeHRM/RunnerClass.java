package OrangeHRM;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags=" @test" ,format = {"pretty","html:target/cucumber-reports"})

public class RunnerClass {
}
