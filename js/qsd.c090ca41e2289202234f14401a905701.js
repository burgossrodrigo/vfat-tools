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
    const params = Dollars.QSD.Parameters;
    const calcPrice = twap => Math.min(twap - 1, params.SupplyChangeLimit);
    loadDollar(Dollars.QSD, calcPrice);
}
