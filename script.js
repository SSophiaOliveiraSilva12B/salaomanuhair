// Revelar elementos ao rolar a página

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
    
    if(entry.isIntersecting){
    
    entry.target.classList.add("show");
    
    }
    
    });
    
    },{
    threshold:0.15
    });
    
    const elements = document.querySelectorAll(
    ".service-card, .gallery img, .promo-box, .hair-section, .contact"
    );
    
    elements.forEach((el) => {
    observer.observe(el);
    });
    
    // Efeito suave na logo
    
    const logo = document.querySelector(".logo");
    
    window.addEventListener("mousemove",(e)=>{
    
    const x = (window.innerWidth / 2 - e.clientX) / 60;
    const y = (window.innerHeight / 2 - e.clientY) / 60;
    
    logo.style.transform =
    `translate(${x}px, ${y}px)`;
    
    });
    
    // Botão WhatsApp com efeito
    
    const whatsapp = document.querySelector(".whatsapp");
    
    whatsapp.addEventListener("mouseenter",()=>{
    
    whatsapp.style.transform = "scale(1.1)";
    
    });
    
    whatsapp.addEventListener("mouseleave",()=>{
    
    whatsapp.style.transform = "scale(1)";
    
    });
    
    // Fade inicial
    
    window.addEventListener("load",()=>{
    
    document.body.classList.add("loaded");
    
    });