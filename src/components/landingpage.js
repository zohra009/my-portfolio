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
                    <a href="https://www.linkedin.com/in/zohra-anwar/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                {/* Github  */}
                <a href="https://github.com/zohra009" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Medium  */}
                <a href="https://medium.com/@anzohra" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-medium" aria-hidden="true" />
                    </a>
                {/* Youtube  */}
                <a href="http://youtube.com/channel/UCFxPo6I9foNplmAwr1vFAEw/videos?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true" />
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