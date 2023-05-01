const express = require("express");
const tasksController = require("../controllers/tasksController.js");
const authentication = require("../middleware/authentication.js");

const router = express.Router();

router.post("/api/taskboard", authentication, tasksController.createTaskBoard);

router.get("/api/taskboards", authentication, tasksController.getTaskBoards);

router.get("/api/taskboard", authentication, tasksController.getTaskBoard);

router.put("/api/task/add", authentication, tasksController.addTask);

router.put("/api/tasklist/move", authentication, tasksController.moveTaskList);

router.put("/api/task/move/currlist", authentication, tasksController.moveTaskBetweenCurrList);

router.put("/api/move/task", authentication, tasksController.moveTaskToOtherList);

module.exports = router;
