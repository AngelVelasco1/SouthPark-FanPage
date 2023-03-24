export default {
    title: "History",
    paragraph: "Los creadores de South Park, Trey Parker y Matt Stone, se conocieron durante su paso por la Universidad de Colorado en 1992.Ese año crearon un cortometraje animado titulado The Spirit of Christmas (El espíritu de la Navidad), en el que un malvado muñeco de nieve sembraba el caos en un pueblo llamado South Park. Los personajes estaban hechos con papel y fueron animados con técnicas stop motion. En dicho corto ya se reflejaban prototipos de los protagonistas de la serie actual. La mayor curiosidad reside en que mueren Cartman, que en ese corto recibió el nombre de Kenny, y un personaje similar al Kenny original.9​ Animados por Brian Garden, ejecutivo de la FOX y amigo de los dos creadores, Parker y Stone decidieron rehacer The Spirit of Christmas en 1995 como una felicitación navideña. Ese trabajo, también titulado como el original, ya tenía un estilo más afín al de la serie,10​ y en él Jesucristo luchaba contra Santa Claus tras discutir sobre el verdadero significado de la Navidad. Garden realizó copias para sus amigos y poco después el trabajo se filtró a través de Internet, donde recibió buenas críticas. Por ello está considerado uno de los primeros videos virales de la historia de la red.11​",
    list: "Debido a su éxito, Parker y Stone negociaron la posibilidad de realizar una serie de televisión.",
    list2: "La primera cadena a la que ofrecieron el proyecto fue a la FOX, pero lo rechazaron. Después de esto, lo presentaron a canales pertenecientes a Viacom (actualmente Paramount). Tras negarse Trey Parker a ofrecérselo a la MTV,12​ decidieron apostar por Comedy Central y tras recibir el visto bueno de su productor ejecutivo, Doug Herzog, se solicitó un episodio piloto.13",
    imgCreators: "./img/history.jpg",


    showHistory() {
        document.querySelector('#history').insertAdjacentHTML("beforeend", `
        <h2 class="blog-post-title">${this.title}</h2>
        <p>${this.paragraph}</p>
        <ul><li>${this.list}</li>
        <li>${this.list2}</li>
        </ul>
        <img src="${this.imgCreators}"  class="col-md-11 img-fluid mx-auto d-block rounded" alt="">
        `)
    }
}
