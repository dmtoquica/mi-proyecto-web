// tests/tasks.test.js
const request = require('supertest');
const app = require('../src/app'); // Importamos la app de express

describe('API de Tareas (/api/tasks)', () => {

    it('GET /api/tasks - Debe retornar un array con tareas', async () => {
        const res = await request(app).get('/api/tasks');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0].title).toBe("Tarea 1: Implementar API");
    });

    it('POST /api/tasks - Debe crear una nueva tarea', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Nueva Tarea de Prueba'
            });
            
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toBe('Nueva Tarea de Prueba');
        expect(res.body.id).toBe(3); // Porque nextId era 3
    });

    it('POST /api/tasks - Debe fallar (400) si no se provee un título', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({}); // Enviamos un body vacío
            
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBe('El título es requerido');
    });
});