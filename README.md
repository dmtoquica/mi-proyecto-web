# Mini Proyecto: API de Tareas (Ingeniería Web)

Este proyecto implementa una API RESTful para gestionar tareas y un pipeline de CI/CD con GitHub Actions.

## Arquitectura

Se usa una arquitectura en capas simple (MVC) con:
* `src/routes`: Define los endpoints.
* `src/controllers`: Maneja la lógica de negocio.
* `src/app.js`: Configura la aplicación Express.

## Instrucciones de Despliegue (Local)

1.  Clonar el repositorio:
    ```bash
    git clone <URL_DE_TU_REPO>
    ```
2.  Entrar a la carpeta:
    ```bash
    cd mi-proyecto-web
    ```
3.  Instalar dependencias:
    ```bash
    npm install
    ```
4.  Ejecutar el servidor:
    ```bash
    npm start
    ```
5.  Ejecutar las pruebas:
    ```bash
    npm test
    ```

## Documentación de API (Ejemplos)

(Criterio: `Documentación de uso`)

#### `GET /api/tasks`
Retorna todas las tareas.

* **Respuesta (200 OK):**
    ```json
    [
      { "id": 1, "title": "Tarea 1: Implementar API", "completed": false },
      { "id": 2, "title": "Tarea 2: Crear Pruebas", "completed": false }
    ]
    ```

#### `POST /api/tasks`
Crea una nueva tarea.

* **Body (JSON):**
    ```json
    {
      "title": "Mi nueva tarea desde Postman"
    }
    ```
* **Respuesta (201 Created):**
    ```json
    { "id": 3, "title": "Mi nueva tarea desde Postman", "completed": false }
    ```