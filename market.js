const marketData = [
    [
        { id: "onion", price: 2400 },
        { id: "tomato", price: 1800 },
        { id: "potato", price: 1700 },
        { id: "wheat", price: 2600 },
        { id: "rice", price: 3200 },
        { id: "soybean", price: 4300 },
        { id: "cotton", price: 7200 },
        { id: "maize", price: 2200 },
        { id: "greenGram", price: 6800 },
        { id: "chickpea", price: 5600 }
    ],

    [
        { id: "onion", price: 2550 },
        { id: "tomato", price: 1950 },
        { id: "potato", price: 1850 },
        { id: "wheat", price: 2750 },
        { id: "rice", price: 3350 },
        { id: "soybean", price: 4450 },
        { id: "cotton", price: 7350 },
        { id: "maize", price: 2350 },
        { id: "greenGram", price: 6950 },
        { id: "chickpea", price: 5750 }
    ],

    [
        { id: "onion", price: 2300 },
        { id: "tomato", price: 2100 },
        { id: "potato", price: 1750 },
        { id: "wheat", price: 2680 },
        { id: "rice", price: 3100 },
        { id: "soybean", price: 4200 },
        { id: "cotton", price: 7100 },
        { id: "maize", price: 2280 },
        { id: "greenGram", price: 6700 },
        { id: "chickpea", price: 5500 }
    ],

    [
        { id: "onion", price: 2700 },
        { id: "tomato", price: 2200 },
        { id: "potato", price: 1900 },
        { id: "wheat", price: 2800 },
        { id: "rice", price: 3450 },
        { id: "soybean", price: 4600 },
        { id: "cotton", price: 7500 },
        { id: "maize", price: 2400 },
        { id: "greenGram", price: 7100 },
        { id: "chickpea", price: 5900 }
    ],

    [
        { id: "onion", price: 2450 },
        { id: "tomato", price: 1850 },
        { id: "potato", price: 1650 },
        { id: "wheat", price: 2550 },
        { id: "rice", price: 3250 },
        { id: "soybean", price: 4350 },
        { id: "cotton", price: 7250 },
        { id: "maize", price: 2150 },
        { id: "greenGram", price: 6750 },
        { id: "chickpea", price: 5650 }
    ],

    [
        { id: "onion", price: 2850 },
        { id: "tomato", price: 2300 },
        { id: "potato", price: 2000 },
        { id: "wheat", price: 2900 },
        { id: "rice", price: 3500 },
        { id: "soybean", price: 4700 },
        { id: "cotton", price: 7650 },
        { id: "maize", price: 2500 },
        { id: "greenGram", price: 7250 },
        { id: "chickpea", price: 6100 }
    ],

    [
        { id: "onion", price: 2200 },
        { id: "tomato", price: 1750 },
        { id: "potato", price: 1600 },
        { id: "wheat", price: 2450 },
        { id: "rice", price: 3050 },
        { id: "soybean", price: 4100 },
        { id: "cotton", price: 7000 },
        { id: "maize", price: 2050 },
        { id: "greenGram", price: 6500 },
        { id: "chickpea", price: 5350 }
    ],

    [
        { id: "onion", price: 2600 },
        { id: "tomato", price: 2050 },
        { id: "potato", price: 1800 },
        { id: "wheat", price: 2700 },
        { id: "rice", price: 3300 },
        { id: "soybean", price: 4500 },
        { id: "cotton", price: 7400 },
        { id: "maize", price: 2300 },
        { id: "greenGram", price: 7000 },
        { id: "chickpea", price: 5800 }
    ],

    [
        { id: "onion", price: 2500 },
        { id: "tomato", price: 1900 },
        { id: "potato", price: 1720 },
        { id: "wheat", price: 2620 },
        { id: "rice", price: 3180 },
        { id: "soybean", price: 4250 },
        { id: "cotton", price: 7150 },
        { id: "maize", price: 2180 },
        { id: "greenGram", price: 6850 },
        { id: "chickpea", price: 5550 }
    ],

    [
        { id: "onion", price: 2750 },
        { id: "tomato", price: 2150 },
        { id: "potato", price: 1950 },
        { id: "wheat", price: 2850 },
        { id: "rice", price: 3400 },
        { id: "soybean", price: 4550 },
        { id: "cotton", price: 7550 },
        { id: "maize", price: 2450 },
        { id: "greenGram", price: 7150 },
        { id: "chickpea", price: 6000 }
    ]
];

function updateMarketPrices() {

    let lastIndex = localStorage.getItem("marketPriceIndex");

    let currentIndex;

    if (lastIndex === null) {
        currentIndex = Math.floor(Math.random() * marketData.length);
    } else {
        currentIndex = (parseInt(lastIndex) + 1) % marketData.length;
    }

    localStorage.setItem("marketPriceIndex", currentIndex);

    const todayPrices = marketData[currentIndex];

    todayPrices.forEach(item => {

        const element = document.getElementById(item.id);

        if (element) {
            element.textContent = "₹" + item.price;
        }

    });
}

document.addEventListener("DOMContentLoaded", updateMarketPrices);
