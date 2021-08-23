/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function() {
consoleInit(main)
});

async function main() {
  let tableData = {
    "title":"BUNI FARMS",
    "heading":["Farm","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["NFT Farm                     ",`<a href="../bunicorn/farms/"          >Various</a>`,"NFT               ","https://bunicorn.exchange/#/farms"],
      ["Pre-staking Farm             ",`<a href="../bunicorn/pre-staking/"    >Various</a>`,"BUNI              ","https://bunicorn.exchange/#/pre-staking"],
    ]};


  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}


