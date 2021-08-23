/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Arbitrum Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["GMX                 ", `<a href="/arbitrum/gmx"      >Various</a>`,"ETH,GMX          ","https://gmx.financial"],
     ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();

}