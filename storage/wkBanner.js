let wkBanner = {
    listBanner(element) {
        return `
        <h1 class="display-5 text-white" style="text-transform:uppercase">${element.title}</h1>
        <p class="lead my-3">${element.description}</p>
        <p class="lead mb-0"><a href="https://www.southpark.lat/" target= "_blank" class="text-white fw-bold banner-button">${element.textLink}</a></p>
        `
    }
    
};
self.addEventListener("message", (e)=> {
    postMessage(wkBanner[`${e.data.module}`](e.data.data));
})