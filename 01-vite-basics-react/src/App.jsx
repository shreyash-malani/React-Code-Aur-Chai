
import Chai from './chai';
function App() {
  const username = "Chai aur Code"

  return (
    <> <Chai/>
    <h1>Welcome to ReactJS | Shreyash Malani {username}</h1> 
    </> //this is called fragment in react beacause react needs to return onw element only
     // username is expression and {username is evaluated expression}
    
  )
}

export default App

// if we are creating in crete-react-app then it is a library we can import in any other way like js or jsx 

// when u are doing it using vite then u have to use jsx only as it is a framework

