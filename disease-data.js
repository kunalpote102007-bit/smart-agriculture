const baseDiseases = [
    {
        crop: "Rice",
        disease: "Rice Blast",
        symptoms: "Diamond shaped brown lesions on leaves, leaf drying and reduced growth.",
        treatment: "Remove infected plant parts and use recommended fungicide.",
        prevention: "Use resistant varieties, balanced fertilizer and proper field sanitation.",
        severity: "High"
    },
    {
        crop: "Rice",
        disease: "Bacterial Leaf Blight",
        symptoms: "Yellowing from leaf tips, water-soaked lesions and leaf drying.",
        treatment: "Remove severely infected plants and follow recommended disease management.",
        prevention: "Use clean seed, resistant varieties and avoid excessive nitrogen.",
        severity: "High"
    },
    {
        crop: "Rice",
        disease: "Sheath Blight",
        symptoms: "Oval greenish-grey lesions on leaf sheaths.",
        treatment: "Improve field management and use recommended fungicide.",
        prevention: "Avoid excessive nitrogen and maintain proper plant spacing.",
        severity: "High"
    },
    {
        crop: "Rice",
        disease: "Brown Spot",
        symptoms: "Brown circular spots on leaves with yellow halos.",
        treatment: "Improve plant nutrition and use recommended fungicide.",
        prevention: "Use healthy seed and maintain balanced soil fertility.",
        severity: "Medium"
    },
    {
        crop: "Rice",
        disease: "Tungro Disease",
        symptoms: "Yellow-orange leaves, stunted growth and reduced tillering.",
        treatment: "Control insect vectors and remove severely infected plants.",
        prevention: "Use resistant varieties and manage leafhopper populations.",
        severity: "Very High"
    },
    {
        crop: "Wheat",
        disease: "Wheat Rust",
        symptoms: "Orange, yellow or brown rust-colored pustules on leaves.",
        treatment: "Use suitable fungicide according to agricultural recommendations.",
        prevention: "Grow resistant varieties and maintain field sanitation.",
        severity: "High"
    },
    {
        crop: "Wheat",
        disease: "Powdery Mildew",
        symptoms: "White powder-like growth on leaves and stems.",
        treatment: "Use recommended fungicide and improve air circulation.",
        prevention: "Avoid excessive nitrogen and dense planting.",
        severity: "Medium"
    },
    {
        crop: "Wheat",
        disease: "Loose Smut",
        symptoms: "Black powdery masses replace wheat grains and spikelets.",
        treatment: "Use disease-free seed and appropriate seed treatment.",
        prevention: "Use certified seed and resistant varieties.",
        severity: "High"
    },
    {
        crop: "Wheat",
        disease: "Septoria Leaf Blotch",
        symptoms: "Brown lesions with dark fruiting bodies on leaves.",
        treatment: "Use recommended fungicide and remove infected residues.",
        prevention: "Crop rotation and use resistant varieties.",
        severity: "Medium"
    },
    {
        crop: "Cotton",
        disease: "Cotton Leaf Curl Virus",
        symptoms: "Leaf curling, vein thickening and stunted plant growth.",
        treatment: "Control insect vectors and remove severely infected plants.",
        prevention: "Use resistant varieties and manage whitefly populations.",
        severity: "Very High"
    },
    {
        crop: "Cotton",
        disease: "Alternaria Leaf Spot",
        symptoms: "Brown circular spots with concentric rings on leaves.",
        treatment: "Remove infected debris and use recommended fungicide.",
        prevention: "Use healthy seed and maintain proper field sanitation.",
        severity: "Medium"
    },
    {
        crop: "Cotton",
        disease: "Bacterial Blight",
        symptoms: "Angular water-soaked lesions and dark spots on leaves.",
        treatment: "Remove infected plant material and use recommended management.",
        prevention: "Use disease-free seed and resistant varieties.",
        severity: "High"
    },
    {
        crop: "Cotton",
        disease: "Fusarium Wilt",
        symptoms: "Yellowing, wilting and vascular discoloration.",
        treatment: "Remove infected plants and follow soil disease management.",
        prevention: "Use resistant varieties and crop rotation.",
        severity: "High"
    },
    {
        crop: "Soybean",
        disease: "Soybean Rust",
        symptoms: "Small reddish-brown spots and premature leaf drop.",
        treatment: "Apply recommended fungicide when disease risk is high.",
        prevention: "Use resistant varieties and monitor fields regularly.",
        severity: "High"
    },
    {
        crop: "Soybean",
        disease: "Frogeye Leaf Spot",
        symptoms: "Circular spots with dark margins and grey centers.",
        treatment: "Use suitable fungicide and remove infected residues.",
        prevention: "Use clean seed and crop rotation.",
        severity: "Medium"
    },
    {
        crop: "Soybean",
        disease: "Downy Mildew",
        symptoms: "Yellow-green patches on upper leaf surfaces and fungal growth underneath.",
        treatment: "Use recommended fungicide and improve field ventilation.",
        prevention: "Use healthy seed and maintain proper spacing.",
        severity: "Medium"
    },
    {
        crop: "Sugarcane",
        disease: "Red Rot",
        symptoms: "Red internal tissue, drying leaves and cane deterioration.",
        treatment: "Remove infected canes and use healthy planting material.",
        prevention: "Use disease-free setts and resistant varieties.",
        severity: "Very High"
    },
    {
        crop: "Sugarcane",
        disease: "Smut",
        symptoms: "Long black whip-like structures emerging from the plant.",
        treatment: "Remove infected stools and use healthy planting material.",
        prevention: "Use resistant varieties and disease-free setts.",
        severity: "High"
    },
    {
        crop: "Sugarcane",
        disease: "Wilt",
        symptoms: "Leaf drying, yellowing and internal discoloration of cane.",
        treatment: "Remove affected plants and improve field management.",
        prevention: "Use healthy planting material and resistant varieties.",
        severity: "High"
    },
    {
        crop: "Sugarcane",
        disease: "Grassy Shoot Disease",
        symptoms: "Excessive thin shoots, pale leaves and grassy appearance.",
        treatment: "Remove infected clumps and control insect vectors.",
        prevention: "Use disease-free planting material.",
        severity: "Very High"
    },
    {
        crop: "Tomato",
        disease: "Early Blight",
        symptoms: "Dark circular spots with concentric rings on leaves.",
        treatment: "Remove infected leaves and use recommended fungicide.",
        prevention: "Avoid overhead irrigation and maintain sanitation.",
        severity: "High"
    },
    {
        crop: "Tomato",
        disease: "Late Blight",
        symptoms: "Dark water-soaked lesions and rapid leaf browning.",
        treatment: "Remove infected material and apply suitable fungicide.",
        prevention: "Improve air circulation and avoid prolonged leaf wetness.",
        severity: "Very High"
    },
    {
        crop: "Tomato",
        disease: "Tomato Mosaic Virus",
        symptoms: "Mosaic patterns, leaf distortion and reduced plant growth.",
        treatment: "Remove infected plants and control spread.",
        prevention: "Use clean tools, healthy seedlings and resistant varieties.",
        severity: "High"
    },
    {
        crop: "Tomato",
        disease: "Bacterial Wilt",
        symptoms: "Sudden wilting while leaves remain green.",
        treatment: "Remove infected plants and improve soil disease management.",
        prevention: "Use resistant varieties and clean planting material.",
        severity: "Very High"
    },
    {
        crop: "Tomato",
        disease: "Septoria Leaf Spot",
        symptoms: "Small circular spots with dark borders on leaves.",
        treatment: "Remove infected leaves and use recommended fungicide.",
        prevention: "Avoid overhead watering and maintain sanitation.",
        severity: "Medium"
    },
    {
        crop: "Potato",
        disease: "Potato Late Blight",
        symptoms: "Dark irregular lesions on leaves and stems.",
        treatment: "Use recommended fungicide and remove infected material.",
        prevention: "Use certified seed and maintain good field sanitation.",
        severity: "Very High"
    },
    {
        crop: "Potato",
        disease: "Potato Early Blight",
        symptoms: "Brown circular leaf spots with target-like rings.",
        treatment: "Apply recommended fungicide and remove infected debris.",
        prevention: "Practice crop rotation and maintain plant nutrition.",
        severity: "Medium"
    },
    {
        crop: "Potato",
        disease: "Common Scab",
        symptoms: "Rough corky lesions appearing on potato tubers.",
        treatment: "Improve soil management and avoid excessive soil alkalinity.",
        prevention: "Use certified seed and maintain proper soil moisture.",
        severity: "Medium"
    },
    {
        crop: "Maize",
        disease: "Northern Corn Leaf Blight",
        symptoms: "Long grey-green lesions on maize leaves.",
        treatment: "Use resistant hybrids and recommended fungicide.",
        prevention: "Crop rotation and removal of infected residues.",
        severity: "High"
    },
    {
        crop: "Maize",
        disease: "Common Rust",
        symptoms: "Small reddish-brown pustules on leaves.",
        treatment: "Use resistant varieties and suitable fungicide when needed.",
        prevention: "Use resistant hybrids and maintain crop health.",
        severity: "Medium"
    },
    {
        crop: "Maize",
        disease: "Common Smut",
        symptoms: "Large grey or black galls on leaves, stalks and ears.",
        treatment: "Remove infected plant parts and maintain field sanitation.",
        prevention: "Avoid plant injury and use healthy seed.",
        severity: "Medium"
    },
    {
        crop: "Groundnut",
        disease: "Groundnut Leaf Spot",
        symptoms: "Brown or black spots appearing on leaves.",
        treatment: "Use recommended fungicide and remove crop debris.",
        prevention: "Crop rotation and proper field sanitation.",
        severity: "Medium"
    },
    {
        crop: "Groundnut",
        disease: "Groundnut Rust",
        symptoms: "Rust-colored pustules on lower leaf surfaces.",
        treatment: "Apply recommended fungicide when required.",
        prevention: "Use resistant varieties and maintain field sanitation.",
        severity: "Medium"
    },
    {
        crop: "Chilli",
        disease: "Chilli Anthracnose",
        symptoms: "Dark sunken spots on fruits and drying of plant parts.",
        treatment: "Remove infected fruits and use recommended fungicide.",
        prevention: "Use healthy seed and avoid excess moisture.",
        severity: "High"
    },
    {
        crop: "Chilli",
        disease: "Chilli Leaf Curl",
        symptoms: "Upward curling, leaf narrowing and stunted growth.",
        treatment: "Control insect vectors and remove severely infected plants.",
        prevention: "Manage thrips and whiteflies and use healthy seedlings.",
        severity: "High"
    },
    {
        crop: "Chilli",
        disease: "Bacterial Leaf Spot",
        symptoms: "Small dark spots on leaves and fruits.",
        treatment: "Remove infected material and use recommended bacterial disease management.",
        prevention: "Use clean seed and avoid excessive moisture.",
        severity: "Medium"
    },
    {
        crop: "Onion",
        disease: "Purple Blotch",
        symptoms: "Purple-brown lesions on onion leaves.",
        treatment: "Apply suitable fungicide and remove infected residues.",
        prevention: "Improve drainage and avoid prolonged leaf wetness.",
        severity: "Medium"
    },
    {
        crop: "Onion",
        disease: "Downy Mildew",
        symptoms: "Pale green patches and greyish fungal growth on leaves.",
        treatment: "Use recommended fungicide and improve ventilation.",
        prevention: "Avoid excess irrigation and maintain proper spacing.",
        severity: "High"
    },
    {
        crop: "Mango",
        disease: "Mango Anthracnose",
        symptoms: "Dark lesions on leaves, flowers and fruits.",
        treatment: "Remove infected parts and use recommended fungicide.",
        prevention: "Prune canopy for ventilation and maintain sanitation.",
        severity: "High"
    },
    {
        crop: "Mango",
        disease: "Powdery Mildew",
        symptoms: "White powdery growth on flowers, leaves and young fruits.",
        treatment: "Use recommended fungicide during disease development.",
        prevention: "Improve air circulation and avoid excessive humidity.",
        severity: "High"
    },
    {
        crop: "Mango",
        disease: "Bacterial Black Spot",
        symptoms: "Black angular lesions on leaves, twigs and fruits.",
        treatment: "Remove infected plant parts and follow recommended bacterial disease management.",
        prevention: "Use healthy planting material and maintain orchard sanitation.",
        severity: "High"
    },
    {
        crop: "Banana",
        disease: "Black Sigatoka",
        symptoms: "Dark streaks and spots on banana leaves.",
        treatment: "Remove severely affected leaves and use recommended fungicide.",
        prevention: "Maintain good drainage and field sanitation.",
        severity: "High"
    },
    {
        crop: "Banana",
        disease: "Panama Disease",
        symptoms: "Yellowing, wilting and vascular discoloration.",
        treatment: "Remove infected plants and prevent movement of contaminated soil.",
        prevention: "Use disease-free planting material and resistant varieties.",
        severity: "Very High"
    },
    {
        crop: "Grape",
        disease: "Downy Mildew",
        symptoms: "Yellow patches on leaves and white growth under leaves.",
        treatment: "Use recommended fungicide and improve canopy ventilation.",
        prevention: "Maintain proper spacing and avoid excess humidity.",
        severity: "High"
    },
    {
        crop: "Grape",
        disease: "Powdery Mildew",
        symptoms: "White powdery growth on leaves, shoots and berries.",
        treatment: "Use recommended fungicide and improve air circulation.",
        prevention: "Avoid excessive humidity and maintain proper canopy management.",
        severity: "High"
    },
    {
        crop: "Apple",
        disease: "Apple Scab",
        symptoms: "Olive-green to dark lesions on leaves and fruits.",
        treatment: "Use recommended fungicide according to local guidance.",
        prevention: "Remove fallen leaves and maintain orchard sanitation.",
        severity: "High"
    },
    {
        crop: "Apple",
        disease: "Fire Blight",
        symptoms: "Blackened shoots, flowers and leaves resembling fire damage.",
        treatment: "Prune infected branches and follow recommended bacterial disease management.",
        prevention: "Use healthy planting material and disinfect pruning tools.",
        severity: "Very High"
    },
    {
        crop: "Barley",
        disease: "Barley Leaf Rust",
        symptoms: "Orange-brown pustules scattered across leaves.",
        treatment: "Use resistant varieties and recommended fungicide.",
        prevention: "Maintain field sanitation and balanced nutrition.",
        severity: "Medium"
    },
    {
        crop: "Mustard",
        disease: "White Rust",
        symptoms: "White blister-like pustules on leaves and stems.",
        treatment: "Remove infected material and use recommended fungicide.",
        prevention: "Use healthy seed and avoid excessive moisture.",
        severity: "Medium"
    },
    {
        crop: "Pigeon Pea",
        disease: "Fusarium Wilt",
        symptoms: "Yellowing, wilting and gradual drying of plants.",
        treatment: "Remove affected plants and follow soil disease management.",
        prevention: "Use resistant varieties and crop rotation.",
        severity: "High"
    },
    {
        crop: "Pigeon Pea",
        disease: "Sterility Mosaic Disease",
        symptoms: "Mosaic leaves, excessive branching and reduced flowering.",
        treatment: "Control mite vectors and remove infected plants.",
        prevention: "Use resistant varieties and healthy planting material.",
        severity: "Very High"
    }
];

const diseaseDatabase = [];

for (let i = 0; i < 1200; i++) {

    const base = baseDiseases[i % baseDiseases.length];

    diseaseDatabase.push({
        id: i + 1,
        crop: base.crop,
        disease: base.disease,
        symptoms: base.symptoms,
        treatment: base.treatment,
        prevention: base.prevention,
        severity: base.severity,
        confidence: 90 + (i % 10)
    });
}

console.log("Disease Database Loaded:", diseaseDatabase.length);