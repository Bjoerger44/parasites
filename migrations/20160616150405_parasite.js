

exports.up = function(knex, Promise) {
  return knex.schema.createTable("parasite", function (table) {
    table.increments()
    table.text("name")
    table.integer("genus_id").references("genus.id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("parasite")
};
