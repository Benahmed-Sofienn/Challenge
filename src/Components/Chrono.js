import React from 'react'
import { Button } from 'react-bootstrap';
import './Chrono.css';
class Chrono extends React.Component {
    
    state={
        count:0,
        stopstart: "START",
        
    }
    Timer = () => {
        this.setState({count: this.state.count +1})
    }
    handelClickStartStop = () => {
        if (this.state.stopstart==="START"){
            this.setState({stopstart : "STOP"})
            this.Interval=setInterval(this.Timer, 1000)
            
        }
        else {
            this.setState({stopstart : "START"})
            clearInterval(this.Interval)
        }
    }
    handelClickReset = () => {
        this.setState({
            count:0
        })
        clearInterval(this.Interval)
        this.setState({stopstart : "START"})
    }
   
    
    
    render () {
        return (
            <div className="background">
                <h1 className="count">{this.state.count}</h1>
                <div className="buttons">
                <Button variant="light" onClick={this.handelClickStartStop} >{this.state.stopstart}</Button>
                <Button variant="light" onClick={this.handelClickReset} >RESET</Button>
                </div>
                
            </div>
        )
    }
}

export default Chrono
