import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;

    let filter;

    if (completed === undefined) {
      filter = undefined;
    } else {
      filter = completed === "true";
    }

    const tasks = await taskService.getAllTasks(filter);

    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
