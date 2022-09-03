import React from "react"
import About from "./components/About.js" 
import Interests from "./components/Interests.js"
import Info from "./components/Info.js"
import Socials from "./components/Socials.js"
import './styles/App.css'

function App(){


return(

  <>
 
    <div className='pg-bg'>
            

             <br/>
             <br/>


            <div className='head'>
            <h1>My sample business card</h1>
             </div>


              <Info></Info>
              <About></About> 
              <Interests></Interests>
              <Socials></Socials>

            
    </div>

    </>

  
    )
    

    
    
}


export default App;
