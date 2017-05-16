import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA8HzvAGOyLMgb-Yo5m2Y2u5I9vxSXmFJQ';

// create a new component
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );

}

// take this component's generated html and inject into the DOM
ReactDOM.render(<App />, document.querySelector('.container'))