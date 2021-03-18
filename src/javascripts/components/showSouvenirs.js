const showSouvenirs = (array) => {
  document.querySelector('#content-container').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-souvenir-btn">Add A Souvenir</button>';
  array.forEach((item) => {
    document.querySelector('#content-container').innerHTML += `<div class="item">
    <div class="souvenir-container top m-3" style="width: 20rem">
      <img src='${item.souvenir_image}' class="card-img-top rounded mx-auto d-block" id='card-img'></img>
      <div class="middle">
        <a href="#" id="show-title"><h5 id="souvenir-title--${item.firebaseKey}" class="card-title mt-5 text-center">${item.name}</h5></a>
        <div class="text-center">
        <p class="card-text bold price" id="show-price">${item.souvenir_price}</p>
        <hr>
        <p class="card-text description" id="show-description">${item.souvenir_description}</p>
        <button class="btn btn-danger btn-lg" id="edit-souvenir--${item.firebaseKey}" data-toggle="modal" data-target="#formModal">Edit</button>
        <button class="btn btn-danger btn-lg" id="delete-souvenir--${item.firebaseKey}">Delete</button>
        <br>
    </div>
  </div>
</div>
</div>`;
  });
};

const emptySouvenirs = () => {
  document.querySelector('#content-container').innerHTML = '<h1>No souvenirs</h1>';
};

export { showSouvenirs, emptySouvenirs };
