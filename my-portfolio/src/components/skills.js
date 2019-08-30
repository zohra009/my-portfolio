import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skill extends Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={12}> 
                        <div style={{display: 'flex'}}></div>
                     </Cell>                 
                </Grid>
            </div>
        )
    }
}

export default Skill;