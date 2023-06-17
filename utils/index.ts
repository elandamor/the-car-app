export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "ef7296c9e9msh1283e9846befd0fp1cd8ecjsn25168472d872",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      {
        headers: headers,
      }
    );

    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculat e additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay * mileageRate * ageRate;

  return rentalRatePerDay.toFixed(0);
}
