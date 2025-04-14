let vehicle = {
    "make": "Toyota",
    "model": "Camry",
    "year": 2015,
    "engine": {
        "type": "V6",
        "horsepower": 300
        
    }
}

// Function to create a deep copy
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Create a deep copy of the vehicle
  const copiedVehicle = deepCopy(vehicle);
  
  // Modify copiedVehicle to verify deep copy
  copiedVehicle.engine.horsepower = 150;
  
  console.log("Original Vehicle:", vehicle);
  console.log("Copied Vehicle:", copiedVehicle);