import React, { Component } from 'react';
import axios from 'axios';

class BrowseDemTacos extends Component {
  constructor(){
    super();
    this.state = {
      tacos: []
    }
  }

  componentDidMount(){
    axios.get('/api/browse').then(res => {
      this.setState({tacos: res.data})
    })
  }

  render() {
    let mappedTacos = this.state.tacos.map(taco => {
      return <div key={taco.url}>
        <img src={taco.url} />
      </div>
    })
    return (
      <div>
        {mappedTacos}
      </div>
    )
  }
}

export default BrowseDemTacos;