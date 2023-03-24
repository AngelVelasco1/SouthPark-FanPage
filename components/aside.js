export default {
    nav: [
            {
                title: "Curious Fact",
                paragraph: "The character of Butters Stotch was originally intended to be a one-time character, but he proved to be so popular with the show's creators and viewers that he became a regular character on the show. In fact, Butters has appeared in more episodes than some of the show's original main characters like Kenny and Chef. Additionally."
            },
          {
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
      }
            ],
        
        },
        {
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
        }
     ],
     showAside() {
       const data = this.nav.map((val, id) =>{
           return (
            (val.link)
            ? this.list(val)
            : this.cards(val)
           );
        });
      document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""));
    },
     cards(p1) {
         return `
        <div class="p-4 mb-3 bg-light rounded">
         <h4 class="">${p1.title}</h4>
         <p class="mb-0">${p1.paragraph}</p>
       </div>
         `
     },
     list(p1) {
        return ` 
          <div class="p-4">
          <h4 class="">${p1.title}</h4>
          <ol class="list-unstyled mb-0">
            ${p1.link.map((val, id) => `<li><a href="${val.href}">${val.name}</a></li>`).join('')}
          </ol>
        </div>
        `;
    }
}