
const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=d9f228cd48b74b40af35b641aa56dad9";

const news = document.getElementById("news");
const headings = document.getElementById("headings");
const loading = document.querySelector("#loading");
const data = document.getElementById("data");

 const fetchKey = async () => {
    const mine = await fetch (url);
    
  console.log(`this is all about news....... from ${url}`);
  };

const newKey = async () => {
    const news = await fetchKey();
console.log(` My news is from a confirm source at ${url}`);
}

newKey();