
exports.up = function(knex, Promise) {
  return knex.schema.createTable("genus", function (table) {
    table.increments()
    table.text("name")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("genus")
};
