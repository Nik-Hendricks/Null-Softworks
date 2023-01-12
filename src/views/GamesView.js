import {View} from '/views/View.js';

class GamesView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.software_button = window.Builder.createElement('custom-input', {type:'button', width:'12', text:'test', icon:'info'}, {})
        this.append(this.software_button)
        window.DP.dispatch('VIEW_LOAD')
    }
}

window.customElements.define('games-view', GamesView);
export{GamesView};