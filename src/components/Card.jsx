import './card.scss'

import ImageVictor from "../images/image-victor.jpg"
import Stats from './Stats'

const Card = () => {
  return (
    <div className="card">
      <div className="portrait-wrapper">
        <div className="portrait-background"></div>
        <div className="image">
          <img src={ImageVictor} alt="victor"/>
        </div>
        <div className="informations">
          <p className="name-wrapper"><span className="name">Victor Crest</span><span className="age">26</span></p>
          <p className="city">London</p>
        </div>
      </div>
      <div className="bottom">
        <Stats />
      </div>
    </div>
  )
}

export default Card