const {Builder, By} = require('selenium-webdriver');

(async function alza() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
        console.log('In Alza eshop add most and least expensive processors to the basket.')
    /*Add the most expensive item in category to basket */
    await driver.get('https://www.alza.cz/procesory/18842843.htm');
    await driver.findElement(By.id('ui-id-4')).click();
        console.log('Price filtered from the highest.');
    await driver.sleep(1000);
    
    /* Find the way how to put first item in a table after filtering by price desc */
    await driver.findElement(By.xpath('//*[@id="boxes"]/div[1]/div[2]/div[1]/span/a[1]')).click();
        console.log('Most expensive item add to basket.');
    await driver.sleep(1000);
    
    /*Add the least expensive item in category to basket */
    await driver.navigate().to('https://www.alza.cz/procesory/18842843.htm');
    await driver.findElement(By.id('ui-id-5')).click();
        console.log('Price filtered from the lowest.');
    await driver.sleep(1000);
    
    /* Find the way how to put first item in a table after filtering by price desc */
    await driver.findElement(By.xpath('//*[@id="boxes"]/div[1]/div[2]/div[1]/span/a[1]')).click();
    await driver.sleep(1000);   
    await driver.findElement(By.xpath('//*[@id="alzaDialog"]/div[3]/div[2]/span')).click();
    await driver.sleep(1000);
        console.log('Least expensive item add to basket.');
    await driver.sleep(1000);

    /* Add final comments to console */
        console.log('Both items are succesfully added to basket.');
        console.log('Test succesfull!');

    /* Go back to main page */
        console.log('Going back to main page.');
    await driver.navigate().to('https://www.alza.cz/');
    await driver.sleep(3000);

  } finally {
    /* Finally close the browser */ 
        console.log('After all, closing the browser.');
    await driver.quit();
      }

})();