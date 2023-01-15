import {View} from '/views/View.js';

class HomeView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.sidescroller = window.Builder.createElement('side-scroller', {}, {})

        for(var i = 0; i < 10; i ++){
            var c = window.Builder.createElement('card-item', {square:true, width:'6'}, {})
            this.sidescroller.append(c)
        }

        this.append(this.sidescroller)
        window.DP.dispatch('VIEW_LOAD')
    }
}

window.customElements.define('home-view', HomeView);
export{HomeView};