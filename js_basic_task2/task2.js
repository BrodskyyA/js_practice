let carPrice = 11111;
let productionYear = 2018;
let carMileage = 50001
let hasClimateControl = false;
let hasSecurity = false;
let isElectrical = false;
let totalPrice = carPrice


if (carPrice > 0 ) {
    if (productionYear > 2019 && productionYear <= 2022 ) {
    totalPrice = totalPrice + carPrice * 0.1
    }
    if (carMileage > 50000 && carMileage <= 100000) {
        totalPrice = totalPrice - carPrice * 0.05
    }
    if (hasClimateControl) {
       totalPrice = totalPrice + carPrice * 0.07
    }
    if (hasSecurity) {
     totalPrice = totalPrice + carPrice * 0.08
    }
    if (isElectrical) {
    totalPrice = totalPrice + carPrice * 0.15
    }
}

console.log("Базова ціна автомобіля: ", carPrice, "Фінальна вартість:", Number(totalPrice.toFixed(2)))