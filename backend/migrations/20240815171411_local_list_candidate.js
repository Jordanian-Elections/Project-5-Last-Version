exports.up = function (knex) {
  return knex.schema.createTable("local_list_candidate", function (table) {
    table.increments("id").primary(); // Primary key for local_list_candidate table

    // Foreign key referencing users table
    table.integer("candidate_national_id").notNullable();
    table
      .foreign("candidate_national_id")
      .references("national_id")
      .inTable("users")
      .onDelete("CASCADE");

    // Foreign key referencing city from the users table
    table.string("city").notNullable();
    // Foreign key referencing party from the users table
    table.string("party").notNullable();
    table.string("slogan"); // Slogan of the candidate
    table.integer("list_votes").defaultTo(0); // Votes for the list
    table.boolean("is_nominated").defaultTo(false); // Whether the candidate is nominated
    table.integer("candidate_votes").defaultTo(0); // Votes for the candidate
    table.enu("type", ["مسلم", "كوتا", "مسيحي", "شيشاني"]); // Candidate type

    // Add timestamps
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("local_list_candidate");
};
