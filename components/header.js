import config from "../storage/config.js"
export default {
   
    showHeader() {
        config.dataHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("Header")));

        /* Creamos y llamamos el worker */
        const worker = new Worker("storage/wkHeader.js", {type: "module"});

        /* Definimos Variables */
        let id = [];
        let count = 0;

        /* Enviar mensajes al worker con postMessage */
        /* id push title */
        worker.postMessage({module: "listTitle", data: this.title});
        /* id push characters */
        worker.postMessage({module: "listCharacters", data: this.characters})

        /* Definimos el array como los id de los elementos html del title y los character */
        id = ["#title", "#characters"];

        //* Esto le llega al worker */
        worker.addEventListener("message", (e) => {
            //? Analizamos la cadena y la convertimos en un arbol de Nodos */
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            /* Insertamos en el selector #characters */
            document.querySelector(id[count]).append(...doc.body.children);
            /* Terminamos el trabajo del worker */
            (id.length-1 == count) ? worker.terminate(): count++;

        })
    }
};