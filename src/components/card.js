import axios from "axios"
import { response } from "msw"

const Card = (article) => {
  const mainDiv = document.createElement('div')
  const headline =document.createElement('div')
  const author = document.createElement('div')
  const imgDiv = document.createElement('div')
  const imgImg = document.createElement('img')
  const authorName = document.createElement('span')
  mainDiv.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgDiv.classList.add('img-container')

  headline.textContent = `${article.headline}`
  imgImg.src = `${article.authorPhoto}`
  authorName.textContent = `By ${article.authorName}`

  mainDiv.appendChild(headline)
  mainDiv.appendChild(author)
  author.appendChild(imgDiv)
  imgDiv.appendChild(imgImg)
  author.appendChild(authorName)
  return mainDiv
}
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



const cardAppender = (selector) => {
  const selection = document.querySelector(`${selector}`)
  axios.get(`http://localhost:5000/api/articles`)
    .then(response=>{
      response.data.articles.javascript.forEach(obj=>{
          const articleCard = Card(obj)
          selection.appendChild(articleCard)
          return articleCard
        })
      response.data.articles.bootstrap.forEach(obj=>{
            const articleCard = Card(obj)
            selection.appendChild(articleCard)
            return articleCard
          })
          response.data.articles.technology.forEach(obj=>{
            const articleCard = Card(obj)
            selection.appendChild(articleCard)
            return articleCard
          })
          response.data.articles.jquery.forEach(obj=>{
            const articleCard = Card(obj)
            selection.appendChild(articleCard)
            return articleCard
          })
          response.data.articles.node.forEach(obj=>{
            const articleCard = Card(obj)
            selection.appendChild(articleCard)
            return articleCard
          })
        })    
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
