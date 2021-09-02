// Define UI
const buttons = document.getElementsByTagName("button");
const bestPrice = document.getElementById("best-price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCharge = document.getElementById("delivery-charge");
const promoCode = document.getElementById("promo-code");
const totalPrices = document.getElementsByClassName("total-price");

// Apply Promo Code
function applyPromoCode() {
    for (totalPrice of totalPrices) {
        if (totalPrice.innerText < 0) {
            totalPrice.innerText = 0;
        };

        const previousTotal = parseFloat(totalPrice.innerText);
        const discount = (previousTotal * 20) / 100;
        totalPrice.innerText = previousTotal - discount;
        promoCode.value = "";
    };
};

// Calculate Total Price
function calculateTotalPrice() {
    const total = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCharge.innerText);

    for (totalPrice of totalPrices) {
        totalPrice.innerText = total;
    };
};

// Button Click Event
for (button of buttons) {
    button.addEventListener("click", function (event) {
        const clickedButton = event.target.innerText;

        // Memory
        if (clickedButton == "8GB unified memory") {
            memoryCost.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == "16GB unified memory") {
            memoryCost.innerText = 180;
            calculateTotalPrice();
        }

        // Storage
        else if (clickedButton == "256GB SSD storage") {
            storageCost.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == "512GB SSD storage") {
            storageCost.innerText = 100;
            calculateTotalPrice();
        }

        else if (clickedButton == "1TB SSD storage") {
            storageCost.innerText = 180;
            calculateTotalPrice();
        }

        // Delivery
        else if (clickedButton == "Friday, Aug 25 FREE Prime Delivery") {
            deliveryCharge.innerText = 0;
            calculateTotalPrice();
        }

        else if (clickedButton == "Friday, Aug 21 Delivery charge $20") {
            deliveryCharge.innerText = 20;
            calculateTotalPrice();
        }

        // Promo Code
        else {
            if (promoCode.value == "stevekaku") {
                applyPromoCode();
            };
        };
    });
};
