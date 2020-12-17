let txtarea = document.querySelector("#textarea");
let btnTranslate = document.querySelector("#btn-translate");
let bananaText = document.querySelector("#banana-text");

function fetchUrl(text) {
  return "	https://api.funtranslations.com/translate/minion.json?text=" + text;
}

function errorHandler(error) {
  console.log("Error Occured", error);
  alert("Something went wrong", error);
}

function handleTranslate() {
  //   console.log("translated");
  text = txtarea.value;
  fetch(fetchUrl(text))
    .then((response) => response.json())
    .then((json) => (bananaText.innerText = json.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", handleTranslate);
