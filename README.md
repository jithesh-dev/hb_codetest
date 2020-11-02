# H & B Products page

The project was build in React using the create-react-app.

### How to Run :

1. Clone the repo
2. Run `npm start` in the root directory

### Dependacies :

1. Axios was used to fetch data from the api.

### Components :

1. The layout was build in the main App component.
2. Card component to display each product and was iterated by the dat from the api.
3. Modal component to display modal when the user first visits the site. This functionality is using useState hook and session storage. Modal close functionality was using useState isModalOpen state
4. Countdown component to display the count down timer. This uses useState, useEffect and useRef hooks. A destructor was used to clear the values at component unmount.

### Design :

1. Layout created by following BEM approach
2. Used grid to implement basic layout
3. Flexbox was used for the card container

### Challenges :

1. Timer functionality took a bit more time to implement the logic.
2. Confused weather to use sessionStorage, localStorage, Context API or Redux for implementing the first time visit modal.

### Things to improve if I had more time :

1. Started the project in a mobile first approach & implemented responsive design
2. Started the project in a TDD approach or implemented tests using Jest after the main functionalities
3. Used SASS or styled components instead of regular css
4. Declared Environment variables instead of hardcoding the End date in count down and API url
5. Rearranged imports in alphabetical order
6. Comments for complex logics
