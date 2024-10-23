//demo array REMOVE

const events = [
  {
    title: "O grafice, warsztacie, myśleniu i procesie.",
    participants: 0,
    maxParticipants: 40,
    description: "Czym jest proces w grafice? Co może być matryca graficzna i czy matryca może być atrakcyjna wizualnie?",
    type: "design", 
    cardBackgroundColor: 'rgba(15,26,21,255)',
    eventHost: "Jan Kowalski",
    eventLocation: "Warsaw Art Center",
    eventDate: "Piatek I"
  },
  {
    title: "Zdrowie z łąk - ucieranie ziółek",
    participants: 0,
    maxParticipants: 10,
    description: "Czy wiesz jak można stosować zioła w codziennym życiu?",
    type: "science",
    cardBackgroundColor: 'rgba(38,12,18,255)',
    eventHost: "Ewa Zielińska",
    eventLocation: "Botanic Garden, Warsaw",
    eventDate: "Piatek II"
  },
  {
    title: "Praca prokuratora od kuchni",
    participants: 0,
    maxParticipants: 10,
    description: "Jak wygląda codzienna praca prokuratora? Nadzorowanie spraw i prowadzenie, dyżury, wokandy, - czy prokurator może być niezależny, czy jest elementem wymiaru sprawiedliwości czy elementem władzy wykonawczej, - jak wygląda struktura tej instytucji i zasada hierarchicznego podporządkowania",
    type: "literature",
    cardBackgroundColor: 'rgba(38,22,25,255)',
    eventHost: "Anna Nowak",
    eventLocation: "University of Warsaw",
    eventDate: "Czwartek III"
  },
  {
    title: "Wizyta w SGH połączona z wykładem nt. przywództwa",
    participants: 0,
    maxParticipants: 10,
    description: "Szkoła Główna Handlowa w Warszawie to najlepsza uczelnia ekonomiczna w Polsce. Uczestnicy będą mieli okazje zobaczyć uczelnię do środka, porozmawiać o studiach w niej z jednym z profesorów, zwiedzić budynki znajdujące się w głównym kampusie, zobaczyć wybrane aule, odwiedzić bibliotekę SGH i podziwiać jej piękną architekturę. Dodatkiem do tego doświadczenia będzie udział w interaktywnym wykładzie nt. przywództwa po pandemii, czyli wyzwań dla liderów współczesnych organizacji. Wykład ten będzie jednak tylko pretekstem do zadania pytań dotyczących wyzwań i problemów współczesnego świata i roli współczesnych przywódców w ich rozwiązywaniu.",
    type: "literature",
    cardBackgroundColor: 'rgba(38,29,18,255)',
    eventHost: "Prof. Marek Wiśniewski",
    eventLocation: "SGH Campus, Warsaw",
    eventDate: "Piatek II"
  },
  {
    title: "Głos i pewność siebie - techniki aktorskie",
    participants: 0,
    maxParticipants: 54,
    description: "- Głos bez oddechu nie istnieje – jak oddychać w praktyce.\n- Każdy ma „swój” głos – jak go odnaleźć.\n- Drżenie, niepewność, niesłyszalność i inne niespodzianki w głosie – jak nad nimi pracować.\n- Ćwiczenia codzienne, żeby mówić „pełnym” głosem.",
    type: "technology",
    cardBackgroundColor: 'rgba(38,12,18,255)',
    eventHost: "Karolina Kwiatkowska",
    eventLocation: "Cultural Center, Warsaw",
    eventDate: "Czwartek I"
  },
  {
    title: "Wystąpienia publiczne – naturalnie i z pasją",
    participants: 0,
    maxParticipants: 15,
    description: "- Co buduje Twoją wiarygodność i autorytet w wystąpieniu.\n- Jak nie nudzić tylko angażować wystąpieniem, słowo o perswazji.\n- Jak rozwijać charyzmę i czym ona jest.\n- Co zrobić z rękami – praktycznie o gestykulacji.",
    type: "health",
    cardBackgroundColor: 'rgba(25,12,31,255)',
    eventHost: "Marcin Pawłowski",
    eventLocation: "Conference Hall, Gdańsk",
    eventDate: "Czwartek III"
  },
  {
    title: "SEJMFLIX",
    participants: 0,
    maxParticipants: 56,
    description: "SEJMFLIX - co tam się dzieje i dlaczego Polacy nagle zauważyli, że istnieje Parlament?",
    type: "science",
    cardBackgroundColor: 'rgba(34, 139, 34, 0.1)',
    eventHost: "Tomasz Malinowski",
    eventLocation: "Sejm, Warsaw",
    eventDate: "Czwartek II"
  },
  {
    title: "Joga",
    participants: 0,
    maxParticipants: 22,
    description: "Joga metodą Iyengara. Zajęcia dla wszystkich, również tych, którzy na jogę przyjdą pierwszy raz w życiu. Należy mieć wygodny strój do ćwiczeń, ćwiczymy na bosaka. Można przynieść własną matę do jogi.",
    type: "arts",
    cardBackgroundColor: 'rgba(25,12,31,255)',
    eventHost: "Magdalena Woźniak",
    eventLocation: "Yoga Studio, Kraków",
    eventDate: "Piatek I"
  },
  {
    title: "Zdrowie z łąk - ucieranie ziółek",
    participants: 0,
    maxParticipants: 20,
    description: "Utrzemy w moździerzach własną mieszankę ziół. Przy okazji porozmawiamy o tym, czym są zioła i rośliny lecznicze, jak je suszymy i na co stosujemy. Poznamy podstawowe gatunki ziół, takie jak mięta, rumianek, lawenda.",
    type: "workshop",
    cardBackgroundColor: 'rgba(38,12,18,255)',
    eventHost: "Ewa Zielińska",
    eventLocation: "Botanic Garden, Wrocław",
    eventDate: "Czwartek II"
  },
  {
    title: "Warsztaty z recytacji poezji",
    participants: 0,
    maxParticipants: 25,
    description: "Słowo. Słowo w komunikacji, w tekście poetyckim. Jego waga i wielowarstwowe znaczenie. Czytanie poezji – jaki ma na nas wpływ? Warsztat z recytacji poezji, z możliwością prezentacji ulubionych wierszy.",
    type: "arts",
    cardBackgroundColor: 'rgba(19,25,36,255)',
    eventHost: "Piotr Adamski",
    eventLocation: "Cultural House, Łódź",
    eventDate: "Piatek III"
  },
  {
    title: "Jak spełnić swoje marzenia?",
    participants: 0,
    maxParticipants: 38,
    description: "Warsztaty o tym, jak odkrywać swoje motywacje, szukać najlepszej pracy, osiągać sukcesy i satysfakcję zawodową. Opowieści o metodach odkrywania swojego potencjału, przygotowania na rozmowę rekrutacyjną.",
    type: "workshop",
    cardBackgroundColor: 'rgba(38,29,18,255)',
    eventHost: "Joanna Czarnecka",
    eventLocation: "Motivation Academy, Warsaw",
    eventDate: "Piatek II"
  },
  {
    title: "Metody wyceny przedsiębiorstw",
    participants: 0,
    maxParticipants: 32,
    description: "Czy firma może być towarem jak para butów? Jak określić jej wartość? Jakie czynniki sprawiają, że wartość firmy rośnie lub spada? Kompendium wiedzy na temat metod wyceny przedsiębiorstw.",
    type: "education",
    cardBackgroundColor: 'rgba(38,12,18,255)',
    eventHost: "Krzysztof Nowicki",
    eventLocation: "Business Center, Poznań",
    eventDate: "Czwartek I"
  }
];



  const users = [
    "Jeremi Markowski",
    "Anna Kowalska",
    "Piotr Nowak",
    "Zofia Wiśniewska",
    "Kamil Zieliński"
  ];
  
  const gridContainer = document.querySelector(".grid-container");
  const modalContainer = document.querySelector(".modal-container");
  
  function createEventCard(event, index) {
    const card = document.createElement("button");
    card.classList.add("card");
    card.setAttribute("data-index", index);
    card.style.backgroundColor = event.cardBackgroundColor;
  
    const title = document.createElement("p");
    title.classList.add("event-title");
    title.textContent = event.title;
  
    const description = document.createElement("p");
    description.classList.add("event-description");
    description.textContent = event.description;
  
    card.appendChild(title);
    card.appendChild(description);
  
    card.addEventListener("click", () => openModal(index));
  
    gridContainer.appendChild(card);
  }
  
  function createEventModal(event, index) {
    const modal = document.createElement("dialog");
    modal.classList.add("modal");
    modal.classList.add("modal-dialog-scrollable");
    modal.setAttribute("id", `modal-${index}`);
  
    const modalTop = document.createElement("div");
    modalTop.classList.add("modal-top");
  
    const modalTitle = document.createElement("p");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = event.title;
  

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    
    closeButton.innerHTML = "static/close-button.svg";
    closeButton.addEventListener("click", () => {
        modal.close();
        gridContainer.classList.remove("no-scroll");
    });
  
    modalTop.appendChild(modalTitle);
    modalTop.appendChild(closeButton);
  
    const modalInfoContainer = document.createElement("div");
    modalInfoContainer.classList.add("modal-info-container");
  
    const eventHost = createInfoElement("event-host", "static/event-host.svg", event.eventHost);
    const eventDate = createInfoElement("event-date", "{{url_for('static', filename='settings.svg')}}", event.eventDate);
    const eventLocation = createInfoElement("event-location", "images/building.svg", event.eventLocation);
  
    modalInfoContainer.appendChild(eventHost);
    modalInfoContainer.appendChild(eventDate);
    modalInfoContainer.appendChild(eventLocation);
  
    const modalDescription = document.createElement("p");
    modalDescription.classList.add("modal-description");
    modalDescription.textContent = event.description;
  
    const signUpButton = document.createElement("button");
    signUpButton.classList.add("sign-up-button");
    signUpButton.innerHTML = 'Zapisz sie!';
  
    const participantsContainer = document.createElement("div");
    participantsContainer.classList.add("participants-container");

    
    
    // Randomly generate the number of participants for the demo (REMOVE DEMO ONLY)
    event.participants = Math.floor(Math.random() * Math.min(users.length, event.maxParticipants) + 1);
  
    const participantsNumber = document.createElement("div");
    participantsNumber.classList.add("participants-number");
    participantsNumber.innerHTML = `<p class="modal-event-info">Lista zapisanych osób:</p>
                                    <p class="modal-event-info">${event.participants}/${event.maxParticipants}</p>`;
  
    const participantsList = document.createElement("ul");
  
    // Pick random participants (REMOVE ONLY FOR DEMO)
    const selectedUsers = users.slice(0, event.participants);
    selectedUsers.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user;
      participantsList.appendChild(li);
    });


    
    participantsContainer.appendChild(participantsNumber);
    participantsContainer.appendChild(participantsList);
  
    modal.appendChild(modalTop);
    modal.appendChild(modalInfoContainer);
    modal.appendChild(signUpButton);
    modal.appendChild(modalDescription);
    modal.appendChild(participantsContainer);
  
    modalContainer.appendChild(modal);
  }  
  
  function createInfoElement(className, iconPath, textContent) {
    const container = document.createElement("div");
    container.classList.add(className);
  
    const icon = document.createElement("img");
    icon.src = iconPath;
  
    const text = document.createElement("p");
    text.textContent = textContent;
  
    container.appendChild(icon);
    container.appendChild(text);
    return container;
  }
  
  function openModal(index) {
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
      modal.showModal();
      gridContainer.classList.add('no-scroll');
    }
  }
  
  events.forEach((event, index) => {
    createEventCard(event, index);
    createEventModal(event, index);
  });

//login

let token = ''
function login() {
    let token = ''
    const formData = new FormData();
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    
    formData.append('login', login);
    formData.append('password', password );
    
    axios
      .post('https://s35.idu.edu.pl/api/v2/auth/login',formData)
      .then(response => {
        token = response.data.token;
        console.log("Token received: ", token);
        const elem = document.getElementById("token");
        elem.innerHTML = `token: ${token}`;
        
        if (token) {  // Only call profile if token is not empty
          profile(token);
        } else {
          console.error("Token is empty");
        }
      })
  }	

  function profile(token) {
    axios
     .get('https://s35.idu.edu.pl/api/v2/user/profile', { headers: { 'X-API-TOKEN': token } })
     .then(                       
      response => {
       const profile = response.data.data;
       const elem = document.getElementById("profile");
       console.log(profile);
       var str = JSON.stringify(profile);
       elem.innerHTML = `profile: ${str}`
       
       // Sending the data to the server
       // I put it here because it wouldnt work in another function idk why
       const profile_data = profile;


       fetch('/profile_process', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({profile_data: profile_data})
         })
       .then(response => response.text())
       .then(result => {
           console.log(result);

       })
       .catch(error => {
           console.error('Error:', error);
       });  
       window.location.replace("/landing-page/");
       send_data(profile);
       
       
      }, 
      error => {
       console.log("Błąd pobierania danych");
       const elem = document.getElementById("profile");
       elem.innerHTML = "Błąd pobierania danych: "+error
      }
     )


   }  
