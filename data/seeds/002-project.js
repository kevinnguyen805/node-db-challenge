
exports.seed = function (knex) {
  return knex('project').insert([
    { name: 'portfolio website', description: 'website for job searching', completed: false },
    { name: 'music app', description: 'music playlist AI', completed: false },
    { name: 'cooking app', description: 'teaches you how to cook', completed: false }
  ]);
};

