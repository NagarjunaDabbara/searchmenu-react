import React from 'react';
import bahubali1 from '../assets/bahubali1.jpg'
import bahubali2 from '../assets/bahubali2.jpg'
import ohdarling from '../assets/ohdarling.jpg'

const movie = (props) => {
  let image ="";
  switch(props.name){
      case"bahubali1":
      image=bahubali1;
      break;
      case"bahubali2":
      image=bahubali2;
      break;
      case"saaho":
      image=ohdarling;
      break;
      case"ohDarling":
      image=ohdarling;
      break;
      default:
          image=""
  }
  let cover = 
  {
      backgroundImage:'url('+image+')'
  }
    return (
        <div>
            <div className="movie-container">
                <div className="movie-image" style={cover}></div>
                <p className="movie-title">{props.title}</p>
                <p className="movie-year">{props.year}</p>
            </div>
        </div>
    )
}

export default movie;
