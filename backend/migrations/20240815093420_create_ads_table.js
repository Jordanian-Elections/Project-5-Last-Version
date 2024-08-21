// exports.up = function(knex) {
//   return knex.schema.createTable('ads', table => {
//     table.increments('id').primary();
//     table.string('candidate_name').notNullable();
//     table.text('image_url').notNullable();
//     table.text('description').notNullable();
//     table.decimal('price', 10, 2).defaultTo('50.00');
//     table.enu('status', ['approved', 'rejected']).defaultTo('rejected');
//     table.timestamps(true, true);
//   });
// };

// exports.down = function(knex) {
//   return knex.schema.dropTable('ads');
// };


exports.up = function(knex) {
  return knex.schema.createTable('ads', table => {
    table.increments('id').primary();
    table.string('candidate_name').notNullable();
    table.text('image_url').notNullable();
    table.text('description').notNullable();
    table.decimal('price', 10, 2).defaultTo(50.00);  // No need for quotes around the number
    table.enu('status', ['approved', 'rejected']).defaultTo('rejected');
    table.timestamps(true, true); // Automatically adds created_at and updated_at columns
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ads');
};

