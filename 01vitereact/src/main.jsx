import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-dev-runtime.js" 


function MyApp() {
    return (
        <>
            <h1>Custom App | chai</h1>
        </>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_black'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target ='_blank'>Visit Google</a>
)
//once all the DOM tree is done then var injection takes place just reference with no implementation of js as inside object no js is performed like if and all
const anotherUser = "chai aur code"

const reactElement = React.createElement( //injected by babel
    //special syntax to create ReactElement comes with paramters
    'a',     //first parameter is tag
    {href: 'https://google.com', target: '_blank'},      //second parameter is object add properties like setAttributes in props
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    // <MyApp/>
    // reactElement //keyvalues expects something
    // anotherElement
    reactElement
    // <App/>

)
