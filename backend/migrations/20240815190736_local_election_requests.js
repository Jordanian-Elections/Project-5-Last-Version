exports.up = function (knex) {
  return knex.schema
    .createTable("local_election_requests", function (table) {
      table.increments("id").primary();
      table
        .integer("national_id")
        .unsigned()
        .notNullable()
        .comment("This is the national_id column");
      table.foreign("national_id").references("national_id").inTable("users");
      table.string("local_list_name").notNullable();
      table.boolean("isApproved").defaultTo(false); // Add isApproved column with default value false
      table.timestamps(true, true);
    })
    .then(function () {
      return knex.schema.createTable("members", function (table) {
        table.increments("id").primary();
        table.integer("request_id").unsigned().notNullable();
        table
          .foreign("request_id")
          .references("id")
          .inTable("local_election_requests")
          .onDelete("CASCADE");
        table.string("member_name").notNullable();
        table.timestamps(true, true);
      });
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("members").then(function () {
    return knex.schema.dropTable("local_election_requests");
  });
};
