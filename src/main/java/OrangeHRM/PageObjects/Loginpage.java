package OrangeHRM.PageObjects;

import OrangeHRM.LoadProp;
import OrangeHRM.Utils;
import org.openqa.selenium.By;
import org.testng.Assert;

public class Loginpage extends Utils {
    LoadProp loadProp=new LoadProp();
    private By _usernamefield=By.id("txtUsername");
    private By _passwordfield=By.id("txtPassword");
    private By _loginButton=By.id("btnLogin");
    private By _errorMessage=By.xpath("//div[@id='divLoginButton']/span");

    public void enterUsernameDetails()
    {
        enterText(_usernamefield,loadProp.getProperty("username"));

    }
    public void enterPasswordDetails()
    {

        enterText(_passwordfield,loadProp.getProperty("password"));
    }

    public void clickOnLogin()
    {
        clickOnElement(_loginButton);
    }

    public void enterInvalidUsername(String username)
    {
       enterText(_usernamefield,username);
    }
    public void enterInvalidPassword(String password)
    {
        enterText(_passwordfield,password);
    }
    public void verifyUserReceivesErrorMessage(String error_message)
    {
        Assert.assertTrue(getTextFromElement(_errorMessage).contains(error_message));
    }
}
