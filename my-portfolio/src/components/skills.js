import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skill extends Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={12}> 
                        <div style={{display: 'flex'}}>
                            {this.props.skill} 
                            <ProgressBar style={{margin: 'auto', width: '75%'}} /> 
                        </div>
                     </Cell>                 
                </Grid>
            </div>
        )
    }
}

export default Skill;