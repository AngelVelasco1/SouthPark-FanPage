export default {
    title: " South Park",
    characters: [
        {
            name: "Cartman",
            href: "https://southpark.fandom.com/es/wiki/Eric_Cartman",
        },
        {
            name: "Butters",
            href: "https://southpark.fandom.com/es/wiki/Butters_Stotch",
        },
        {
            name: "Stan",
            href: "https://southpark.fandom.com/es/wiki/Stan_Marsh",
        },
        {
            name: "Toallin",
            href: "https://southpark.fandom.com/es/wiki/Stan_Marsh",
        },
        {
            name: "Kenny",
            href: "https://southpark.fandom.com/es/wiki/Kenny_McCormick",
        },
        {
            name: "Kyle",
            href: "https://southpark.fandom.com/es/wiki/Stan_Marsh",
        },
        {
            name: "Token",
            href: "https://southpark.fandom.com/es/wiki/Stan_Marsh",
        },
        {
            name: "Chef",
            href: "https://southpark.fandom.com/es/wiki/Stan_Marsh",
        },
        {
            name: "Tweek",
            href: "https://southpark.fandom.com/es/wiki/Stan_Marsh",
        },
    ],

    listarTitle() {
        document.querySelector('#title').insertAdjacentHTML('beforeend', `<a class="blog-header-logo ">       
        <span>${this.title}</span>
        </a>`);
    },

    listarCharacters(){
        let template = "";
        this.characters.forEach((val, id) => {
            template += `<a class= "p-2 header_link"  href= "${val.href}"  target="blank">${val.name}</a>`
        })     
            document.querySelector("#characters").insertAdjacentHTML("beforeend", template)
        }
};