/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function() {
  main()
})

const main = async () => {
  let tableData = {
    title: 'ThundeCore Network',
    heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
    rows: [
      ['Ram Protocol', `<a href="ram">Various</a>`, 'RAM', 'https://rammer.finance/'],
      ['TTSwap', `<a href="ttswap">Various</a>`, 'TT', 'https://ttswap.space/'],
    ],
  }

  let table = new AsciiTable().fromJSON(tableData)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}
