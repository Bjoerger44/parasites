var {findIdByName} = require("../helper")

exports.seed = function(knex, Promise) {
  return knex('parasite').del()
    .then(function () {
      return knex("genus").select()
    })
    .then(function (genera) {
      return Promise.join(
        knex('parasite').insert({name: 'flea', genus_id: findIdByName(genera, "ctenocephalides")}), //cat flea
        knex('parasite').insert({name: 'tick', genus_id: findIdByName(genera, "amblyomma")}), //tick
        knex('parasite').insert({name: 'heart worm', genus_id: findIdByName(genera, "diropilaria")}) //heart work
      );
    })
    .then(function () {
      return knex("parasite").select(["parasite.name as Parasite", "genus.name as Genus"]).join("genus", function () {
        this.on("parasite.genus_id", "=", "genus.id")
      })
      .then(function (joinedTable) {
        // console.log(joinedTable)
      })
    })
};
