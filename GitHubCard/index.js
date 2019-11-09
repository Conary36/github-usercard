/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const devCards = document.querySelector('.cards');

const github = axios.get('https://api.github.com/users/Conary36')
  .then(response => {
    // console.log(response.data);
    // return response.data;
    const thisCard = newCreate(response.data);
    devCards.append(thisCard);
  })
  .catch(err => {
    console.log('error!', err);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into )your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// const githubUsernames = [
//   'tetondan',
//   'dustinmyers',
//   'justsml',
//   'luishrd',
//   'bigknell'
// ]



function newCreate(creation){
  //define elements
  const create = document.createElement('div');
  const createInner = document.createElement('div');
  const createImg = document.createElement('img');
  const createUser = document.createElement('h3');
  const createContent = document.createElement('p');
  const createProfile = document.createElement('p');
  const createLink = document.createElement('a');
  const createFollowers = document.createElement('p');
  const createFollowing = document.createElement('p');
  const createBio = document.createElement('p');
  const createUserName = document.createElement('p');

  //Setup structure of elements
  create.append(createImg,createInner);
  //create.appendChild(createImg);
  createInner.append(createUser, createContent, createProfile, createFollowers,createFollowing, createBio);
  createProfile.appendChild(createLink);

  //set class names
  create.classList.add('card');
  createInner.classList.add('card-info');
  createUser.classList.add('name');
  createContent.classList.add('username');

  //set text content
  createImg.src = creation.avatar_url;
  createUser.textContent = `Name: ${creation.name}`;
  createUserName.textContent = `Username: ${creation.login}`;
  createProfile.textContent = `Profile: `
  createContent.textContent = ` Location: ${creation.location}`;
  createLink.textContent = `URL: ${creation.html_url}`;
  createLink.href = createLink.html_url;
  createFollowers.textContent = `Followers: ${creation.followers}`;
  createFollowing.textContent = `Following: ${creation.following}`;
  createBio.textContent = `Bio: ${creation.bio}`; 
  

  return create;

}
  

followersArray.forEach(event =>{
  axios.get(`https://api.github.com/users/${event}`)
  .then(response =>{
    const follower = newCreate(response.data);
    const allFollower = document.querySelector('.cards');
    allFollower.append(follower);
  })
  .catch(err =>{
    console.log('No info', err);
  })
})
// const showCard = newCreate(github);

// devCards.appendChild(showCard);