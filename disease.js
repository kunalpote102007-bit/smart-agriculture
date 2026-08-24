let selectedDisease = null;
let cameraStream = null;
let capturedPhoto = null;

document.addEventListener("DOMContentLoaded", function () {

    if (typeof diseaseDatabase === "undefined") {

        alert("Disease database not loaded. Check js/disease-data.js");

        return;
    }

    loadCrops();
    updateStatistics();
    showInitialMessage();

    const imageInput = document.getElementById("leafImage");

    if (imageInput) {

        imageInput.addEventListener("change", function () {

            if (this.files && this.files[0]) {

                showUploadedImage(this.files[0]);

            }

        });

    }

});

function loadCrops() {

    const select = document.getElementById("cropSelect");

    if (!select) {
        return;
    }

    select.innerHTML =
        '<option value="">Select Crop</option>';

    const crops = [];

    diseaseDatabase.forEach(function (item) {

        if (!crops.includes(item.crop)) {

            crops.push(item.crop);

        }

    });

    crops.sort();

    crops.forEach(function (crop) {

        const option =
            document.createElement("option");

        option.value = crop;
        option.textContent = crop;

        select.appendChild(option);

    });

}

async function startCamera() {

    const video =
        document.getElementById("camera");

    const placeholder =
        document.getElementById("cameraPlaceholder");

    const startButton =
        document.getElementById("startCameraBtn");

    const captureButton =
        document.getElementById("captureBtn");

    const status =
        document.getElementById("cameraStatus");

    if (!navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia) {

        showStatus(
            "❌ Camera is not supported by this browser.",
            true
        );

        return;
    }

    try {

        if (cameraStream) {

            stopCamera();

        }

        cameraStream =
            await navigator.mediaDevices.getUserMedia({

                video: {
                    facingMode: {
                        ideal: "environment"
                    },
                    width: {
                        ideal: 1280
                    },
                    height: {
                        ideal: 720
                    }
                },

                audio: false

            });

        video.srcObject = cameraStream;

        video.style.display = "block";

        placeholder.style.display = "none";

        captureButton.disabled = false;

        startButton.textContent =
            "🔄 Restart Camera";

        showStatus(
            "✅ Camera started. Place the leaf clearly inside the camera."
        );

    } catch (error) {

        console.error("Camera Error:", error);

        let message =
            "❌ Camera access denied or unavailable.";

        if (error.name === "NotAllowedError") {

            message =
                "❌ Camera permission denied. Allow camera access in your browser.";

        }

        if (error.name === "NotFoundError") {

            message =
                "❌ No camera found on this device.";

        }

        if (error.name === "NotReadableError") {

            message =
                "❌ Camera is already being used by another application.";

        }

        showStatus(message, true);

    }

}

function capturePhoto() {

    const video =
        document.getElementById("camera");

    const canvas =
        document.getElementById("canvas");

    const preview =
        document.getElementById("photoPreview");

    const retakeButton =
        document.getElementById("retakeBtn");

    if (!cameraStream) {

        alert("Please start the camera first.");

        return;

    }

    if (!video.videoWidth ||
        !video.videoHeight) {

        alert("Camera is not ready yet.");

        return;

    }

    canvas.width =
        video.videoWidth;

    canvas.height =
        video.videoHeight;

    const context =
        canvas.getContext("2d");

    context.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    capturedPhoto =
        canvas.toDataURL(
            "image/jpeg",
            0.92
        );

    preview.src =
        capturedPhoto;

    preview.style.display =
        "block";

    retakeButton.style.display =
        "block";

    showStatus(
        "📸 Photo captured successfully."
    );

    stopCamera();

}

function retakePhoto() {

    const preview =
        document.getElementById("photoPreview");

    const retakeButton =
        document.getElementById("retakeBtn");

    capturedPhoto = null;

    preview.src = "";

    preview.style.display =
        "none";

    retakeButton.style.display =
        "none";

    startCamera();

}

function stopCamera() {

    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(function (track) {

                track.stop();

            });

        cameraStream = null;

    }

    const video =
        document.getElementById("camera");

    const placeholder =
        document.getElementById("cameraPlaceholder");

    const captureButton =
        document.getElementById("captureBtn");

    if (video) {

        video.srcObject = null;
        video.style.display = "none";

    }

    if (placeholder) {

        placeholder.style.display =
            "flex";

    }

    if (captureButton) {

        captureButton.disabled = true;

    }

}

function showUploadedImage(file) {

    if (!file.type.startsWith("image/")) {

        alert("Please select an image file.");

        return;

    }

    const reader =
        new FileReader();

    reader.onload = function (event) {

        capturedPhoto =
            event.target.result;

        const preview =
            document.getElementById("photoPreview");

        const retakeButton =
            document.getElementById("retakeBtn");

        preview.src =
            capturedPhoto;

        preview.style.display =
            "block";

        retakeButton.style.display =
            "block";

        stopCamera();

        showStatus(
            "🖼️ Image uploaded successfully."
        );

    };

    reader.readAsDataURL(file);

}

function detectDisease() {

    const cropSelect =
        document.getElementById("cropSelect");

    const imageInput =
        document.getElementById("leafImage");

    if (!cropSelect || !imageInput) {

        return;

    }

    const crop =
        cropSelect.value;

    const file =
        imageInput.files[0];

    if (crop === "") {

        alert("Please select a crop.");

        return;

    }

    if (!file && !capturedPhoto) {

        alert(
            "Please capture a photo or upload a leaf image."
        );

        return;

    }

    const results =
        diseaseDatabase.filter(function (item) {

            return item.crop === crop;

        });

    if (results.length === 0) {

        alert("No disease found for this crop.");

        return;

    }

    const index =
        Math.floor(
            Math.random() * results.length
        );

    selectedDisease =
        results[index];

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

    result.style.display =
        "block";

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
        input.value
            .toLowerCase()
            .trim();

    const filter =
        document.getElementById("severityFilter");

    const severity =
        filter ? filter.value : "";

    let results =
        diseaseDatabase;

    if (query !== "") {

        results =
            results.filter(function (item) {

                return (

                    item.disease
                        .toLowerCase()
                        .includes(query) ||

                    item.crop
                        .toLowerCase()
                        .includes(query) ||

                    item.symptoms
                        .toLowerCase()
                        .includes(query) ||

                    item.treatment
                        .toLowerCase()
                        .includes(query) ||

                    item.prevention
                        .toLowerCase()
                        .includes(query)

                );

            });

    }

    if (severity !== "") {

        results =
            results.filter(function (item) {

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

        card.className =
            "disease-item";

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

        card.onclick =
            function () {

                selectedDisease =
                    disease;

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

function showStatus(message, error = false) {

    const status =
        document.getElementById("cameraStatus");

    if (!status) {

        return;

    }

    status.textContent =
        message;

    status.style.display =
        "block";

    if (error) {

        status.style.background =
            "#ffebee";

        status.style.color =
            "#c62828";

    } else {

        status.style.background =
            "#f1f8e9";

        status.style.color =
            "#33691e";

    }

}

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value == null ? "" : value;

    return div.innerHTML;

}

window.addEventListener(
    "beforeunload",
    function () {

        stopCamera();

    }
);
