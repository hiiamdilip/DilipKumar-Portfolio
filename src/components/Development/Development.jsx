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
                            <h4 className="card-subtitle mb-4 font-weight-bold text-dark">Ask First</h4>
                            <div className="card-text text-white text-left">
                                <p>Before jumping into developing I always make sure what needs to be done and what I have to learn to hit the ground running.</p>
                                <p>Then comes the process of breaking down work into atomic tasks and making sure the order and estimates of the tasks are perfect.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body bg-primary">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Design</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-dark">Problem Solving</h4>
                            <div className="card-text text-white text-left">
                                <p>In this step I take up each atomic task and find the best approach to tackle the problem.</p>
                                <p>After discussing multiple ideas with team members I create a rough design for both front-end and back-end tasks.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-body bg-secondary">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Development</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-dark">Bringing Ideas into life</h4>
                            <div className="card-text text-white text-left">
                                <p>This step is all about executing the atomic tasks laid out in the previous steps.</p>
                                <p>Here i also make sure that i am following best development practices in terms of design patterns and principles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body bg-success">
                            <h3 className="card-header bg-dark text-white mb-4 font-weight-bold">Quality Assurance</h3>
                            <h4 className="card-subtitle mb-4 font-weight-bold text-dark">Testing</h4>
                            <div className="card-text text-white text-left">
                                <p>This step involves testing the feature thoroughly in terms of unit as well as integration testing.</p>
                                <p>After taking sign-off from from QA, PO, PSR and other stakeholders i proceed for merging and deploying the feature.</p>
                            </div>
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
