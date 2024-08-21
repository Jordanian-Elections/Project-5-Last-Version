exports.up = function (knex) {
  return knex.schema.createTable("party_election_requests", function (table) {
    table.increments("id").primary();
    table.integer("national_id", 10).notNullable();
    table.foreign("national_id").references("users.national_id");
    table.string("party_list_name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("party_election_requests");
};
