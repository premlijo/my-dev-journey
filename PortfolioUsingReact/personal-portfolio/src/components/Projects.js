import { Col, Row,  Container, Tab, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import {ProjectCard2} from "./ProjectCard2";
import {ProjectCard3} from "./ProjectCard3";
import {ProjectCard4} from "./ProjectCard4";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/projImg1.jpg";
import projImg from "../assets/img/skill8.svg";
import projImg2 from "../assets/img/portfolio.png";
import projImg5 from "../assets/img/portfolio2.png"
import projImg3 from "../assets/img/groupchat.png"
import projImg4 from "../assets/img/productform1.png"
import projImg6 from "../assets/img/productform2.png"


export const Projects = () => {

    const projects = [
        {
            title: "Bug Tracking System",
            description: "A simple Java-based bug tracking system with a console interface. Manage bugs by adding, updating statuses, assigning to team members, and displaying bug details. Ideal for learning basic Java concepts, object-oriented programming, and CRUD operations.",
            imgUrlLogo: projImg,
            imgUrl: projImg1,
            
        },
        
    ];
    const projects2 = [
        {
            title: "Personal Portfolio Using React",
            description: "An interactive portfolio built with React, showcasing projects, skills, and personal achievements. It highlights responsive design and modern front-end development skills.",
            imgUrlLogo: projImg,
            imgUrl: projImg2,
            imgUrl2: projImg5,
            
        },
    ];
        const projects3 = [
        {
            title: "Simple Group Chat Application",
            description: "A real-time group chat application built with React, enabling seamless communication between users. It showcases essential React concepts, state management, and component-based architecture.",
            imgUrlLogo: projImg,
            imgUrl: projImg3,
            
        },
    ];
    const projects4 = [
        {
            title: "Dynamic Product Form",
            description: "A customizable product form for adding and updating product details, built with React. It demonstrates form handling, validation, and dynamic rendering capabilities.",
            imgUrlLogo: projImg,
            imgUrl: projImg4,
            imgUrl2: projImg6, 
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Java</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">React js</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="justify-content-center d-flex">
                                        {
                                            projects.map((project, index) =>{
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row className="justify-content-center d-flex">
                                        {
                                            projects2.map((project, index) =>{
                                                return (
                                                    <ProjectCard2 key={index} {...project} />
                                                )
                                            })
                                        }
                                        {
                                            projects3.map((project, index) =>{
                                                return (
                                                    <ProjectCard3 key={index} {...project} />
                                                )
                                            })
                                        }
                                        {
                                            projects4.map((project, index) =>{
                                                return (
                                                    <ProjectCard4 key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">lorem</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}