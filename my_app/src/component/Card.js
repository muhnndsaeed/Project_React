import React from 'react'

export default function Card(props) {
  return (
    
        <div class="movie-card" >
            <div class="movie-header themovie">
               <img class = "image" src={props.cards.img}/>

            </div>
            
            <div class="movie-content">
                
                <div class="movie-content-header">
                    <a href="#">
                        <h3 class="movie-title">{props.cards.title}</h3>
                    </a>

                </div>
                <div class="movie-info">
                    <div class="info-section">
                        <label>Genres</label>
                        <span>{props.cards.genres}</span>
                    </div>
                   
                    <div class="info-section">
                        <label>IMDb RATING</label>
                        <span>{props.cards.rating}</span>
                    </div>
                    
                    <div class="info-section">
                        <label>Duration</label>
                        <span>{props.cards.duration}</span>
                    </div>
                    
                    
                    
                </div>
            </div>
            
        </div>
    
  )
}
