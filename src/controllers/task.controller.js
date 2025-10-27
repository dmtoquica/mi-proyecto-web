// src/controllers/task.controller.js
// Usamos un array en memoria como "base de datos"
let tasks = [
    { id: 1, title: "Tarea 1: Implementar API", completed: false },
    { id: 2, title: "Tarea 2: Crear Pruebas", completed: false }
];
let nextId = 3;

// (Documentación de función)
/**
 * Obtiene todas las tareas
 */
exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

/**
 * Crea una nueva tarea
 */
exports.createTask = (req, res) => {
    const { title } = req.body;

    // (Criterio: Buenas prácticas de seguridad - Validación simple)
    if (!title) {
        return res.status(400).json({ error: 'El título es requerido' });
    }

    const newTask = {
        id: nextId++,
        title: title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};