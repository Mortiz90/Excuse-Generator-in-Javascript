/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = ["My dog", "My grandma", "My Wife", "My computer"];
  let action = ["ate", "unplugged", "destroyed", "broke"];
  let what = ["my homework", "the keys", "the house"];
  let when = [
    "before the exam",
    "just in time",
    "hen I finished",
    "hen i was sleeping",
    "hen I was doing the homework"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return `${who[whoIndx]} ${action[actionIndx]} ${what[whatIndx]} ${when[whenIndx]}`;
};
