import { templateModel } from "../models/template.js"


// En esta clase se encarga de controlar los datos y consultas (get-post) y devolverlas en formato JSON
// Hacia la vista que las requiera 
export class templateController { // --> TODOS LOS ARCHIVOS FUNCIONAM COMO UNA CAJA FUERTE
    static async getAll (req, res) {
        const dataTemplate = await templateModel.getAll() // --> Sabemos que hace el getAll del modelo, PERO NO !!!CÓMO LO HACE!!!, el !CÓMO no nos interesa en este archivo
        console.log(dataTemplate)
        res.json(dataTemplate)
    }
    static async getByID (req, res) {

    }

    // Create
    // Upload
    // Delete
}