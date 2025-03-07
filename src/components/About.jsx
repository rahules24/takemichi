import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from '../assets/img/me.png';
import field from '../assets/img/1242825.png';
// import field from '../assets/img/mario.jpg';
import takemikey from '.././assets/img/takemikey.webp'
import Navbar from './Navbar'


export default function About() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Kafkaesque", "Apollonian", "Hikikomori", "Stoyteller", "Machiavellian", "Gamemaker", "Hellinist"];
    const typingSpeed = 150;
    const pauseDuration = 1000;

    useEffect(() => {
        const handleTyping = setInterval(() => {
            typeWriter();
        }, typingSpeed);

        return () => clearInterval(handleTyping);
    }, [text, isDeleting]);

    const typeWriter = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        // If full text is reached, pause before deleting
        if (!isDeleting && updatedText === fullText) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
        }
        // If deletion is done, move to next word
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    const fontStyle = {
        fontFamily: 'Lobster, cursive',
        fontSize: '22px',
        color: '#fff',
        padding: '12px',
        // textShadow: '1px 1px 3px rgba(255, 100, 0, 0.9)',
    };

    return (
        <div style={{
            backgroundImage: `url(${field})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh', // Use 100vh for full height
            position: 'fixed', // Change to fixed to cover the viewport
            overflow: 'hidden', // Prevent any scrollbars
            zIndex: '1' // Set behind other elements
        }}>
            <Navbar />
            <Container style={{
                backgroundColor: 'rgba(0,0,0,0)', // Transparent background
                position: 'relative', // Ensure the container is on top of the background
                zIndex: '1', // Higher z-index for interaction
                height: '100vh', // Full height for the container
                overflow: 'hidden', // Prevent overflow within the container
                marginTop: '15vh',
                marginLeft: '10vh'
            }}>
                <Row className='my-3' style={{ width: '50%', marginY:'15px' }}>
                    <h1 className="my-4" style={{color:'#fff'}}>README.md</h1>
                    <div className={`accordion`} id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"
                                    style={fontStyle}>
                                    SirenScripts
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    A vibrant showcase of my creative journey, hidden in plain sight, waiting to be explored. <i>It's not just code; it's a treasure trove of art.
                                    <a style={{ textDecoration: 'none' }} href="https://rahules24.github.io/sirenscripts/"> visit xd</a>
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button style={fontStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Takemichi
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <Container className='align-item-center'>
                                        <Row>
                                                <div style={{ display: 'flex', alignItems: 'left' }}>
                                            <Col sm={3}>
                                                    <img
                                                        src={takemikey}
                                                        alt="Takemikey"
                                                        style={{ width: '95%', height: 'auto',   borderRadius: '10%' }}
                                                        />                                                    
                                                        </Col>
                                            <Col sm={9}>
                                                    <div style={{ lineHeight: '1.5', marginLeft: '45px', }}>
                                                    <br /><br /><br />
                                                        <i>“Takemitchy is my hero.”</i><br />— Mikey, Chapter 188
                                                    </div>
                                            </Col>
                                                </div>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button style={fontStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Ráhul
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <Container className='align-item-center'>
                                        <Row>
                                            <Col sm={6}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <img
                                                        src={me}
                                                        alt="Profile"
                                                        style={{ width: '35%', height: 'auto', marginRight: '20px', borderRadius: '10%' }}
                                                    />
                                                    <div style={{ lineHeight: '1.5' }}>
                                                        <span>Ráhul</span><br />
                                                        <span>rahul.es2024@gmail.com</span><br />
                                                        <span>Tarragona, Spain</span><br />
                                                        <span className="txt-rotate">
                                                            <span className="wrap">
                                                                <i>#{text}</i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
