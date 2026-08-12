const apiKey = "579b464db66ec23bdd0000013141608be46042ee744523a40e22ed2a";

const url = `https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24?api-key=${apiKey}&format=json&limit=1000&filters[State]=Maharashtra`;

fetch(url)
.then(res => res.json())
.then(data => {

    const records = data.records;

    function getPrice(cropName, marketName = "") {

        const item = records.find(r => {
            const cropMatch = r.Commodity &&
                r.Commodity.toLowerCase().includes(cropName.toLowerCase());

            const marketMatch = marketName === "" ||
                (r.Market && r.Market.toLowerCase().includes(marketName.toLowerCase()));

            return cropMatch && marketMatch;
        });

        return item ? `₹ ${item.Modal_Price}` : "Not Available";
    }

    document.getElementById("rice").textContent = getPrice("Rice");
    document.getElementById("wheat").textContent = getPrice("Wheat");
    document.getElementById("onion").textContent = getPrice("Onion", "Lasalgaon");
    document.getElementById("soybean").textContent = getPrice("Soybean");
    document.getElementById("cotton").textContent = getPrice("Cotton");

})
.catch(error => {

    console.error(error);

    ["rice","wheat","onion","soybean","cotton"].forEach(id => {
        document.getElementById(id).textContent = "Error";
    });

});