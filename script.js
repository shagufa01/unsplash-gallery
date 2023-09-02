let photosContainer = document.getElementById("container")
let extractInput = document.getElementById("search-input");

const generatePhotos = photos => {
    let img = document.createElement("img");
    img.src = photos.urls.small;
    img.alt = photos.alt_description;
    img.classList.add("thumbnail-edit");
   
    photosContainer.appendChild(img);
  }

  
  extractInput.addEventListener("keypress",function(e){
    if(e.key == "Enter") {
        fetchApiAndGetPhotos(extractInput.value);
        // console.log(extractInput.value);
    }
  })

  async function fetchApiAndGetPhotos(getTerm="") {
    const accesskey = "DOOVfbhFoDbq6z0OhGGtgrinhtwhQexUeh7uiQmLUGc"
    let url = "";
    if(getTerm){
    url = `https://api.unsplash.com/search/photos?client_id=${accesskey}&query=${getTerm}`;
    }
    else {
        url = `https://api.unsplash.com/photos?client_id=${accesskey}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    photosContainer.innerHTML=null;

    if(getTerm){
        data.results.forEach(generatePhotos);
    }
    else {
        data.forEach(generatePhotos);
    }
  
  }


function fetchApi() {
    fetchApiAndGetPhotos();
}
fetchApi();