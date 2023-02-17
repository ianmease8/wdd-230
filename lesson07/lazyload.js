const images = document.querySelectorAll('[data-src]');

const options = {threshold: .5};

function preloadImages(img) {
    const source = img.getAttribrute("data-src")
    if (!source){
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry=> {
            if(!entries.isIntersecting){
                console.log(entries);
            }
            else{
                preloadImages(entry.target)
            }
        })
        // console.log(entries);
        // console.log(io);
    },
    options
);
// io.observe(images)
images.forEach(img=> {
    io.observe(img)
})