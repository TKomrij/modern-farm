export const plants = []

export const addPlant = (seed) => {
  // if individual seed is an array, make array into individual seed objects and push each object
  if (Array.isArray(seed) === true) {
    for (const seedObject of seed) {
      plants.push(seedObject)
    } 
  // if seed is already an individual object, just push the object
  } else {
    plants.push(seed)
  } 
  return plants
}

export const usePlants = () => {
  return plants.slice()
}