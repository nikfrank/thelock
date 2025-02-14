import React from 'react';
import './App.scss';
import Lock from './lock'

class App extends React.Component {

  state = {
    numbers: [0,0,0,0],
    secretCode: 1111,
  }

upNumberOne = () => this.setState({numbers: Math.min(9, (Number(this.state.numbers[0])+1)),})

downNumberOne = () => this.setState({numbers: Math.max(0, (Number(this.state.numbers[0])-1)),})

upNumberTwo = () => this.setState({numbers: Math.min(9, (Number(this.state.numbers[1])+1)),})

downNumberTwo = () => this.setState({numbers: Math.max(0, (Number(this.state.numbers[1])-1)),})

upNumberThree = () => this.setState({numbers: Math.min(9, (Number(this.state.numbers[2])+1)),})

downNumberThree = () => this.setState({numbers: Math.max(0, (Number(this.state.numbers[2])-1)),})

upNumberFour = () => this.setState({numbers: Math.min(9, (Number(this.state.numbers[3])+1)),})

downNumberFour = () => this.setState({numbers: Math.max(0, (Number(this.state.numbers[3])-1)),})


changeValue = (index, diff) => {
  this.setState({
    numbers: this.state.numbers.map(( value, i )=>
      (i === index) ? (value + diff +10) % 10 : value
    )
  })
}

check = ()=> {
  const userCode = parseInt(this.state.numbers[0].toString()+this.state.numbers[1].toString()+
                            this.state.numbers[2].toString()+this.state.numbers[3].toString());
  userCode === this.state.secretCode ?
    this.setState({ isOpen: true, }) : this.setState({ isOpen: false, })
}


  render () {
    console.log(this.state);
    return (
      <div className="App">
        <h1>The Lock</h1>
        <Lock opened={this.state.isOpen}/>
        <div className='numbers'>
          <div className='number'>
            <button className='button' onClick={()=> this.changeValue(0, 1)}>up</button>
            <span className='btncd'>{this.state.numbers[0]}</span>
            <button className='button' onClick={()=> this.changeValue(0, -1)}>dn</button>
          </div>
          <div className='number'>
            <button className='button' onClick={this.upNumberTwo}>up</button>
            <span className='btncd'>{this.state.numbers[1]}</span>
            <button className='button' onClick={this.downNumberTwo}>dn</button>
          </div>
          <div className='number'>
            <button className='button' onClick={this.upNumberThree}>up</button>
            <span className='btncd'>{this.state.numbers[2]}</span>
            <button className='button' onClick={this.downNumberThree}>dn</button>
          </div>
          <div className='number'>
            <button className='button' onClick={this.upNumberFour}>up</button>
            <span className='btncd'>{this.state.numbers[3]}</span>
            <button className='button' onClick={this.downNumberFour}>dn</button>
          </div>
        </div>
        <button className='button' onClick={this.check}>CHECK</button>
      </div>
    );
  }
}
export default App;
