const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ingredientsEl = document.querySelector("#ingredients");

// function addIngridientsToList(arr) {
//      const itemsArr = [];
//   for (const ingredient of ingredients) {
//     const item = document.createElement("li");
//     item.classList.add("item");
//     item.textContent = ingredient;
//     itemsArr.push(item)

//   }
//   ingredientsEl.append(...itemsArr);
 
// };

// addIngridientsToList(ingredients);

// ===========================================================
const ingredientsEl = document.querySelector("#ingredients");

function addIngridientsToList(arr) {
  
  ingredientsEl.append(...arr.map(ingredient => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = ingredient;
    return item
  }));
 
};

addIngridientsToList(ingredients);