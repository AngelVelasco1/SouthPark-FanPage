export default {
    footer: {
        copyright: 'Build With',
        by: "Angel Velasco",
        buildWith: "Bootstrap",

    },
 
    showFooter() {
        const worker = new Worker("storage/wkFooter.js", {type: "module"});
        worker.postMessage({module: "listFooter", data: this.footer});
        
        worker.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#footer").append(...doc.body.children);
            worker.terminate();
        })
    }
}
