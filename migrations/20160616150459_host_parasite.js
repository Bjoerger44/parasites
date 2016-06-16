
exports.up = function(knex, Promise) {
  return knex.schema.createTable("host_parasite", function (table) {
    table.integer("host_id").references("host.id")
    table.integer("parasite_id").references("parasite.id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("host_parasite")
};
