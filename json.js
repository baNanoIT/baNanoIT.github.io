function mostrarJSON(ruta) {

    if(ruta == 'getAll'){

        const JSONpredefinido = [
            {
                "_id":"a7c4e25f-cc77-4ba-9fde-43b41caef380",
                "fk_user_id": "admin",
                "title": "Tarea de Prueba 1",
                "body": "Esto es una tarea de Testeo 1", 
                "creation_date": "27/10/2924, 22:14:16", 
                "completed": false
            },
            {
                "_id":"5494fe78-8774-4827-8abc-9d413c7aa3a2",
                "fk_user_id": "Banano",
                "title": "Tarea de Prueba 2",
                "body": "Esto es una tarea de Testeo 2", 
                "creation_date": "27/18/2024, 22:16:39", 
                "completed": false
            },
            {
                "_id": "fe96574e-9b15-4588-8b68-78917919d589", 
                "fk_user_id": "admin",
                "title": "Tarea de Prueba 3",
                "body": "Esto es una tarea de Testeo 3", 
                "creation_date": "27/18/2824, 22:24:43", 
                "completed": false
            },
            {
                "_id": "228977a3-7650-4394-b81a-165156654c0", 
                "fk_user_id": "admin",
                "title": "Tarea de Prueba 4",
                "body": "Esto es una tarea de Testeo 4", 
                "creation_date": "27/18/2824, 22:27:57", 
                "completed": false
            },
            {
                "_id": "bba6f882-838e-4c14-a458-feae7558789<", 
                "fk_user_id": "Banano",
                "title": "Tarea de Prueba 5",
                "body": "Esto es una tarea de Testeo 5", 
                "creation_date": "27/18/2824, 23:00:02", 
                "completed": false
            }
        ]
        
        document.getElementById("salidaGetAll").textContent = JSON.stringify(JSONpredefinido, null, 2);

    }// GET ALL
    

    if(ruta == 'getById'){

        const JSONpredefinido = {
            "_id":"a7c4e25f-cc77-4ba-9fde-43b41caef380",
            "fk_user_id": "admin 1",
            "title": "Tarea de Prueba",
            "body": "Esto es una tarea de Testeo 1", 
            "creation_date": "27/10/2924, 22:14:16", 
            "completed": false
        }
        
        document.getElementById("salidaGetById").textContent = JSON.stringify(JSONpredefinido, null, 2);
    }

    if(ruta == 'getAllUserTask'){
        const JSONpredefinido = [
            {
                "_id":"5494fe78-8774-4827-8abc-9d413c7aa3a2",
                "fk_user_id": "Banano",
                "title": "Tarea de Prueba 2",
                "body": "Esto es una tarea de Testeo 2", 
                "creation_date": "27/18/2024, 22:16:39", 
                "completed": false
            },
            {
                "_id": "bba6f882-838e-4c14-a458-feae7558789<", 
                "fk_user_id": "Banano",
                "title": "Tarea de Prueba 5",
                "body": "Esto es una tarea de Testeo 5", 
                "creation_date": "27/18/2824, 23:00:02", 
                "completed": false
            }
        ]
  
    document.getElementById("salidaGetAllUserTask").textContent = JSON.stringify(JSONpredefinido, null, 2);
    }


    if(ruta == 'postTask'){
        const JSONpredefinido = 
            {
                "serverResult":{
                    "acknowledged": true,
                    "insertedId": "f92d8b67-5c4f-4e34-8a86-fadea57a5892"
                },
                "newTask":{
                    "_id": "f92d8b67-5c4f-4e34-8a86-fadea57a5892",
                    "fk_user_id": "admin",
                    "title": "TareaPost",
                    "body": "TareaPostUsuarioAdmin",
                    "creation_date": "28/10/2024, 20:35:28",
                    "completed": false
                }
            }
  
    document.getElementById("salidaPostTask").textContent = JSON.stringify(JSONpredefinido, null, 2);
    }


    if(ruta == 'putTask'){
        const JSONpredefinido = {
                "putTask":{
                    "_id": "f92d8b67-5c4f-4e34-8a86-fadea57a5892",
                    "title": "Servicios Web Put",
                    "body": "Esta tarea ha servido de ejemplo para realizar una actualización PUT",
                }
            }
  
    document.getElementById("salidaPutTask").textContent = JSON.stringify(JSONpredefinido, null, 2);
    }



    if(ruta == 'deleteTask'){
        const JSONpredefinido = 
            {
                
                "acknowledged": true,
                "deletedCount": 1
                
            }
  
    document.getElementById("salidaDeleteTask").textContent = JSON.stringify(JSONpredefinido, null, 2);
    }



    
}