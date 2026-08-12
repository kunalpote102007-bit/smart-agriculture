const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}


const savedUser = JSON.parse(
    localStorage.getItem("farmerUser")
) || {};

const farmerName =
    localStorage.getItem("farmerName") ||
    savedUser.name ||
    "Farmer";


const farmerNameElement =
    document.getElementById("farmerName");

if (farmerNameElement) {
    farmerNameElement.textContent = farmerName;
}


const welcomeUser =
    document.getElementById("welcomeUser");

if (welcomeUser) {
    welcomeUser.textContent = farmerName;
}


const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function(event) {

        event.preventDefault();

        if (confirm("Do you want to logout?")) {

            localStorage.removeItem("isLoggedIn");

            window.location.href = "login.html";
        }

    });

}


const crops =
    JSON.parse(
        localStorage.getItem("smartAgriCrops")
    ) || JSON.parse(
        localStorage.getItem("crops")
    ) || [];


const cropCount =
    document.getElementById("cropCount");

if (cropCount) {
    cropCount.textContent = crops.length;
}


const diseaseCount =
    document.getElementById("diseaseCount");

const diseaseName =
    localStorage.getItem("DiseaseName");

if (diseaseCount) {

    diseaseCount.textContent =
        diseaseName ? "1" : "0";

}


const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const value =
                this.value.toLowerCase().trim();

            const cards =
                document.querySelectorAll(".card");

            cards.forEach(function(card) {

                const text =
                    card.innerText.toLowerCase();

                if (text.includes(value)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}


const darkBtn =
    document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener(
        "click",
        function() {

            document.body.classList.toggle("dark");

        }
    );

}


const todayDate =
    document.getElementById("todayDate");

if (todayDate) {

    const today =
        new Date();

    todayDate.textContent =
        today.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

}


function updateTime() {

    const currentTime =
        document.getElementById("currentTime");

    if (!currentTime) {
        return;
    }

    const now =
        new Date();

    currentTime.textContent =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }
        );

}


updateTime();

setInterval(
    updateTime,
    1000
);


function calculateProfit() {

    const costElement =
        document.getElementById("cost");

    const incomeElement =
        document.getElementById("income");

    const resultElement =
        document.getElementById("profitResult");

    if (!costElement ||
        !incomeElement ||
        !resultElement) {

        return;

    }

    const cost =
        Number(costElement.value) || 0;

    const income =
        Number(incomeElement.value) || 0;

    const profit =
        income - cost;

    resultElement.textContent =
        "Profit : ₹" + profit.toLocaleString("en-IN");

}


function downloadReport() {

    const crops =
        JSON.parse(
            localStorage.getItem("smartAgriCrops")
        ) || JSON.parse(
            localStorage.getItem("crops")
        ) || [];

    let text =
        "SMART AGRICULTURE PLATFORM\n";

    text +=
        "FARMER CROP REPORT\n\n";

    text +=
        "Farmer : " +
        farmerName +
        "\n\n";

    if (crops.length === 0) {

        text +=
            "No crop records available.\n";

    } else {

        crops.forEach(function(crop, index) {

            text +=
                "Crop " +
                (index + 1) +
                "\n";

            text +=
                "Crop Name : " +
                (crop.name || "-") +
                "\n";

            text +=
                "Type : " +
                (crop.type || "-") +
                "\n";

            text +=
                "Date : " +
                (crop.date || "-") +
                "\n";

            text +=
                "Land Area : " +
                (crop.area || "-") +
                "\n";

            text +=
                "Status : " +
                (crop.status || "-") +
                "\n\n";

        });

    }


    const file =
        new Blob(
            [text],
            {
                type: "text/plain"
            }
        );


    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(file);

    link.download =
        "Smart_Agriculture_Report.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

}