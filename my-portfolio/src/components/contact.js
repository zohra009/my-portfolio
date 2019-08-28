import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';



class Contact extends Component {
    render () {
        return(
           <div className='contact-body'>
               <Grid className="contact-grid">
                <Cell col={6}> 
                    <h1>Zohra Anwar </h1>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwZzOUKSJxURYm5JiBw8_ytnE6PntWaMzoOyhSCvTgadacONl"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Thanks for visiting my portfolio!
                    </p>
                </Cell>
                <Cell col={6}> half page</Cell>
               </Grid>
           </div> 
        );
    }
}

export default Contact; 