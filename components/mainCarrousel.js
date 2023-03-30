import config from "../storage/config.js"

 export default {

      showCarrousel() {
            config.dataMainCarousel();
            Object.assign(this, JSON.parse(localStorage.getItem("mainCarousel")));

            const worker = new Worker("storage/wkmainCarrousel.js", {type: "module"});
            
            let id = [];
            let count = 0;
            
            worker.postMessage({module: "listCarrousel", data: this.caps})
            
            id = ["#caps"];
            
            worker.addEventListener("message", (e) => {
                  let capDoc = new DOMParser().parseFromString(e.data, "text/html");
                  document.querySelector(id[count]).append(...capDoc.body.children);
                  (id.length-1 == count) ? worker.terminate(): count++;
            })
            
 
 
      },

  


}