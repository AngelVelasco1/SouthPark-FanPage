export default {
    copyright: 'Build With',
    by: "Angel Velasco",
    buildWith: "Bootstrap",

    showFooter() {
        document.querySelector('#footer').insertAdjacentHTML('beforeend', `
        <p class="p-footer">${this.copyright} <a href="https://getbootstrap.com/">${this.buildWith}</a> by <a
        href="https://angel-velasco.vercel.app">${this.by}</a>.</p>
    <p>
        `) 
    }
}