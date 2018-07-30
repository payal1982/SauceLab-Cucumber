package OrangeHRM;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {

    BrowserSetup browserSetup=new BrowserSetup();
    LoadProp loadProp=new LoadProp();

    @Before
    public void openBrowser()
    {
        browserSetup.browserSelector();
        driver.get(loadProp.getProperty("url"));
        driver.manage().window().maximize();//to maximize the screen
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);//tells the driver to implicit wait for 20 sec for each element
    }
    @After
    public void closeBrowser()
    {
        driver.quit();
    }
}
