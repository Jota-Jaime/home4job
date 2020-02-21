const offerDetails = document.querySelector(`.offerDetails`);
const offerFoundsContainer = document.querySelector('.foundOffers');
const filterButton = document.querySelector('#navFilter');
const citySelector = document.querySelector('.citySelector');
const jobSelector = document.querySelector('.jobSelector');

function setListeners(){
  let offerCardsArray = document.querySelectorAll(`.offerCard`);
  
  offerCardsArray.forEach(card => {
    card.addEventListener('click', function () {
      
    const offerId = card.querySelector(`.id`).value;
    axios.get(`/offer/${offerId}`).then(offer => {
      
      let offerPayload = offer.data;
      offerDetails.innerHTML = "";

      let divDOMEl = document.createElement('div');
      divDOMEl.classList.add('.offerDetailsContainer');
      offerDetails.appendChild(divDOMEl);

      let h1DOMEl = document.createElement('h1');
      h1DOMEl.innerHTML = `Oferta Home4Job`;
      divDOMEl.appendChild(h1DOMEl);
      
      let h2DOMEl = document.createElement('h2');
      h2DOMEl.innerHTML = `${offerPayload.city}`;
      divDOMEl.appendChild(h2DOMEl);

      let pDOMEl = document.createElement('p');
      pDOMEl.innerHTML = `Publicada por: ${offerPayload.user.name}`;
      divDOMEl.appendChild(pDOMEl);

      let h3DOMEl = document.createElement('h3');
      h3DOMEl.innerHTML = `Tipo de trabajo a realizar: ${offerPayload.job}`;
      divDOMEl.appendChild(h3DOMEl);

      let mapDOMEl = document.createElement('div');
      mapDOMEl.setAttribute("id", "map");
      let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: offerPayload.location[0], lng: offerPayload.location[1]},
          zoom: 17
        });
        let marker = new google.maps.Marker({
          position: {lat: offerPayload.location[0], lng: offerPayload.location[1]},
          map: map,
          animation: google.maps.Animation.DROP
        },
        );
      } 
      divDOMEl.appendChild(mapDOMEl);
      initMap();

      let userOfferContainer = document.createElement(`div`);
      userOfferContainer.classList.add('userOfferContainer');
      divDOMEl.appendChild(userOfferContainer);

      let userInfoContainer = document.createElement('div');
      userInfoContainer.classList.add('userInfoContainer');
      userInfoContainer.innerHTML =
      `<p>Nombre: ${offerPayload.user.name}</p>
      <p>Descripción: ${offerPayload.user.description}</p>
      <p>Idiomas: ${offerPayload.user.languages}.</p>`
      userOfferContainer.appendChild(userInfoContainer)

      let userAvatar = document.createElement('img');
      userAvatar.setAttribute("src", `${offerPayload.user.imgPath}`);
      userOfferContainer.appendChild(userAvatar);

      let MsgContainer = document.createElement(`div`);
      MsgContainer.innerHTML =
      `<h1>Escribe un mensaje a ${offerPayload.user.name}</h1>`
      divDOMEl.appendChild(MsgContainer);

      let buttonContainer = document.createElement('div');
      buttonContainer.classList.add('buttonContainer');
      divDOMEl.appendChild(buttonContainer)

      let applyButton = document.createElement('a');
      applyButton.classList.add('greenbutton');
      applyButton.innerHTML = "Contactar";
      applyButton.setAttribute('href','/offer/contact');
      buttonContainer.appendChild(applyButton);

      
    }) 
  });
  })
}

setListeners()

function filterOffers () {
  
  let citySelectorValue = citySelector.value;
  let jobSelectorValue = jobSelector.value;
  axios.get(`/offer/?city=${citySelectorValue}&job=${jobSelectorValue}`)
  .then(offers => {
    offerFoundsContainer.innerHTML = "";
    let offersPayload = offers.data;
    console.log(offersPayload)

    if(offersPayload.length === 0) {
      let offerCard = document.createElement('div');
      offerCard.classList.add('offerCard');
      offerCard.innerHTML =
      `<h3>¡Lo sentimos!</h3>
      <p>No tenemos ninguna oferta publicada con las características que buscas, prueba a realizar una nueva.</p>`
      offerFoundsContainer.appendChild(offerCard);
    }
    offersPayload.forEach(offer => {

      let offerCard = document.createElement('div');
      offerCard.classList.add('offerCard');
      offerCard.innerHTML =
      `<h3>${offer.city[0]}<span> (${offer.job[0]})</span></h3>
      <img src="${offer.imgPath}" alt="offerPhoto">
      <form action="" class="offerdetailsSelector">
      <input type="hidden" class="id" value="${offer._id}">
      </form>`
      offerFoundsContainer.appendChild(offerCard);
    })
    offerCardsArray = document.querySelectorAll(`.offerCard`)
    setListeners()
  })
}