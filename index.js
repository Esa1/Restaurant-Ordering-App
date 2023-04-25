import {menuArray} from "./data.js"

const menuItemsEl = document.querySelector("#menu-items")
console.log(menuItemsEl)

/*
                    <div class="menu-item"">
                        <div class="meal-emoji">🍕</div>
                        <div class="meal-name">Pizza</div>
                        <div class="meal-desc">Mozzarella</div>
                        <div class="meal-price">$14</div>
                    </div> 
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
*/

let menu = '' 
menuArray.forEach((meal)=>{
    let desc = ''
    console.log(meal.ingredients)
    meal.ingredients.forEach((ing)=> {
        desc += `${ing}, `
    })
    menu += `
    <div class="menu-item"">
        <div class="meal-emoji">${meal.emoji}</div>
        <div class="">
            <div class="meal-name">${meal.name}</div>
            <div class="meal-desc">${desc}</div>
            <div class="meal-price">${meal.price}</div>
        </div> 
    </div> 
    `
})
menuItemsEl.innerHTML = menu
