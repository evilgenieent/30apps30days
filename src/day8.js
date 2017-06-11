import React, {Component} from 'react';
import wolf from './images/wolf.png';
import './day8.css'

var moonphases = ['🌑' ,'🌒','🌓','🌔', '🌕', '🌖', '🌗', '🌘'];

class Eight extends Component {
    constructor(props) {
        super (props);
        this.state = {
            currentFrame: 0
        }
    }

    componentDidMount () {
        this.intervalId = setInterval(function () {
            this.setState ({
                currentFrame: (this.state.currentFrame + 1) % moonphases.length
            });
        }.bind(this), 200)
    }

    componentWillUnmount () {
        clearInterval(this.intervalId);
    }
    
    render() {
        return (
            <div>
                <div className="emoji-text">
                    <span role="img" aria-label="moon phases emojis">
                        {moonphases[this.state.currentFrame]}
                    </span>
                </div>

                {this.state.currentFrame !== 4 &&
                    <div className="emoji-text">
                        <span role="img" aria-label="farmer emoji">
                            👨‍🌾
                        </span>
                    </div>
                }
                {this.state.currentFrame === 4 &&
                    <div className="emoji-text">
                        <img src={wolf} alt="wolf" />
                    </div>
                }
                <br />
                <br />
                <div className="footer">
                    Fork this on my github <a href="https://github.com/lillypiri/30apps30days">@lillypiri</a>.
                </div>
            </div>

        )
    }
}


export default Eight;
