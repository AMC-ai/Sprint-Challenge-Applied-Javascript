// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    //get data from api
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        for (const property in response.data.articles) {
            response.data.articles[property].forEach(item => {
                articleCard(item);
            });
        }

    })
    //catch errors, debuging tool
    .catch(error => {
        console.log("The data was not returned", error);
    });

function articleCard(aData) {
    //define elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const authorName = document.createElement('span');
    const imgContainer = document.createElement('div');
    const imgAuthor = document.createElement('img');

    //structure elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(imgAuthor);

    //class names for elements
    card.classList.add('card');
    headline.classList.add('headline');
    imgContainer.classList.add('img-container');
    author.classList.add('author');

    //text content for elements
    headline.textContent = aData.headline;
    imgAuthor.src = aData.authorPhoto;
    authorName.textContent = aData.authorName;

    //add component to DOM
    document.getElementsByClassName('cards-container')[0].appendChild(card);
}

{/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */}