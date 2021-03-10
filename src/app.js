/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Voldemort", "Sauron", "Supreme Leader Snoke", "Thanos"];
let action = [
  "cursed",
  "annhilated with his dark army of trolls and orcs",
  "ordered General Grievous to destroy",
  "removed from existence with his infinity gauntlet"
];
let what = [
  "my coding project",
  "my love life",
  "all my excuses",
  "all my code"
];
let when = [
  "before the class",
  "when I least wanted it to happen",
  "right when I finished",
  "just in time",
  "as I secretly requested",
  "at the most inconvenient time"
];
window.onload = function() {
  let target = document.querySelector("#excuse");

  let sentence =
    who[getRndInteger(0, who.length - 1)] +
    " " +
    action[getRndInteger(0, action.length - 1)] +
    " " +
    what[getRndInteger(0, what.length - 1)] +
    " " +
    when[getRndInteger(0, when.length - 1)];

  target.innerHTML = sentence;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
