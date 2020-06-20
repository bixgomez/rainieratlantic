import React, {Component} from "react"

import dir_n from '../../images/n.gif'
import dir_s from '../../images/s.gif'
import dir_e from '../../images/e.gif'
import dir_w from '../../images/w.gif'

class Cardinals extends Component {

  northClick() {
    console.log("The north button was clicked.")
  }

  southClick() {
    console.log("The south button was clicked.")
  }

  render() {

    // function northClick(e) {
    //   e.preventDefault()
    //   console.log("The north button was clicked.")
    // }

    // function southClick(e) {
    //   e.preventDefault()
    //   console.log("The south button was clicked.")
    // }

    function eastClick(e) {
      e.preventDefault()
      console.log("The east button was clicked.")
    }

    function westClick(e) {
      e.preventDefault()
      console.log("The west button was clicked.")
    }

    return (
      <React.Fragment>
        <img onClick={this.northClick.bind(this)} className="directional" id="north" src={dir_n} alt="" />
        <img onClick={() => this.southClick()}    className="directional" id="south" src={dir_s} alt="" />
        <img onClick={eastClick}                  className="directional" id="east"  src={dir_e} alt="" />
        <img onClick={westClick}                  className="directional" id="west"  src={dir_w} alt="" />
      </React.Fragment>
    )

  }
}

export default Cardinals
