import {seedObjects} from './harvester.js'

export const food = (food) => {
  return `
      <section class="plant">${food.type}</section>
  `
}

export const catalog = () => {
  const seeds = seedObjects
  const contentElement = document.querySelector(".container")
  for (const foodObject of seeds) {
    const foodHTML = food(foodObject)
    contentElement.innerHTML += foodHTML
  }
}