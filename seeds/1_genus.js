
exports.seed = function(knex, Promise) {
  return knex('genus').del()
    .then(function () {
      return Promise.join(
        knex('genus').insert({name: 'ctenocephalides'}), //cat flea
        knex('genus').insert({name: 'amblyomma'}), //tick
        knex('genus').insert({name: 'diropilaria'}) //heart work
      );
    })
};
