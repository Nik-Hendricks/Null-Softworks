import Dispatcher from '/js/dispatcher.js';
import API2 from '/js/API2.js'
import ViewManager from '/js/viewManager.js';
import Builder from '/js/Builder.js';
import Utils from '/js/Utils.js';

//import all components
import {MenuBarBottom} from '/components/MenuBarBottom.js';
import {MenuBarTop} from '/components/MenuBarTop.js';
import {MainContent} from '/components/MainContent.js';
import {LoadingSpinner} from '/components/loadingSpinner.js';
import {SideScroller} from '/components/sidescroller.js';
import {Card} from '/components/Card.js';
import {IconButton} from '/components/iconbutton.js';
import {GridContainer} from '/components/GridContainer.js';
import {ImageSlider} from '/components/ImageSlider.js';
import {ListItem} from '/components/ListItem.js';
import {PostCard} from '/components/PostCard.js';
import {ContextMenu} from '/components/ContextMenu.js';
import {CodeFormat} from '/components/CodeFormat.js';
import {MusicPlayer} from '/components/MusicPlayer.js';
import {SliderInput} from '/components/SliderInput.js';
import {SQLEditor} from '/components/SQLEditor.js';
import {Calculator} from '/components/Calculator.js';
import {Calendar} from '/components/Calendar.js';
import {PostCardHeader} from '/components/PostCardHeader.js';
import {PostCardFooter} from '/components/PostCardFooter.js';
import {CustomInput} from '/components/CustomInput.js';
import {PieChart} from '/components/PieChart.js';
import {Text} from '/components/Text.js';
import {ProductItem} from '/components/ProductItem.js';
//import all views
import {SettingsView} from '/views/SettingsView.js';
import {SoftwareView} from '/views/SoftwareView.js';
import {GamesView} from '/views/GamesView.js';
import {HomeView} from '/views/HomeView.js';

register_views();
window.API2.new_db('app_data');
setTimeout(() => {window.API2.load();},500)

window.DP.on("VIEW_LOAD", () => {
    console.log("VIEW LOAD")
    window.VM.resize_components();
    window.loadingSpinner.hide();
})

window.DP.on('API_LOAD', () => {
        console.log("API LOAD")
        window.VM.begin();
        append_bottom_buttons();
})

window.DP.on('NO_AUTH', () => {
})

    


function append_bottom_buttons(){
    window.VM.add_bottom_button('sports_esports', '/Games')
    window.VM.add_bottom_button('home', '/Home');
    window.VM.add_bottom_button('terminal','/Software');
}


function register_views(){
    var last_visited_view = (window.localStorage.lastView !== undefined) ? window.localStorage.lastView: `<home-view></home-view>`;
    var name = "Null Softworks"
    var routes = {
        "":{
            title: name,
            view: last_visited_view
        },
        "Home":{
            title:`${name} > Home`,
            view:`<home-view></home-view>`
        },
        "Software":{
            title:`${name} > Software`,
            view:`<software-view></software-view>`,
            subViews:{
                "*":{
                    title:`${name} > Software`,
                    view:`<software-view></software-view>`
                }
            }
        },
        "Games":{
            title:`${name} > Games`,
            view:`<games-view></games-view>`,
            subViews:{
                "*":{
                    title:`${name} > Games`,
                    view:`<games-view></games-view>`
                }
            }
        },
        "Settings":{
            title:`${name} > Setting`,
            view:`<settings-view></settings-view>`
        },
    }
    
    window.VM.register(routes)

    
}


