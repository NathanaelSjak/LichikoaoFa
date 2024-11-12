const gallery = [
    {
        image: "/mnt/data/amiko.jpg",
        title: "Amiko",
        description:
            "Ichiko’s score to the award winning film Amiko, featuring the theme song ‘Hello’ . Amiko is a movie  based on the debut novel written by Akutagawa Prize winning author Natsuko Imamura. Ichiko’s score won the 2022 Mainichi Film Award for Best Music.",
        bgColor: "#836F5E",
        navColor: "#5A4634",
    },
    {
        image: "/mnt/data/amuletum.jpg",
        title: "Amuletum Bouquet",
        description:
            "Ethereal and soothing: Ichiko Aoba brings a wave of calm with instruments that compliment the vocals, forming graceful melodies flowing from within both tracks.",
        bgColor: "#5A7981",
        navColor: "#435961",
    },
    {
        image: "/mnt/data/luminescent.jpg",
        title: "Luminescent Creature",
        description:
            "The world premiere of “Luminescent Creatures” will be held in Tokyo and Osaka later this year. A yet unannounced work, an ensemble of ten musicians will come together to perform this new project. Ichiko’s singles from 2020 onward will also be performed together for the first time ever!",
        bgColor: "#87A4D3",
        navColor: "#5A769E",
    },
    {
        image: "/mnt/data/meringue.jpg",
        title: "Meringue Doll",
        description:
            "In the depths of my memory There is a blossoming airship As the seasons sprout I travel, swaying in the wind Surely one day I'll find my way home So, just wait for me For your sadness, a song I savor the taste of you by my side When I hold you close Dappled sunlight dances, laughing",
        bgColor: "#86B87E",
        navColor: "#598C5A",
    },
    {
        image: "/mnt/data/windswept.jpg",
        title: "Windswept Adan",
        description:
            "“Windswept Adan”,  Ichiko Aoba’s  seventh studio album,  is a singer-songwriter album, a concept album, a piece of chamber music, and a contemporary orchestral work. It is heavily influenced by jazz, by folk and by impressionistic classical music. It is a soundtrack to an imaginary film; it is an album that tells a story; it is a piece of fantasy science fiction set to music; it is a sonic voyage through the East China Sea.",
        bgColor: "#93B5C6",
        navColor: "#6C97A8",
    },
];

let currentIndex = 0;

function updateGallery(index) {
    const images = document.querySelectorAll(".gallery-image");
    const title = document.getElementById("image-title");
    const description = document.getElementById("image-description");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector(".footer");

    images.forEach((image, i) => {
        image.classList.remove("active", "prev", "next");

        if (i === index) {
            image.classList.add("active");
        } else if (i === (index - 1 + gallery.length) % gallery.length) {
            image.classList.add("prev");
        } else if (i === (index + 1) % gallery.length) {
            image.classList.add("next");
        }
    });

    title.textContent = gallery[index].title;
    description.textContent = gallery[index].description;

    body.style.backgroundColor = gallery[index].bgColor;
    navbar.style.backgroundColor = gallery[index].navColor;
    footer.style.background = gallery[index].navColor;
}

function showNext() {
    currentIndex = (currentIndex + 1) % gallery.length;
    updateGallery(currentIndex);
}

function showPrev() {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    updateGallery(currentIndex);
}
function shuffleImage() {
    currentIndex = Math.floor(Math.random() * gallery.length);
    updateGallery(currentIndex);
}

updateGallery(currentIndex);
