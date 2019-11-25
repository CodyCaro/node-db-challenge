const express = require("express");

const Projects = require("./project-models.js");

const router = express.Router();

// Gets the projects
router.get("/", (req, res) => {
  Projects.find()
    .then(Projects => {
      res.json(Projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
});

// Get all resources
router.get("/resource", (req, res) => {
  Projects.findResources()
    .then(resources => {
      if (resources) {
        res.json(resources);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resources with given project id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Resources" });
    });
});

// Gets projects by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
});

// Post up a project
router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

// Get tasks by project id
router.get("/:id/task", (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
    .then(tasks => {
      if (tasks) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks with given project id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Tasks" });
    });
});

// Post a task
router.post("/:id/task", (req, res) => {
  const taskData = req.body;

  Projects.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

// Add a resource
router.post("/resource", (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;
