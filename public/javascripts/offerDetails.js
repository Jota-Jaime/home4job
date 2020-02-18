const offerCardsArray = document.querySelectorAll(`.offerCard`);
const offerDetails = document.querySelector(`.offerDetails`);
const offerFoundsContainer = document.querySelector('.foundOffers');
const citySelector = document.querySelector('.citySelector');
const jobSelector = document.querySelector('.jobSelector');


offerCardsArray.forEach(card => {
  card.addEventListener('click', function () {
    const offerId = card.querySelector(`.id`).value;
    axios.get(`/offer/${offerId}`).then(offer => {
      
      let offerPayload = offer.data;
      offerDetails.innerHTML = "";

      let h1DOMEl = document.createElement('h1');
      h1DOMEl.innerHTML = `Oferta Home4Job`;
      offerDetails.appendChild(h1DOMEl);
      
      let h2DOMEl = document.createElement('h2');
      h2DOMEl.innerHTML = `${offerPayload.city}`;
      offerDetails.appendChild(h2DOMEl);

      let pDOMEl = document.createElement('p');
      pDOMEl.innerHTML = `Publicada por: ${offerPayload.user.name}`;
      offerDetails.appendChild(pDOMEl);

      let h3DOMEl = document.createElement('h3');
      h3DOMEl.innerHTML = `Tipo de trabajo a realizar: ${offerPayload.job}`;
      offerDetails.appendChild(h3DOMEl);

      let mapDOMEl = document.createElement('div');
      mapDOMEl.setAttribute("id", "map");
      mapDOMEl.innerHTML="Aquí un mapa de la hostia by GoogleMaps"
      offerDetails.appendChild(mapDOMEl);

      let userOfferContainer = document.createElement(`div`);
      userOfferContainer.classList.add('userOfferContainer');
      offerDetails.appendChild(userOfferContainer);

      let userInfoContainer = document.createElement('div');
      userInfoContainer.classList.add('userInfoContainer');
      userInfoContainer.innerHTML =
      `<p>Nombre: ${offerPayload.user.name}</p>
      <p>Descripción: ${offerPayload.user.description}</p>
      <p>Valoración: ${offerPayload.user.avarageValue}</p>`
      userOfferContainer.appendChild(userInfoContainer)

      let userAvatar = document.createElement('img');
      userAvatar.setAttribute("src", `${offerPayload.user.avatar}`);
      userOfferContainer.appendChild(userAvatar);
    }) 
  });
})

function filterCity () {
  const citySelectorValue = citySelector.value
  axios.get(`/offers/${citySelectorValue}`)
  .then(offers => {
    offerFoundsContainer.innerHTML = "";
    let offersPayload = offers.data;

    offersPayload.forEach(offer => {

      let offerCard = document.createElement('div');
      offerCard.classList.add('offerCard');
      offerCard.innerHTML =
      `<h3>${offer.city[0]}</h3><span>${offer.job[0]}</span>
      <img src="${offer.photo}" alt="offerPhoto">
      <form action="" class="offerdetailsSelector">
        <input type="hidden" class="id" value="{{_id}}">
      </form>`
      offerFoundsContainer.appendChild(offerCard);
    })

  })  


}

function filterJob () {
  offerFoundsContainer.innerHTML = "";
}


