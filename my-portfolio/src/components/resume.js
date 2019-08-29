import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';



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
                    schoolName='Hunter College'
                    schoolDescription='Bachelors of Science in Biochemistry'
                    />
                    <hr style={{borderTop: '3px solid #22947'}} />
                    <h2>Experience</h2>
                    < Experience 
                    startYear={2019}
                    endYear=""
                    jobName="Dress For Success"
                    jobDescription="Front-End Deveolper working to help make the website more user friendly,
                     Special Events organizer to help raise money for the women's organization, 
                     and resume revamp to help secure interviews."
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
                    
                   </Cell>

               </Grid>

           </div> 
        );
    }
}

export default Resume; 