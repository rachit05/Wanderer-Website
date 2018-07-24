let socialIcons = document.querySelectorAll('.si');
socialIcons.forEach(function(icon) {
    icon.addEventListener('mouseover',open)
    icon.addEventListener('mouseout',close)
})
function open(){
    this.nextElementSibling.style.maxWidth = '100px';
    this.nextElementSibling.style.visibility = 'visible';
    this.nextElementSibling.style.opacity = '1';
}
function close(){
   this.nextElementSibling.style.visibility = 'hidden';
   this.nextElementSibling.style.maxWidth = '0px';
   this.nextElementSibling.style.opacity = '0';
}

function openSearchWindow(){
    document.body.classList.add('searchOpen');
}
function closeSearchWindow(){
    document.body.classList.remove('searchOpen');
}

// // Dynamic date section

// let date = new Date()
// let today = date.getDate()
// let dateCover = document.getElementById('dateCover');
// let displayDates = '';
// for (var i=1;i<=31;i++){
//     if(i==1 || i%5==0){
//         if(i < 10){
//             displayDates += `<li class="date" id="section${i}">0${i}</li>`
//             continue
//         }
//         displayDates += `<li class="date" id="section${i}">${i}</li>`
//         continue
//     }
//     if(i < 10){
//         displayDates += `<li class="date">0${i}</li>`
//         continue
//     }
//     if(i == today){
//         displayDates += `<li class="date" id="today">${i}</li>`
//         continue
//     }
    
//     displayDates += `<li class="date">${i}</li>`
// }
// dateCover.innerHTML = displayDates

// let downArrowBtn = document.getElementById('dateDownArrow');
// let upArrowBtn = document.getElementById('dateUpArrow');
// downArrowBtn.addEventListener('click',scrollDown)
// upArrowBtn.addEventListener('click',scrollUp)
// function scrollDown(){
//     let currentSection = this.value;
//     let nextSection = document.getElementById(`section${currentSection+5}`)
//     nextSection.scrollIntoView()

//     upArrowBtn.value = currentSection;
//     this.value += 5; 
// }
// function scrollUp(){
//     let currentSection = this.value;
//     if(currentSection == 0) currentSection = 1;
//     let previousSection = document.getElementById(`section${currentSection}`)
//     previousSection.scrollIntoView()

     
//     this.value -= 5; 
// }

