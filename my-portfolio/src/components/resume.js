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
                        <h2 style={{paddingTop: '2em'}}>Zohra Anwar</h2>
                        <h4 style={{color: 'gray'}}>Full Stack Web Deveolper</h4>
                        <hr style={{borderTop: '3px solid #833fb2'}}/>
                   </Cell>
                   <Cell className="resume-right-col" col={8}>Right Side</Cell>

               </Grid>

           </div> 
        );
    }
}

export default Resume; 