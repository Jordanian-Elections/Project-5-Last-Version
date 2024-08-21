exports.up = function (knex) {
  return knex.schema.createTable("contact_request", function (table) {
    table.increments("id").primary(); // Auto-incrementing primary key
    table.string("contact_name").notNullable(); // Name of the contact
    table.string("contact_national_id").nullable(); // Nullable national ID of the contact
    table.string("phone").notNullable(); // Phone number
    table.string("subject").notNullable(); // Subject of the contact request
    table.text("message").notNullable(); // Message content
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Timestamp when created
    table.timestamp("updated_at").defaultTo(knex.fn.now()); // Timestamp when last updated
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("contact_request");
};
