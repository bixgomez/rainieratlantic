import React from "react"
import guidemap from '../../images/guidemap.gif'

function GuideMap() {
  return (
    <div className="element--guidemap element">
      <div className="map-window map-window--guidemap">
        <img id="guidemap" src={guidemap} alt=""/>
        <div id="redbox">
          <div id="redbox-inner" className="inner"></div>
        </div>
        <div id="guidemap-clicker"></div>
      </div>
    </div>
  )
}

export default GuideMap
