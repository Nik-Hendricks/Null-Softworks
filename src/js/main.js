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
//import all views
import {SettingsView} from '/views/SettingsView.js';
import {SoftwareView} from '/views/SoftwareView.js';
import {GamesView} from '/views/GamesView.js';


window.onload = () => {
    window.API2.register_service_worker();
    register_views();
    window.API2.new_db('app_data');

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

    
}

function append_bottom_buttons(){
    window.VM.add_bottom_button('settings', '/Settings');
    window.VM.add_bottom_button('attach_money', '/Games')
    window.VM.add_bottom_button('calendar_month','/Software');
}


function register_views(){
    var last_visited_view = (window.localStorage.lastView !== undefined) ? window.localStorage.lastView: `<agenda-view><agenda-view>`;
    var routes = {
        "":{
            title: 'Null Softworks',
            view: last_visited_view
        },
        "Software":{
            title:"Software",
            view:`<software-view></software-view>`
        },
        "Games":{
            title:"Games",
            view:`<games-view></games-view>`
        },
        "Settings":{
            title:"Setting",
            view:`<settings-view></settings-view>`
        },
    }
    
    window.VM.register(routes)

    
}


