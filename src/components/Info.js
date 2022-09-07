import React from 'react';
import '../styles/Info.css'

function Info(){
    
    return(
        
       <>
      
        <div className='info'>

             <div className='jb-img'> 

             <img src='./images/developer.jpeg' />

             </div >


            <h1 id='info-name'>Steven John</h1>
            <h2 className='dev'>Frontend-Developer</h2>
            <h3 className='website'>Steven John.website</h3>

            <div className='email-linkedin'>
                <button className='linkedin-btn'>linkedin</button>
                <button className='email-btn'>email</button>
            </div>
         
        </div>


        </>
        
            )
    
     
}



export default Info