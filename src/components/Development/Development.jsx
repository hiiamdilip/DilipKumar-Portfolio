import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

import "../../style/style.css";

const Development = () => {

  return (
    <section id="development">
      <Container>
        <Title title="My Development Process" />
        <div className="row">
            <div className="col-sm-14">
                <div className="card-deck">
                    
                    <div className="card">
                        <div className="card-body bg-info">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Research & Strategy</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-warning">Ask First</h4>
                            <p className="card-text text-white">Before jumping into developing I always make sure what needs to be done and what I have to learn to hit the ground running. Then comes the process of breaking down work into atomic tasks and making sure the order and estimates of the tasks are perfect.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body bg-primary">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Brainstorming & Design</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-warning">Problem Solving</h4>
                            <p className="card-text text-white">In this step I take up each atomic task and find the best approach to tackle the problem and discuss multiple ideas with team members and create a rough design for both front-end and back-end tasks.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-body bg-secondary">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Development</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-warning">Bringing Ideas to life</h4>
                            <p className="card-text text-white">This step is all about executing the atomic tasks laid out in the previous steps.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body bg-success">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Quality Assurance</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-warning">Testing</h4>
                            <p className="card-text text-white">This step involves unit as well as integration testing of the feature. Still working on learning to write automated testcases.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
      </Container>
    </section>
  );
};

export default Development;
