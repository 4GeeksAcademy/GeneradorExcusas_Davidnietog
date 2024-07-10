let who = ["El perro", "Mi padre", "Mi madre", "Mi hermano", "Mi gato"];
let action = ["se comió", "aplastó", "robó", "rompió", "perdió"];
let what = ["el movil", " los deberes", " el coche"];
let when = [
  "en el concierto",
  "justo cuando los terminé",
  "sin darse cuenta",
  "mientras yo estaba fuera de casa"
];

function excuseGenerator(who, what, when) {
  let numwho = Math.floor(Math.random() * who.length);
  let numaction = Math.floor(Math.random() * action.length);
  let numwhat = Math.floor(Math.random() * what.length);
  let numwhen = Math.floor(Math.random() * when.length);
  return (
    who[numwho] +
    " " +
    action[numaction] +
    " " +
    what[numwhat] +
    " " +
    " " +
    when[numwhen]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
