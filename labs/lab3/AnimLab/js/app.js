var galleryRows = document.getElementsByClassName("galleryRow");
console.log(galleryItems);

var galleryItems = document.getElementsByClassName("galleryItem");
console.log(galleryItems);

var headerItems = document.getElementsByClassName("header");
console.log(headerItems);

function onStart() {
    console.log("Anims firing");

    //Buildin header
    for (let i = 0; i < headerItems.length; i++) {
        TweenMax.from(headerItems[i],
            { duration: .7, delay: 0, alpha: 0, y: -10 }
        );
    }

    //Buildin rows with items
    for (let i = 0; i < galleryRows.length; i++) {
        TweenMax.from(galleryRows[i],
            { duration: .7, delay: (i + 1) * .5, alpha: 0, y: -10 }
        );


    }

    //Add event Listeners
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener("click", (event) => {
            TweenMax.to(event.target, { duration: .5, alpha: 0, y: -10 })
        })

        galleryItems[i].addEventListener("mouseover", (event) => {
            TweenMax.to(event.target, { duration: .5, y: -5, })
        })

        galleryItems[i].addEventListener("mouseout", (event) => {
            TweenMax.to(event.target, { duration: .5, y: 0, })
        })
    }
}


