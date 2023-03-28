export default {
    banner: {
        image: "../img/banner-img.jpg",
        title: "South Park",
        description: "South Park is an adult animated TV show that follows the hilarious adventures of four boys in a small town in Colorado, known for its irreverent and satirical humor about pop culture and politics.",
        textLink: "Show More",
    },
   showBanner() {
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
