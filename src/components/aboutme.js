import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';



class About extends Component {
    render () {
        return(
            <div className='about-body' style={{textAlign: 'center', paddingTop: '5em'}}>
                <Grid className='about-grid'>
                    <Cell col={9}>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwZzOUKSJxURYm5JiBw8_ytnE6PntWaMzoOyhSCvTgadacONl"
                    alt='avatar'
                    style={{height: '200px'}} 
                    />          
                <p > 
                    Leveraging analytics and problem-solving skills acquired as a biochemist with 
                    software engineering. Technically proficient in Ruby on Rails, JavaScript, 
                    React and a variety of other programming languages. Currently seeking 
                    Web Developer opportunities to create applications to improve 
                    our overall quality of life. As a graduate of the Flatiron School Software Engineering 
                    Immersive program and former college lecturer, I have further developed the 
                    ability to communicate technical applications effectively.
                </p>
                </Cell>
              </Grid>
            </div>
        );
    }
}

export default About; 