//package OrangeHRM;
//
//import OrangeHRM.PageObjects.Loginpage;
//import org.testng.annotations.Test;
//
//import java.util.concurrent.TimeUnit;
//
//public class TestSuite extends Utils {
//    BrowserSetup browserSetup=new BrowserSetup();
//    LoadProp loadProp=new LoadProp();
//    Loginpage loginpage=new Loginpage();
//@Test
//    public void openBrowser()
//    {
//        browserSetup.browserSelector();
////         System.setProperty("webdriver.chrome.driver","src\\test\\resources\\BrowserDriver\\chromedriver.exe");
////        driver=new ChromeDriver();//sets the driver to Chrome driver
//        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);//tells the driver to implicit wait for 20 sec for each element
//        driver.manage().window().maximize();//to maximize the screen
//        driver.get(loadProp.getProperty("url"));// opens the mentioned website
//        loginpage.enterLoginDetails();
//        loginpage.clickOnLogin();
//    }
//
////    @Test
////    public void userIsAbleToLoginWithValidCredentials()
////    {
////        loginpage.enterLoginDetails();
////        loginpage.clickOnLogin();
////    }
//
//}
