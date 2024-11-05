import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/photo.png";
import { Prev } from "react-bootstrap/esm/PageItem";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Full Stack Developer", "MERN Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Prem Lijo `}<br /><span className="wrap">{text}</span></h1>
                        <p>I'm an aspiring software developer currently working as a Software Developer Intern at Yoho Technologies Private Limited, transitioning from my previous role as a process associate. Passionate about coding and problem-solving, I'm excited to dive deeper into software development and learn from hands-on experiences. I'm eager to contribute, grow my skills in Software Development, and make a positive impact in the tech industry.</p>
                        <button onClick={() => window.location.href = "mailto:lijo.official24@gmail.com"}>Let's connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="header-container">
                        <img src={headerImg} alt="Header Image" className="photo-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}