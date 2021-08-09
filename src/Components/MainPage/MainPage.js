import React from "react";
import "./MainPage.css";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="main_page" id="home">
          <div>
            <h4>Hello,my name is</h4>
            <p>Tejashree Kudale</p>
            <h2>Software Engineer</h2>
            <div className="mail">
              <i class="far fa-envelope"></i>
              <span className="mailid">tejukudale1903@gmail.com</span>
            </div>

            <div className="phone">
              <i class="fas fa-phone-square-alt"></i>
              <span className="mailid">7774960585</span>
            </div>
          </div>
          <div>
            <img src="Photograph.jpg" alt="My_Photo"></img>
          </div>
        </div>

        <div className="about" id="about">
          <h3>About me</h3>
          <div className="cards">
          <div className="card_img">
            <div className="education">
              <p>Education</p>
            </div>
          </div>
          <div className="card_img">
          <div className="certificates">
              <p>Certificates</p>
            </div>
          </div>
          </div>
          <p>
            {" "}
            Currently, I'm doing a Bachlor Of Engineering in Computer Science.I
            am selected as a Software Engineer at Persistent Systems located in
            Pune,Maharashtra. I will be joining Persistent Systems soon.
          </p>
        </div>
        <div className="skill-page" id="skills">
          <div className="skills">
            <h1>My skills</h1>
            <p>
              I believe in the fact that learning never stops and I am
              interested in learning new technologies and programming languages
              that will help me design and develop a better output in less time.
            </p>
          </div>
          <div>
            <img src="meta-chart.png" alt="skills"></img>
          </div>
        </div>
        <div className="work" id="project">
          <div>
            <img src="work.jpg" alt="Laptop_with_cofee_mug"></img>
          </div>

          <div className="project" >
            <h3>Projects done</h3>
            <p>Me and my team worked on project whose title is-</p>
            <p>
              IOT and Machine Learning based project for avoiding road accidents
              which occur due to drowsiness of driver and overheating of vehicle
              engine.
            </p>
            <div className="project_link">
              <a href="https://myiotproject890967901.wordpress.com/" target="_blank" rel="noreferrer">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="resume_page" id="resume">
          <div className="resume_img">
            <div>
              <div className="resume_link">Resume</div>
              <div className="link">
                <a href="Tejashree_Kudale_Resume.pdf" download>
                  Download Here
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="objective_heading">
              <h2>Career objective</h2>
            </div>
            <div className="objective">
              To pursue a challenging career and be a part of progressive
              organization that gives a scope to enhance my knowledge and
              utilizing my skill towards the growth of the organization.
            </div>
            <div className="social_profile">
            <div className="social">
            <div className="linked_in">
              <p>Connect with me</p>
            </div>
            </div>
           
            
            <div className="linked_icon"><a href="https://www.linkedin.com/in/tejashree-kudale-0134ab1a4/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></div>
            <div className="twitter_icon"><a href="https://twitter.com/Tejashr20316059" target="_blank" rel="noreferrer"><i class="fab fa-twitter-square"></i></a></div>
            <div className="github_icon"><a href="https://github.com/tejukudale1903" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}
export default MainPage;
