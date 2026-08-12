let selectedDisease = null;

document.addEventListener("DOMContentLoaded", function () {
    if (typeof diseaseDatabase === "undefined") {
        alert("Disease database not loaded.");
        return;
    }

    loadCrops();
    updateStatistics();
    showInitialMessage();
});

function loadCrops() {
    const select = document.getElementById("cropSelect");

    if (!select) {
        return;
    }

    select.innerHTML = '<option value="">Select Crop</option>';

    const crops = [];

    diseaseDatabase.forEach(function (item) {
        if (!crops.includes(item.crop)) {
            crops.push(item.crop);
        }
    });

    crops.sort();

    crops.forEach(function (crop) {
        const option = document.createElement("option");

        option.value = crop;
        option.textContent = crop;

        select.appendChild(option);
    });
}

function detectDisease() {
    const cropSelect =
        document.getElementById("cropSelect");

    const imageInput =
        document.getElementById("leafImage");

    if (!cropSelect || !imageInput) {
        return;
    }

    const crop = cropSelect.value;
    const file = imageInput.files[0];

    if (crop === "") {
        alert("Please select a crop.");
        return;
    }

    if (!file) {
        alert("Please upload a leaf image.");
        return;
    }

    const results = diseaseDatabase.filter(function (item) {
        return item.crop === crop;
    });

    if (results.length === 0) {
        alert("No disease found.");
        return;
    }

    const index =
        Math.floor(Math.random() * results.length);

    selectedDisease = results[index];

    showResult(selectedDisease);
}

function showResult(disease) {
    const result =
        document.getElementById("result");

    if (!result) {
        return;
    }

    const diseaseName =
        document.getElementById("resultDisease");

    const crop =
        document.getElementById("resultCrop");

    const confidence =
        document.getElementById("resultConfidence");

    const confidenceBar =
        document.getElementById("confidenceBar");

    const symptoms =
        document.getElementById("resultSymptoms");

    const treatment =
        document.getElementById("resultTreatment");

    const prevention =
        document.getElementById("resultPrevention");

    const severity =
        document.getElementById("resultSeverity");

    if (diseaseName) {
        diseaseName.textContent =
            "🦠 " + disease.disease;
    }

    if (crop) {
        crop.textContent =
            "🌱 Crop: " + disease.crop;
    }

    if (confidence) {
        confidence.textContent =
            disease.confidence + "%";
    }

    if (confidenceBar) {
        confidenceBar.style.width =
            disease.confidence + "%";
    }

    if (symptoms) {
        symptoms.textContent =
            disease.symptoms;
    }

    if (treatment) {
        treatment.textContent =
            disease.treatment;
    }

    if (prevention) {
        prevention.textContent =
            disease.prevention;
    }

    if (severity) {
        severity.textContent =
            disease.severity;
    }

    result.style.display = "block";

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function searchDiseases() {
    const input =
        document.getElementById("searchDisease");

    const container =
        document.getElementById("searchResults");

    if (!input || !container) {
        return;
    }

    const query =
        input.value.toLowerCase().trim();

    const filter =
        document.getElementById("severityFilter");

    const severity =
        filter ? filter.value : "";

    let results = diseaseDatabase;

    if (query !== "") {
        results = results.filter(function (item) {
            return (
                item.disease.toLowerCase().includes(query) ||
                item.crop.toLowerCase().includes(query) ||
                item.symptoms.toLowerCase().includes(query) ||
                item.treatment.toLowerCase().includes(query) ||
                item.prevention.toLowerCase().includes(query)
            );
        });
    }

    if (severity !== "") {
        results = results.filter(function (item) {
            return item.severity === severity;
        });
    }

    displayResults(results);
}

function filterBySeverity() {
    searchDiseases();
}

function displayResults(results) {
    const container =
        document.getElementById("searchResults");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML =
            '<div class="no-result">❌ No disease found.</div>';

        return;
    }

    results.forEach(function (disease) {
        const card =
            document.createElement("div");

        card.className = "disease-item";

        card.innerHTML =
            "<h3>🦠 " +
            escapeHTML(disease.disease) +
            "</h3>" +

            "<span class='tag'>🌱 " +
            escapeHTML(disease.crop) +
            "</span>" +

            "<span class='tag'>⚠️ " +
            escapeHTML(disease.severity) +
            "</span>" +

            "<p><b>🤒 Symptoms:</b><br>" +
            escapeHTML(disease.symptoms) +
            "</p>" +

            "<p><b>💊 Treatment:</b><br>" +
            escapeHTML(disease.treatment) +
            "</p>" +

            "<p><b>🛡️ Prevention:</b><br>" +
            escapeHTML(disease.prevention) +
            "</p>";

        card.onclick = function () {
            selectedDisease = disease;
            showResult(disease);
        };

        container.appendChild(card);
    });
}

function showInitialMessage() {
    const container =
        document.getElementById("searchResults");

    if (!container) {
        return;
    }

    container.innerHTML =
        '<div class="no-result">🌱 Search disease, crop or symptom.</div>';
}

function updateStatistics() {
    const totalDiseases =
        document.getElementById("totalDiseases");

    const totalCrops =
        document.getElementById("totalCrops");

    const totalSolutions =
        document.getElementById("totalSolutions");

    const crops = [];

    diseaseDatabase.forEach(function (item) {
        if (!crops.includes(item.crop)) {
            crops.push(item.crop);
        }
    });

    if (totalDiseases) {
        totalDiseases.textContent =
            diseaseDatabase.length;
    }

    if (totalCrops) {
        totalCrops.textContent =
            crops.length;
    }

    if (totalSolutions) {
        totalSolutions.textContent =
            diseaseDatabase.length;
    }
}

function escapeHTML(value) {
    const div =
        document.createElement("div");

    div.textContent =
        value == null ? "" : value;

    return div.innerHTML;
}