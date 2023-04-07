import React from 'react'

function Like(props) {

   let like_icon=props.status?"images/like.png":"images/dislike.png";

  return (
    <img onClick={props.handleClick}
         alt="like button"
         src={like_icon}
    />  
    
  )
}

export default Like
