const apiUrl = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuotes(url) {
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data);
quote.innerHTML = data.content;
author.innerHTML = data.author;
}

getQuotes(apiUrl);

function tweet() {
window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + author.innerHTML, "_blank", "width=600,height=400")
}



