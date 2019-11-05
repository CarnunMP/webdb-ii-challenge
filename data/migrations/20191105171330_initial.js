
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.string('VIN', [17, 17]).primary().unique().notNullable();
    // Not sure if         ^this handles the size as it should...
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.decimal('mileage').notNullable();
    table.string('transmissionType');
    table.string('status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
