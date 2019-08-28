import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



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
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '23px', fontFamily: 'PT Serif'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    zohra.anwar@flatironschool.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '23px', fontFamily: 'PT Serif'}}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                    MySkypeId
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: '23px', fontFamily: 'PT Serif'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (123)456-7896
                                </ListItemContent>
                            </ListItem> 
                             
                        </List>
                    </div>

                </Cell>
               </Grid>
           </div> 
        );
    }
}

export default Contact; 