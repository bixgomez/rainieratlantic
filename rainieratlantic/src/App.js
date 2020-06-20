import React, {Component} from 'react'
import BigMap from "./components/layout/BigMap.js"
import LilMap from "./components/layout/LilMap.js"
import GuideMap from "./components/layout/GuideMap.js"
import Title from "./components/layout/Title.js"
import Nav from "./components/layout/Nav.js"

class App extends Component {
  render () {
    return (

        <div className="inner">
          <BigMap />
          <LilMap />
          <GuideMap />
          <Title />
          <Nav />
        </div>
    )
  };
}

export default App
