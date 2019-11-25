exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();

      table.string("name", 255).notNullable();

      table.string("description", 255);

      table.boolean("completed", false);
    })
    .createTable("resources", table => {
      table.increments();

      table.string("name", 255).notNullable();

      table.string("description", 255).unique();
    })
    .createTable("tasks", table => {
      table.increments();

      table.string("description", 255).notNullable();

      table.string("notes", 255);

      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");

      table.boolean("completed", false).notNullable();
    })
    .createTable("project_resources", table => {
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");
      table
        .integer("resources_id")
        .unsigned()
        .notNullable()
        .references("resources.id");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
