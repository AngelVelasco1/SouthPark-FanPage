import config from "../storage/config.js"

export default {
    
    showAwards() {
        config.dataAwards();
        Object.assign(this, JSON.parse(localStorage.getItem("Awards")));
    const worker = new Worker("storage/wkAwards.js", {type: "module"});
    
        let id = [];
        let count = 0;

        worker.postMessage({ module: "showIntroduction", data: this.introduction });
        worker.postMessage({ module: "showTable", data: this.table });
        id = ["#awards", "#awards"];

        worker.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length - 1 === count) ? worker.terminate() : count++;
        })
    }

}

