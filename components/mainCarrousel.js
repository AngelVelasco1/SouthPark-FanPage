export default  {
            index1: "Cap 1",
            title1: "Return Cold War",
            description1: "Mucho depende de la habilidad de Butters para aplastar a la competencia en un importante campeonato de doma.",
            btn1: "Watch Cap 1",
            img1: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:9e0c350e-c9d8-4779-9063-4c1dff2b2829?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600&height=900&crop=true",

            index2: "Cap 2",
            title2: "Patrik's Day Special",
            description2: "Butters se sorprende al saber que la gente de South Park no entiende de qué se trata realmente el Día de San Patricio.",
            btn2: "Watch",
            img2: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:9309e4a5-47f8-45c2-a0dc-60f668c65bbe?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600&height=900&crop=true",

            index3: "Cap 3",
            title3: "The big redention",
            description3: "En este nuevo y divertido episodio de South Park: Stan Marsh se horroriza cuando se da cuenta de que ha estado malinterpretado a uno de los mejores escritores de todos los tiempos. ¡No te lo pierdas!",
            btn3: "Watch",
            img3: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:ccc161a1-6071-47fa-875d-747d7281c1d0?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600&height=900&crop=true",

            index4: "Cap 4",
            title4: "Pijamas Day",
            description4: "Después de no mostrar respeto por su maestro, el Director de PC revoca los privilegios del Día de pijama para toda la clase de cuarto grado. Cartman está consternado.",
            btn4: "Watch",
            img4: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:bcbeae41-4fe9-46c9-9e5e-f08400cca55c?quality=0.7&gen=ntrn&legacyStatusCode=true&width=1600",

    showCarrousel() {
        document.querySelector('#cap1').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index1}</strong>
        <h3 class="mb-0">${this.title1}</h3>
        <p class="card-text mb-auto">${this.description1}</p>       
        <a href="" class="stretched-link">${this.btn1}</a>

        ` )

        document.querySelector('#cap2').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index2}</strong>
              <h3 class="mb-0">${this.title2}</h3>
              <p class="card-text mb-auto">${this.description2}</p>
              <a href="" class="stretched-link">${this.btn2}</a>

        ` )

        document.querySelector('#cap3').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index3}</strong>
              <h3 class="mb-0">${this.title3}</h3>
              <p class="card-text mb-auto">${this.description3}</p>
              <a href="" class="stretched-link">${this.btn3}</a>

        ` )

        document.querySelector('#cap4').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index4}</strong>
              <h3 class="mb-0">${this.title4}</h3>
              <p class="card-text mb-auto">${this.description4}</p>
              <a href="" class="stretched-link">${this.btn4}</a>

        ` )

        
    },
    showImages() {
      document.querySelector("#img-cap1").style.backgroundImage = `url(${this.img1})`;
      document.querySelector("#img-cap2").style.backgroundImage = `url(${this.img2})`;
      document.querySelector("#img-cap3").style.backgroundImage = `url(${this.img3})`;
      document.querySelector("#img-cap4").style.backgroundImage = `url(${this.img4})`;

    }

}