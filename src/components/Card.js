import React from 'react'
import '../styles/App.css'
import Like from "./Like.js"

function Card() {

  const[isLiked,setLike]= React.useState(false);

  function updateLike(){
   setLike(prev=>!prev)

  }


  return (

    <main className='card-bg'>

        <div className='card' >
        
            <figure className='dev'>
                  <img alt="picture of Stefan Mitchell" src='images/developer.webp'  />
                  <figcaption>John Brown</figcaption>
            </figure>
        
             

            <div className='profession'>
                 Senior Frontend Engineer
                <br/>

            </div>


           

            <div className='socials-like'>


                 <div className='socials'>

                 <img alt="whatsapp" src='images/WhatsApp.svg.jpg'  />
                 <img alt="facebook" src='images/fb.jpeg'  />
                 <img alt="linkedin" src='images/linkedin.png'  />

              </div>

              <div className='like-button'>
                Like?<Like status={isLiked} handleClick={updateLike}/>
              
              </div>           
                            

            </div>

        
        </div>


        
        </main>
  )
}

export default Card