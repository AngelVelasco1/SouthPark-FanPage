let wkAside = {
    listCard(element) {
        let template = "";
        element.forEach((val, id) => {
            template += `
            <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">${val.title}</h4>
                <p class="mb-0">${val.paragraph}</p>
            </div>
            `
        });
        return template;
    },
    listSeasons(element) {
        let template = "";
        element.forEach((val, id) => {
            template += ` 
        <div class="p-4">
            <h4 >${val.title}</h4>
            <ol class="list-unstyled mb-0">
            ${val.links.map((val, id) => `<li><a href="${val.href}" target="_blank">${val.name}</a></li>`).join(" ")} 
            </ol>
        </div>
        `  
        });
      
        return template;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wkAside[`${e.data.module}`](e.data.data));
})