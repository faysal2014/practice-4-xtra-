// const loadQuotes=() => {
//     fetch('https://api.kanye.rest/')
//     .then(response=> response.json())
//     .then(data => displayQuote(data));
// }

// const displayQuote = (quote) =>{
//     const quoteElement = document.getElementById('quote');
//     quoteElement.innerText = quote.quote;
// }

const loadQuotes=()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}
// loadQuotes();
const displayQuote=(text)=>{
    const quoteText = document.getElementById('quote');
    quoteText.innerText=text.quote;
}