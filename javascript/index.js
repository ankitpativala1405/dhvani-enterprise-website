let slides = document.getElementsByClassName('slide'); 
let index = 0;

const slider = (newindex) => {
  index = newindex;

  if (index < 0) {
    index = slides.length - 1; 
  } else if (index >= slides.length) {
    index = 0; 
  }

  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      slides[i].style.display = 'block'; 
    } else {
      slides[i].style.display = 'none';
    }
  }
};

slider(index);

document.getElementsByClassName('prev')[0].addEventListener('click', () => {
  slider(index - 1); 
});

document.getElementsByClassName('next')[0].addEventListener('click', () => {
  slider(index + 1); 
});

const category = (msg) => {
  localStorage.setItem("clicked_category", JSON.stringify(msg));
  window.location.href = "../pages/homecategory.html";
};

window.onload=()=>{
  localStorage.setItem("allproducts", JSON.stringify(data))
}

let data = [
  {
    "id": 0,
    "title": "DHVANI ENTERPRISE Portable Mini Sealing Machine, Handheld Packet Sealer for Food, Snacks, Chips, Fresh Storage, Plastic Bags Sealing Machine,(MULTICOLOR)",
    "price": "199",
    "MRP": "406",
    "category": "Home & Living & kitchenware",
    "subcategory": "kitchenware",
    "sku": "usb sealer machine",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/0/1.jpg",
      "../PHOTO/product photo/0/2.jpg",
      "../PHOTO/product photo/0/3.jpg",
      "../PHOTO/product photo/0/4.jpg",
      "../PHOTO/product photo/0/5.jpg",
      "../PHOTO/product photo/0/6.jpg",
      "../PHOTO/product photo/0/7.jpg",
      "../PHOTO/product photo/0/8.jpg"
    ],
    "descriptions": [
      "The vacuum sealing process removes all of the air from your bags or containers so that you can preserve food longer without worrying about freezer burn ruining your favorite foods! The bag sealer also has the switch button function and supports USB charging! Never worry about the unsuitable battery and unstable voltage again.",
      "The kitchen gadgets can resist food waste. It helps you store the remaining snacks, food, cookies, pet food, sauce bags, and nuts. This plastic sealer is suitable for chip bags, vacuum sealer bags, cookie bags, pet food bags, and other PP, PE, and PVC bags.",
      "1. Fully charge the battery before use.<br>Plug the portable heat sealer into the power cord to start charging. When charging, the indicator red light will be on for a long time, and when fully charged, the indicator red light will be off. At this point you can start using the product.",
      "2. Open switch button.<br>Toggle the push button forward to turn on the machine, the indicator light blue light is long.",
      "3. Preheat the machine.<br>Before the first use, it needs to be pressed for 5 seconds to warm up, and then it can be used. Please note that it only needs to be preheated before the first use, and it can be used directly afterwards.",
      "4. Press to seal the bag<br>Then simply press the knob and make it move evenly along the edge of any bag and it's sealed airtight.",
      "And it has a hidden blade. Put the bag into the opening of the sealing machine; press down the button to open the bag and slide to the right to complete the opening."
    ],
    "bullet_points": [
      "💖 This mini bag sealer is a heat bag sealer, and also a bag opener. You can seal bags easily and keep your food fresh, also with the built-in sharp stainless steel blade to open the bags conveniently. 2-in-1 machine. Enjoy your fresh and crispy snacks.",
      "💖 Built-in With a 400mAh battery, the rechargeable hot bond bag sealer comes with a micro USB cable(included), so there is no need to buy extra AA batteries for this chip sealer, save your money and protect the environment.",
      "💖 This food bag sealer is suitable for packages of chips, cookies, salad, pet foods, etc., as well as for packages of salad and vacuum bags, a must-have in daily life and kitchen cooking scenarios. Not for cling films, cellophane bags, kraft paper bags, or pure aluminum bags.",
      "💖 Compared with the old sealer machine, the powerful and efficient heating unit can quickly heat and keep to a working temperature of 0.1s. Turn on the switch, no need to wait, and the sealer directly seals the package firmly.",
      "💖 Easy To Place & Portable: With the magnet on the back, the delicate mini bag resealer can be attached to the refrigerator, space-saving in the house and not missing anymore. Only 0.2 pounds is also easy to carry outdoors for picnics, camping trips, etc."
    ]
  },
  {
    "id": 1,
    "title": "DHVANI ENTERPRISE Women's Faux Georgette Stitched Top With Unstitched Santoon Bottom and Dupatta Full Sleeve Embroidered Anarkali Gown",
    "price": "599",
    "MRP": "2199",
    "category": "clothing",
    "subcategory": "gown",
    "sku": "Anarkali gown(parrot green)",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/1/1.jpg",
      "../PHOTO/product photo/1/2.jpg",
      "../PHOTO/product photo/1/3.jpg",
      "../PHOTO/product photo/1/4.jpg",
      "../PHOTO/product photo/1/5.jpg",
      "../PHOTO/product photo/1/6.jpg",
      "../PHOTO/product photo/1/7.jpg",
      "../PHOTO/product photo/1/8.jpg"
    ],
    "descriptions": [
      "DHVANI ENTERPRISE provides you Heavy Faux Georgette With Embroidered Work With Sequence (Semi-Stitched), Size: Max Up To 48 Inches, Length: Max Up To 52 Inches, Flair: 2.70 MTR.",
      "Traditional Indian wear Anarkali gowns and suits for women. This Anarkali gown has a sophisticated look and enhances the beauty of the women. It can be worn for functions, festivals, parties, and even weddings.",
      "You will be the center of attraction at the event once you wear it. DHVANI ENTERPRISE brings you this Anarkali suit. Available in pink, wine, brown, Rama, green, white, and black shades, made from georgette fabric.",
      "The Anarkali suit is a suitable choice when it comes to choosing ethnic or festive wear for your wardrobe. The gown features a beautiful flair with a floral border, enhancing the style of the garment.",
      "It comes in semi-stitched and can be altered according to your choice of fit and style.",
      "You can pair this attractive gown suit with the ethnic footwear of your choice.",
      "Also, you can mix and match ethnic jewelry such as bangles, bracelets, and earrings to go along with it. This combination can be worn for festive occasions as well as occasions such as weddings."
    ],
    "bullet_points": [
      "💖 Top: Heavy Faux Georgette With Embroidered Work With Stone, Size: Max Up To 48 Inches Length: Max Up To 52 Inches",
      "💖 Bottom: Heavy Santoon, Length: 2 MTR, Type: Unstitched",
      "💖 Dupatta: Heavy Butterfly Net With Embroidery Work With Latkan, Size: 2.20 MTR, Sleeve: Faux Georgette With Embroidered Work",
      "💖 Type: Semi Stitched, Wash Care: First Time Dry Clean; Package Contain: Top, Bottom, and Dupatta",
      "💖 Closure Type: Zipper; Occasion Type: Ceremony; Item Length Description: Floor Length; Sleeve Type: Long Sleeve"
    ]
  },
  {
    "id": 3,
    "title": "DHVANI ENTERPRISE Manicure Set Nail Clippers, 12 in 1 Stainless Steel Nail Scissors Grooming Kit with Peeling Knife, Nail Cleaning Knife, Acne needle, Blackhead Tool Leather Travel Case",
    "price": "249",
    "MRP": "599",
    "category": "Beauty & Personal Care",
    "subcategory": "Manicure kit",
    "sku": "Manicure kit",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/3/1.jpg",
      "../PHOTO/product photo/3/2.jpg",
      "../PHOTO/product photo/3/3.jpg",
      "../PHOTO/product photo/3/4.jpg",
      "../PHOTO/product photo/3/5.jpg",
      "../PHOTO/product photo/3/6.jpg",
      "../PHOTO/product photo/3/7.jpg",
      "../PHOTO/product photo/3/8.mp4"
    ],
    "descriptions": [
      "DHVANI ENTERPRISE 12 – In-1 Tool Kit: All purpose manicure kit for any use, contains 12pcs tools for Facial Care Tools, Manicure Kit, Pedicure Set, this set has everything you need.",
      "A Feasible Gift Option: Packed in elegant and stylish case makes a perfect gift option for your loved ones on the occasion of their special day.",
      "High Grade Stainless Steel: Made of high grade stainless steel to allow safe sterilization, restricts corrosion and minimize risk of infection.",
      "Hand & Foot Care Set for Women: Hand care set including Large Nail Clipper, Nail Clipper, Cuticle Nipper, Slanted Edge Nail Clipper, Nail File, V-Shaped Cuticle Trimmer. Foot care set including Cuticle Pusher and Nail Cleaner, Scraping Knife, Flat Callus Remover, Oblique Callus Remover, Curved Knife.",
      "Facial Treatment for Women: Face care set including Eyebrow Scissors, Eyebrow Tweezers, Blackhead & Acne needle, Ear Pick, Nose Hair Scissors."
    ],
    "bullet_points": [
      "💖 12 in 1 Tool kit– Best all-purpose manicure kit for any use, contains 12pcs tools for Facial Care Tools, Manicure Kit, Pedicure Set, this set has everything you need.",
      "💖 High quality & Very Well Organized – Made of high-grade stainless steel to allow safe sterilization, prevent corrosion and minimize risk of infection. All of them are covered with black protection to prevent corrosion.",
      "💖 Portable & Comfortable - Easy open with button, carry it with you in bag everyday or pack it with you when you go traveling.",
      "💖 Perfect Gift - Aesthetic packaging design and is made of high-quality fabric and PU leather, stylish and elegant, suits for men and women, a perfect Christmas gift for your families and friends.",
      "💖 Stay sharp and good looking - The clippers are solid and they cut well, you can enjoy high razor edge retention and color fastness even after running through a long time."
    ]
  },
  {
    "id": 4,
    "title": "DHVANI ENTERPRISE Mini UV LED Nail Lamp, Portable Gel Light Mouse Shape Pocket Size Nail Dryer with USB Cable for all Gel Polish",
    "price": "149",
    "MRP": "499",
    "category": "Beauty & Personal Care",
    "subcategory": "personal care",
    "sku": "Sun Mini UV LED Nail Dryer Lamp",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/4/1.jpg",
      "../PHOTO/product photo/4/2.jpg",
      "../PHOTO/product photo/4/3.jpg",
      "../PHOTO/product photo/4/4.jpg",
      "../PHOTO/product photo/4/5.jpg",
      "../PHOTO/product photo/4/6.jpg",
      "../PHOTO/product photo/4/7.jpg",
      "../PHOTO/product photo/4/8.mp4"
    ],
    "descriptions": [
      "Key Features :",
      "⭐ Size best for travel and business trip.",
      "⭐ UV/LED lamp cures fingernails or toenails in many ways.",
      "⭐ 6pcs durable LED light beads, no need to replace any light bulb.",
      "⭐ Closer white light protects your hands and eyes, avoiding harm from an outdated nail dryer.",
      "⭐ Connect DC adapter *Press ON/OFF Button.",
      "Easy to use : Comparing with other products, its light is closer to white light, which does no harm to eyes and skin. Fashionable and durable lifetime, ideal for personal use and best gift for friends.",
      "Cure all kinds of nail gels : All light beads adopt advanced technology, Dual optical wavelength (365nm+405nm), makes it work with all UV gel nail polish extend gel and LED gel nail polish. No need to worry about changing bulbs."
    ],
    "bullet_points": [
      "💖 Easy to use : Press ON / OFF button to cure for 45 seconds, long press for 1-2 seconds and 60 seconds, this setup is easy to use for even the nail art beginner.",
      "💖 Protect your eyes and skin : Gentle LED 365nm+405nm Bulb No Harm To Eyes and Skin All light Beads Adopt Advanced Technology, Dual Optical Wavelength.",
      "💖 Folding design : It can store space for you, mini nail lamp is easy to carry and easy to fit into the handbag. You can also place it on the desk and leisurely do your DIY nail art while reading or working at the same time.",
      "💖 Protect your eyes and skin : The Nail dryer light is closer to white light, no harm to your eyes and skin, safe choice, ideal for personal use and best gift for friends.",
      "💖 Low heat & painless : This MINI nail lamp cures your gel nail polishes with low heat, painless that protects your hands. If you feel this nail lamp is a little small for your hands, we recommend curing your thumb first, then curing the left 4 fingernails."
    ]
  },
  {
    "id": 5,
    "title": "DHVANI ENTERPRISE Portable Cordless Heating Pad, Menstrual Massage Period Heating Pad for Cramps, Endometriosis Pain Relief, Menstrual Care, Portable Quick Heat Pads are a Must-Have Item for Women and Girls",
    "price": "699",
    "MRP": "1299",
    "category": "Beauty & Personal Care",
    "subcategory": "personal care",
    "sku": "Electric heating belt",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/5/1.jpg",
      "../PHOTO/product photo/5/2.jpg",
      "../PHOTO/product photo/5/3.jpg",
      "../PHOTO/product photo/5/4.jpg",
      "../PHOTO/product photo/5/5.jpg",
      "../PHOTO/product photo/5/6.jpg",
      "../PHOTO/product photo/5/7.jpg",
      "../PHOTO/product photo/5/8.jpg"
    ],
    "descriptions": [
      "【Portable Cordless Heating Pad and Intelligent Security】Our Portable Cordless Heating massage Pad mat will automatically turn off in 30 minutes after being turned on. Don't worry about you falling asleep during use. The cramps relief heating pad can be used for 2-5 hours on a full charge. You can use the cordless heating pad anytime, anywhere while resting, working, cooking, indoors or outdoors. Free your hands easily.",
      "【New Features】This menstrual heated massage pad has 3 levels of temperature adjustment and 4 levels of vibration intensity adjustment. It is silent and does not disturb sleep, and can adapt to the needs for massage intensity in different states. Silent noise reduction, lightless and silent warmth. Easy to carry around!",
      "【Best Gift】The portable mini heating pads for cramps for back pain relief is a good gift for girlfriend, wife, daughter, mom, best friend and yourself in Valentine's Day, Mother's Day, birthday, holiday, anniversary.(Note: The heating pad has more effective heating function. For the first use, we suggest starting from lowest temperature level, then adjust the temperature level according to your feelings)"
    ],
    "bullet_points": [
      "💖【User Friendly Material】The cordless heating pad for cramps belt is made of high-quality soft fabric, which is light and breathable, as well as comforting and warm when worn against the skin. The speed and temperature are displayed on an LED display screen. The adjustable high-elastic belt can be readily adjusted for all waistlines.",
      "💖【Widely Use】The pink menstrual relief pad can be used in multiple scenarios. The belt is charged through the USB port. You can have a break with its heating or vibration features on at home, at the workplace, on the way to work, or in other scenarios",
      "💖 Unit Count: 1; Unit Count Type: Count; Item Height: IN 4.3; Item length: IN 7.2; Item Weight: lb 0.35; Item Width: IN 3.3",
      "💖【Premium Heating Material】This electric heating pads for cramps unit has the latest heating film built into it. Suitable for relieving menstrual pain, low back pain or abdominal pain."
    ]
  },  
  {
    "id": 6,
    "title": "DHVANI ENTERPRISE Multi Purpose Fruit Peeler with Suction Cups Anti Oil Hand Cranked Peeler Washable, Fruit Cutter PP Stainless Steel Peeler for Kitchen",
    "price": "799",
    "MRP": "1499",
    "category": "Home & Living & kitchenware",
    "subcategory": "kitchenware",
    "sku": "Apple Peeler",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/6/1.jpg",
      "../PHOTO/product photo/6/2.jpg",
      "../PHOTO/product photo/6/3.jpg",
      "../PHOTO/product photo/6/4.jpg",
      "../PHOTO/product photo/6/5.jpg",
      "../PHOTO/product photo/6/6.jpg",
      "../PHOTO/product photo/6/7.jpg",
      "../PHOTO/product photo/6/8.jpg"
    ],
    "descriptions": [
      "Peels all types of apples easily, blade cuts a wide peel than the more usual sort of metal peelers making it fast, and ergonomic handle make peeling more effectively, you can get a peeled apple in just seconds.",
      "Mes with a Slicer and Corer to serve sliced apples or prepare apple pies, with 8 welding points on each blade highly attached on the central corer ring, enables a stronger and more durable daily using.",
      "The suction cups held the peeler in place steadily, effortlessly use for aging hands that are not as flexible, works easily for kids as well.",
      "How To Use ?",
      "Place fruit- Place the stems of apple on the prong on the spiral mandrel.",
      "Peel- Turn the crank clockwise and it turns the apple around as the spring-loaded blade cuts off the peel, the blade will lift up off the apple and keep going around when continue turn in a clockwise motion.",
      "Pull the fruit off- After the blade is up, off and away from the apple, you can pull the apple off by pressing button behind the crank.",
      "Slice and remove the core- Push the slicer downward to remove the core and cut the apple into uniformly shaped 8 seedless wedges."
    ],
    "bullet_points": [
      "💖 Align the center of the fruit and place it. Turn clockwise for about 5 seconds until the case is peeled off. Lightly press the fruit collection button to pull out the fruit.",
      "💖 PP & Stainless Steel Our apple peeler is made of high quality PP and stainless steel, sharp, durable and durable. You can use it with confidence for a long time Safe and Effective The peeled skin of the apple peeler is thin, without too much pulp, and the coat is safe and effective. Peel, pit, and cut any variety of apple quickly and easily.",
      "💖 Easy to Use This apple peeling tool has exquisite and small body, easy to use and makes apple peeling very interesting.",
      "💖 A great tool for making apples for cakes or swirls.",
      "💖 Note: Please note that the crank apple peeler is suitable for similar size round apples and small fruits cannot be used."
    ]
  },
  {
    "id": 7,
    "title": "DHVANI Enterprise Glamorous Sequin Collar Kurti – Organza Sequence, Three-Quarter Sleeves",
    "price": "299",
    "MRP": "699",
    "category": "clothing",
    "subcategory": "kurtis",
    "sku": "Wine Sequence Collar Kurti",
    "status": "pending",
    "images": [
      "../PHOTO/product photo/7/1.jpg",
      "../PHOTO/product photo/7/2.jpg",
      "../PHOTO/product photo/7/3.jpg",
      "../PHOTO/product photo/7/4.jpg",
      "../PHOTO/product photo/7/5.jpg",
      "../PHOTO/product photo/7/6.jpg",
      "../PHOTO/product photo/7/7.jpg"
    ],
    "descriptions": [
      "✔ Lightweight & Breathable: Ensures all-day comfort with a flattering drape.",
      "✔ Effortless Styling: Pairs beautifully with leggings, palazzos, or cigarette pants for a stunning look.",
      "✔ This Sequin Collar Kurti, crafted from luxurious Organza Sequence fabric for a refined and glamorous look. The shimmering sequin collar adds a sophisticated touch, making this kurti a perfect choice for festive occasions, evening gatherings, and special events. Designed with three-quarter sleeves, it offers a balanced mix of style and comfort, ensuring you look effortlessly chic all day long."
    ],
    "bullet_points": [
      "💖 Premium Fabric: Made from high-quality Organza Sequence, giving a soft, flowy, and elegant finish.",
      "💖 Glamorous Sequin Collar: Adds a touch of sparkle, perfect for festive and party wear.",
      "💖 Three-Quarter Sleeves: Stylish and comfortable, offering a graceful appearance.",
      "💖 Versatile Occasion Wear: Ideal for festivals, parties, weddings, and special gatherings."
    ]
  },      
]

//search

const search = (value) => {
  if (value === "") {
    document.getElementById("showsrarch").style.display = "none"; 
  } else {
    let temp = data.filter((ele) =>
      ele.title.toLowerCase().includes(value.toLowerCase()))
    uimaker(temp); 
  }
};

document.getElementById("search").addEventListener("input", () => {
  document.getElementById("showsrarch").style.display = "grid";
  let value = document.getElementById("search").value;
  search(value);
});


const uimaker = (data) => {
  document.getElementById("showsrarch").innerHTML = ""

  if (data.length === 0) {
    document.getElementById("showsrarch").innerHTML = "No products found."; 
    return;
  }

  document.getElementById("showsrarch").innerHTML = data.map((item) => {
    return `
      <div class="product">
        <h2>${item.title}</h2>
        <p>Price: ₹${item.price}</p>
        <p>MRP: ₹${item.MRP}</p>
        <p>Category: ${item.category}</p>
        <p>Subcategory: ${item.subcategory}</p>
        <img src="${item.images[0]}" alt="${item.title}" />
        <button>Buy Now</button>
      </div>
    `;
  }); 
};
