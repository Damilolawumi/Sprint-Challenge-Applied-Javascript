// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then((response) => {

        let topics = response.data.topics; //created a variable topics to get response.data.topics out.
        let topicsContainer = document.querySelector('.topics'); // created a variable called topicContaner to access the topic element in the html
        for (let i = 0; i < topics.length; i++) {
            // created a for loop to iterate over the topics to create a new tab component
            let topicComponent = topicCreator(topics[i]);
            topicsContainer.appendChild(topicComponent);// appended the topicComponent into the topicsContainer so we can run in the browser

        }

    })

const topicCreator = function (topicInformation) {
// created a tab component to return identical information to the one given above
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topicInformation;

    return tabDiv
}