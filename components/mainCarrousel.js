export default  {
            index1: "Cap 1",
            titleCap1: "Return Cold War",
            description1: "Mucho depende de la habilidad de Butters para aplastar a la competencia en un importante campeonato de doma.",
            btn1: "Watch Cap 1",
            img1: "",

            index2: "Cap 2",
            titleCap2: "Patrik's Day Special",
            description2: "Butters se sorprende al saber que la gente de South Park no entiende de qué se trata realmente el Día de San Patricio.",
            btn2: "Watch",
            img2: "",

            index3: "Cap 3",
            titleCap3: "The big redention",
            description: "En este nuevo y divertido episodio de South Park: Stan Marsh se horroriza cuando se da cuenta de que ha estado malinterpretado a uno de los mejores escritores de todos los tiempos. ¡No te lo pierdas!",
            btn: "Watch",
            img: "",

            index4: "Cap 4",
            titleCap4: "Pijamas Day",
            description: "Después de no mostrar respeto por su maestro, el Director de PC revoca los privilegios del Día de pijama para toda la clase de cuarto grado. Cartman está consternado.",
            btn: "Watch",
            img: "",
    showPost() {
        document.querySelector('#cap1').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index1}</strong>
        <h3 class="mb-0">${this.title1}</h3>
        ` )

        document.querySelector('#cap2').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index2}</strong>
              <h3 class="mb-0">${this.title2}</h3>
        ` )

        document.querySelector('#cap3').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index3}</strong>
              <h3 class="mb-0">${this.title3}</h3>
        ` )

        document.querySelector('#cap4').insertAdjacentHTML("beforeend", 
        `<strong class="d-inline-block mb-2 text-primary">${this.index4}</strong>
              <h3 class="mb-0">${this.title4}</h3>
        ` )

        
    },

}