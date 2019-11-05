
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.string('VIN', [17, 17]).primary().notNullable();
    table.unique('VIN');

    table.string('make').notNullable();

    table.string('model').notNullable();

    table.decimal().notNullable();

    table.string('transmissionType');

    table.string('status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
