import {View} from '/views/View.js';

class SoftwareView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        var l = window.location.href.split('/').length -1
        var detail_view = (l == 4) ? true: false;
        var name = (detail_view) ? window.location.href.split('/')[l].split('%20').join(' '): undefined;
        console.log(name)

        this.software_button = window.Builder.createElement('custom-input', {type:'button', width:'12', text:'test', icon:'info'}, {})
        this.append(this.software_button)

        var games = [
            {name:'Top down shooter', images:[], description:"Top down shooter game. You get to shoot stuff and things. also you can walk!"},
            {name:'Top down shooter', images:[], description:"Top down shooter game. You get to shoot stuff and things. also you can walk!"},
            {name:'Top down shooter', images:[], description:"Top down shooter game. You get to shoot stuff and things. also you can walk!"},
            {name:'Top down shooter', images:[], description:"Top down shooter game. You get to shoot stuff and things. also you can walk!"},
        ]

        games.forEach(game => {
            var el = window.Builder.createElement('card-item', {width:'6', square:true});
            el.onclick = () => {
                window.history.pushState('', '', `/Software/${game.name}`)
            }
            this.append(el)
        })

        window.DP.dispatch('VIEW_LOAD')
    }
}

window.customElements.define('software-view', SoftwareView);
export{SoftwareView};