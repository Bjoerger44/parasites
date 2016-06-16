
exports.seed = function(knex, Promise) {
  return knex("host_parasite").del()
  .then(function () {
    return knex("parasite").del()
  })
  .then(function () {
    return knex("host").del()
  })
  .then(function () {
    return knex("genus").del()
  })
};
