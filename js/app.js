/*Function one Start  */
function memoryAndStorageCosts(product) {
    const extraCost = document.getElementById('extra' + product);
    const previousCostText = extraCost.innerText;
    const previousCost = parseFloat(previousCostText);
    //update the extra cost
    if (previousCost == 0) {
        extraCost.innerText = previousCost + 180;

    } else if (previousCost == 100) {
        extraCost.innerText = previousCost + 80;
    }
}
document.getElementById('memory-btn').addEventListener('click', function () {
    memoryAndStorageCosts('-memory');
});
document.getElementById('third-storage-btn').addEventListener('click', function () {
    memoryAndStorageCosts('-storage');
});

/*Function one End  */




/*function Second Start*/
function freeCosts(product) {
    const freeMemoryAndStorage = document.getElementById('extra' + product);
    freeMemoryAndStorage.innerText = 0;
}
document.getElementById('memory-btn-one').addEventListener('click', function () {
    freeCosts('-memory');

});

document.getElementById('first-storage-btn').addEventListener('click', function () {
    freeCosts('-storage')
});

/*function Second end*/
document.getElementById('second-storage-btn').addEventListener('click', function () {
    const extraFirstStorageCost = document.getElementById('extra-storage');
    const previousExtraStorageCost = parseInt(extraFirstStorageCost.innerText);

    if (previousExtraStorageCost == 0) {
        extraFirstStorageCost.innerText = previousExtraStorageCost + 100;
    } else if (previousExtraStorageCost == 180) {
        extraFirstStorageCost.innerText = previousExtraStorageCost - 80;
    }


});
/*Delivery Charge Event handler */

document.getElementById('free-delivery').addEventListener('click', function () {
    const freeDelivery = document.getElementById('delivery-charge');
    freeDelivery.innerText = 0;

});

document.getElementById('shipping-cost').addEventListener('click', function () {
    const shippingCosts = document.getElementById('delivery-charge');
    const newShipping = parseInt(shippingCosts.innerText);

    if (newShipping == 0) {
        shippingCosts.innerText = newShipping + 20;
    }
});

function totalPrice(isIncreasing) {
    const totalPrice = document.getElementById('total-price');
    const newTotalPrice = parseFloat(totalPrice.innerText);
    if (isIncreasing == true) {
        totalPrice.innerText = newTotalPrice + 180;

    } else if (newTotalPrice > 1299) {
        totalPrice.innerText = newTotalPrice - 180;
    }
}
document.getElementById('memory-btn').addEventListener('click', function () {
    totalPrice(true);
});
document.getElementById('memory-btn-one').addEventListener('click', function () {
    totalPrice(false);
});

function storageTotalPrice(isIncreasing) {
    const totalPrice = document.getElementById('total-price');
    const newtotalPrice = parseFloat(totalPrice.innerText);
    if (isIncreasing == true) {
        totalPrice.innerText = newtotalPrice + 100;
    } else if (newtotalPrice > 1299) {
        totalPrice.innerText = newtotalPrice - 100;
    }




}
document.getElementById('second-storage-btn').addEventListener('click', function () {
    storageTotalPrice( true);

});

document.getElementById('first-storage-btn').addEventListener('click', function () {
    storageTotalPrice(false);

});
document.getElementById('third-storage-btn').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    const newtotalPrice = parseFloat(totalPrice.innerText);
    totalPrice.innerText = newtotalPrice + 180;

});


function deliverCosts(isIncreasing) {
    const totalPrice = document.getElementById('total-price');
    const newtotalPrice = parseFloat(totalPrice.innerText);
    if (isIncreasing == true) {
        totalPrice.innerText = newtotalPrice + 20;
    } else {
        totalPrice.innerText = newtotalPrice - 20;
    }
}
document.getElementById('free-delivery').addEventListener('click', function () {
    deliverCosts(false);
});
document.getElementById('shipping-cost').addEventListener('click', function () {
    deliverCosts(true);
});

//sub-total event handler
function subTotalPrice(isIncreasing) {
    const totalPrice = document.getElementById('sub-total');
    const newTotalPrice = parseFloat(totalPrice.innerText);
    if (isIncreasing == true) {
        totalPrice.innerText = newTotalPrice + 180;

    } else if (newTotalPrice > 1299) {
        totalPrice.innerText = newTotalPrice - 180;
    }
}
document.getElementById('memory-btn').addEventListener('click', function () {
    subTotalPrice(true);
});
document.getElementById('memory-btn-one').addEventListener('click', function () {
    subTotalPrice(false);
});

function storageSubTotalPrice(isIncreasing) {
    const totalPrice = document.getElementById('sub-total');
    const newtotalPrice = parseFloat(totalPrice.innerText);
    if (isIncreasing == true) {
        totalPrice.innerText = newtotalPrice + 100;
    } else if (newtotalPrice > 1299) {
        totalPrice.innerText = newtotalPrice - 100;
    }
}
document.getElementById('second-storage-btn').addEventListener('click', function () {
    storageSubTotalPrice(true);

});

document.getElementById('first-storage-btn').addEventListener('click', function () {
    storageSubTotalPrice(false);

});
document.getElementById('third-storage-btn').addEventListener('click', function () {
    const totalPrice = document.getElementById('sub-total');
    const newtotalPrice = parseFloat(totalPrice.innerText);
    totalPrice.innerText = newtotalPrice + 180;
    
});

function subTotaldeliverCosts(isIncreasing) {
    const totalPrice = document.getElementById('sub-total');
    const newtotalPrice = parseFloat(totalPrice.innerText);
    if (isIncreasing == true) {
        totalPrice.innerText = newtotalPrice + 20;
    } else {
        totalPrice.innerText = newtotalPrice - 20;
    }
}
document.getElementById('free-delivery').addEventListener('click', function () {
    subTotaldeliverCosts(false);
});
document.getElementById('shipping-cost').addEventListener('click', function () {
    subTotaldeliverCosts(true);
});

//apply cuppon code
document.getElementById('apply-cuppon').addEventListener('click', function () {
    const inputField = document.getElementById('cuppon-input');
    const previousinputField = inputField.value;
    const subTotal = document.getElementById('sub-total');
    let subTotalText = parseFloat(subTotal.innerText);
    if (previousinputField == 'stevekaku') {
        subTotal.innerText = subTotalText - (subTotalText * 0.2);
    }
    //clear the cuppon input filed
    inputField.value = '';
});