import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calc.js';
import $ from "jquery";

function handleLoad() {
  document.getElementById("solar").addEventListener("click", function(event){
    let inputId = event.target.id;
    let targetBox = $(`#${inputId}Info`);
    $(".text-left").not(targetBox).hide();
    targetBox.show();
  });
}

window.addEventListener("load", handleLoad);

document.getElementById("user-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const userAge = document.getElementById("user-age").value;
  const lifeExpect = document.getElementById("life-expect").value;
  let galacticAge = new GalacticAge(userAge, lifeExpect);
  galacticAge.calcAge();
  galacticAge.calcExpectancy();
  if(parseInt(userAge) < parseInt(lifeExpect)) {
    document.getElementById("mercuryExpect").innerText = galacticAge.mercuryAgeExpect;
    document.getElementById("venusExpect").innerText = galacticAge.venusAgeExpect;
    document.getElementById("earthExpect").innerText = lifeExpect - userAge;
    document.getElementById("marsExpect").innerText = galacticAge.marsAgeExpect;
    document.getElementById("jupiterExpect").innerText = galacticAge.jupiterAgeExpect;
    document.getElementById("saturnExpect").innerText = galacticAge.saturnAgeExpect;
    document.getElementById("uranusExpect").innerText = galacticAge.uranusAgeExpect;
    document.getElementById("neptuneExpect").innerText = galacticAge.neptuneAgeExpect;
  } else {
    document.getElementById("mercuryExpect").innerText = galacticAge.mercuryAgeExpect + " years lived past life expectancy";
    document.getElementById("venusExpect").innerText = galacticAge.venusAgeExpect + " years lived past life expectancy";
    document.getElementById("earthExpect").innerText = Math.abs(lifeExpect - userAge) + " years lived past life expectancy";
    document.getElementById("marsExpect").innerText = galacticAge.marsAgeExpect + " years lived past life expectancy";
    document.getElementById("jupiterExpect").innerText = galacticAge.jupiterAgeExpect + " years lived past life expectancy";
    document.getElementById("saturnExpect").innerText = galacticAge.saturnAgeExpect + " years lived past life expectancy";
    document.getElementById("uranusExpect").innerText = galacticAge.uranusAgeExpect + " years lived past life expectancy";
    document.getElementById("neptuneExpect").innerText = galacticAge.neptuneAgeExpect + " years lived past life expectancy";
  }

  document.getElementById("mercuryAge").innerText = galacticAge.mercuryAge;
  document.getElementById("venusAge").innerText = galacticAge.venusAge;
  document.getElementById("earthAge").innerText = userAge;
  document.getElementById("marsAge").innerText = galacticAge.marsAge;
  document.getElementById("jupiterAge").innerText = galacticAge.jupiterAge;
  document.getElementById("saturnAge").innerText = galacticAge.saturnAge;
  document.getElementById("uranusAge").innerText = galacticAge.uranusAge;
  document.getElementById("neptuneAge").innerText = galacticAge.neptuneAge;

  document.getElementById("hidden").removeAttribute("class");
  $("#prompt").show();
});
