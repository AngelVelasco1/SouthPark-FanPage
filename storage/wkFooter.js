let wkFooter = {
    listFooter(element) {
    return `
    <p>
<a href="#">
       
<svg style="width: 70px" class="w-10 h-10" viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor"></path>
  <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor" fill-opacity="0.2"></path>
  <g opacity="0.3">
    <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor"></path>
    <path d="M1 68L30.9 14.4L62.3 67.1L1 68Z" fill="currentColor" fill-opacity="0.2"></path>
  </g>
  <path d="M1.1001 54.5L31.0001 0.999999L62.5001 53.6L1.1001 54.5Z" stroke="currentColor" stroke-miterlimit="10"></path>
  <path d="M1.1001 54.5L31.0001 0.999999L62.5001 53.6L1.1001 54.5Z" stroke="currentColor" stroke-opacity="0.2" stroke-miterlimit="10"></path>
</svg>

</a>
</p>
        <p class="p-footer">${element.copyright} <a href="https://getbootstrap.com/">${element.buildWith}</a> by <a
href="https://angel-velasco.vercel.app">${element.by}</a>.</p>

`
  },
};
self.addEventListener("message", (e) => {
    postMessage(wkFooter[e.data.module](e.data.data));
})
