import axios from "axios"
import { response } from "msw"


const Tabs = (topics) => {
  const topicsDiv = document.createElement('div')
  topicsDiv.classList.add('topics')

  const tabTopics = topics.map(obj=>{
    const topicInput = document.createElement('div')
    topicInput.classList.add('tab')
    topicInput.textContent = obj
    topicsDiv.appendChild(topicInput)
    return tabTopics
  })
  return topicsDiv
}



  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


const tabsAppender = (selector) => {
  const selection = document.querySelector(`${selector}`)
  axios.get(`http://localhost:5000/api/topics`)
    .then(response=>{
      const topic = Tabs(response.data.topics)
      selection.appendChild(topic)
      return topic
    })
    .catch(err=>console.log(err.message))
    .finally(()=>{console.log('done')})
}


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }



