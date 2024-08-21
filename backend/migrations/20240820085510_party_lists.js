exports.up = function (knex) {
    return knex.schema.createTable("party_lists", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("slogan");
      table.integer("election_id").unsigned().notNullable();
      table
        .foreign("election_id")
        .references("id")
        .inTable("elections")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("party_lists");
  };
  