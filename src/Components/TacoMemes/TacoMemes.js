import React, { Component } from 'react';
import axios from 'axios';

class TacoMemes extends Component {
    constructor(){
        super();
        this.state = {
            tacos: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/memes').then(res => {
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

export default TacoMemes;