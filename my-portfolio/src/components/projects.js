import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0 ) {
            return (
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url( https://media.istockphoto.com/photos/close-up-of-fast-food-snacks-and-drink-on-table-picture-id487077896?k=6&m=487077896&s=612x612&w=0&h=BQ-_Fv1sZ7_DvL4Jbto3j83efC2lvLoEdjByXy67n-Y=) center/ cover '}}>
                        React Project #1
                    </CardTitle>
                    <CardText>
                        Looking on the go cheap food while enjoying a boozy Friyay with friends? You're in luck 
                        thanks to DrunkFoodz App. Your favorite DrunkFoodz within thumbs reach. 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 1) {
            return (<div><h1>this is html/css</h1></div>)
        }else if (this.state.activeTab === 2) {
            return (<div><h1>this is Ruby</h1></div>)
        }else if (this.state.activeTab === 3) {
            return (<div><h1>this is Javascript</h1></div>)
        }else if (this.state.activeTab === 4) {
            return (<div><h1>this is Unity</h1></div>)
        }
    }
   
    render () {
        return(
           <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Ruby</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Unity</Tab>
                </Tabs>
                
                <Grid className="projects-grid">
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
                
                
           </div> 
        );
    }
}

export default Projects; 