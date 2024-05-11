let btn = document.querySelector(".btn");
let ekran = document.querySelector(".ekran");
let deleteBtn = document.querySelector(".delete");
let svet = document.querySelector(".let");
let main = document.querySelector(".main")

btn.addEventListener("click", function () {
  ekran.value = parseInt(ekran.value) + 1;
  console.log(ekran.value);
  if (ekran.value >= 15 && ekran.value < 30){
    main.style.backgroundColor = "blue"
  } else if(ekran.value >= 30 && ekran.value < 50){
    main.style.backgroundColor = "red"
  }   else if(ekran.value >= 55 && ekran.value < 100){
    main.style.backgroundColor = "crimson"
  } 
});



deleteBtn.addEventListener("click", function () {
  let restart = 0;
  ekran.value = restart;
  console.log(restart);
});

svet.addEventListener("click", function () {
  ekran.classList.toggle("inp2");
});
