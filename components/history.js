import config from "../storage/config.js"
export default {
   
    
    showHistory() {
        config.dataHistory();
        Object.assign(this, JSON.parse(localStorage.getItem("History")));

        const worker = new Worker("storage/wkhistory.js", {type: "module"});

        worker.postMessage({module: "listHistory", data: this.history});

        worker.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");

            document.querySelector("#history").append(...doc.body.children);
        })
    }
}
