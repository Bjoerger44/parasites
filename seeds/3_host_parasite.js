var _ = require('lodash')
var {findIdByName} = require("../helper")

exports.seed = function(knex, Promise) {
  return knex('host_parasite').del()
    .then(function () {
      return Promise.all([
        knex("host").select(),
        knex("parasite").select()
      ])
    })
    .then(function (data) {
      var hosts = data[0]
      var parasites = data[1]
      return Promise.all([
        knex('host_parasite').insert({host_id: findIdByName(hosts, "human"), parasite_id: findIdByName(parasites, "tick")}),
        knex('host_parasite').insert({host_id: findIdByName(hosts, "cat"), parasite_id: findIdByName(parasites, "flea")}),
        knex('host_parasite').insert({host_id: findIdByName(hosts, "cat"), parasite_id: findIdByName(parasites, "heart worm")}),
      ]);
    })
    .then(function () {
      return knex("host")
        .select(["parasite.name as Parasite", "host.name as Host"])
        .join("host_parasite", function () {
          this.on("host_parasite.host_id", "=", "host.id")
        })
        .join("parasite", function () {
          this.on("host_parasite.parasite_id", "=", "parasite.id")
        })
        // .where("host.name", "=", "cat")
        .then(function (joinedTable) {
          console.log(_.groupBy(joinedTable, "Host"))
        })
    })
};
