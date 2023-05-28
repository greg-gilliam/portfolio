import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.major}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.graduationMonth}
                          {item.graduationYear}
                          {item.GPA}
                        </em>
                      </p>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>{item.Alchemy}</h3>
                            <p className="info">{item.specialty}
                            <span>&bull;</span>{" "}
                            <em className="date">
                                {item.startMonth}
                                {item.startYear}
                                {item.completedMonth}
                                {item.completedYear}
                                {item.Description}
                            </em>
                            </p>
                        </div>
                    </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
                {
                    resumeData.work && resumeData.work.map(
                        (item) => 
                    {
                        return(
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{item.CompanyName1}</h3>
                                    <p className="info">
                                        {item.title}
                                        <span>&bull;</span>
                                        <em className="date">{item.StartDate}{item.EndDate}</em>
                                    </p>
                                    <p>{item.Achievements}</p>
                                </div>
                                
                                <div className="row item">
                                <div className="twelve columns">
                                    <h3>{item.CompanyName2}</h3>
                                    <p className="info">
                                        <span>&bull;</span>
                                        <em className="date">{item.StartDate2}{item.EndDate2}</em>
                                    </p>
                                    <p>{item.Achievements2}</p>
                                </div>
                            </div>
                            )
                    {"}"}
                )
                {"}"}
                {"}"}
            </div>
        </div>
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col"></div>
            <p>
                {resumeData.skillsDescription}
            </p>
            <div className="bars">
                <ul className="skills">
                    {
                        resumeData.skills && resumeData.skills.map((item) => {
                            return(
                                <li>
                                    <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
                                    <em>{item.skillname}</em>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
      </section>
    );
  }
}
