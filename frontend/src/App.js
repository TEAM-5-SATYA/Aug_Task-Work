
import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
// import Form from "./components/Form/form";
import Body from "./components/Body/body";
import "./App.css"
function App() {  
  return (
    <div className="app">
    
      <Navbar />
    
    {/* <div> */}
      {/* <div className='body-container'> */}
      <Body/>
      {/* <Form  /> */}
      {/* </div> */}
    


    {/* </div> */}
      
      <Footer />
    </div>
  );
}

export default App;
