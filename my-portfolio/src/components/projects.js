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
                <div className="projects-grid">

                    {/* React Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url( https://media.istockphoto.com/photos/close-up-of-fast-food-snacks-and-drink-on-table-picture-id487077896?k=6&m=487077896&s=612x612&w=0&h=BQ-_Fv1sZ7_DvL4Jbto3j83efC2lvLoEdjByXy67n-Y=) center/ cover '}}>
                        React Project #1
                    </CardTitle>
                    <CardText>
                        Looking on the go cheap food while enjoying a boozy Friyay with friends? You're in luck 
                        thanks to DrunkFoodz App. Your favorite DrunkFoodz within thumbs reach. 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/zohra009/react_front_end" rel="noopener noreferrer" target="_blank"><Button colored> Github</Button></a>
                        <a href="https://youtu.be/jZSJVP_PXEg"><Button colored>Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                    </Card>

                    {/* React Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#01104b', height: '176px', background: 'url( https://www.domains.co.za/templates/hostedtpl/custom/img/sitebuilder/domains-sitepro-01b.png) center/ cover '}}>
                        React Project #2
                    </CardTitle>
                    <CardText>
                        Looking on the go cheap food while enjoying a boozy Friyay with friends? You're in luck 
                        thanks to DrunkFoodz App. Your favorite DrunkFoodz within thumbs reach. 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/zohra009/react_front_end" rel="noopener noreferrer" target="_blank"><Button colored> Github</Button></a>
                        <a href="/"><Button colored>Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* HTML/CSS Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#01104b', height: '176px', background: 'url( https://i.udemycdn.com/course/750x422/405926_02c8_2.jpg) center/ cover '}}>
                        HTML/CSS Project #1
                    </CardTitle>
                    <CardText>
                        Looking on the go cheap food while enjoying a boozy Friyay with friends? You're in luck 
                        thanks to DrunkFoodz App. Your favorite DrunkFoodz within thumbs reach. 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/zohra009/react_front_end" rel="noopener noreferrer" target="_blank"><Button colored> Github</Button></a>
                        <a href="/"><Button colored>Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                    </Card>
                </div>
            )
        }else if (this.state.activeTab === 2) {
            return (
            <div className="projects-grid">
                 {/* Ruby Project 1 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.sheknows.com/wp-content/uploads/2018/04/baby-zodiac.jpg) center/ cover '}}>
                        Ruby Project #1
                    </CardTitle>
                    <CardText>
                        Looking on the go cheap food while enjoying a boozy Friyay with friends? You're in luck 
                        thanks to DrunkFoodz App. Your favorite DrunkFoodz within thumbs reach. 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/zohra009/immersive-small-rails-project-dumbo-web-080618/tree/haleys_birthday" rel="noopener noreferrer" target="_blank"><Button colored> Github</Button></a>
                        <a href="https://youtu.be/Jjk2_tPHVj0"><Button colored>Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
            </div>
            )
        }else if (this.state.activeTab === 3) {
            return (
                
                <div className="projects-grid"> 
                    {/* JS Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url( https://i.udemycdn.com/course/750x422/405926_02c8_2.jpg) center/ cover '}}>
                        Javascript Project #1
                    </CardTitle>
                    <CardText>
                        Looking on the go cheap food while enjoying a boozy Friyay with friends? You're in luck 
                        thanks to DrunkFoodz App. Your favorite DrunkFoodz within thumbs reach. 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/zohra009/react_front_end" rel="noopener noreferrer" target="_blank"><Button colored> Github</Button></a>
                        <a href="https://youtu.be/8XXm5ecQEGc"><Button colored>Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                    </Card>
                   </div>
                   )
        }else if (this.state.activeTab === 4) {
            return (
                <div className="projects-grid"> 
                        {/* Unity Project 1 */}

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url( https://i.udemycdn.com/course/750x422/405926_02c8_2.jpg) center/ cover '}}>
                            Javascript Project #1
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

                     
                   
                        {/* Unity Project 2 */}

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url( https://i.udemycdn.com/course/750x422/405926_02c8_2.jpg) center/ cover '}}>
                            Javascript Project #1
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
                
                <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
                
                
           </div> 
        );
    }
}

export default Projects; 