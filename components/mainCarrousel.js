 export default {
      caps: [
            {
                  index: "Cap 1",
                  title: "Return Cold War",
                  description: "Mucho depende de la habilidad de Butters para aplastar a la competencia en un importante campeonato de doma.",
                  btn: "Watch Cap 1",
                  img: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:9e0c350e-c9d8-4779-9063-4c1dff2b2829?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600&height=900&crop=true"
            },
            {
                  index: "Cap 2",
                  title: "Patrik's Day Special",
                  description: "Butters se sorprende al saber que la gente de South Park no entiende de qué se trata realmente el Día de San Patricio.",
                  btn: "Watch",
                  img: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:9309e4a5-47f8-45c2-a0dc-60f668c65bbe?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600&height=900&crop=true",
            },
            {
                  index: "Cap 3",
                  title: "The big redention",
                  description: "En este nuevo y divertido episodio de South Park: Stan Marsh se horroriza cuando se da cuenta de que ha estado malinterpretado a uno de los mejores escritores de todos los tiempos. ¡No te lo pierdas!",
                  btn: "Watch",
                  img: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:ccc161a1-6071-47fa-875d-747d7281c1d0?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600&height=900&crop=true",
            },
            {
                  index: "Cap 4",
                  title: "Pijamas Day",
                  description: "Después de no mostrar respeto por su maestro, el Director de PC revoca los privilegios del Día de pijama para toda la clase de cuarto grado. Cartman está consternado.",
                  btn: "Watch",
                  img: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:bcbeae41-4fe9-46c9-9e5e-f08400cca55c?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600",
                  
            },
      ],
      showCarrousel() {
            
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