import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// const reactElement = {
//     type : 'a',
//     props : {
//         href : "http://google.com",
//         target : "_blank",
//     },
//     Children : "Click me to visit the google"
// }  Not possible in react 18

// const anotherElement = (
//   <a href="http://google.com" target = "_blank">Visit Google</a>
// )

// const reactElement = React.createElement(
//     'a',
//     {
//         href : "http://google.com",
//         target : "_blank",
//     },
//     "Visit Googly"
// ) 


createRoot(document.getElementById('root')).render(
  <App/>
)
