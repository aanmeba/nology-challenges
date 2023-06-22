export const createCard = (parent, common, imgUrl, capital, region) => {
  const container = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  const heading = document.createElement("h2");
  const country = document.createTextNode(common);
  heading.appendChild(country);
  container.appendChild(img);
  container.appendChild(heading);

  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const capitalText = document.createTextNode(capital);
  const regionText = document.createTextNode(region);
  container.appendChild(para1);
  para1.appendChild(capitalText);
  container.appendChild(para2);
  para2.appendChild(regionText);
  parent.appendChild(container);
};
