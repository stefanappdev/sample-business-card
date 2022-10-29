import React from "react"


export default function Like(props){

	const like=props.status?"images/like.png":"images/transparent-like.png"
	
	return(
	
		<>
		
			<img
			class="Like-icon"
			src={like}
			onClick={props.handleclick}
			
		
		
	
		
		/>
		
		
		
		</>
	)

	}