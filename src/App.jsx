import React from 'react';

class App extends React.Component {
  state = {
   // color: '#d1001c'
   color: 'rgb(255 255 255)'
  };

  handleClick = () => {
    //let randomColor = '#' + (Math.floor(Math.random() * 0xFFFFFF)).toString(16);

    let randomColor = 'rgb(' +  Math.floor(Math.random() * 255) + ' ' +  Math.floor(Math.random() * 255) + ' ' +  Math.floor(Math.random() * 255) + ')';
  

    this.setState({
      color: randomColor
    })

    console.log(randomColor)
  };

  render() {
    return (
      <main style={{ backgroundColor: this.state.color}}>
        <input type="text" value={this.state.color} />
        <button type="button" onClick={this.handleClick}>random</button>
      </main>
    );
  }
}

export default App;
