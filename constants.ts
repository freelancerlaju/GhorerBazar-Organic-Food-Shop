
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Premium Mustard Oil (5 Litre)",
    bengaliTitle: "প্রিমিয়াম সরিষার তেল (৫ লিটার)",
    price: 1600,
    originalPrice: 1750,
    image: "./App/Assets/mustrad-oil-5-ltr.png",
    images: [
      "./App/Assets/mustrad-oil-5-ltr.png",
    ],
    badge: 'Hot',
    category: "Oil",
    description: "Cold-pressed from the finest mustard seeds using traditional Ghani method. Our Premium Mustard Oil preserves natural antioxidants and pungent aroma. Perfect for authentic Bengali cuisine and bhortas.",
    availability: 'In Stock',
    sku: "MO-5000",
    weight: "5 Litre",
    ingredients: ["100% Organic Mustard Seeds"],
    benefits: [
      { title: "Rich in Monounsaturated Fatty Acids", content: "High levels of MUFA help maintain a healthy heart by reducing bad cholesterol levels." },
      { title: "Promotes Heart Health", content: "Contains essential fatty acids that support cardiovascular function and reduce the risk of heart disease." },
      { title: "Natural Antibacterial Properties", content: "Acts as a powerful antimicrobial agent that fights against harmful bacteria and skin infections." },
      { title: "Stimulates Hair Growth", content: "Massage enhances blood circulation to the scalp, nourishing hair roots and preventing hair fall." }
    ],
    nutritionalInfo: {
      "Energy": "884 kcal",
      "Total Fat": "100g",
      "Saturated Fat": "12g",
      "Vitamin E": "34mg"
    }
  },

  {
    id: 2,
    title: "Sundarban Natural Honey (1kg)",
    bengaliTitle: "সুন্দরবনের প্রাকৃতিক মধু (১ কেজি)",
    price: 1400,
    originalPrice: 1600,
    image: "./App/Assets/sundarban-honey-1kg.png",
    images: [
      "./App/Assets/sundarban-honey-1kg.png",
    ],
    badge: 'Sale',
    category: "Honey",
    description: "100% raw and organic honey collected from the deep mangrove forests of Sundarban. Rich in immunity-boosting nutrients and distinct wild taste. Unprocessed and filtered.",
    availability: 'In Stock',
    sku: "HN-1000",
    weight: "1 kg",
    ingredients: ["Raw Sundarban Honey"],
    benefits: [
      { title: "Boosts Immunity Naturally", content: "Loaded with antioxidants and enzymes that strengthen the immune system against infections." },
      { title: "Soothes Sore Throat", content: "Its anti-inflammatory properties help relieve coughs and soothe irritated throats effectively." },
      { title: "Rich source of Antioxidants", content: "Contains flavonoids and organic acids that protect body cells from oxidative stress." },
      { title: "Helps in Digestion", content: "Probiotic enzymes present in raw honey aid in digestion and improve gut health." }
    ],
    nutritionalInfo: {
      "Energy": "304 kcal",
      "Carbohydrates": "82g",
      "Sugars": "82g",
      "Protein": "0.3g"
    }
  },
  {
    id: 3,
    title: "Premium Gawa Ghee (500g)",
    bengaliTitle: "প্রিমিয়াম গাওয়া ঘি (৫০০ গ্রাম)",
    price: 1350,
    originalPrice: 1550,
    image: "./App/Assets/gawa-ghee-500gm.png",
    images: [
      "./App/Assets/gawa-ghee-500g.png",
    ],
    badge: 'Hot',
    category: "Ghee",
    description: "Made from pure cow milk, our Premium Gawa Ghee is prepared using the traditional bilona method. It has a rich granular texture and a divine aroma that adds magic to your rice, dal, and sweets.",
    availability: 'In Stock',
    sku: "GH-0500",
    weight: "500 g",
    ingredients: ["Clarified Butter (Milk Fat)"],
    benefits: [
      { title: "Improves Digestion", content: "Stimulates the secretion of stomach acids to aid in smoother digestion and nutrient absorption." },
      { title: "Strengthens Bones", content: "Rich in Vitamin K2, which helps in calcium absorption for stronger teeth and bones." },
      { title: "Good for Eye Health", content: "Contains Vitamin A which is essential for maintaining good vision and eye health." },
      { title: "Contains Healthy Fats", content: "Provides sustained energy and healthy fatty acids that support brain function." }
    ],
    nutritionalInfo: {
      "Energy": "900 kcal",
      "Total Fat": "99.8g",
      "Vitamin A": "3000 IU",
      "Cholesterol": "250mg"
    }
  },
  {
    id: 4,
    title: "Black Cumin Honey (500g)",
    bengaliTitle: "কালোজিরা ফুলের মধু (৫০০ গ্রাম)",
    price: 950,
    originalPrice: 1050,
    image: "./App/Assets/kalo-zera-honey-bottle-500-gm.png",
    images: [
      "./App/Assets/kalo-zera-honey-bottle-500-gm.png",
    ],
    badge: 'Sale',
    category: "Honey",
    description: "Collected during the black cumin (Kalojira) flowering season. Known as 'Liquid Gold', this honey offers exceptional health benefits and a unique sweet-herbal flavor.",
    availability: 'In Stock',
    sku: "HN-BC-0500",
    weight: "500 g",
    ingredients: ["Black Cumin Flower Honey"],
    benefits: [
      { title: "Anti-inflammatory properties", content: "Reduces inflammation in the body and helps manage chronic pain conditions." },
      { title: "Effective for Cold & Cough", content: "Acts as a natural remedy to clear respiratory passages and boost recovery." },
      { title: "Natural Blood Purifier", content: "Helps eliminate toxins from the blood, promoting clearer skin and better health." },
      { title: "Boosts Energy Levels", content: "Natural sugars provide an instant energy boost without the crash of processed sugars." }
    ],
    nutritionalInfo: {
      "Energy": "320 kcal",
      "Carbohydrates": "80g",
      "Natural Sugars": "78g",
      "Protein": "0.4g"
    }
  },
  {
    id: 5,
    title: "Premium Medjool Dates (1kg)",
    bengaliTitle: "প্রিমিয়াম মেডজুল খেজুর (১ কেজি)",
    price: 1350,
    originalPrice: 1500,
    image: "./App/Assets/medjul1kg-large.jpg",
    images: [
      "./App/Assets/medjul1kg-large.jpg",
    ],
    badge: 'Sale',
    category: "Dates",
    description: "Large, sweet, and succulent Medjool dates imported directly. These are packed with energy, fiber, and essential minerals. Perfect for breaking fasts or as a healthy snack.",
    availability: 'In Stock',
    sku: "DT-1000",
    weight: "1 kg",
    ingredients: ["Medjool Dates"],
    benefits: [
      { title: "High in Fiber", content: "Promotes digestive health and helps prevent constipation by adding bulk to the diet." },
      { title: "Natural Energy Booster", content: "Packed with natural sugars like glucose and fructose for quick energy replenishment." },
      { title: "Rich in Potassium", content: "Essential for maintaining healthy blood pressure levels and heart function." },
      { title: "Supports Bone Health", content: "Contains minerals like magnesium and copper that contribute to bone density." }
    ],
    nutritionalInfo: {
      "Energy": "277 kcal",
      "Carbohydrates": "75g",
      "Fiber": "7g",
      "Potassium": "696mg"
    }
  },
  {
    id: 6,
    title: "Organic Chia Seeds (250g)",
    bengaliTitle: "অর্গানিক চিয়া সিড (২৫০ গ্রাম)",
    price: 450,
    originalPrice: 550,
    image: "./App/Assets/chea-seed.png",
    images: [
      "./App/Assets/chea-seed.png",
    ],
    category: "Seeds",
    description: "High-quality organic Chia Seeds, a superfood loaded with Omega-3 fatty acids, fiber, and protein. Great for weight management and heart health. Add to your smoothies or water.",
    availability: 'In Stock',
    sku: "CS-0250",
    weight: "250 g",
    ingredients: ["Organic Chia Seeds"],
    benefits: [
      { title: "High Omega-3 Fatty Acids", content: "One of the best plant-based sources of Omega-3s for heart and brain health." },
      { title: "Excellent Fiber Source", content: "Absorbs water and expands in the stomach, keeping you full for longer." },
      { title: "Aids in Weight Loss", content: "High protein and fiber content helps reduce appetite and calorie intake." },
      { title: "Balances Blood Sugar", content: "Slows down digestion to prevent blood sugar spikes after meals." }
    ],
    nutritionalInfo: {
      "Energy": "486 kcal",
      "Fiber": "34g",
      "Protein": "16g",
      "Omega-3": "17g"
    }
  },
  {
    id: 7,
    title: "Special Mixed Nuts (1kg)",
    bengaliTitle: "স্পেশাল মিক্সড নাটস (১ কেজি)",
    price: 1750,
    originalPrice: 1900,
    image: "./App/Assets/Cashew-nut-or-kaju-badam.png",
    images: [
      "./App/Assets/Cashew-nut-or-kaju-badam.png",
    ],
    badge: 'Hot',
    category: "Nuts",
    description: "A premium blend of Cashews, Almonds, Walnuts, and Pistachios. Roasted to perfection without added salt. A powerhouse of nutrition and a delicious crunchy snack.",
    availability: 'In Stock',
    sku: "MXN-1000",
    weight: "1 kg",
    ingredients: ["Cashews", "Almonds", "Walnuts", "Pistachios"],
    benefits: [
      { title: "Rich in Healthy Fats", content: "Contains heart-healthy unsaturated fats that lower the risk of heart disease." },
      { title: "Boosts Brain Function", content: "Nutrients like Vitamin E and Omega-3s support cognitive health and memory." },
      { title: "High Protein Snack", content: "Excellent source of plant-based protein for muscle repair and growth." },
      { title: "Antioxidant Rich", content: "Packed with polyphenols that combat oxidative stress and cellular damage." }
    ],
    nutritionalInfo: {
      "Energy": "607 kcal",
      "Protein": "20g",
      "Total Fat": "54g",
      "Fiber": "7g"
    }
  },
  {
    id: 8,
    title: "Cold Pressed Coconut Oil (500ml)",
    bengaliTitle: "কোল্ড প্রেসড নারিকেল তেল (৫০০ মি.লি.)",
    price: 650,
    originalPrice: 750,
    image: "./App/Assets/Til-Tel-500.jpg",
    images: [
      "./App/Assets/Til-Tel-500.jpg",
    ],
    badge: 'Hot',
    category: "Oil",
    description: "Extra virgin coconut oil extracted from fresh coconut milk. Ideal for hair care, skin care, and dietary consumption. 100% natural, unrefined, and chemical-free.",
    availability: 'In Stock',
    sku: "CO-0500",
    weight: "500 ml",
    ingredients: ["Cold Pressed Coconut Oil"],
    benefits: [
      { title: "Great for Hair & Skin", content: "Deeply moisturizes skin and strengthens hair by reducing protein loss." },
      { title: "Supports Metabolism", content: "Contains MCTs which are quickly burned for energy, boosting metabolic rate." },
      { title: "Natural Moisturizer", content: "Restores skin barrier function and locks in moisture for soft, supple skin." },
      { title: "Antifungal Properties", content: "Contains lauric acid which fights against fungal infections and bacteria." }
    ],
    nutritionalInfo: {
      "Energy": "862 kcal",
      "Total Fat": "100g",
      "Saturated Fat": "87g",
      "Carbohydrates": "0g"
    }
  },
  {
    id: 9,
    title: "Organic Turmeric Powder (200g)",
    bengaliTitle: "অর্গানিক হলুদ গুঁড়া (২০০ গ্রাম)",
    price: 280,
    originalPrice: 350,
    image: "./App/Assets/Holud.jpg",
    images: [
      "./App/Assets/Holud.jpg",
    ],
    category: "Spices",
    description: "Ground from dried turmeric roots grown without pesticides. High curcumin content ensures vibrant color and potent anti-inflammatory properties. Pure and adulteration-free.",
    availability: 'In Stock',
    sku: "TP-0200",
    weight: "200 g",
    ingredients: ["Dried Turmeric Root"],
    benefits: [
      { title: "Natural Anti-inflammatory", content: "Curcumin helps reduce inflammation in the body, similar to anti-inflammatory drugs." },
      { title: "Boosts Immunity", content: "Enhances the body's antioxidant capacity to fight off viruses and bacteria." },
      { title: "Enhances Skin Glow", content: "Used traditionally to improve skin complexion and treat acne." },
      { title: "Detoxifies Liver", content: "Stimulates the production of bile to flush out toxins from the liver." }
    ],
    nutritionalInfo: {
      "Energy": "354 kcal",
      "Curcumin": "3-5%",
      "Fiber": "21g",
      "Protein": "8g"
    }
  },
  {
    id: 10,
    title: "Himalayan Pink Salt (1kg)",
    bengaliTitle: "হিমালয়ান পিংক সল্ট (১ কেজি)",
    price: 180,
    originalPrice: 220,
    image: "./App/Assets/Himalayan-Pink-Salt-Glass-Jar-update.webp",
    category: "Salt",
    description: "Pure Himalayan Pink Salt containing 84 essential minerals. A healthier alternative to regular table salt, perfect for daily cooking, detox drinks, and seasoning.",
    availability: 'In Stock',
    sku: "PS-1000",
    weight: "1 kg",
    ingredients: ["Rock Salt"],
    benefits: [
      { title: "Balances Electrolytes", content: "Provides essential minerals to maintain fluid balance and hydration." },
      { title: "Supports Respiratory Health", content: "Salt therapy can help clear mucus and improve breathing conditions." },
      { title: "Regulates Blood Pressure", content: "Trace minerals help the body regulate blood pressure more effectively than refined salt." },
      { title: "Improves Hydration", content: "helps the body absorb water for optimal hydration levels." }
    ],
    nutritionalInfo: {
      "Sodium Chloride": "98%",
      "Minerals": "84 types",
      "Additives": "None",
      "Iodine": "Natural Trace"
    }
  },
  {
    id: 11,
    title: "Kashmiri Saffron (1g)",
    bengaliTitle: "কাশ্মীরি জাফরান (১ গ্রাম)",
    price: 450,
    originalPrice: 600,
    image: "./App/Assets/saffron12gm-1.png",
    images: [
      "./App/Assets/saffron12gm-1.png",
    ],
    category: "Spices",
    description: "Premium Grade A Kashmiri Mongra Saffron. Known for its deep red color, potent aroma, and distinct flavor. Essential for biryani, desserts, and health tonics.",
    availability: 'Out of Stock',
    sku: "SF-0001",
    weight: "1 g",
    ingredients: ["Pure Saffron Stigmas"],
    benefits: [
      { title: "Enhances Mood", content: "Studies suggest saffron can help improve mood and treat depressive symptoms." },
      { title: "Potent Antioxidant", content: "Protects your cells against free radicals and oxidative stress." },
      { title: "Improves Memory", content: "Crocin in saffron may support learning and memory retention." },
      { title: "Premium Flavoring", content: "Adds an unmatched aroma and golden color to culinary dishes." }
    ],
    nutritionalInfo: {
      "Crocine": "> 150",
      "Picrocrocine": "> 70",
      "Safranal": "> 20",
      "Moisture": "< 10%"
    }
  },
  {
    id: 12,
    title: "Natural Peanut Butter (350g)",
    bengaliTitle: "ন্যাচারাল পিনাট বাটার (৩৫০ গ্রাম)",
    price: 420,
    originalPrice: 500,
    image: "./App/Assets/Peanut-Butter.jpg",
    images: [
      "./App/Assets/Peanut-Butter.jpg",
    ],
    category: "Spread",
    description: "Creamy peanut butter made from high-quality roasted peanuts. No added sugar, hydrogenated oils, or preservatives. A high-protein breakfast companion.",
    availability: 'In Stock',
    sku: "PB-0350",
    weight: "350 g",
    ingredients: ["Roasted Peanuts"],
    benefits: [
      { title: "High Protein Source", content: "Provides essential amino acids needed for muscle building and repair." },
      { title: "Heart Healthy Fats", content: "Contains oleic acid which helps maintain good cholesterol levels." },
      { title: "Low Glycemic Index", content: "Does not cause rapid spikes in blood sugar, making it suitable for diabetics." },
      { title: "Energy Booster", content: "Calorie-dense food that provides sustained energy for workouts and daily activities." }
    ],
    nutritionalInfo: {
      "Energy": "588 kcal",
      "Protein": "25g",
      "Fat": "50g",
      "Fiber": "8g"
    }
  },
  {
    id: 13,
    title: "Organic Sylhet Tea (500g)",
    bengaliTitle: "অর্গানিক সিলেট চা (৫০০ গ্রাম)",
    price: 320,
    originalPrice: 380,
    image: "./App/Assets/sylhet-tea.webp",
    images: [
      "./App/Assets/sylhet-tea.webp",
    ],
    category: "Tea",
    description: "Premium quality tea leaves from the gardens of Sylhet. Rich in color and strong in flavor, perfect for your morning cup.",
    availability: 'In Stock',
    sku: "TEA-0500",
    weight: "500 g",
    ingredients: ["Black Tea Leaves"],
    benefits: [
        { title: "Rich in Antioxidants", content: "Contains polyphenols that help remove free radicals and decrease cell damage." },
        { title: "Boosts Heart Health", content: "May reduce risk of heart disease and stroke." }
    ],
    nutritionalInfo: { "Energy": "1 kcal", "Caffeine": "Medium" }
  },
  {
    id: 14,
    title: "Homemade Mango Pickle (400g)",
    bengaliTitle: "ঘরোয়া আমের আচার (৪০০ গ্রাম)",
    price: 350,
    originalPrice: 420,
    image: "./App/Assets/Homemade-Mango-Pickle.jpg",
    images: [
      "./App/Assets/Homemade-Mango-Pickle.jpg",
    ],
    badge: 'Sale',
    category: "Pickle",
    description: "Traditional homemade mango pickle made with mustard oil and authentic spices. Tastes just like grandmother's recipe.",
    availability: 'In Stock',
    sku: "PKL-0400",
    weight: "400 g",
    ingredients: ["Green Mango", "Mustard Oil", "Spices"],
    benefits: [
        { title: "Aids Digestion", content: "The spices and fermentation process help in digestion." },
        { title: "Rich in Vitamin C", content: "Green mangoes are a great source of Vitamin C." }
    ]
  },
  {
    id: 15,
    title: "Premium Brown Rice (5kg)",
    bengaliTitle: "ঢেঁকি ছাঁটা লাল চাল (৫ কেজি)",
    price: 480,
    originalPrice: 560,
    image: "./App/Assets/Khillin_rice-DhekiChata.jpg",
    images: [
      "./App/Assets/Khillin_rice-DhekiChata.jpg",
    ],
    category: "Rice",
    description: "Nutritious unpolished brown rice processed traditionally. High in fiber and essential nutrients compared to white rice.",
    availability: 'In Stock',
    sku: "BR-5000",
    weight: "5 kg",
    ingredients: ["Whole Grain Rice"],
    benefits: [
         { title: "High Fiber", content: "Promotes healthy digestion and fullness." },
         { title: "Low Glycemic Index", content: "Better for blood sugar control." }
    ]
  },
  {
    id: 16,
    title: "Green Cardamom (50g)",
    bengaliTitle: "সবুজ এলাচ (৫০ গ্রাম)",
    price: 350,
    originalPrice: 450,
    image: "./App/Assets/green-cardamom.jpg",
    images: [
      "./App/Assets/green-cardamom.jpg",
    ],
    category: "Spices",
    description: "Aromatic and bold green cardamom pods. Essential for desserts, biryani, and masala tea.",
    availability: 'In Stock',
    sku: "SP-EL-0050",
    weight: "50 g",
    ingredients: ["Green Cardamom"],
    benefits: [
        { title: "Fresh Breath", content: "Natural breath freshener." },
        { title: "Digestive Aid", content: "Helps with indigestion and bloating." }
    ]
  },
  {
    id: 17,
    title: "Date Molasses (1kg)",
    bengaliTitle: "খাঁটি খেজুরের গুড় (১ কেজি)",
    price: 550,
    originalPrice: 650,
    image: "./App/Assets/Khejur_Gur.webp",
    images: [
      "./App/Assets/Khejur_Gur.webp",
    ],
    badge: "Sale",
    category: "Sweeteners",
    description: "Pure seasonal Khejur Gur with a rich, smoky sweetness. Perfect for pithas and traditional Bengali desserts.",
    availability: 'In Stock',
    sku: "GUR-1000",
    weight: "1 kg",
    ingredients: ["Date Palm Sap"],
    benefits: [
        { title: "Iron Rich", content: "Helps fight anemia." },
        { title: "Digestive", content: "Activates digestive enzymes." }
    ]
  },
  {
    id: 18,
    title: "Whole Cumin Seeds (200g)",
    bengaliTitle: "আস্ত জিরা (২০০ গ্রাম)",
    price: 220,
    originalPrice: 280,
    image: "./App/Assets/jira-gura.jpg",
    images: [
      "./App/Assets/jira-gura.jpg",
    ],
    category: "Spices",
    description: "Premium quality cumin seeds with a strong earthy aroma. A staple spice for curries and tadka.",
    availability: 'In Stock',
    sku: "SP-JR-0200",
    weight: "200 g",
    ingredients: ["Cumin Seeds"],
    benefits: [
        { title: "Metabolism Boost", content: "May help increase metabolism." },
        { title: "Iron Source", content: "Good source of dietary iron." }
    ]
  },
  {
    id: 19,
    title: "Coriander Powder (200g)",
    bengaliTitle: "ধনিয়া গুঁড়া (২০০ গ্রাম)",
    price: 180,
    originalPrice: 220,
    image: "./App/Assets/Dhonia.jpg",
    images: [
      "./App/Assets/Dhonia.jpg",
    ],
    category: "Spices",
    description: "Freshly ground coriander powder from roasted seeds. Adds a mild, citrusy flavor to dishes.",
    availability: 'In Stock',
    sku: "SP-DH-0200",
    weight: "200 g",
    ingredients: ["Coriander Seeds"],
    benefits: [
        { title: "Lowers Blood Sugar", content: "May help promote healthy blood sugar levels." }
    ]
  },
  {
    id: 20,
    title: "Red Lentils (1kg)",
    bengaliTitle: "দেশি মসুর ডাল (১ কেজি)",
    price: 160,
    originalPrice: 190,
    image: "./App/Assets/deshi-moshur-dal-1-kg.jpg",
    images: [
      "./App/Assets/deshi-moshur-dal-1-kg.jpg",
    ],
    category: "Pulses",
    description: "Deshi Masoor Dal that cooks quickly and tastes delicious. High in protein and essential for a balanced diet.",
    availability: 'In Stock',
    sku: "DL-1000",
    weight: "1 kg",
    ingredients: ["Red Lentils"],
    benefits: [
        { title: "High Protein", content: "Excellent plant-based protein source." },
        { title: "Heart Healthy", content: "Rich in fiber, folate, and potassium." }
    ]
  }
];

export const NAV_LINKS = [
  { name: "OFFER ZONE", href: "#offer", special: true, category: null },
  { name: "All Products", href: "#products", category: null },
  { name: "Honey (মধু)", href: "#products", category: "Honey" },
  { name: "Ghee & Oil", href: "#products", category: ["Ghee", "Oil"] },
  { name: "Nuts & Dates", href: "#products", category: ["Nuts", "Dates"] },
  { name: "Spices", href: "#products", category: "Spices" },
];
