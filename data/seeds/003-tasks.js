
exports.seed = function (knex) {
  return knex('task').insert([
    { description: 'use figma to create a prototype and then code using React and CSS', notes: 'gonna need a lot of caffeine!', completed:false, project_id: 1 },
    { description: 'get Spotify API and use axios and React to create an app', notes: 'gonna need a lot of caffeine!', completed:false, project_id: 2 },
    { description: 'gather user info and create an app that suits cooking needs', notes: 'gonna need a lot of caffeine!', completed:false, project_id: 3 }
  ]);
};
