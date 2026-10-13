import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {

    state = {
        numbers: []
    }

    calculateResult = () => {
        let num = this.props.param;
        let numbers = [num];
        while(num !== 1){
            if(num % 2 === 0){
                num /= 2;
                numbers.push(num);
            } 
            else{
                num *= 3;
                numbers.push(num++);
            }
        }
        this.setState({
            numbers: numbers
        })
    }

    componentDidMount() {
        this.calculateResult();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.param != this.props.param)
            this.calculateResult();
    }

  render() {
    return (
        <div>
            <h1>ConjeturaCollatz</h1>
            {
                this.state.numbers.length > 0 &&
                <ul className='list-group'>
                    {
                        this.state.numbers.map((number, i) => {
                            return(<li className='list-group-item' key={i}>{number}</li>)
                        })
                    }
                </ul>
            }
        </div>
    )
  }
}
