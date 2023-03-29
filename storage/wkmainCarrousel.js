let wkCarrousel = {
    listCarrousel(element) {
        let template = "";
        element.forEach((val, id) => {
            template +=   
            `
            <strong class="d-inline-block mb-2 text-primary">${val.index}</strong>
            <h3 class="mb-0">${val.title}</h3>
            <p class="card-text mb-auto">${val.description}</p>       
            <a href="" class="stretched-link">${val.btn}</a>
            `  
        });
        return template;

    }
};
self.addEventListener("message", (e)=> {
    postMessage(wkCarrousel[`${e.data.module}`](e.data.data))
})