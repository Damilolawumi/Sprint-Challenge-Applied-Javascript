// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = `MARCH 28, 2019 `

    const myH1 = document.createElement('h1');
    myH1.textContent = `Lambda Times`

    const temperature = document.createElement('span');
    temperature.classList.add('temp');
    temperature.textContent = `98°`

    headerDiv.appendChild(date); //we append the date into the header cntainer
    headerDiv.appendChild(myH1);  // we append the myH1 into the header cntainer
    headerDiv.appendChild(temperature);  //we append the temperature into the header cntainer

    return headerDiv  //since the header container is the one carrying the children we return it/
}

let newHeader = Header(); //we create a new header with the headerContainer

let headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(newHeader); //we add it to the DOM in the".headerContainer"
