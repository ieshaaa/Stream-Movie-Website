import React from 'react'
import "./modal.css"
function Modal({movie, status, toggleModal})  {
    console.log("Rendering Modal component", status);

  return (
    <div className={`movieModal ${status ? 'active' : undefined}`}>
        <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe 
        width="1200" 
        height="540" 
        src= {movie.video}
        title= {`${movie.title} | Official Trailer`} 
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
         >
         </iframe>
    </div>
  )
}

export default Modal