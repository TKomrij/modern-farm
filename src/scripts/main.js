import {createPlan} from './plan.js'
import {plants} from './field.js'
import {plantSeeds} from './tractor.js'
import {harvestPlants} from './harvester.js'
import {seedObjects} from './harvester.js'
import {catalog, food} from './catalog.js'


const yearlyPlan = createPlan()
console.log(yearlyPlan)


plantSeeds(yearlyPlan)
console.log(plants)

harvestPlants(plants)
console.log(seedObjects)

food(seedObjects)

catalog (seedObjects)
console.log()