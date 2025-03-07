"use strict"
// תפיסת כל הכפתורים הפעולה מחזירה מערך של כפתורים
const buttons = document.querySelectorAll(".drum")

// הפעולה מקבלת תו ומפעילה סאונד מתקיית הסאונדים
function playSound(char) {
  let audio
  if (char == "w") {
    audio = new Audio("sounds/crash.mp3")

    audio.play()
  } else if (char == "a") {
    audio = new Audio("sounds/kick-bass.mp3")
    audio.play()
  } else if (char == "s") {
    audio = new Audio("sounds/snare.mp3")
    audio.play()
  } else if (char == "d") {
    audio = new Audio("sounds/tom-1.mp3")
    audio.play()
  } else if (char == "j") {
    audio = new Audio("sounds/tom-2.mp3")
    audio.play()
  } else if (char == "k") {
    audio = new Audio("sounds/tom-3.mp3")
    audio.play()
  } else if (char == "l") {
    audio = new Audio("sounds/tom-4.mp3")
    audio.play()
  }
}

// ריצה על כל כפתור והצמדת האזנה ללחיצה
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // קריאה לפונקציה שתפעיל סאונד
    playSound(buttons[i].textContent)
    // מוסיף קלאס שמכבה את הכפתור
    buttons[i].classList.add("clicked")
    // מסירה את הקלאס לאחר 300 מילי סקנד
    setTimeout(function () {
      buttons[i].classList.remove("clicked")
    }, 300)
  })
}

// עוד אופציה להצמיד האזנה לכל כפתור
// buttons.forEach(function (button) {
//   button.addEventListener("click",function () {
//     alert(button.textContent)
//   })
// })

// האזנה למסמך ללחיצות על המקלדת
addEventListener("keydown", function (e) {
  playSound(e.key)
})
