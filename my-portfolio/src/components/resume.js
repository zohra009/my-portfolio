import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';



class Resume extends Component {
    render () {
        return(
           <div>
               <Grid>
                   <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwZzOUKSJxURYm5JiBw8_ytnE6PntWaMzoOyhSCvTgadacONl"
                            alt='avatar'
                            style={{height: '200px'}} 
                            />
                        </div>
                        <h2 style={{paddingTop: '0em'}}>Zohra Anwar</h2>
                        <h4 style={{color: 'gray'}}>Full Stack Web Deveolper</h4>
                        <hr style={{borderTop: '3px solid #0747bd', width: '70%'}}/>
                        <p> 
                        Full Stack Web Developer from Flatiron Schools Immersive Coding Program with a biochemistry
                        background. Develop practical responsive apps with optimal user experience. Have deep 
                        knowledge of Ruby, Ruby on Rails, SQL, JQuery, JavaScript, React, Redux, CSS, HTML,
                        Bootstrap, Semantic UI,Unity and C#. Discovered web development through a passion for 
                        scientific research, data analytics, and teching. Inspired by creating innovative technology with a 
                        focus on quality and simplicity. 
                        </p>
                        <hr style={{borderTop: '3px solid #0747bd', width: '70%'}}/>
                        <h5>Address</h5>
                        <p>123 blah st New York NY 10003</p>
                        <h5>Phone</h5>
                        <p>123-456-6789</p>
                        <h5>E-mail</h5>
                        <p>zohra.anwar@flatironschool.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>








                   </Cell>
                   <Cell className="resume-right-col" col={8}>Right Side</Cell>

               </Grid>

           </div> 
        );
    }
}

export default Resume; 