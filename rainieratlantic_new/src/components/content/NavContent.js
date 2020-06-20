import React, { Component } from "react"
import MyProvider from "../MyProvider";
import MyContext from "../MyContext";

class NavContent extends Component {

  render() {

    let myNumber = 3;

    return (
      <React.Fragment>

        <MyProvider>
          <MyContext.Consumer>
            {(context) => (
              <p>
                {context.state.name} was
                born on {context.state.day} {context.state.month}, {context.state.year}.
              </p>
            )}
          </MyContext.Consumer>
        </MyProvider>

        <p>The magic number is {myNumber}</p>

        <p>
          I designed this interface in 2003 as part of my graduate
          thesis in Urban Planning at the University of Washington.
        </p>

        <p>
          It was originally written in ColdFusion, and consisted of a
          set of iFrames that communicated with eachother via javaScript.
          As such, it was an early attempt on my part at a single page app.
        </p>

        <p>
          In recent weeks I have begun rewriting it, dispensing with the
          iFrames, updating the javaScript to modern standards, and
          incorporating some jQuery.
        </p>

        <p>
          Please feel free to select different maps from the dropdowns,
          and click on the cardinal points to navigate the maps. You can also
          click anywhere in the guide map to jump to an area of interest.
        </p>

        <p>
          My original version featured the ability to explore property
          photographs taken in the 30s and 50s; I will be restoring this
          functionality in the weeks to come.
        </p>
      </React.Fragment>
    )
  }
}

export default NavContent
