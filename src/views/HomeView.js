import {View} from '/views/View.js';

class HomeView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.software_button = window.Builder.createElement('custom-input', {type:'button', width:'24', text:'HOME', icon:'info'}, {})
        this.append(this.software_button)
        window.DP.dispatch('VIEW_LOAD')
    }
}

window.customElements.define('home-view', HomeView);
export{HomeView};