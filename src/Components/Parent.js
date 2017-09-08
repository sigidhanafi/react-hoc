import React from 'react'

import Child from './Child'

class Parent extends React.Component {
  render () {
    return (
      <div>
        <Child numberChild={'One'} />
        <Child numberChild={'Two'} />
      </div>
    )
  }
}

export default Parent
