let from = document.getElementById('from-city');
let btn = document.getElementById('swap-button');
let to = document.getElementById('to-city');
let f = from.innerText;
let t = to.innerText;

btn.addEventListener('click', () => {
    // Start fade out
    from.classList.add('fade-out');
    to.classList.add('fade-out');

    setTimeout(() => {
        // Swap content after fade-out
        let temp;
        temp = f;
        f = t;
        t = temp;
        from.innerText = f;
        to.innerText = t;

        from.classList.remove('fade-out');
        to.classList.remove('fade-out');

        from.classList.add('fade-in');
        to.classList.add('fade-in');
    }, 300);

    setTimeout(() => {
        from.classList.remove('fade-in');
        to.classList.remove('fade-in');
    }, 600);
});
