import {createPlan} from './plan.js'
import {plants} from './field.js'
import {plantSeeds} from './tractor.js'






const yearlyPlan = createPlan()
console.log(yearlyPlan)



// Invoke addPlant() and specify the seed object as the parameter.
// addPlant(potatoSeed)
// addPlant(cornSeed)
// addPlant(soybeanSeed)

// Invoke usePlants() and store its return value in a variable.
// const seedsInField = usePlants()

// Use console.log() to make sure your seed object got added to the array of plants in the field.
// console.log(seedsInField)


plantSeeds(yearlyPlan)
console.log(plants)