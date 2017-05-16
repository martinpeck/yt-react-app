import React from 'react'
import ReactDOM from 'react-dom'

// create a new component
const App = () => {
    return <div>Hello, world!</div>;
}

// take this component's generated html and inject into the DOM
ReactDOM.render(<App />, document.querySelector('.container'))