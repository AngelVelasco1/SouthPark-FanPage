import config from "../storage/config.js"

export default {
    showBanner() {
       config.dataBanner();
       Object.assign(this, JSON.parse(localStorage.getItem("Banner")));
        const worker = new Worker("storage/wkBanner.js", {type: "module"});

        worker.postMessage({module: "listBanner", data: this.banner});

        worker.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            
            document.querySelector("#banner").append(...doc.body.children);
            
        })
    },
    showImage() {
        document.querySelector("#imgBanner").style.backgroundImage = `url(${this.banner.image})`
    },

}
