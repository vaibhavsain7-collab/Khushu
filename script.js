// ==========================
// PASSWORD
// ==========================

const PASSWORD = "khushu";

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainWebsite").style.display = "block";

        createHearts();
        updateTimer();
        setInterval(updateTimer, 1000);
        typeWriter();
    } else {
        error.innerHTML = "❌ Wrong Password";
    }
}

// Hide website before login
document.getElementById("mainWebsite").style.display = "none";


// ==========================
// MUSIC
// ==========================

function playMusic() {

const music = document.getElementById("music");

if (music.paused) {

music.play();

} else {

music.pause();

}

}


// ==========================
// SURPRISE BUTTON
// ==========================

function showLove(){

document.getElementById("surpriseText").style.display="block";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}


// ==========================
// LOVE TIMER
// ==========================

const startDate = new Date("June 3, 2026 00:00:00").getTime();

function updateTimer(){

const now = new Date().getTime();

const diff = now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("loveTimer").innerHTML=

`${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}


// ==========================
// FLOATING HEARTS
// ==========================

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},300);

}


// ==========================
// TYPEWRITER EFFECT
// ==========================

const text = `Dear Khushi,

Tum meri zindagi ka sabse khoobsurat hissa ho.

Jab bhi tum hasta ho meri duniya aur bhi roshan ho jaati hai.

Tum sirf meri girlfriend nahi,
meri best friend,
meri smile,
meri happiness,
aur meri duniya ho.

Main promise karta hoon ki har khushi aur har mushkil mein hamesha tumhare saath rahunga.

I Love You Forever ❤️

— Tumhara Vaibhav ❤️`;

let i = 0;

function typeWriter(){

const target=document.getElementById("typewriter");

target.innerHTML="";

typing();

}

function typing(){

if(i<text.length){

document.getElementById("typewriter").innerHTML += text.charAt(i);

i++;

setTimeout(typing,35);

}

}


// ==========================
// ENTER KEY SUPPORT
// ==========================

document.getElementById("password").addEventListener("keypress",function(e){

if(e.key==="Enter"){

checkPassword();

}

});
