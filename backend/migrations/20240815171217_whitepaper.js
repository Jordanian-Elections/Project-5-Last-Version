// migrations/xxxx_create_summary_table.js
exports.up = function(knex) {
    return knex.schema.createTable('whitepaper', function(table) {
        table.integer('id').primary(); // Primary key
        table.integer('locallist').defaultTo(0); 
        table.integer('partylist').defaultTo(0); 
        table.integer('total_count').defaultTo(0); 
    }).then(function() {
        // Insert the initial row with id = 1
        return knex('whitepaper').insert({ id: 1 });
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('whitepaper');
};