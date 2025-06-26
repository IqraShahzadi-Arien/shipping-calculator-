function calculateShipping(weight, distance) {
  const ratePerKg = 5;
  const ratePerKm = 0.1;
  return (weight * ratePerKg) + (distance * ratePerKm);
}

// Example usage:
console.log("Shipping cost: $" + calculateShipping(10, 200));
