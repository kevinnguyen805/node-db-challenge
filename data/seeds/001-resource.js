
exports.seed = function(knex) {
  return knex('resource').insert([
    { name: 'lambda', description:'full stack web dev' },
    { name: 'w3 school', description:'web dev tutorials' },
    { name: 'spotify', description:'music app' },
    { name: 'quick eats', description:'fast food' },
    { name: 'helloFresh', description:'app for fresh food delivery' }
  ]);
};