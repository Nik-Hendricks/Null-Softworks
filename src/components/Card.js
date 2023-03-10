import {Component} from '/components/Component.js'

class Card extends Component{
    static get observedAttributes() { return ['variant']; }
    constructor(){
        super();
    };

    connectedCallback(){
        console.log('beep')
        this.classList.add('global-resize')
        this.width = this.getAttribute('width');
        this.secondary = this.getAttribute('secondary')
        this.variant = this.getAttribute('variant');
        this.has_image = this.hasAttribute('image') ? true : false;
        this.is_blank = this.hasAttribute('blank') ? true : false;
        this.is_square = this.hasAttribute('square') ? true : false;
        this.init();
    }

    init(){
        this.clasify();
    }

    clasify(){
        var classes = ['card', 'card-2', 'icon-card'];
        if(this.variant){
            this.variant_class = classes[parseInt(this.variant)]
        }else{
            this.variant_class = classes[0];
        }

        if(this.is_blank){
            this.style.background = 'transparent';
            this.style.borderRadius = 0;
            this.style.paddingTop = 0;
        }
        this.classList.add(this.variant_class);
    }


    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr == 'variant'){
            this.clasify();
        }
    }

}
window.customElements.define('card-item', Card);
export {Card}

