
exports.up = function(knex) {
  return knex.schema
     .createTable('resource', tbl => {
          tbl.increments()
          tbl.string('name',255).notNullable()
          tbl.string('description',255)
     })
     .createTable('project', tbl => {
          tbl.increments()
          tbl.string('name',255).notNullable()
          tbl.string('description',255)
          tbl.boolean('completed').notNullable().defaultTo(false)
     })
     .createTable('resource_project', tbl => {
          tbl.increments()
          tbl.integer('resource_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('resource')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
          tbl.integer('project_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('project')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
     })
     .createTable('task', tbl => {
          tbl.string('description', 255).notNullable()
          tbl.string('notes', 255)
          tbl.boolean('completed').notNullable().defaultTo(false)
          tbl.integer('project_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('project')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE')
     })
};

exports.down = function(knex) {
  return knex.schema
     .dropTableIfExists('tasks')
     .dropTableIfExists('resource_project')
     .dropTableIfExists('project')
     .dropTableIfExists('resource')
};
