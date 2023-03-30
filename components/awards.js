export default {
    introduction: [
        {
            title: "Awards",
            paragraph: "South park has won numerous awards and recognitions throughout its history. Let's see the most important awards that have accompanied this great animated series.",
            titleTable: "Most Important Awards",      
        }
       
    ],
    table: [
        {    
            thead: [
                {
                    name: "Award",
                },
                {
                    name: "Age",
                },
                {
                    name: "By",

                }
            ],
            tbody: [
                {
                    award: "100 Better tv series all time",
                    age: "2000",
                    description: "Magazine Time",
                },
                {
                    award: "Peabody Award",
                    age: "2006",
                    description: "Peabody",
                },
                {
                    award: "Top 10 Best Series",
                    age: "2013",
                    description: "Magazine Tv Guide",
                },
                {
                    award: "Best animated Serie Emmie",
                    age: "2005",
                    description: "«Best Friends Forever»",
                },
                {
                    award: "Emmy",
                    age: "2006",
                    description: "Make Love, Not Warcraft",
                },
            ],
        }

    ],



    showAwards() {
        const worker = new Worker("storage/wkAwards.js", {type: "module"});

        let id = [];
        let count = 0;

        worker.postMessage({ module: "showIntroduction", data: this.introduction });
        worker.postMessage({ module: "showTable", data: this.table });
        id = ["#awards", "#awards"];

        worker.addEventListener("message", (e) => {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length - 1 === count) ? worker.terminate() : count++;
        })
    }

}

