import React, {Component} from 'react'
import MyContext from "./MyContext";

class MyProvider extends Component {
  state = {
    name: 'Jessamyn',
    year: 1998,
    month: 'November',
    day: 15
  };
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
