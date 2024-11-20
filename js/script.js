var Btncolor = document.getElementById("Btn");
var quotetext = document.getElementById("quotetext");
var author = document.getElementById("author");

function Quote() {

    var quotes = [

    { quote: `“Be yourself; everyone else is already taken.”`,
      author: `― Oscar Wilde` },

    { quote: `“So many books, so little time.”`,
      author: `― Frank Zappa` },

    { quote: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`,
      author: `― William W. Purkey`
    },

    { quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
      author: `― J.K. Rowling, Harry Potter and the Goblet of Fire` },
    ]

    var random = Math.trunc(Math.random() * quotes.length);

    quotetext.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
}

Btncolor.addEventListener("click", Quote);