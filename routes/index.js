var express = require('express');
var router = express.Router();
var knex = require("../db/knex")

/* GET home page. */
router.get('/', function(req, res, next) {
  knex("host")
    .select(["host.name as Host", "parasite.name as Parasite"])
    .join("host_parasite", function () {
      this.on("host.id", "=", "host_parasite.host_id")
    })
    .join("parasite", function () {
      this.on("parasite.id", "=", "host_parasite.parasite_id")
    })
    .then(function (rows) {
      console.log(rows)
      res.render('index', { title: 'Express', rows: rows });
    })
    .catch(function (error) {
      console.error(error)
      next(error)
    })
});

module.exports = router;
