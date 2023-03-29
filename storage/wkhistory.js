let wkHistory = {
    listHistory(element) {
        return `
        <h2 class="blog-post-title">${element.title}</h2>
        <p>${element.paragraph}</p>
        <ul><li>${element.list}</li>
        <li>${element.list2}</li>
        </ul>
        <img src="${element.imgCreators}"  class="col-md-11 img-fluid mx-auto d-block rounded" alt="">
        `
    }
}
self.addEventListener("message", (e)=> {
    postMessage(wkHistory[`${e.data.module}`](e.data.data));
})