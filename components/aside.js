import config from "../storage/config.js"
export default {

      showAside() {
        config.dataAside();
        Object.assign(this, JSON.parse(localStorage.getItem("Aside")));

      const worker = new Worker("storage/wkAside.js", {type: "module"});

      let id = [];
      let count = 0;

      worker.postMessage({module:"listCard", data: this.card});
      worker.postMessage({module:"listSeasons", data: this.seasons});



      id = ["#nav", "#nav"];

      worker.addEventListener("message", (e)=> {
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1 === count) ? worker.terminate() : count++;

      })
  },
}
