import React from "react"
import lilmap from '../../images/maps/1950.jpg'

function LilMap() {
  return (
    <div className="element--lilmap element">
      <div id="map-window--bigmap" className="map-window map-window--bigmap">
        <img id="lilmap" src={lilmap} alt=""/>
      </div>
    </div>
  )
}

export default LilMap
