let wkHeader = {
    listTitle(element){
        return `<a class="blog-header-logo">${element.name}</a>`
    },
    listCharacters(element) {
        let template = "";
        element.forEach((val, id) => {
            template +=  `<a class= "p-2 header_link" href= "${val.href}" target="blank">${val.name}</a>`
        });
        return template;
    }   
};
self.addEventListener("message", (e)=> {
    postMessage(wkHeader[`${e.data.module}`](e.data.data));
})