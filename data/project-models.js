const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findResources,
  findTasks,
  add,
  addResource,
  addTask
};

// START OF THE MODELS //
function find() {
  return db.select("*").from("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}
function findResources() {
  return db.select("*").from("resources");
}

function addTask(task) {
  return db("tasks").insert(task);
}

function findTasks(project_id) {
  return db("tasks").where({ project_id });
}

// END OF THE MODELS //
