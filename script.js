/*==================================================
        PORTFOLIO - ANGIE IANNOPOLLO
==================================================*/

/*==============================
        PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 800);

    }, 1200);

});

/*==============================
        NAVBAR
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,15,40,.85)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.30)";

    } else {

        header.style.background = "rgba(10,18,45,.45)";
        header.style.boxShadow = "none";

    }

});

/*==============================
        EFECTO ESCRITURA
==============================*/

const textos = [

    "Técnica en Computación",
    "Desarrolladora Web",
    "Apasionada por la Inteligencia Artificial",
    "Futura Científica de Datos"

];

let texto = 0;
let letra = 0;
let borrar = false;

const typing = document.getElementById("typing");

function escribir() {

    const actual = textos[texto];

    if (!borrar) {

        typing.innerHTML =
            actual.substring(0, letra) + "<span>|</span>";

        letra++;

        if (letra > actual.length) {

            borrar = true;

            setTimeout(escribir, 1800);

            return;

        }

    } else {

        typing.innerHTML =
            actual.substring(0, letra) + "<span>|</span>";

        letra--;

        if (letra < 0) {

            borrar = false;

            texto++;

            if (texto >= textos.length) {

                texto = 0;

            }

        }

    }

    setTimeout(escribir, 70);

}

escribir();

/*==============================
        PARTÍCULAS
==============================*/

const particles = document.getElementById("particles");

for(let i=0;i<60;i++){

    const p = document.createElement("div");

    p.classList.add("particle");

    p.style.left = Math.random()*100 + "vw";

    p.style.width = Math.random()*5 + 2 + "px";

    p.style.height = p.style.width;

    p.style.opacity = Math.random();

    p.style.animationDuration =
        (10 + Math.random()*15) + "s";

    p.style.animationDelay =
        Math.random()*8 + "s";

    particles.appendChild(p);

}

/*==============================
        CURSOR GLOW
==============================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/*==============================
    APARICIÓN DE SECCIONES
==============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("fade");

    observer.observe(section);

});

/*==============================
    ANIMACIÓN BARRAS
==============================*/

const skills = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const barra = entry.target;

            const porcentaje = barra.style.width;

            barra.style.width = "0";

            setTimeout(()=>{

                barra.style.width = porcentaje;

            },200);

        }

    });

},{threshold:.5});

skills.forEach((barra)=>{

    skillObserver.observe(barra);

});

/*==============================
        EFECTO 3D CARDS
==============================*/

const cards = document.querySelectorAll(

".burbuja,.contenido,.cv-card"

);

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height)-0.5)*12;

        const rotateY = ((x / rect.width)-0.5)*-12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/*==============================
    BOTÓN VOLVER ARRIBA
==============================*/

const topBtn = document.createElement("button");

topBtn.classList.add("top-btn");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.opacity="1";
        topBtn.style.pointerEvents="all";

    }else{

        topBtn.style.opacity="0";
        topBtn.style.pointerEvents="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
        EFECTO BOTONES
==============================*/

document.querySelectorAll(".btn,.cv-btn,.btn-secundario")
.forEach((btn)=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.04)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/*==============================
        PARALLAX HERO
==============================*/

const heroImage = document.querySelector(".hero-img img");

window.addEventListener("scroll",()=>{

    const scroll = window.scrollY;

    heroImage.style.transform =
    `translateY(${scroll*0.08}px)`;

});

/*==============================
        AÑO FOOTER
==============================*/

const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${year} Angie Iannopollo · Portfolio Personal`;

}

/*==============================
        EFECTO BRILLO CARDS
==============================*/

document.querySelectorAll(
".burbuja,.contenido,.cv-card,.skill"
).forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,.18),
        rgba(255,255,255,.05) 45%),
        rgba(255,255,255,.06)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="";

    });

});

/*==============================
        NAV LINKS ACTIVOS
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const top = section.offsetTop - 150;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================
        SCROLL SUAVE
==============================*/

document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const destino = document.querySelector(
            anchor.getAttribute("href")
        );

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
        EFECTO FOTO HERO
==============================*/

heroImage.addEventListener("mouseenter",()=>{

    heroImage.style.transition=".5s";

    heroImage.style.transform="scale(1.05) rotate(-2deg)";

});

heroImage.addEventListener("mouseleave",()=>{

    heroImage.style.transform="scale(1) rotate(0deg)";

});

/*==============================
        REVELAR BARRAS
==============================*/

const barras = document.querySelectorAll(".progress-bar");

barras.forEach((barra)=>{

    barra.style.transformOrigin="left";

    barra.style.animation="none";

});

window.addEventListener("load",()=>{

    barras.forEach((barra)=>{

        barra.animate([

            {
                transform:"scaleX(0)"
            },

            {
                transform:"scaleX(1)"
            }

        ],{

            duration:1800,

            easing:"ease",

            fill:"forwards"

        });

    });

});

/*==============================
        REBOTE BOTÓN TOP
==============================*/

setInterval(()=>{

    if(window.scrollY>500){

        topBtn.animate([

            {
                transform:"translateY(0)"
            },

            {
                transform:"translateY(-8px)"
            },

            {
                transform:"translateY(0)"
            }

        ],{

            duration:1200

        });

    }

},4000);

/*==============================
        FIN DEL SCRIPT
==============================*/

console.log(
"%cPortfolio de Angie Iannopollo cargado correctamente 🚀",
"color:#38bdf8;font-size:16px;font-weight:bold;"
);