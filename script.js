// Array of event data
const events = [
  {
    title: "O grafice, warsztacie, myśleniu i procesie.",
    participants: 0,
    maxParticipants: 40,
    description: "Czym jest proces w grafice? Co może być matryca graficzna i czy matryca może być atrakcyjna wizualnie?"
  },
  {
    title: "Loty w kosmos dla początkujących - proste i zaskakujące odpowiedzi na najczęstsze pytania",
    participants: 0,
    maxParticipants: 10,
    description: "Czemu rakiety startują w górę? Dlaczego loty kosmiczne są kosmicznie drogie?"
  },
  {
    title: "Słowa - czym są dla nas? Czy warto czytać? Poezję?",
    participants: 0,
    maxParticipants: 10,
    description: "Słowo w komunikacji, w tekście poetyckim. Czy warto czytać poezję?"
  }
];



// Get the event list container
const eventList = document.getElementById("eventList");


function createEventBox(event) {

  const eventBox = document.createElement("div");
  eventBox.classList.add("event-box");


  const eventTitle = document.createElement("div");
  eventTitle.classList.add("event-title");


  const eventName = document.createElement("div");
  eventName.classList.add("event-name");
  eventName.textContent = event.title;


  const participantsNumber = document.createElement("div");
  participantsNumber.classList.add("participants-number");

//participants counter
  function updateParticipantsDisplay() {
    participantsNumber.textContent = `${event.participants}/${event.maxParticipants}`;
    if (event.participants >= event.maxParticipants) {
      participantsNumber.classList.add("red");
      participantsNumber.classList.remove("green");
    } else {
      participantsNumber.classList.add("green");
      participantsNumber.classList.remove("red");
    }
  }


  updateParticipantsDisplay();

//button
  const signUpButton = document.createElement("button");
  signUpButton.textContent = "Zapisz sie!";
  signUpButton.addEventListener("click", function() {
    if (event.participants < event.maxParticipants) {
      event.participants++;
      updateParticipantsDisplay();
    }
  });


  eventTitle.appendChild(eventName);
  eventTitle.appendChild(participantsNumber);


  const eventDescription = document.createElement("div");
  eventDescription.classList.add("event-description");
  eventDescription.textContent = event.description;


  eventBox.appendChild(eventTitle);
  eventBox.appendChild(eventDescription);


  eventBox.appendChild(signUpButton);


  eventList.appendChild(eventBox);
}

//create html for each event 
events.forEach(event => createEventBox(event));



//login
let token = ''

function login() {
  
    const formData = new FormData();
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    
    formData.append('login', login);
    formData.append('password', password );
    
    axios
      .post('https://s35.idu.edu.pl/api/v2/auth/login',formData)
      .then(
        response => {
          token = response.data.token;
          const elem = document.getElementById("token");
          elem.innerHTML = `token: ${token}`
          profile();
        }, 
        error => {
          token = ''; 
          const elem = document.getElementById("token");
          elem.innerHTML = "Błąd logowania: "+error
        }
      )
  }	

  function profile() {
      axios
        .get('https://s35.idu.edu.pl/api/v2/user/profile', { headers: { 'X-API-TOKEN': token } })
        .then(
          response => {
            const profile = response.data.data;
            const elem = document.getElementById("profile");
            
            var str = JSON.stringify(profile);
            elem.innerHTML = `profile: ${str}`

          }, 
          error => {
            console.log("Błąd pobierania danych");
            const elem = document.getElementById("profile");
            elem.innerHTML = "Błąd pobierania danych: "+error
          }
        )
    }		