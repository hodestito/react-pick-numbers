import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sorteio from './Sorteio'
import Button from 'react-bootstrap/Button';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.numMin = 1;
    this.numMax = 10;
    this.numExcludes = [3, 5, 8];
    this.state = { sorteado: "" };
  }

  sortear() {
    const NovoSorteado = Sorteio(this.numMin, this.numMax, this.numExcludes);
    this.setState({ sorteado: NovoSorteado });
    //console.log("numMin: " + this.numMin + " numMax: " + this.numMax + " numExcludes: " + this.numExcludes);
  }

  setParams(numMin, numMax, numExcludes) {
      this.numMin = numMin;
      this.numMax = numMax;
      this.numExcludes = numExcludes;
      this.setState({ sorteado: "" });
  }

  render() {
    return (
      <>
        <Header setParams={this.setParams.bind(this)} min={this.numMin} max={this.numMax} excludes={this.numExcludes}/>
        <div>
          <section>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Sortear um número entre {this.numMin} e {this.numMax}
              </p>
              <Button variant="outline-warning" onClick={this.sortear.bind(this)}>SORTEAR AGORA</Button>
              <p></p>
              <p>{this.state.sorteado}</p>
            </header>
          </section>
        </div>
      </>
    );
  }
}

export default App;