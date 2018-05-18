import {app} from 'hyperapp'
import {location} from "@hyperapp/router"
import {state} from './state/'
import {actions} from './actions/'
import {view} from './views/'

// Dev dependencies
import freeze from 'hyperapp-freeze'
import devtools from 'hyperapp-devtools'


import 'normalize.css'
import './main.css'

// Start with training wheels and an awesome devtools panel
window.main = freeze(devtools)(app)(state, actions, view, document.body);

// Activate our router
const unsubscribe = location.subscribe(main.location);
