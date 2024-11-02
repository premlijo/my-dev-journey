import { Col } from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl, imgUrlLogo}) => {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} width='100%' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href="https://github.com/premlijo/BugTracker-Java" target="blank"><img src={imgUrlLogo}></img></a>
                </div>
            </div>
        </Col>
    )
}