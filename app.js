let navbar=document.querySelector(".navbar");
let netflixavatar=document.querySelector(".netflix-avatar");
let body=document.querySelector("body");

// Description
window.mi = "Ethan Hunt and his IMF team must stop a global catastrophe. A gripping race against time packed with action and betrayal.";
window.mh = "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police.";
window.st = "A group of young friends uncover supernatural forces and secret experiments in their small town.";
window.tr = "A fictional British royal family navigates love, power, scandal, and responsibility in a modern monarchy.";
window.tg = "A heartfelt story about life, family, and second chances in the most unexpected ways.";
window.na = "Follow the rise and fall of Pablo Escobar and the Medellín drug cartel in this gritty, real-life inspired drama.";
window.ht = "A top cop is forced to confront his past while solving a complex murder case in this psychological thriller.";
window.re = "Set in a neon-soaked 90s world, a rebellious hacker uncovers a corporate conspiracy with deadly stakes.";
window.td = "An international crisis forces a seasoned diplomat into a high-stakes negotiation that could reshape global politics.";
window.si = "In a world of myth and mystery, Sikandar must rise to reclaim his legacy and restore balance.";
window.ch = "Based on true events, this historical epic chronicles the bravery and sacrifice of a legendary warrior.";
window.ja = "A man with a mysterious past sets out on a mission to right societal wrongs, confronting enemies from both his past and present.";

window.addEventListener("scroll",()=>{
    if(window.scrollY>0){
        navbar.classList.add("navbar-color");
    }
    else{
        navbar.classList.remove("navbar-color");
    }
});
new_downbar=()=>{
    let downbar=document.createElement("div");
    downbar.classList.add("down-bar");
    downbar.innerHTML=`
                    <div class="profile-box">
                    <div>
                        <img src="greensmiley.jpg" alt="Profile image" class="profile-icon">
                        <a href="#" class="nav-link">Astronaut_Nitrolegend</a>
                    </div>
                    <div>
                        <img src="bluesmiley.jpg" alt="Profile image" class="profile-icon">
                        <a href="#" class="nav-link">Children</a>
                    </div>
                    </div>
                    <div><a href="#" class="nav-link">Profile</a></div>
                    <div><a href="#" class="nav-link">Logout</a></div>
                    <div><a href="#" class="nav-link">DEF</a></div>
                    <div><a href="#" class="nav-link">ABC</a></div>
                    <div><a href="#" class="nav-link">ABC</a></div>
                `
    body.append(downbar);
};
netflixavatar.addEventListener("mouseenter",()=>{
    new_downbar();
});
netflixavatar.addEventListener("mouseleave",()=>{
    let downbar=document.querySelector(".down-bar");
    downbar.remove();
})

window.addEventListener("scroll",()=>{
    const navbar= document.querySelector(".navbar");
    if (window.scrollY >100){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});

const profileIcon= document.querySelector(".profile-icon");
profileIcon.addEventListener("click",()=>{
    window.location.href ="profile-details.html";
});

const movieCard=document.querySelectorAll(".content-card");
const herotitle=document.querySelector(".hero-title");
const herodescription=document.querySelector(".hero-description");
const hero=document.querySelector(".hero");
movieCard.forEach((card)=>{
    card.addEventListener("mouseenter",()=>{
            card.style.transform="scale(1.05)";
    })
    card.addEventListener("mouseleave",()=>{
            card.style.transform="scale(1)";
    })
    card.addEventListener("click",()=>{
        let name=card.querySelector(".back");
        let img=card.querySelector("img");
        herotitle.innerText=name.innerText;
        hero.style.backgroundImage = `url(${img.src})`;
        hero.style.backgroundPosition = "center";
        hero.style.backgroundSize = "cover";
        hero.style.backgroundRepeat = "no-repeat";
        herodescription.innerText=window[card.id];
    })
})