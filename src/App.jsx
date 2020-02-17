import React from 'react';

class App extends React.Component {
  state = {
   // color: '#d1001c'
   // color: 'rgb(255 255 255)'
   color: {
     red: 255,
     green: 255,
     blue: 255
   }
  };

  handleClick = () => {
    //let randomColor = '#' + (Math.floor(Math.random() * 0xFFFFFF)).toString(16);

    //let randomColor = 'rgb(' +  Math.floor(Math.random() * 255) + ' ' +  Math.floor(Math.random() * 255) + ' ' +  Math.floor(Math.random() * 255) + ')';
  
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    this.setState({
      color: {red: randomRed, green: randomGreen, blue: randomBlue}
    })

    console.log(this.state.color)
  };

  rangeInput = (e) => {
    let colorValue = e.target.value;

    switch(e.target.id) {
      case "red":
        this.setState(prevState => {
          return {color: {red: `${colorValue}`, green: `${prevState.color.green}`, blue: `${prevState.color.blue}`}}
        })
        break;
      case "green":
        this.setState(prevState => {
          return {color: {red: `${prevState.color.red}`, green: `${colorValue}`, blue: `${prevState.color.blue}`}}
        })
        break;
      case "blue":
        this.setState(prevState => {
          return {color: {red: `${prevState.color.red}`, green: `${prevState.color.green}`, blue: `${colorValue}`}}
        })
        break;
      default:
        break;
    }

  }

  render() {

    let rgb = `rgb(${this.state.color.red}, ${this.state.color.green}, ${this.state.color.blue})`
    return (
      <main style={{ backgroundColor: rgb}}>
        <input type="text" value={rgb} />
        <button type="button" onClick={this.handleClick}>random</button>

        <input type="range" id="red" value={this.state.color.red} min="0" max="255" onChange={this.rangeInput}/>
        <input type="range" id="green" value={this.state.color.green} min="0" max="255" onChange={this.rangeInput}/>
        <input type="range" id="blue" value={this.state.color.blue} min="0" max="255" onChange={this.rangeInput}/>

      </main>
    );
  }
}

export default App;
