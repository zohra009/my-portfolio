import React, {Component} from 'react';
import { Tabs, Tab } from 'react-mdl';



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
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
           </div> 
        );
    }
}

export default Projects; 