const headerColorChanger = () => {
    const a = document.getElementById('navigation');
    const b = window.scrollY;
    const c = window.innerWidth;

    if (c >= 1200 && b >= 535){
        a.style.backgroundColor = '#e6f8f9';
    }

    else{
        a.style.background = 'white'; 
    };
};

const k = document.getElementById('hamburger-btn');
const a = document.getElementById('navigation-container');
const menu = ()=> { 
    a.classList.toggle('change');
};

k.addEventListener('click', menu)

window.addEventListener('scroll', headerColorChanger);