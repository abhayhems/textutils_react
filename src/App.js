import { useState } from 'react';
import './App.css';
//import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import {
 // BrowserRouter as Router,
 // Routes,
 // Route,
 // Link
//} from "react-router-dom";
function App() {
  const [mode,setmode]=useState('white') //wheather the dark mode is enabled or not
  const [btn,setbtn]=useState('enable darkmode') 
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1900);
  }
  const togglemode =()=>{
    if(mode=="white"){
      setmode("dark");
      showAlert("dark mode is enabled","success");
      setbtn('Disable darkmode')
      document.body.style.backgroundColor='#0d124a';
      document.title="Textutils - dark mode "
     // setInterval(() => {
     //   document.title="Textutils is amazing "
     // }, 2000);
     // setInterval(() => {
     //   document.title="install now "
     // }, 1500);
    }
    
    else{
      setmode("white");
      showAlert(" light mode is enabled","success");
      setbtn('Enable darkmode')
      document.body.style.backgroundColor='white';
      document.title="Textutils - light mode"
    }

  }
  return (
    <>
      {/*<Router>*/}
      <NavBar mode={mode} togglemode={togglemode}btn={btn}/>{/*mode is the prop used,btn is used for the switch */}
      <Alert alert={alert}/>
      <div className="container my-3">
        {/*/users-->component 1
        /users/home-->component 1 ....usage of exact keyword*/}
      {/*<Routes>
      <Route exact path="/" element={} />
          
      <Route exact path="/about*" element={<About />} />
      </Routes>*/}
      <TextForm showAlert={showAlert} heading="write it below" mode={mode}/>
      </div>
     {/* </Router>*/}
    </>
    
  );
}

export default App;
