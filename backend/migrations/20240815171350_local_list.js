exports.up = function(knex) {
    return knex.schema.createTable('local_list', function(table) {
      table.increments('id').primary(); // Primary key
      table.string('city').notNullable(); // City
      table.string('circle').notNullable(); // Circle
      table.string('list').notNullable(); // List
      table.string('name').notNullable(); // Candidate Name
      table.integer('votes').notNullable(); // Number of Votes
  
      // Add any necessary timestamps
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('local_list');
  };
  