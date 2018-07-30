package OrangeHRM;

import OrangeHRM.PageObjects.DashboardPage;
import OrangeHRM.PageObjects.Loginpage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs
    {
    Loginpage loginpage=new Loginpage();
    DashboardPage dashboardPage=new DashboardPage();

    @Given("^The user on the homepage$")
    public void the_user_on_the_homepage() {

    }

    @When("^User enters username$")
    public void user_enters_username()  {
    loginpage.enterUsernameDetails();

    }

    @When("^User enters password$")
    public void user_enters_password()  {
     loginpage.enterPasswordDetails();
    }

    @When("^user clicks on login button$")
    public void user_clicks_on_login_button()  {
        loginpage.clickOnLogin();
    }

    @Then("^The user should be able to login$")
    public void the_user_should_be_able_to_login()  {
    dashboardPage.verifyUserIsNavigatedTodashboardAfterLogin();
    }
    @When("^User enters invalid username as \"([^\"]*)\"$")
    public void user_enters_invalid_username_as(String username)
    {
      loginpage.enterInvalidUsername(username);
    }

    @When("^User enters invalid password as \"([^\"]*)\"$")
    public void user_enters_invalid_password_as(String password)
    {
        loginpage.enterInvalidPassword(password);
    }

    @Then("^The user should be able to the error message \"([^\"]*)\"$")
    public void the_user_should_be_able_to_the_error_message(String error_message)
    {
        loginpage.verifyUserReceivesErrorMessage(error_message);
    }
    }
