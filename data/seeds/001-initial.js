
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 'A17DJ399D05JD8474',
          make: 'Tesla',
          model: 'Model 3',
          mileage: 350434.8,
          transmissionType: 'electric',
          status: 'cool af'
        },
        {
          VIN: 'B27DJ399D05JD8474',
          make: 'X',
          model: 'XY',
          mileage: 100,
        },
                {
          VIN: 'C37DJ399D05JD8474',
          make: 'Y',
          model: 'YZ',
          mileage: 7.68,
        }
      ]);
    });
};
