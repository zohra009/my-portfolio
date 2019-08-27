import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
           <div style={{width: '100%', margin: 'auto'}}> 
            <Grid className="landing-grid">
            <Cell col={12}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwZzOUKSJxURYm5JiBw8_ytnE6PntWaMzoOyhSCvTgadacONl"
                alt="avatar"
                className="avatar-img" 
                />
                <div className="banner-text">
                <h1>Full Stack Web Deveolper</h1>
                <hr/>
                <p>
                    HTML/CSS | Bootstrap | Semantic UI | Ruby| JQuery | Sinatra | Ruby on Rails | Javascript | React | Redux | Unity | C#
                </p>
                <div className="social-links">

                {/* linkedIn  */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                {/* Github  */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                </div>

                </div>
            </Cell>
            </Grid>
           </div>
        );
    }
}

export default Landing;