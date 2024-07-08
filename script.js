let who = ["El perro", "Mi padre", "Mi madre", "Mi hermano", "Mi gato"];
let what = ["se comió", "aplastó", "robó", "rompió", "perdió"];
let when = [
  "antes de clase",
  "justo cuando los terminé",
  "mientras comía",
  "mientras yo estaba fuera de casa",
];

function excuseGenerator(quien, que, cuando) {
  numQuien = Math.floor(Math.random() * quien.length);
  numQue = Math.floor(Math.random() * que.length);
  numCuando = Math.floor(Math.random() * cuando.length);
  return (
    quien[numQuien] +
    " " +
    que[numQue] +
    " " +
    "mis deberes" +
    " " +
    cuando[numCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
