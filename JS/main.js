var button = document.getElementById("tryRecipeBtn");
var meals =[
    {
    name: "Grilled Chicken Salad",
    image: "Images/grilled-chicken-salad.jpg",
    rating: 4.9,
    reviews: "412 reviews",

    prepTime: "15 min",
    cookTime: "15 min",
    servings: "2",

    difficulty: "Easy",
    category: "Healthy",

    description: "Fresh mixed greens topped with grilled chicken, tomatoes, cucumber, and a light lemon dressing.",

    ingredients: [
        "2 chicken breasts",
        "4 cups mixed greens",
        "1 cucumber, sliced",
        "1 cup cherry tomatoes",
        "1/4 red onion, sliced",
        "2 tablespoons olive oil",
        "1 tablespoon lemon juice",
        "Salt and black pepper"
    ],

    instructions: [
        "Season the chicken breasts with salt, pepper, and olive oil.",
        "Grill the chicken for 6–7 minutes on each side.",
        "Let the chicken rest before slicing.",
        "Combine the mixed greens, cucumber, tomatoes, and onion.",
        "Whisk olive oil and lemon juice together.",
        "Top the salad with sliced chicken and drizzle with dressing."
    ],

    nutrition: {
        calories: "380 kcal",
        protein: "38g",
        carbohydrates: "18g",
        fat: "19g",
        fiber: "5g",
        sodium: "420mg"
    },

    tips: [
        "Let the chicken rest before slicing",
        "Use fresh lemon juice for the dressing",
        "Add avocado for extra creaminess",
        "Prepare the vegetables ahead of time"
    ]
},

{
    name: "Beef Tacos",
    image: "Images/beef-tacos.jpg",
    rating: 4.8,
    reviews: "367 reviews",

    prepTime: "10 min",
    cookTime: "20 min",
    servings: "4",

    difficulty: "Easy",
    category: "Mexican",

    description: "Juicy seasoned beef served in warm tortillas with fresh vegetables, cheese, and creamy sauce.",

    ingredients: [
        "500g ground beef",
        "8 small tortillas",
        "1 tomato, diced",
        "1/2 onion, diced",
        "1 cup shredded lettuce",
        "1/2 cup cheddar cheese",
        "2 tablespoons taco seasoning",
        "Sour cream"
    ],

    instructions: [
        "Heat a pan over medium heat and add the ground beef.",
        "Cook the beef until browned.",
        "Add taco seasoning and a small amount of water.",
        "Simmer for 5 minutes.",
        "Warm the tortillas.",
        "Fill each tortilla with beef, lettuce, tomato, onion, and cheese.",
        "Serve with sour cream."
    ],

    nutrition: {
        calories: "560 kcal",
        protein: "32g",
        carbohydrates: "48g",
        fat: "27g",
        fiber: "6g",
        sodium: "890mg"
    },

    tips: [
        "Warm tortillas before serving",
        "Add fresh lime juice for extra flavor",
        "Use lean ground beef for a lighter meal",
        "Prepare toppings before cooking the beef"
    ]
},

{
    name: "Creamy Tomato Pasta",
    image: "Images/creamy-tomato-pasta.jpg",
    rating: 4.7,
    reviews: "298 reviews",

    prepTime: "10 min",
    cookTime: "20 min",
    servings: "3",

    difficulty: "Easy",
    category: "Italian",

    description: "Silky tomato cream sauce tossed with pasta and finished with parmesan and fresh basil.",

    ingredients: [
        "300g penne pasta",
        "1 cup tomato sauce",
        "1/2 cup heavy cream",
        "2 garlic cloves",
        "1/2 cup parmesan cheese",
        "1 tablespoon olive oil",
        "Fresh basil",
        "Black pepper"
    ],

    instructions: [
        "Cook the pasta according to package instructions.",
        "Heat olive oil and sauté the garlic.",
        "Add tomato sauce and simmer for 5 minutes.",
        "Stir in the heavy cream.",
        "Add parmesan cheese and black pepper.",
        "Drain the pasta and toss it with the sauce.",
        "Garnish with fresh basil."
    ],

    nutrition: {
        calories: "510 kcal",
        protein: "18g",
        carbohydrates: "68g",
        fat: "19g",
        fiber: "5g",
        sodium: "620mg"
    },

    tips: [
        "Use freshly grated parmesan",
        "Reserve some pasta water for the sauce",
        "Do not boil the cream sauce too aggressively",
        "Add fresh basil just before serving"
    ]
},

{
    name: "Chicken Fried Rice",
    image: "Images/chicken-fried-rice.jpg",
    rating: 4.8,
    reviews: "341 reviews",

    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4",

    difficulty: "Easy",
    category: "Asian",

    description: "Flavorful fried rice with tender chicken, vegetables, scrambled eggs, and soy sauce.",

    ingredients: [
        "3 cups cooked rice",
        "300g chicken breast",
        "2 eggs",
        "1 carrot, diced",
        "1/2 cup peas",
        "3 green onions",
        "3 tablespoons soy sauce",
        "1 tablespoon sesame oil"
    ],

    instructions: [
        "Cook the chicken in a hot pan until fully cooked.",
        "Remove the chicken and scramble the eggs.",
        "Add carrots and peas and stir-fry for a few minutes.",
        "Add the cooked rice.",
        "Return the chicken to the pan.",
        "Add soy sauce and sesame oil.",
        "Stir everything together and garnish with green onions."
    ],

    nutrition: {
        calories: "490 kcal",
        protein: "31g",
        carbohydrates: "61g",
        fat: "14g",
        fiber: "4g",
        sodium: "980mg"
    },

    tips: [
        "Use cold cooked rice for the best texture",
        "Keep the pan very hot",
        "Do not overcrowd the pan",
        "Add sesame oil at the end"
    ]
},

{
    name: "Margherita Pizza",
    image: "Images/margherita-pizza.jpg",
    rating: 4.9,
    reviews: "523 reviews",

    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2",

    difficulty: "Medium",
    category: "Italian",

    description: "Classic Italian pizza topped with tomato sauce, fresh mozzarella, basil, and olive oil.",

    ingredients: [
        "1 pizza dough",
        "1/2 cup tomato sauce",
        "150g fresh mozzarella",
        "Fresh basil leaves",
        "1 tablespoon olive oil",
        "Salt",
        "Black pepper"
    ],

    instructions: [
        "Preheat the oven to 230°C.",
        "Roll the pizza dough into a round shape.",
        "Spread tomato sauce over the dough.",
        "Add slices of fresh mozzarella.",
        "Season lightly with salt and pepper.",
        "Bake for 12–15 minutes.",
        "Top with fresh basil and olive oil."
    ],

    nutrition: {
        calories: "590 kcal",
        protein: "25g",
        carbohydrates: "72g",
        fat: "23g",
        fiber: "4g",
        sodium: "920mg"
    },

    tips: [
        "Use a very hot oven",
        "Do not overload the pizza with toppings",
        "Use fresh mozzarella",
        "Add basil after baking"
    ]
},

{
    name: "Creamy Mushroom Soup",
    image: "Images/creamy-mushroom-soup.jpg",
    rating: 4.6,
    reviews: "245 reviews",

    prepTime: "10 min",
    cookTime: "25 min",
    servings: "4",

    difficulty: "Easy",
    category: "Soup",

    description: "Warm and creamy mushroom soup made with garlic, herbs, and a touch of cream.",

    ingredients: [
        "400g mushrooms",
        "1 onion, diced",
        "3 garlic cloves",
        "2 cups vegetable broth",
        "1/2 cup heavy cream",
        "2 tablespoons butter",
        "1 teaspoon thyme",
        "Salt and pepper"
    ],

    instructions: [
        "Melt butter in a large pot.",
        "Sauté the onion and garlic until soft.",
        "Add sliced mushrooms and cook until browned.",
        "Pour in the vegetable broth.",
        "Add thyme and simmer for 15 minutes.",
        "Blend part of the soup for a creamy texture.",
        "Stir in the cream and season with salt and pepper."
    ],

    nutrition: {
        calories: "280 kcal",
        protein: "8g",
        carbohydrates: "18g",
        fat: "20g",
        fiber: "4g",
        sodium: "540mg"
    },

    tips: [
        "Brown the mushrooms well for deeper flavor",
        "Use a mixture of mushroom varieties",
        "Do not add the cream too early",
        "Garnish with fresh parsley"
    ]
},

{
    name: "Salmon Rice Bowl",
    image: "Images/salmon-rice-bowl.jpg",
    rating: 4.9,
    reviews: "389 reviews",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2",

    difficulty: "Medium",
    category: "Healthy",

    description: "Flaky roasted salmon served over rice with avocado, cucumber, and a creamy sauce.",

    ingredients: [
        "2 salmon fillets",
        "2 cups cooked rice",
        "1 avocado",
        "1 cucumber",
        "2 tablespoons soy sauce",
        "1 tablespoon honey",
        "1 teaspoon sesame oil",
        "Sesame seeds"
    ],

    instructions: [
        "Season the salmon with soy sauce and honey.",
        "Bake the salmon until cooked through.",
        "Prepare the rice and slice the vegetables.",
        "Place rice into serving bowls.",
        "Add salmon, avocado, and cucumber.",
        "Drizzle with sesame oil.",
        "Garnish with sesame seeds."
    ],

    nutrition: {
        calories: "620 kcal",
        protein: "39g",
        carbohydrates: "52g",
        fat: "27g",
        fiber: "7g",
        sodium: "760mg"
    },

    tips: [
        "Do not overcook the salmon",
        "Use sushi-style rice for a softer texture",
        "Add spicy mayo for extra flavor",
        "Serve immediately"
    ]
},

{
    name: "Chicken Caesar Wrap",
    image: "Images/chicken-caesar-wrap.jpg",
    rating: 4.7,
    reviews: "276 reviews",

    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2",

    difficulty: "Easy",
    category: "Quick",

    description: "Grilled chicken, crisp lettuce, parmesan, and Caesar dressing wrapped in a soft tortilla.",

    ingredients: [
        "2 chicken breasts",
        "2 large tortillas",
        "2 cups romaine lettuce",
        "1/4 cup parmesan cheese",
        "1/3 cup Caesar dressing",
        "Black pepper"
    ],

    instructions: [
        "Season and grill the chicken.",
        "Slice the cooked chicken into strips.",
        "Combine lettuce, parmesan, and Caesar dressing.",
        "Place the salad mixture on the tortillas.",
        "Add sliced chicken.",
        "Roll the tortillas tightly and serve."
    ],

    nutrition: {
        calories: "450 kcal",
        protein: "36g",
        carbohydrates: "38g",
        fat: "19g",
        fiber: "4g",
        sodium: "820mg"
    },

    tips: [
        "Do not add too much dressing",
        "Warm the tortilla before wrapping",
        "Use freshly grilled chicken",
        "Add crispy croutons for texture"
    ]
},

{
    name: "Vegetable Stir Fry",
    image: "Images/vegetable-stir-fry.jpg",
    rating: 4.6,
    reviews: "214 reviews",

    prepTime: "10 min",
    cookTime: "15 min",
    servings: "3",

    difficulty: "Easy",
    category: "Vegetarian",

    description: "Colorful vegetables quickly stir-fried with garlic, ginger, and a savory soy sauce.",

    ingredients: [
        "1 bell pepper",
        "1 broccoli head",
        "1 carrot",
        "1 zucchini",
        "2 garlic cloves",
        "1 teaspoon ginger",
        "3 tablespoons soy sauce",
        "1 tablespoon sesame oil"
    ],

    instructions: [
        "Cut all vegetables into bite-sized pieces.",
        "Heat sesame oil in a large pan.",
        "Add garlic and ginger.",
        "Add the vegetables and stir-fry over high heat.",
        "Add soy sauce.",
        "Cook until the vegetables are tender but still slightly crisp.",
        "Serve immediately."
    ],

    nutrition: {
        calories: "240 kcal",
        protein: "8g",
        carbohydrates: "34g",
        fat: "9g",
        fiber: "8g",
        sodium: "720mg"
    },

    tips: [
        "Keep the heat high",
        "Do not overcook the vegetables",
        "Cut vegetables evenly",
        "Add cashews for extra crunch"
    ]
},

{
    name: "Beef Burger",
    image: "Images/beef-burger.jpg",
    rating: 4.8,
    reviews: "451 reviews",

    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2",

    difficulty: "Easy",
    category: "American",

    description: "Juicy homemade beef burger topped with cheddar cheese, lettuce, tomato, and onion.",

    ingredients: [
        "300g ground beef",
        "2 burger buns",
        "2 slices cheddar cheese",
        "Lettuce",
        "1 tomato",
        "1/2 onion",
        "2 tablespoons burger sauce",
        "Salt and pepper"
    ],

    instructions: [
        "Form the ground beef into two burger patties.",
        "Season both sides with salt and pepper.",
        "Cook the patties on a hot grill or pan.",
        "Add cheddar cheese during the final minute.",
        "Toast the burger buns.",
        "Add lettuce, tomato, onion, and sauce.",
        "Place the beef patty inside and serve."
    ],

    nutrition: {
        calories: "680 kcal",
        protein: "39g",
        carbohydrates: "48g",
        fat: "36g",
        fiber: "3g",
        sodium: "1050mg"
    },

    tips: [
        "Do not press the burger while cooking",
        "Toast the buns for extra flavor",
        "Let the meat rest briefly",
        "Use freshly sliced vegetables"
    ]
},

{
    name: "Chicken Curry",
    image: "Images/chicken-curry.jpg",
    rating: 4.9,
    reviews: "372 reviews",

    prepTime: "15 min",
    cookTime: "30 min",
    servings: "4",

    difficulty: "Medium",
    category: "Indian",

    description: "Tender chicken simmered in a rich aromatic curry sauce with tomatoes, spices, and coconut milk.",

    ingredients: [
        "500g chicken breast",
        "1 onion",
        "3 garlic cloves",
        "1 cup coconut milk",
        "1 cup tomato sauce",
        "2 tablespoons curry powder",
        "1 teaspoon ginger",
        "2 tablespoons olive oil"
    ],

    instructions: [
        "Heat oil in a large pan.",
        "Cook the onion until soft.",
        "Add garlic, ginger, and curry powder.",
        "Add the chicken and cook until lightly browned.",
        "Add tomato sauce and coconut milk.",
        "Simmer for 20 minutes.",
        "Serve hot with rice."
    ],

    nutrition: {
        calories: "570 kcal",
        protein: "40g",
        carbohydrates: "35g",
        fat: "29g",
        fiber: "5g",
        sodium: "640mg"
    },

    tips: [
        "Toast the spices before adding liquids",
        "Use chicken thighs for extra tenderness",
        "Adjust the spice level to your preference",
        "Serve with basmati rice"
    ]
},

{
    name: "Greek Chicken Bowl",
    image: "Images/greek-chicken-bowl.jpg",
    rating: 4.8,
    reviews: "301 reviews",

    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2",

    difficulty: "Easy",
    category: "Mediterranean",

    description: "Mediterranean-style chicken bowl with fresh vegetables, rice, feta cheese, and creamy tzatziki.",

    ingredients: [
        "2 chicken breasts",
        "2 cups cooked rice",
        "1 cucumber",
        "1 tomato",
        "1/2 red onion",
        "1/2 cup feta cheese",
        "1/2 cup tzatziki",
        "1 tablespoon olive oil"
    ],

    instructions: [
        "Season the chicken with olive oil and Mediterranean herbs.",
        "Grill the chicken until fully cooked.",
        "Slice the cucumber, tomato, and onion.",
        "Divide the rice between two bowls.",
        "Add the vegetables and sliced chicken.",
        "Top with feta cheese and tzatziki.",
        "Serve immediately."
    ],

    nutrition: {
        calories: "530 kcal",
        protein: "42g",
        carbohydrates: "49g",
        fat: "20g",
        fiber: "6g",
        sodium: "710mg"
    },

    tips: [
        "Marinate the chicken for extra flavor",
        "Use fresh cucumber",
        "Add Kalamata olives",
        "Serve with warm pita bread"
    ]
},

{
    name: "Shrimp Garlic Noodles",
    image: "Images/shrimp-garlic-noodles.jpg",
    rating: 4.7,
    reviews: "264 reviews",

    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2",

    difficulty: "Easy",
    category: "Asian",

    description: "Quick garlic noodles tossed with juicy shrimp, vegetables, soy sauce, and sesame oil.",

    ingredients: [
        "250g shrimp",
        "200g noodles",
        "4 garlic cloves",
        "1 carrot",
        "1 bell pepper",
        "3 tablespoons soy sauce",
        "1 tablespoon sesame oil",
        "Green onions"
    ],

    instructions: [
        "Cook the noodles according to the package instructions.",
        "Heat sesame oil in a large pan.",
        "Add garlic and shrimp.",
        "Cook the shrimp until pink.",
        "Add the vegetables and stir-fry.",
        "Add noodles and soy sauce.",
        "Toss everything together and garnish with green onions."
    ],

    nutrition: {
        calories: "470 kcal",
        protein: "32g",
        carbohydrates: "59g",
        fat: "12g",
        fiber: "4g",
        sodium: "980mg"
    },

    tips: [
        "Do not overcook the shrimp",
        "Use fresh garlic",
        "Keep the vegetables slightly crisp",
        "Add chili flakes for heat"
    ]
},

{
    name: "Baked Salmon",
    image: "Images/baked-salmon.jpg",
    rating: 4.9,
    reviews: "428 reviews",

    prepTime: "10 min",
    cookTime: "20 min",
    servings: "2",

    difficulty: "Easy",
    category: "Healthy",

    description: "Oven-baked salmon seasoned with lemon, garlic, and herbs for a simple healthy dinner.",

    ingredients: [
        "2 salmon fillets",
        "1 lemon",
        "3 garlic cloves",
        "1 tablespoon olive oil",
        "1 teaspoon dried herbs",
        "Salt",
        "Black pepper"
    ],

    instructions: [
        "Preheat the oven to 200°C.",
        "Place the salmon on a baking tray.",
        "Drizzle with olive oil.",
        "Add minced garlic, lemon juice, and herbs.",
        "Season with salt and pepper.",
        "Bake for 15–20 minutes.",
        "Serve with lemon slices."
    ],

    nutrition: {
        calories: "430 kcal",
        protein: "40g",
        carbohydrates: "7g",
        fat: "27g",
        fiber: "2g",
        sodium: "390mg"
    },

    tips: [
        "Do not overcook the salmon",
        "Use fresh lemon juice",
        "Add fresh dill for extra flavor",
        "Serve with roasted vegetables"
    ]
},

{
    name: "Vegetable Omelette",
    image: "Images/vegetable-omelette.jpg",
    rating: 4.6,
    reviews: "198 reviews",

    prepTime: "10 min",
    cookTime: "10 min",
    servings: "2",

    difficulty: "Easy",
    category: "Breakfast",

    description: "Fluffy eggs filled with colorful vegetables, cheese, and fresh herbs.",

    ingredients: [
        "4 eggs",
        "1/2 bell pepper",
        "1 tomato",
        "1/4 onion",
        "1/2 cup shredded cheese",
        "1 tablespoon butter",
        "Fresh parsley",
        "Salt and pepper"
    ],

    instructions: [
        "Beat the eggs with salt and pepper.",
        "Dice the vegetables.",
        "Melt butter in a non-stick pan.",
        "Cook the vegetables until slightly soft.",
        "Pour the eggs over the vegetables.",
        "Add cheese and cook until the eggs are set.",
        "Fold the omelette and garnish with parsley."
    ],

    nutrition: {
        calories: "330 kcal",
        protein: "23g",
        carbohydrates: "9g",
        fat: "23g",
        fiber: "2g",
        sodium: "510mg"
    },

    tips: [
        "Use a non-stick pan",
        "Cook over medium-low heat",
        "Do not overcook the eggs",
        "Add your favorite vegetables"
    ]
},

{
    name: "Pesto Chicken Pasta",
    image: "Images/pesto-chicken-pasta.jpg",
    rating: 4.8,
    reviews: "336 reviews",

    prepTime: "10 min",
    cookTime: "20 min",
    servings: "3",

    difficulty: "Easy",
    category: "Italian",

    description: "Tender chicken and pasta tossed in creamy basil pesto with parmesan cheese.",

    ingredients: [
        "300g pasta",
        "300g chicken breast",
        "1/2 cup basil pesto",
        "1/4 cup parmesan cheese",
        "1 tablespoon olive oil",
        "1 garlic clove",
        "Cherry tomatoes",
        "Black pepper"
    ],

    instructions: [
        "Cook the pasta until al dente.",
        "Cut the chicken into bite-sized pieces.",
        "Heat olive oil and cook the chicken.",
        "Add garlic and cherry tomatoes.",
        "Add the cooked pasta.",
        "Stir in the pesto.",
        "Finish with parmesan and black pepper."
    ],

    nutrition: {
        calories: "610 kcal",
        protein: "38g",
        carbohydrates: "64g",
        fat: "24g",
        fiber: "5g",
        sodium: "740mg"
    },

    tips: [
        "Do not heat pesto too aggressively",
        "Save some pasta water",
        "Use fresh basil pesto",
        "Add parmesan just before serving"
    ]
}
];
var lastIndex = -1;
function setText(id, text) {
    document.getElementById(id).textContent = text;
}

function renderList(containerId, items, type) {
    var html = "";
    items.forEach(function (item, i) {
        var isLast = i === items.length - 1;
        var margin = isLast ? "" : "mb-3";
        var badge;

        if (type === "ingredients") {
            badge = '<div class="icon-center h-20-px w-20-px bg-gradient-orange-red rounded-circle">' +
                    '<span class="text-white" style="font-size:0.7rem">' + (i + 1) + '</span></div>';
        } else if (type === "instructions") {
            badge = '<div class="icon-center h-52 w-52 bg-gradient-orange-red rounded-4">' +
                    '<span class="text-white fw-bold">' + (i + 1) + '</span></div>';
        } else {
            badge = '<div class="icon-center h-20-px w-20-px bg-dark-orange rounded-circle">' +
                    '<i class="fa-solid fa-check text-white fa-2xs"></i></div>';
        }

        html += '<div class="d-flex gap-3 align-items-center ' + margin + '">' +
                badge + '<p class="fs-p-med mb-0">' + item + '</p></div>';
    });
    document.getElementById(containerId).innerHTML = html;
}

function showMeal(meal) {
    var img = document.getElementById("recipeImage");
    img.src = meal.image;
    img.alt = meal.name;

    setText("recipeTitle", meal.name);
    setText("recipeDescription", meal.description);
    setText("recipeRating", meal.rating);
    setText("recipeReviews", meal.reviews);
    setText("prepTime", meal.prepTime);
    setText("cookTime", meal.cookTime);
    setText("servings", meal.servings);
    setText("recipeDifficulty", meal.difficulty);
    setText("recipeCategory", meal.category);

    setText("nutCalories", meal.nutrition.calories);
    setText("nutProtein", meal.nutrition.protein);
    setText("nutCarbs", meal.nutrition.carbohydrates);
    setText("nutFat", meal.nutrition.fat);
    setText("nutFiber", meal.nutrition.fiber);
    setText("nutSodium", meal.nutrition.sodium);

    renderList("ingredientsContent", meal.ingredients, "ingredients");
    renderList("instructionsContent", meal.instructions, "instructions");
    renderList("tipsContent", meal.tips, "tips");
}

function showRandomMeal() {
    var index;
    do {
        index = Math.floor(Math.random() * meals.length);
    } while (index === lastIndex && meals.length > 1);
    lastIndex = index;
    showMeal(meals[index]);
}

button.addEventListener("click", showRandomMeal);
showRandomMeal(); // show a meal on first load
