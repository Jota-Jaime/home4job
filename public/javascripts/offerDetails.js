const offerCardsArray = document.querySelectorAll(`.offerCard`);
const offerDetails = document.querySelector(`.offerDetails`);
offerCardsArray.forEach(card => {
  card.addEventListener('click', function () {
    const offerId = card.querySelector(`.id`).value;
    axios.get(`/offer/${offerId}`).then(offer => {
      
      let offerPayload = offer.data;
      offerDetails.innerHTML = "";

      let h1DOMEl = document.createElement('h1');
      h1DOMEl.innerHTML = `${offerPayload.city}`;
      offerDetails.appendChild(h1DOMEl);

      let h3DOMEl = document.createElement('h3');
      h3DOMEl.innerHTML = `${offerPayload.job}`;
      offerDetails.appendChild(h3DOMEl);
    }) 
  });
}) 

