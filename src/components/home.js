// import { useEffect, useState } from 'react';
import { reactProjects, ajaxProjects, basicProjects } from '../data';
import { Cards } from './cards';
import { Intro } from './intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import { Experience } from './experience';

const Home = () => {

    return (
        <div className='details'>
            <Intro />
            <div id="intro">
                <Experience />
                {/* <div id="skillsRow" className="row"> */}
                    <div id="mySkills">
                        My skills : <br />
                        <ul>
                            <li><nobr>Languages</nobr> : Html, css, javascript/typescript, php</li>
                            <li><nobr>Frameworks</nobr> : React js, express js</li>
                            <li><nobr>Databases</nobr> : Mysql, mongodb</li>
                            <li><nobr>Libraries</nobr> : Bootstrap, react-bootstrap, animate.css, material-ui, reduxjs toolkit</li>
                            <li><nobr>Other</nobr> : Api integration, firebase, graphql, github</li>
                        </ul>
                    </div>
                {/* </div> */}
                <a href="mailto:akashngadhave@gmail.com">Hire me !</a>
                <p>
                    Following are some projects I worked on.
                </p>
            </div>
            <h2>React JS projects</h2>
            <div className="row">
                {reactProjects.map((project, index) => { return (<Cards key={index} name={project.name} img={project.img} link={project.link} description={project.description} />) })}
            </div>
            {/**<h2>Next JS projects</h2>
            <div className="row">
                {nextProjects.map((project, index) => { return (<Cards key={index} name={project.name} img={project.img} link={project.link} description={project.description} />) })}
            </div>*/}
            <h2>Ajax projects</h2>
            <div className="row">
                {ajaxProjects.map((project, index) => { return (<Cards key={index} name={project.name} img={project.img} link={project.link} description={project.description} />) })}
            </div>
            <h2>Html, css and javascript projects</h2>
            <div className="row">
                {basicProjects.map((project, index) => { return (<Cards key={index} name={project.name} img={project.img} link={project.link} description={project.description} />) })}
            </div>
            <div>
                <div className='text-center p-2 bg-white'>Developed with love by Akash Gadhave</div>
            </div>
        </div>
    );
}

export default Home;