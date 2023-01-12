import {Card} from '/components/Card.js';

class ProductItem extends Card{
    constructor(){
        super();
    }

    connectedCallback(){
        console.log(this)
        this.innerHtml = 'test';
    }
}

window.customElements.define('product-item', ProductItem)