import React, { Component } from "react";
export default class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="projects">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out some of my projects.</h1>
            <div
              id="projects-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              alt=""
            >
              {resumeData.projects &&
                resumeData.projects.map((item) => {
                  return (
                    <div className="columns projects-item">
                      <div className="item-wrap">
                        <a href="modal-01">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt=""
                          />
                          <div className="overlay">
                            <div className="projects-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
