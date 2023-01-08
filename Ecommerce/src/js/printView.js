import { products } from "../utils/data.js";
import { containProducts } from "../js/nodes.js";
import  showModal  from "../js/modal.js";

const templateModal = () => {
    return `
       
        <div id="modal" class="bgModal">
           
                <figure id="btnClose">
                    <img class="imgIcon" src="public/assets/iconClose.png" alt="">
                </figure>
            
        </div>
        `;
        
}

const templateCard = (product) => {

	return `
        <div class="card" id="${product.Id}">
                <figure class="containImg">
                    <img src="./public/imgProducts/notebook/${product.url}" alt="" class="imgCard">
                 </figure>
                <h2 class="nameProduct">${product.name}</h2>
                <div>
                    <p class="price">$ ${product.price}</p>
                    <button class="buy">Buy</button>
                </div>
        </div>
    `;
};

const view = () => {
	const view = products.map((product) => templateCard(product));
	containProducts.innerHTML = view.join(" ");
    const cards = document.querySelectorAll('.card')
    console.log(cards);
    cards.forEach(element => {
		element.addEventListener('click',  () => showModal(element.childNodes));
	})
   
};

export { view };
