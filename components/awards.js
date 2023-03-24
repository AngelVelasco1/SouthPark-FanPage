export default {
    table: [
        {
            title: "Awards",
            paragraph: "South park has won numerous awards and recognitions throughout its history. Let's see the most important awards that have accompanied this great animated series.",
            titleTable: "Most Important Awards",
            thead: [
                {
                    name: "Award",
                },
                {
                    name: "Age",
                },
                {
                    name: "By",

                }
            ],
            tbody: [
                {
                    award: "100 Better tv series all time",
                    age: "2000",
                    description: "Magazine Time",
                },
                {
                    award: "Peabody Award",
                    age: "2006",
                    description: "Peabody",
                },
                {
                    award: "Top 10 Best Series",
                    age: "2013",
                    description: "Magazine Tv Guide",
                },
                {
                    award: "Best animated Serie Emmie",
                    age: "2005",
                    description: "«Best Friends Forever»",
                },
                {
                    award: "Emmy",
                    age: "2006",
                    description: "Make Love, Not Warcraft",
                },
            ],
        

        }

    ],



    showAwards() {
        let template = "";
        this.table.forEach((val, id) => {
            template += `
            <article class="blog-post">

            <h2 class="blog-post-title">${val.title}</h2>
  
            <p class="dark-text">${val.paragraph}</p>
         
            <h3>${val.titleTable}</h3>

            <table class="table">

              <thead>
                <tr>
                ${val.thead.map((val, id) => `
                <th>${val.name}</th>`).join("")}
                </tr>
              </thead>

              <tbody>
                <tr>
                ${val.tbody.map((val, id) => `
                <tr>
                    <td>${val.award}</td>
                    <td>${val.age}</td>
                    <td>${val.description}</td>
                </tr>
                </tr>`).join("")}
              </tbody>

            </table>
  
    
          </article>
            `
        })
    document.querySelector('#awards').insertAdjacentHTML("beforeend", template)
    }

}

