import React, { Component } from 'react';
import pockybebe from './images/blinky.gif';
import spocky from './images/pocky1.png';
import gpocky from './images/gpocky.png';
import cpocky from './images/cpocky.png';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={isDone: false};
    }

  render() {
    return (
      <div className="App">
          <h2>30 apps in 30 days</h2>

          {this.state.isDone &&
              <img src={pockybebe} className="pocky" alt="pocky" />
          }

        <p className="title">
        {!this.state.isDone &&
            <div>We're going to need snacks for this..</div>
            }

            {this.state.isDone &&
                <div> Yum! I feel like I could make at least 29 more apps now.. </div>
            }


        DAY 1: Collect the pocky!
        </p>
        <Pocky onDone={isDone => this.setState({ isDone })} />
      </div>
    );
  }
}
// I'm using states (because the data is changing) to make the Pocky and stars appear and disappear.
// The props need to be set up even though they won't be used.
class Pocky extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.reset = this.reset.bind(this);

        this.collectedItem = this.collectedItem.bind(this);
    }

    reset () {
        this.setState({
            items: []
        })
        this.props.onDone(false);
    }

    collectedItem(item) {
        if (this.state.items.length == 6) {
            this.props.onDone(true);
        }
        this.setState(prevState => ({
            items: prevState.items.concat(item)
        }));
    }

    render() {
        return (
            <div className="collectItems">
                {this.state.items.indexOf("spocky1") == -1 &&
                    <img src={spocky} className="item" alt="spocky" onClick={e => this.collectedItem("spocky1")}/>
                }
                {this.state.items.indexOf("gpocky1") == -1 &&
                    <img src={gpocky} className="item" alt="gpocky" onClick={e => this.collectedItem("gpocky1")}/>
                }
                {this.state.items.indexOf("cpocky1") == -1 &&
                    <img src={cpocky} className="item" alt="cpocky" onClick={e => this.collectedItem("cpocky1")}/>
                }
                {this.state.items.indexOf("spocky") == -1 &&
                    <img src={spocky} className="item" alt="spocky" onClick={e => this.collectedItem("spocky")}/>
                }
                {this.state.items.indexOf("gpocky") == -1 &&
                    <img src={gpocky} className="item" alt="gpocky" onClick={e => this.collectedItem("gpocky")}/>
                }
                {this.state.items.indexOf("cpocky") == -1 &&
                    <img src={cpocky} className="item" alt="cpocky" onClick={e => this.collectedItem("cpocky")}/>
                }
                {this.state.items.indexOf("spocky3") == -1 &&
                    <img src={spocky} className="item" alt="spocky" onClick={e => this.collectedItem("spocky3")}/>
                }
                <div>
                    <button className="button" onClick={this.reset}>Play Again!</button>
                </div>
            </div>
        );
    }
}

export default App;
