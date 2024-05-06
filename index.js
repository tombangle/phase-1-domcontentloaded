document.addEventListener(`DOMContentLoaded`, (event) => {
    const p = document.querySelector(`p`);
    if (p) {
        p.textContent = "This is really cool!";
    }
})