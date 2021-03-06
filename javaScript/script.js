//
// ─── VARIABLES ───────────────────────────────────────────────────────────
//
const phonesPower = document.querySelector('.phones__power')
const phonesScreen = document.querySelector('.phones__screen')
const phonesPowerSony = document.querySelector('.phones__power--sony')
const phonesScreenSony = document.querySelector('.phones__screen--sony')
const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const anchors = document.querySelectorAll('.header__anchors')

console.log(phonesPower, phonesScreen, phonesPowerSony, phonesScreenSony)

phonesPower.addEventListener('click', unlock)

phonesPowerSony.addEventListener('click', unlockSony)

burger.addEventListener('click', open)
console.log(anchors.length)

for(let i = 0; i < anchors.length; i++){
    console.log("hello")
    anchors[i].addEventListener('click', open)
}

//
// ─── FUNCTIONS  ──────────────────────────────────────────
//

function open(){
    if(header.classList.contains('active')){
        header.classList.remove('active')
    }
    else{
        header.classList.add('active')
    }
}
    
function unlock(){
    if(phonesScreen.classList.contains('active')){
        phonesScreen.classList.remove('active')
        console.log(phonesScreen.classList)
    }
    else{
        phonesScreen.classList.add('active')
        console.log(phonesScreen.classList)
    }
}

function unlockSony(){
    if(phonesScreenSony.classList.contains('active')){
        phonesScreenSony.classList.remove('active')
    }
    else{
        phonesScreenSony.classList.add('active')
    }
}
