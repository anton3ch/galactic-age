import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calc.js';

//in development
// function handleLoad() {
//   document.getElementById("solar").addEventListener("click", function(event){
//     let inputId = event.target.id;
//     console.log(inputId);
//     let targetBox = document.getElementById(inputId + "Info");
//     console.log(targetBox);
//     // $(".text-left").not(targetBox).hide();
//     targetBox.show();
//   });
// }

// window.addEventListener("load", handleLoad);

document.getElementById("user-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const userAge = document.getElementById("user-age").value;
  const lifeExpect = document.getElementById("life-expect").value;
  let galacticAge = new GalacticAge(userAge, lifeExpect);
  galacticAge.calcAge();
  galacticAge.calcExpectancy();

  document.getElementById("mercuryAge").innerText = galacticAge.mercuryAge;
  document.getElementById("mercuryExpect").innerText = galacticAge.mercuryAgeExpect;

  document.getElementById("venusAge").innerText = galacticAge.venusAge;
  document.getElementById("venusExpect").innerText = galacticAge.venusAgeExpect;

  document.getElementById("earthExpect").innerText = lifeExpect - userAge;
  document.getElementById("earthAge").innerText = userAge;

  document.getElementById("marsAge").innerText = galacticAge.marsAge;
  document.getElementById("marsExpect").innerText = galacticAge.marsAgeExpect;

  document.getElementById("jupiterAge").innerText = galacticAge.jupiterAge;
  document.getElementById("jupiterExpect").innerText = galacticAge.jupiterAgeExpect;

  document.getElementById("saturnAge").innerText = galacticAge.saturnAge;
  document.getElementById("saturnExpect").innerText = galacticAge.saturnAgeExpect;

  document.getElementById("uranusAge").innerText = galacticAge.uranusAge;
  document.getElementById("uranusExpect").innerText = galacticAge.uranusAgeExpect;

  document.getElementById("neptuneAge").innerText = galacticAge.neptuneAge;
  document.getElementById("neptuneExpect").innerText = galacticAge.neptuneAgeExpect;

  document.getElementById("hidden").removeAttribute("class");
});
