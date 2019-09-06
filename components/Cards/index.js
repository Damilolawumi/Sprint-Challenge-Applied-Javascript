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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {

        let articles = response.data.articles;
        console.log(response.data.articles)

        let mainCardContainer = document.querySelector('.cards-container')
        console.log(articles);

        //used the for/in loop to loop through the properties of the object
        //used the for/of to loop through the values of the iterable object
        for (let key in articles) {

            for (let article of articles[key]) {
                let cardComponent = articleCardCreator(article);
                mainCardContainer.appendChild(cardComponent);
            }

        }

    })


const articleCardCreator = function (myArticle) {
    //created a new component for each article on the list
    const cardClass = document.createElement('div')
    cardClass.classList.add('card')

    const headlineClass = document.createElement('div')
    headlineClass.classList.add('headline')
    headlineClass.textContent = myArticle.headline

    const authorClass = document.createElement('div')
    authorClass.classList.add('author')

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('img-container')

    const image = document.createElement('img')
    image.src = myArticle.authorPhoto

    const span = document.createElement('span')
    span.textContent = `By ${myArticle.authorName}`

    imageContainer.appendChild(image);
    authorClass.appendChild(imageContainer);
    authorClass.appendChild(span);
    cardClass.appendChild(headlineClass);
    cardClass.appendChild(authorClass);

    return cardClass
}
