
exports.seed = function(knex, Promise) {
  return knex('host').del()
    .then(function () {
      return Promise.join(
        knex('host').insert({name: 'dog'}),
        knex('host').insert({name: 'cat'}),
        knex('host').insert({name: 'human'})
      );
    })
};
