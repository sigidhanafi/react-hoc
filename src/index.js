import React from 'react'
import ReactDOM from 'react-dom'

import Parent from './Components/Parent'

class App extends React.Component {
  render () {
    return <Parent />
  }
}

ReactDOM.render (<App />, document.getElementById('container'))
