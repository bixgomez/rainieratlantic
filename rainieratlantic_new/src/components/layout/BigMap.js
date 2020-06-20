import React from "react"
import Cardinals from "./Cardinals.js"
import bigmap from '../../images/maps/1908.jpg'

function BigMap() {

  return (
    <div className="element--bigmap element">
      <div id="map-window--bigmap" className="map-window map-window--bigmap">
        <img id="bigmap" src={bigmap} alt="" />
      </div>
      <Cardinals/>
    </div>
  )
}

export default BigMap
