import React from "react";
import { useState,useEffect } from "react";
import skill_data from './data/skills.json';
import about_me from './data/about_me.json';
import { ProgressBar } from "react-bootstrap";

const About = () => {
    const [aboutMe, setAboutMe] = useState([]);
    const [skills, setSkills] = useState([]);
    useEffect(()=>{
        setAboutMe(about_me.aboutMe);
        setSkills(skill_data.skills);
    },[]);

    return (
        <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {skills ? skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <div className="d-flex">
                                <div className="me-auto">{skill.content}</div>
                                <div className="ms-auto">
                                {skill.percentage}
                                </div>
                            </div>
                            <ProgressBar
                            now={skill.value}
                            label={skill.percentage}
                            animated={true}
                            visuallyHidden={true}
                            />
                          </React.Fragment>
                        );
                      }):'loading...'}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {aboutMe?aboutMe.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      }):'loading...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;