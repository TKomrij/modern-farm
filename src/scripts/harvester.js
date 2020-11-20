export const seedObjects = []

export const harvestPlants = (plants) => {
  for (let i = 0; i < plants.length; i++) {
    const output = plants[i].output
    if (plants[i].type === "Corn") {
      for (let j = 0; j < 3; j++) {
        seedObjects.push(plants[i])
      }
    } else {
        for (let k = 0; k < output; k++) {
          seedObjects.push(plants[i])
        }
      } 
  }
  return seedObjects
}