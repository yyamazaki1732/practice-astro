
const heading = document.getElementsByClassName(
    "l-section__heading--secondary"
);

let count = 0;

for (let i = 0; i < heading.length; i++) {
    const content = heading[i].nextElementSibling;

    heading[i].addEventListener("click", () => {
        count++;
        if (count % 2 == 0) {
        toggleUp();
    } else {
        toggleDown();
    }
    });

    function toggleUp() {
    heading[i].classList.remove("is-active");
    content.classList.remove("is-active");
    }
    function toggleDown() {
    heading[i].classList.add("is-active");
    content.classList.add("is-active");
    }
}