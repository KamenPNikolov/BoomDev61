import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  
    let priceElements = document.querySelectorAll(".hot");
    for(let element of priceElements){
     // let newElement = document.createTextNode("🔥");
      let price = element.innerHTml;
      element.innerHTML = price + "🔥";
      //element.parentNode.insertBefore(newElement, element.nextSibling)

    }
});
