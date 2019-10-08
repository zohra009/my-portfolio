import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';




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
                        <h2 style={{paddingTop: '1em'}}>Zohra Anwar</h2>
                        <h4 style={{color: 'gray'}}>Full Stack Web Deveolper</h4>
                        <hr style={{borderTop: '3px solid #0747bd', width: '70%'}}/>
                        <p> 
                        Leveraging analytics and problem-solving skills acquired as a biochemist with software
                        engineering training, I look to cross the chasm between technology and practical application. 
                        Technically proficient in Ruby on Rails, JavaScript, React and a variety of other programming 
                        languages, I am seeking Full Stack Developer opportunities to create applications to improve 
                        our overall quality of life. As a graduate of the Flatiron School Software Engineering Immersive 
                        program and former college lecturer, I have further developed the ability to communicate 
                        technical applications effectively.
                        </p>
                        <hr style={{borderTop: '3px solid #0747bd', width: '70%'}}/>
                        
                        <h5>E-mail</h5>
                        <p>zohra.anwar@flatironschool.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #0747bd', width: '70%'}}/>
                   </Cell>
                   
                   <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education  
                    endYear={2018}
                    schoolName='Flatiron School Immersive Coding Program'
                    schoolDescription='Software Engineering'
                    />
                    <Education  
                    endYear={2012}
                    schoolName='City College of New Yokr'
                    schoolDescription='Post-Baclurette Program for Sciences'
                    />
                    <Education  
                    endYear={2012}
                    schoolName='Hunter College'
                    schoolDescription='Bachelors of Science in Biochemistry'
                    />
                    <hr style={{borderTop: '3px solid #22947'}} />
                    <h2>Experience</h2>
                    < Experience 
                    startYear={2019}
                    endYear="present"
                    jobName="Self- Employed"
                    jobDescription="● Designed web applications using HTML, CSS, JavaScript, Bootstrap, Unity/C#, and React.
                                    ● Designing the CSS templates for all pages on the website working with CSS Background,
                                    positioning, text, border, margin, padding, and table.
                                    ● Gathered JSON responses from multiple APIs, parsed the data and presented on the UI layer.
                                    ● Implemented Responsive Design for all web applications.
                                    ● Interacted with clients and users in gathering the user's requirements.
                                    ● Debugged and resolved browser issues, mainly CSS.
                                    ● Developed simple HTML login pages where the user can log in his/her credentials and log in using OAuth.
                                    ● Worked with text editors like Visual Studio, Atom, and Sublime Text.
                                    ● Utilized the latest front-end Technologies for layouts.
                                    ● Wrote queries to insert, update or delete data in MYSQL database.
                                    ● Created forms in HTML and JavaScript for collection and validation data from the user."
                    />
                    < Experience 
                    startYear={2012}
                    endYear={2017}
                    jobName="Professor of Science and Technology"
                    jobDescription="
                    -Educator of Anatomy and Physiology, Medical Terminology, Billing and Coding, 
                    -Develop course work to ensure high passing rate of the medical assisting exam,
                    -Design an app to help students create flashcards and notes for their classes,
                    -Deveolped a science club 
                        - Designed to encourage students to use apps to help organize thier studying habit 
                         and become more modern innovative medical caretakers
                        - Introduced them to apps to destress before exams
                        -Taught and recommened apps that helped with budgeting while in college."
                    />
                    <hr style={{borderTop: '3px solid #22947'}} />
                    <h2>Skills</h2> 
                    <Skills
                        skill="React"
                        progress={100}
                    />      
                    <Skills
                        skill="HTML/CSS"
                        progress={90}
                    /> 
                    <Skills
                        skill="javascript"
                        progress={95}
                    /> 
                    <Skills
                        skill="Rails"
                        progress={100}
                    />   
                    <Skills
                        skill="Unity/C#"
                        progress={95}
                    />            
                   </Cell>

               </Grid>

           </div> 
        );
    }
}

export default Resume; 