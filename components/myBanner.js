export default {
    image: "../img/banner-img.png",
    title: "South Park",
    description: "South Park is an adult animated TV show that follows the hilarious adventures of four boys in a small town in Colorado, known for its irreverent and satirical humor about pop culture and politics.",
    textLink: "Show More",
    showBannerImage(){
        document.querySelector('#imgBanner').style.backgroundImage = `url(${this.image})`
    },
    showBannerInfo(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend", `
        <h1 class="display-5">${this.title}</h1>
        <p class="lead my-3">${this.description}</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">${this.textLink}</a></p>

        `)
    }
}
