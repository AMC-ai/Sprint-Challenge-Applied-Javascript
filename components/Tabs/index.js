// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//      <div class="tabs">
//        <div class="topics">
//          <span class="title">TRENDING TOPICS:</span>
//         </div>
//      </div>
axios
    //get data from api
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // console.log(response.data.topics);
        // then update it with topic gu==function and pass the data
        tabTopics(response.data.topics);
    })
    //catch errors, debuging tool
    .catch(error => {
        console.log("The data was not returned", error);
    });
const topicTab = document.querySelector('span .title')
function tabTopics(tData) {
    tData.forEach(topic => {
        const tab = document.createElement('div');

        tab.classList.add('tab');
        tab.textContent = topic;
    })
    return tab
    // document.getElementsByClassName('title')[0].appendChild(tab);
}
// topicTab.appendChild(topicTab(tData.topic));