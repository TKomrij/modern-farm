import {createPlan} from './plan.js'
import {createAsparagus} from './seeds/asparagus.js'
import {createCorn} from './seeds/corn.js'
import {createPotato} from './seeds/potato.js'
import {createSoybean} from './seeds/soybean.js'
import {createSunflower} from './seeds/sunflower.js'
import {createWheat} from './seeds/wheat.js'
import {addPlant, usePlants} from './field.js'



createPlan()
const yearlyPlan = createPlan()
console.log(yearlyPlan)


// Create a seed object.
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)


// Invoke addPlant() and specify the seed object as the parameter.
addPlant(potatoSeed)
addPlant(Array.isArray(cornSeed))
addPlant(soybeanSeed)

// Invoke usePlants() and store its return value in a variable.
const plantedSeeds = usePlants()

// Use console.log() to make sure your seed object got added to the array of plants in the field.
console.log(plantedSeeds)