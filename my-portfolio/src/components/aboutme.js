import React, {Component} from 'react';



class About extends Component {
    render () {
        return(
            <div style={{textAlign: 'center', paddingTop: '5em'}}>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwZzOUKSJxURYm5JiBw8_ytnE6PntWaMzoOyhSCvTgadacONl"
                alt='avatar'
                style={{height: '200px'}} 
                />
           
           
               <p style={{width: '50%', margin: 'auto', paddingTop: '2em', fontSize: '18px', fontFamily: 'Roboto Condensed'}}> 
                Leveraging analytics and problem-solving skills acquired as a biochemist with 
                software engineering training, I look to cross the chasm between technology 
                and practical application. Technically proficient in Ruby on Rails, JavaScript, 
                React and a variety of other programming languages, I am seeking 
                Full Stack Developer opportunities to create applications to improve 
                our overall quality of life. As a graduate of the Flatiron School Software Engineering 
                Immersive program and former college lecturer, I have further developed the 
                ability to communicate technical applications effectively.
              </p>
            </div>
        );
    }
}

export default About; 