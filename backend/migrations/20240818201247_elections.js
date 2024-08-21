exports.up = function (knex) {
  return knex.schema.createTable("elections", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.date("start_date").notNullable();
    table.date("end_date").notNullable();
    table.enu("type", ["local", "party"]).notNullable();
    table
      .enu("status", ["upcoming", "active", "completed"])
      .defaultTo("upcoming");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("elections");
};
