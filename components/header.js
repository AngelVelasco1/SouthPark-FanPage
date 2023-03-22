export default {
    title: " South Park",
    characters: [
        {
            name: "Cartman",
            href: "",
        },
        {
            name: "Butters",
            href: "",
        },
        {
            name: "Stan",
            href: "",
        },
        {
            name: "Toallin",
            href: "",
        },
        {
            name: "Kenny",
            href: "",
        },
        {
            name: "Kyle",
            href: "",
        },
        {
            name: "Token",
            href: "",
        },
        {
            name: "Chef",
            href: "",
        },
        {
            name: "Tweek",
            href: "",
        },
    ],

    listarTitle() {
        document.querySelector('#title').insertAdjacentHTML('beforeend', `<a class="blog-header-logo text-dark">${this.title}</a>`);
    },

    listarCharacters(){
        let template = "";
        this.characters.forEach((val, id) => {
            template += `<a class= "p-2 link-secondary" href= "${val.href}">${val.name}</a>`
        })     
            document.querySelector("#characters").insertAdjacentHTML("beforeend", template)
        }
};