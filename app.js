let navbar=document.querySelector(".navbar");
let netflixavatar=document.querySelector(".netflix-avatar");
let body=document.querySelector("body");
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
                    <div>
                        <img src="greensmiley.jpg" alt="Profile image" class="profile-icon">
                        <a href="#" class="nav-link">Astronaut_Nitrolegend</a>
                    </div>
                    <div>
                        <img src="bluesmiley.jpg" alt="Profile image" class="profile-icon">
                        <a href="#" class="nav-link">Children</a>
                    </div>
                    <div><a href="#" class="nav-link">Profile</a></div>
                    <div><a href="#" class="nav-link">Logout</a></div>
                    <div><a href="#" class="nav-link">DEF</a></div>
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
