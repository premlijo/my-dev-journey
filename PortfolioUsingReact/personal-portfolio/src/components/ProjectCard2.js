import { Col } from "react-bootstrap";


export const ProjectCard2 = ({title, description, imgUrl, imgUrl2, imgUrlLogo}) => {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx2">
                <img src={imgUrl} width='100%' />
                <img src={imgUrl2} width='100%' height='100%'/>
                <div className="proj-txtx2">
                    <h4>{title}</h4>
                    <span>{description}</span><br/>
                    <a href="https://github.com/premlijo/BugTracker-Java" target="blank"><img src={imgUrlLogo}></img></a>
                </div>
            </div>
        </Col>
        
    )
}