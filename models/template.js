

// En esta clase se encargaran de hacer la logica de negocio, también realizar conexión a la base de datos desde este *archivo* <-- !IMPORTANT
export class templateModel {
    static async getAll() {
        const templateJSON =  {
            name: 'Juan',
            age: 20
        }
        //Consulta a la base de datos para devolver todos los datos
        return templateJSON
    }    

    // getByID
    // CREATE
    // UPDATE
    // DELETE
}