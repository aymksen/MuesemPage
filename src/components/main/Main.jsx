import React from 'react'
import "./main.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Main({menuOpen,setMenuOpen}) {
  
  
  return (
    
    <div className="Main" id="main" >
      <div className='container'>
      <div className='container1'>
      <h1>Introduction</h1>
      <p>The Saadian Tombs are a historic royal necropolis in Marrakesh, Morocco, located on the south
         side of the Kasbah Mosque, inside the royal kasbah (citadel) district of the city. They date to the time 
         of the Saadian dynasty and in particular to the reign of Ahmad al-Mansur (1578–1603), though members of Morocco's
         monarchy continued to be buried here for a time afterwards. The complex is regarded by many art historians as the 
         high point of Moroccan architecture in the Saadian period due to its luxurious decoration and careful interior design.
         Today the site is a major tourist attraction in Marrakesh</p>
         <h1>About</h1>
        <p>The Saadian Tombs are located just outside Marrakech and were constructed during the reign of 
          Sultan Ahmad al-Mansur in the late 16th century. This is the resting place of al-Mansur, his family, and other 
          notable officials from that era. These tombs were discovered in 1917; restoration began shortly thereafter. Today, 
          much of its original splendour has been restored.</p>
   
          <h1>Tips for visiting</h1>
          <p><li>site is busy with tour groups from about 9:30am to 1pm, and a long line can form
          to view Al Mansour’s chamber. Either get here right at opening time to admire the tombs in peace or come later in the day.</li> 
          <li>Late afternoon is the best time for photography as the marble work takes on a golden hue in the light.</li> </p>
          </div>
          <div className='container2'>

          {/* <img src={require('./21.jpg')} alt="1" /> */}
          <Carousel>
                <div className='main-slide'>
                    <img src={require('./21.jpg')} alt="1" height="550px" width="500px"/>
                </div>
                <div>
                    <img src={require('./22.jpg')} alt="1" height="550px" width="500px" />
                </div>
                <div>
                    <img src={require('./23.jpg')} alt="1" height="550px" width="500px" />
                      </div>
                      <div>
                    <img src={require('./24.jpg')} alt="1" height="550px" width="500px" />
                      </div>
                      <div>
                    <img src={require('./25.jpg')} alt="1" height="550px" width="500px" />
                      </div>
                      <div>
                    <img src={require('./26.jpg')} alt="1" height="550px" width="500px" />
                      </div>
                      <div>
                    <img src={require('./27.jpg')} alt="1" height="550px" width="500px" />
                      </div>
            </Carousel>
         
      

          </div>
          </div>
         



      </div>
        
        
   
    
  )
  
}