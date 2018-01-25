exports.up = function(knex, Promise) {
  return knex('foods').delete().then(() => {
    return knex('foods').insert([
      {
        "food_name": "potatoes",
        "edible": "yes",
        "description": "Potatoes are safe for dogs when cooked and unseasoned. Never feed your dog raw potato and be aware that salt, onion, and garlic can upset your pup’s stomach."
      }, {
        "food_name": "avocados",
        "edible": "no",
        "description": "Avocados contain persin in their fruit, leaves, pits, bark and skin. Dogs are allergic and will exhibit symptoms of vomiting and diarrea.  While small amounts aren't typically fatal, it's smart to contact your vet as large amounts of avocado consumption can cause mastitis, heart failure, and death"
      }, {
        "food_name": "popcorn",
        "edible": "caution",
        "description": "Plain, air-popped popcorn makes a nice occasional treat for your dog. But, kernels can get stuck in dogs’ teeth and pose a choking hazard, so it is probably a good idea to keep whole or only partially popped kernels away"
      }, {
        "food_name": "macadamia nuts",
        "edible": "no",
        "description": "Macadamia nuts can cause weakness, depression, vomiting, tremors and hyperthermia in dogs. Signs usually appear within 12 hours of ingestion and can last approximately 12 to 48 hours."
      }, {
        "food_name": "xylitol",
        "edible": "no",
        "description": "Xylitol is used as a sweetener in many products, including gum, candy, baked goods and toothpaste. It can cause insulin release in most species, which can lead to liver failure. The increase in insulin leads to hypoglycemia (lowered sugar levels). Initial signs of toxicosis include vomiting, lethargy and loss of coordination. Signs can progress to seizures. Elevated liver enzymes and liver failure can be seen within a few days."
      }, {
        "food_name": "apples",
        "edible": "yes",
        "description": "Apples are an excellent source of vitamins A and C, as well as fiber for your dog. They are low in protein and fat, making them the perfect snack for senior dogs. Just be sure to remove the seeds and core first. Try them frozen for an icy warm weather snack."
      }, {
        "food_name": "bananas",
        "edible": "yes",
        "description": "In moderation, bananas are a great low-calorie treat for dogs. They’re high in potassium, vitamins, biotin, fiber, and copper. They are low in cholesterol and sodium, but because of their high sugar content, bananas should be given as a treat, not part of your dog’s regular diet."
      }, {
        "food_name": "blueberries",
        "edible": "yes",
        "description": "Blueberries are a superfood rich in antioxidants, which prevent cell damage in humans and canines alike. They’re packed with fiber and phytochemicals as well. "
      }, {
        "food_name": "cherries",
        "edible": "no",
        "description": "With the exception of the fleshy part around the seed, cherry plants contain cyanide and are toxic to dogs. Cyanide disrupts cellular oxygen transport, which means that your dog’s blood cells can’t get enough oxygen. If your dog eats cherries, be on the lookout for dilated pupils, difficulty breathing, and red gums, as these may be signs of cyanide poisoning."
      }, {
        "food_name": "grapes",
        "edible": "no",
        "description": "Grapes and raisins have both proved to be very toxic for dogs no matter the dog’s breed, sex, or age. In fact, grapes are so toxic that they can lead to acute sudden kidney failure. "
      }, {
        "food_name": "raisins",
        "edible": "no",
        "description": "Grapes and raisins have both proved to be very toxic for dogs no matter the dog’s breed, sex, or age. In fact, grapes are so toxic that they can lead to acute sudden kidney failure. "
      }, {
        "food_name": "mushrooms",
        "edible": "no",
        "description": "Wild mushrooms can be toxic for dogs. While only 50 to 100 of the 50,000 mushroom species worldwide are known to be toxic, the ones that are can really hurt your dog or even lead to death. Washed mushrooms from the supermarket could be OK, but it’s better to be safe than sorry; skip out on the fungi all together"
      }, {
        "food_name": "tomatoes",
        "edible": "no",
        "description": "While the ripened fruit of the tomato plant (the red part humans normally eat) is generally considered safe for dogs, the green parts of the plant contain a toxic substance called solanine. While a dog would need to eat a large amount for it to make him or her sick, it’s better to skip tomatoes all together just to be safe."
      }, {
        "food_name": "corn",
        "edible": "caution",
        "description": "Corn is one of the most common ingredients in most dog foods. However, the cob can be hard for a dog to digest and may cause an intestinal blockage, so if youre sharing some corn, make sure it is off the cob."
      }, {
        "food_name": "ham",
        "edible": "caution",
        "description": "Ham is OK for dogs to eat, but certainly isn't the healthiest for them. Ham is high in sodium and fat, so while sharing a small piece is alright, it shouldn't be a continuous habit."
      }, {
        "food_name": "ice cream ",
        "edible": "no",
        "description": "As refreshing of a treat as ice cream is, it’s best not to share it with your dog. Canines don’t digest dairy very well, and many even have a slight intolerance to lactose, a sugar found in milk products. Although it’s also a dairy product, frozen yogurt is a much better alternative."
      }, {
        "food_name": "peanut butter",
        "edible": "yes",
        "description": "Peanut butter can be an excellent source of protein for dogs. It contains heart-healthy fats, vitamins B and E and niacin. Raw, unsalted peanut butter is the healthiest option because it doesn’t contain xylitol, a sugar substitute that can be toxic to dogs."
      }, {
        "food_name": "almonds",
        "edible": "no",
        "description": "Almonds may not necessarily be toxic to dogs like pecans, walnuts, and macadamia nuts are, but they can block the esophagus or even tear the windpipe if not chewed completely. Salted almonds are especially dangerous because they can increase water retention, which is potentially fatal to dogs prone to heart disease. "
      }, {
        "food_name": "bread",
        "edible": "caution",
        "description": " Small amounts of plain bread (no spices and definitely no raisins) won’t hurt your dog, but it also won’t provide any health benefits either. It has no nutritional value and can really pack on the carbohydrates and calories, just like in people. "
      }, {
        "food_name": "cashews",
        "edible": "caution",
        "description": "Cashews are OK for dogs, but only a few at a time. They’ve got calcium, magnesium, antioxidants, and proteins, but while these nuts contain less fat than others, too many can lead to weight gain and other fat-related conditions. A few cashews here and there are a nice treat, but only if they’re unsalted. "
      }, {
        "food_name": "chocolate",
        "edible": "no",
        "description": "Chocolate contains very toxic substances called methylxanthines, which are stimulants that stop a dog’s metabolic process. Even just a little bit of chocolate, especially dark chocolate, can cause diarrhea and vomiting. A large amount can cause seizures, irregular heart function, and even death. Do not have chocolate in an accessible location. If your dog does ingest chocolate, contact a veterinarian or Pet Poison Helpline as soon as possible. "
      }, {
        "food_name": "cinnamon",
        "edible": "no",
        "description": "Cinnamon is not actually toxic to dogs, it's probably best to avoid it. Cinnamon and its oils can irritate the inside of dogs’ mouths, making them uncomfortable and sick. It can lower a dog’s blood sugar too much and can lead to diarrhea, vomiting, increased, or decreased heart rate, and even liver disease. If they inhale it in powder form, cinnamon can cause difficulty breathing, coughing, and choking. "
      }, {
        "food_name": "eggs",
        "edible": "yes",
        "description": "Eggs are safe for dogs as long as they are fully cooked. Cooked eggs are a wonderful source of protein and can help an upset stomach. However, eating raw egg whites can give dogs biotin deficiency, so be sure to cook the eggs all the way through before giving them to your pet."
      }, {
        "food_name": "quinoa",
        "edible": "yes",
        "description": "Quinoa is actually an ingredient in some high-quality dry dog foods. The strong nutritional profile of quinoa makes it a healthy alternative to corn, wheat, and soy — starches that are often used to make kibble."
      }, {
        "food_name": "cheese",
        "edible": "yes",
        "description": "Dogs can eat cheese in small to moderate quantities. As long as your dog isn’t lactose intolerant, which is rare, but still possible in canines, cheese can be a great treat. Many kinds of cheese can be high in fat, so go for low-fat varieties like cottage cheese or mozzarella."
      }, {
        "food_name": "pork",
        "edible": "yes",
        "description": "Pork is highly digestible protein, packed with amino acids, and it contains more calories per pound than other meats. Pork also may be less likely to cause an allergic reaction in some pets compared to other meat"
      }, {
        "food_name": "coconut",
        "edible": "yes",
        "description": "Coconut meat and coconut oil can be very beneficial to dogs. Be careful with the shell as it could get lodged in their throat. It’s true that coconuts are high in saturated fat and typically, you do want to avoid saturated fat with your dog. But the fat in coconut is a bit different and is considered safe, in moderation, for your dog."
      }, {
        "food_name": "fish",
        "edible": "yes",
        "description": "Fish contains good fats and amino acids, giving your dog a nice health boost. Salmon and sardines are especially beneficial – salmon because it’s loaded with vitamins and protein, and sardines because they have soft, digestible bones for extra calcium. With the exception of sardines, be sure to pick out all the tiny bones. Never feed your dog uncooked or under-cooked fish, only fully cooked and cooled, and limit your dog’s fish intake to no more than twice a week. "
      }, {
        "food_name": "garlic",
        "edible": "no",
        "description": " Garlic is part of the Allium family, along with onions, leeks, and chives, and it is five times more toxic to dogs than the rest of the Allium plants. Garlic can create anemia in dogs, causing side effects such as pale gums, elevated heart rate, weakness, and collapsing. Poisoning from garlic and onions may have delayed symptoms, so if you think your dog may have eaten some, monitor him or her for a few days, not just right after consumption."
      }, {
        "food_name": "carrots",
        "edible": "caution",
        "description": "For some reason, dogs do not have a good ability to digest carrots, especially if they are coarsely grated or in chunks. Some sources are also concerned about the levels of sugar in carrots. There is a simple way to see if your dog can digest carrots. Just feed them in chunks and see if you find carrots in your dog’s bowel movement."
      }, {
        "food_name": "asparagus",
        "edible": "yes",
        "description": "When cut into bite size pieces, Asparagus makes a healthy veggie option for your dog because of its vitamin K, A, B1, B2, C and E, along with the folate, iron, copper, fiber, manganese and potassium that’s found in them."
      }, {
        "food_name": "watermelon",
        "edible": "caution",
        "description": "Seeds could cause an intestinal blockage, so make sure you remove them. It’s also probably not a good idea to allow a dog to chew on the rind, because it can cause gastrointestinal upset. The fruit itself is a health-food powerhouse, low in calories and packed with nutrients—vitamins A, B6, and C, and potassium. "
      }, {
        "food_name": "sweet potatoes",
        "edible": "yes",
        "description": "They are one of the best dietary sources of vitamin A, which promotes healthy skin, coat, eyes, nerves, and muscles in dogs. Vegetables with orange flesh contain beta-carotene, a precursor of vitamin A and a powerful antioxidant that helps prevent disease and infection."
      }, {
        "food_name": "pumpkin",
        "edible": "yes",
        "description": "Feed your dog pumpkin to load him up on fiber, vitamin A and anti-oxidants to help alleviate diarrhea and constipation and to promote his overall cardiovascular health."
      }, {
        "food_name": "spinach",
        "edible": "caution",
        "description": "Spinach contains large amounts of vitamins A, B, C, and K. It also contains iron, antioxidants, beta-carotene, and roughage, which stimulate the digestive tract. Spinach is very high in oxalic acid, which blocks the body’s ability to absorb calcium and can lead to kidney damage. Sources agree that a dog would have to eat very large quantities of spinach to cause damage. Dogs that have healthy kidneys can easily process small amounts of soluble oxalates. But long-term consumption can cause kidney stress, muscle weakness, abnormal heart rhythms, and even respiratory paralysis."
      }, {
        "food_name": "canteloupe",
        "edible": "caution",
        "description": "Canteloupe is safe for dogs and can be a healthy treat. Be careful not to feed your dog cantaloupe rinds. Like watermelons rinds, can cause gastrointestinal upset and become impacted in the dog's digestive tract."
      }, {
        "food_name": "brussel sprouts",
        "edible": "caution",
        "description": "This cruciferous vegetable is loaded with nutrients, like vitamins, fiber, and antioxidants that are good for humans and canines, alike. Brussels sprouts contain vitamin K, which helps blood clot properly, builds bones, and protects the heart. Because there’s a downside well known to anyone who regularly eats them: gas. Lots and lots of gas. Sprouts contain a high level of a substance called isothiocyanate that improves the intestinal muscle's ability to push food and waste through the gastrointestinal tract. "
      }, {
        "food_name": "chicken",
        "edible": "yes",
        "description": "Chicken can be fed to our dogs a variety of ways. Cooked chicken meat is a perfectly suitable snack or meal additive, but cooked bones should never be fed to dogs. On the other hand, both raw chicken and raw chicken bones are healthy for our dogs to eat. Cooked bones splinter and can be dangerous, while raw bones are soft and chewy. "
      }, {
        "food_name": "oatmeal",
        "edible": "yes",
        "description": "Oatmeal is found in many dog foods and for those not sensitive to grains, it can be a healthy additive to your dog’s meal. Not only is it packed with vitamins and minerals, it’s an excellent source of dietary fiber."
      }
    ]);
  });
};

exports.down = function(knex, Promise) {
  return knex('foods').delete();
};
