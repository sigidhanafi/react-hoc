import React from 'react'

class Child extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello, I'm child {this.props.numberChild}!</h1>
        <hr />
      </div>
    )
  }
}

export default Child
