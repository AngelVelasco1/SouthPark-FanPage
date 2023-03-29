export default {
    card: {
      title: "Curious Fact",
      paragraph: "The character of Butters Stotch was originally intended to be a one-time character, but he proved to be so popular with the show's creators and viewers that he became a regular character on the show. In fact, Butters has appeared in more episodes than some of the show's original main characters like Kenny and Chef. Additionally.",
      
    },
    links: {
    seasons: {
      title: "Seasons",
      link: [
        {
          name: "Season 1",
          href: "#",
        },
        {
          name: "Season 2",
          href: "#",
        },
        {
          name: "Season 3",
          href: "#",
        },
        {
          name: "Season 4",
          href: "#",
        },
        {
          name: "Season 5",
          href: "#",
        },
        {
          name: "Season 6",
          href: "#",
        },
        {
          name: "Season 7",
          href: "#",
        },
        {
          name: "Season 8",
          href: "#",
        },
        {
          name: "Season 9",
          href: "#",
        },
        {
          name: "Season 10",
          href: "#",
        },
      ],
    },

    products: {
      title: "Products",
      link: [
        {
          name: "VideoGames",
          href: "#",
        },
        {
          name: "Dools",
          href: "#",
        },
        {
          name: "Merchan",
          href: "#",
        },
        {
          name: "Movies",
          href: "#",
        },

      ],
    },
    },
    





  showAside() {
      const worker = new Worker("storage/wkAside.js", {type: "module"});

      let id = [];
      let count = 0;

      worker.postMessage({module:"listCard", data: this.card});
      worker.postMessage({module:"listLinks", data: this.links.seasons});
      worker.postMessage({module:"listLinks", data: this.links.prod});


      id = ["#nav", "#nav"];

      worker.addEventListener("message", (e)=> {
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1 == count) ? worker.terminate(): count++;

      })
  },
}
