const getHousePlans = async () => {
    try {
      return (await fetch("https://portiaportia.github.io/json/house-plans.json")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const displayHousePlans = async () => {
    const housePlans = await getHousePlans();
    const app = document.getElementById("app");

    housePlans.forEach(async (house) => {
      const houseContainerWrapper = document.createElement("div");
      houseContainerWrapper.classList.add("house-container-wrapper");
      app.appendChild(houseContainerWrapper);

        const houseContainer = document.createElement("div");
        houseContainer.classList.add("house-container");
        houseContainerWrapper.appendChild(houseContainer);

        const mainImageSrc = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
        const mainImage = document.createElement("img");
        mainImage.classList.add("house-image");
        mainImage.src = mainImageSrc;
        houseContainer.appendChild(mainImage);

        const houseDetails = document.createElement("div");
        houseDetails.classList.add("house-details");
        houseContainer.appendChild(houseDetails);

        const createPropertyContainer = (label, value) => {
          const container = document.createElement("p");
      
          const labelSpan = document.createElement("span");
          labelSpan.textContent = label;
          labelSpan.classList.add("bold-text");
          container.appendChild(labelSpan);
      
          const valueSpan = document.createElement("span");
          valueSpan.textContent = ` ${value}`;
          container.appendChild(valueSpan);
      
          return container;
      };

      const name = document.createElement("h2");
      name.textContent = house.name;
      houseDetails.appendChild(name);
        
      const sizeContainer = createPropertyContainer("Size:", house.size);
      houseDetails.appendChild(sizeContainer);

      const bedroomsContainer = createPropertyContainer("Bedrooms:", house.bedrooms);
      houseDetails.appendChild(bedroomsContainer);

      const bathroomsContainer = createPropertyContainer("Bathrooms:", house.bathrooms);
      houseDetails.appendChild(bathroomsContainer);

      const featuresContainer = createPropertyContainer("Features:", house.features.join(", "));
      houseDetails.appendChild(featuresContainer);
        
      const floorPlanContainer = document.createElement("div");
      floorPlanContainer.classList.add("floor-plan-container");
      app.appendChild(floorPlanContainer);

      house.floor_plans.forEach(async (floorPlan) => {
      const floorPlanItem = document.createElement("div");
      floorPlanItem.classList.add("floor-plan");
      floorPlanContainer.appendChild(floorPlanItem);
        
      const floorPlanName = document.createElement("h3");
      floorPlanName.textContent = floorPlan.name; 
      floorPlanItem.appendChild(floorPlanName);
      const floorPlanImage = document.createElement("img");
      floorPlanImage.src = `https://portiaportia.github.io/json/images/house-plans/${floorPlan.image}`;
      floorPlanItem.appendChild(floorPlanImage); 
      });
    });
};

displayHousePlans();
