
 let wkAwards = {
    showIntroduction(element) {
        let template = "";
        element.forEach((val, id) => {
            template += `
            <article class="blog-post">
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="dark-text">${val.paragraph}</p>
            <h3>${val.titleTable}</h3>

            </article>     
            `
        });
        return template;
    },

    showTable(element) {
        let template = "";
        element.forEach((val, id) => {
            template += `
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
            `
        });
        return template;
    }
}

self.addEventListener("message", (e) => {
    postMessage(wkAwards[e.data.module](e.data.data));
})
