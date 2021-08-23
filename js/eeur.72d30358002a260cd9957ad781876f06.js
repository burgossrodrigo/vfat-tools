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
    const params = Dollars.eEUR.Parameters;
    const calcPrice = (twap, totalCoupons, totalRedeemable, epoch) =>
        (epoch < params.BootstrappingPeriod)
            ? params.BootstrappingPrice - 1
            : calculateEmptySetChange(params, totalCoupons, totalRedeemable, twap)

    loadDollar(Dollars.eEUR, calcPrice);
}
