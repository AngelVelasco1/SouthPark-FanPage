let wkAside = {
    listCard(element) {
        return `
        <div class="p-4 mb-3 bg-light rounded">
        <h4 class="">${element.title}</h4>
        <p class="mb-0">${element.paragraph}</p>
       </div>
        `
    },
    listLinks(element){
        let template = "";
        element.forEach((val, id) => {
            template += `  
            <div class="p-4">
            <h4 class="">${val.title}</h4>
            <ol class="list-unstyled mb-0">
             <li><a href="${val.href}">${val.name}</a></li>
            </ol>
          </div>
        })
          ` 
          return template;
      
    })
}
}
self.addEventListener("message", (e)=> {
    postMessage(wkAside[`${e.data.module}`](e.data.data));
})