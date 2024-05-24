document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav-link');

    document.querySelector('#home').classList.add('active');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            sections.forEach(section => section.classList.remove('active'));

            const target = document.querySelector(link.getAttribute('href'));
            target.classList.add('active');

            links.forEach(link => link.classList.remove('active'));

            link.classList.add('active');

            window.scrollTo({
                top: target.offsetTop - 50, 
                behavior: 'smooth'
            });
        });
    });
});
