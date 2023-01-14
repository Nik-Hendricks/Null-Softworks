import {View} from '/views/View.js';

class SoftwareView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        var l = window.location.href.split('/').length -1
        this.detail_view = (l == 4) ? true: false;
        this.name = (this.detail_view) ? window.location.href.split('/')[l].split('%20').join(' '): undefined;

        this.games = [
            {name:'Top down shooter', images:[], description:"Top down shooter game. You get to shoot stuff and things. also you can walk!"},
            {name:'Other cool game', images:[], description:" Top down shooter game. You get to shoot stuff and things. also you can walk!"},
            {name:'Other other cool game', images:[], description:" Top down shooter game. You get to shoot stuff and things. also you can walk!"},
            {name:'Bottom up shooter!', images:[], description:"  Top down shooter game. You get to shoot stuff and things. also you can walk!"},
        ]
        this.append(this.createBody())

        window.DP.dispatch('VIEW_LOAD')
    }

    createBody(){
        var d = document.createElement('div')
        if(this.detail_view){
            var el = window.Builder.createElement('card-item', {width:'24', square:true})
            el.append(window.Builder.createElement('custom-text', {align:'center', color:'var(--theme-text-primary-color)', width: '12', text:this.name}))
            d.append(el)
        }else{
            this.games.forEach(game => {
                var el = window.Builder.createElement('card-item', {width:'12', square:true});
                el.append(window.Builder.createElement('custom-text', {align:'center', color:'var(--theme-text-primary-color)', width: '12', text:game.name}))
                el.onclick = () => {
                    window.history.pushState('', '', `/Software/${game.name}`)
                }
                d.append(el)
            })
            
        }

        
        return d
       
    }
}

window.customElements.define('software-view', SoftwareView);
export{SoftwareView};