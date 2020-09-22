console.log("Тебе тут не рады");
console.log("Съебал с консоли");

function format(){
  const inputText = document.getElementById("text").value;

  if (!inputText.includes(".") && !inputText.includes(";")) {
    document.getElementById("error").innerHTML = "Точку или точку с запятой введи, долбаеб"

      return;
  }

  document.getElementById("container").classList.add("hidden");

  setBg();
  document.getElementById("result").innerHTML = inputText
    .replace(/\./g, " 1111 ")
    .replace(/;/g, " 2222 ");
}

function setBg(){
  document.getElementById("body").classList.add("bg");
}

document.getElementById("btn").onclick = format;

window.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        format();
    }
});
