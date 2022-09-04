// function showNumberOfItems(items) {
//     console.log(`Number of categories: ${itemsEl.length}`)
// };
// const itemsEl = document.querySelectorAll('.item');
// showNumberOfItems(itemsEl)

function showNumberOfItems(items) {
 console.log(`Number of categories: ${items.children.length}`)   
};

const categoriesEl = document.querySelector('#categories')
showNumberOfItems(categoriesEl)

// =============================================================

const itemsEl = document.querySelectorAll('.item')

function numberElementsOfItem(arr) {
    for (const item of arr) {
        const title = item.querySelector('h2')
        console.log(`Category: ${title.textContent}`)
        const numberElemements = item.querySelectorAll('li')    
        console.log(`Elements: ${numberElemements.length}`);
    }
    
};

numberElementsOfItem(itemsEl);


