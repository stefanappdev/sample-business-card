import React from 'react';
import Like from "./like";
import '../styles/Info.css'

function Info(){
	
	let isliked=false;
	const[liked,setstate]=React.useState(isliked);
    
	
	function togglelike(){
		
		setstate(prevstate=>!prevstate)
	
	}
	
	
    return(
        
       <>
      
        <div class='info-section'>

            <div class='jb-img'> 

				<img src='./images/developer.jpeg' />
				 
			 
				<div class="details">
				
				<h1 id='info-name'>Steven John </h1>
				<h2 id='dev'> Engineer</h2>
				<h3 id='website'>Steven John.website</h3>
				
				<div class="like-button">
						
						<Like status={liked} handleclick={togglelike} />
				</div >
				
				
				</div >
				
				
				

			
            </div >


           

    
         
        </div>


        </>
        
            )
    
     
}



export default Info