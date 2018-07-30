package OrangeHRM.PageObjects;

import OrangeHRM.LoadProp;
import OrangeHRM.Utils;
import org.openqa.selenium.By;
import org.testng.Assert;

public class DashboardPage extends Utils {
    LoadProp loadProp=new LoadProp();
    private By _dashBoardMessage=By.xpath("//div[@class='head']/h1");

    public void verifyUserIsNavigatedTodashboardAfterLogin()
    {
        Assert.assertEquals(getTextFromElement(_dashBoardMessage),loadProp.getProperty("AfterLoginText"));
    }
}
