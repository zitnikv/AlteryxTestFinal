const {Builder, By, Key, until} = require('selenium-webdriver');

(async function alza() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.alza.cz/procesory/18842843.htm');
    await driver.findElement(By.id('ui-id-4')).click();
        console.log('Price from the highest.');
    
    await driver.sleep(5000);
    
    /* najit zpusob jak zvolit a vlozit do kosiku prvni polozku */
    
    await driver.navigate().to('https://www.alza.cz/procesory/18842843.htm');
    await driver.findElement(By.id('ui-id-5')).click();
        console.log('Price from the lowest.');
    
    await driver.sleep(5000);

    /* najit zpusob jak zvolit a vlozit do kosiku prvni polozku */

  } finally {
    await driver.quit();
  }
  
})();