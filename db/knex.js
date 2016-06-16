var knex = require("knex")
var config = require("../knexfile")
var environment = "development"
module.exports = knex(config[environment])
