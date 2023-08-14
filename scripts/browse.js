const plants = [
    {"name": "Bonsai Tree",
    "price": 900,
    "description": "A bonsai tree is a miniature tree that is cultivated in a shallow container and trained to have a specific shape through the art of bonsai. Bonsai is a traditional Japanese art form that involves the cultivation of small, ornamental trees in pots.",
    "image": "bonsaitree.png"},
  
  {
    "name": "Large Monstera Deliciosa",
    "price": 500,
    "description": "Monstera Deliciosas are popular indoor plants. They are great for beginners as they require very little maintenance. This large Monstera comes in a handmade basket which is included in the price and it stands roughly 70cm high so it isn’t very tall. ",
    "image": "LargeMonstera.png"
  },
  {
    "name": "Chinese Money Plant",
    "price": 120,
    "description": "The Chinese money plant, also known as Pilea peperomioides, is a popular houseplant that has gained significant popularity in recent years. It is native to the Yunnan Province in Southern China and is a member of the Urticaceae family. ",
    "image": "ChineesmoneyPlant.png"
  },
  {
    "name": "Fiddle Leaf Fig",
    "price": 600,
    "description": "This very popular indoor plant features large, green leaves that grow upright on its sleek stem. Although many people do struggle with these plants, there are two very important things to remember; these plants need lots of bright natural light from a window and they are very sensitive to overwatering, so its best to always underwater.",
    "image": "FiddleLeaffig.png"
  },
  {
    "name": "Rain Forest Delight Bamboo Plant",
    "price": 550,
    "description": "A vibrant, green areca bamboo plant comes in a gorgeous glass cylinder vase that has been filled with moss and stones for an elegant touch. Send today with NetFlorist! Get this Rain Forest Delight Bamboo Plant delivered with NetFlorist.",
    "image": "rainnforest.png"
  },
  {
    "name": "Dracaena Song",
    "price": 40,
    "description": "Song of India (Golden) is hardy, drought tolerant, low maintenance, and air purifier house plant. What makes it special: Best air purifier indoor plant. Best plant for AC rooms",
    "image": "Dracaena Song.png"
  }
  ];

  function renderPlants(plantsArray) {
    const plantsContainer = document.getElementById("plantsContainer");
    plantsContainer.innerHTML = "";
  
    const onSalePlantsContainer = document.getElementById("onSalePlantsContainer");
    onSalePlantsContainer.innerHTML = "";
  
    plantsArray.forEach((plant) => {
      const cardClone = document.getElementById("plantCardTemplate").content.cloneNode(true);
      cardClone.querySelector(".card-img-top").src = 'assets/' + plant.image;
      cardClone.querySelector("#nameText").textContent = plant.name;
      cardClone.querySelector("#priceText").textContent = 'R ' + plant.price;
      cardClone.querySelector("#descriptionText").textContent = plant.description;
  
      if (plant.onSale) {
        onSalePlantsContainer.appendChild(cardClone);
      } else {
        plantsContainer.appendChild(cardClone);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.querySelector(".filter-button");
    const sortButton = document.querySelector(".sort-button");
    const onSaleButton = document.querySelector(".on-sale-button"); 
  
    filterButton.addEventListener("click", () => {
      filterPlants(filterButton.getAttribute("data-filter"));
    });
  
    sortButton.addEventListener("click", () => {
      sortPlants(sortButton.getAttribute("data-sort"));
    });
  
    
    onSaleButton.addEventListener("click", () => {
      filterPlants("onSale");
    });
  
   
    renderPlants(plants);
  });