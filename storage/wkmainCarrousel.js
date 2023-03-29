let wkCarrousel = {
    listCarrousel(element) {
        let template = "";
        element.forEach((val, id) => {
            template +=    `
            <div class="col-md-6"   >
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white" id="cards">
              <div class="col p-4 d-flex flex-column position-static" >
              <strong class="d-inline-block mb-2 text-primary">${val.index}</strong>
              <h3 class="mb-0">${val.title}</h3>
              <p class="card-text mb-auto">${val.description}</p>       
              <a href="" class="stretched-link">${val.btn}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img  src="${val.img}" class="bd-placeholder-img" width="200" height="250"preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/></img>
              </div>
            </div>
          </div>
           
            `  
        });
        return template;

    }
};
self.addEventListener("message", (e)=> {
    postMessage(wkCarrousel[`${e.data.module}`](e.data.data))
})