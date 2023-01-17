const getImages = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001bafcc9ecc1c24d298682d22f91ead8a3",
    },
  })
    .then((imageRaw) => {
      return imageRaw.json();
    })
    .then((data) => {
      let images = data.photos;
      renderImages(images);
    })
    .catch((err) => console.log(err));
};

const renderImages = (images) => {
  let row = document.getElementById("primaryRow");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    row.innerHTML += `
        <div class="col">
                <div class="card" style="width: 18rem;">
        <img src="${image.src.original}" class="card-img-top" alt="...">
        </div>
        </div>
        `;
  }
};
window.onload = () => {
  getImages("dogs");
};
//   console.log(images.photos[0].src.original);
//   let cards = document.querySelectorAll("card mb-4 shadow-sm");
//   for (let i = 0; i < cards.length; i++) {
//     console.log(images.photos[i].src.original);
//     cards[i].innerHTML += `
//     <img src="${images.photos[i].src.original}" alt ="">`;
//   }
