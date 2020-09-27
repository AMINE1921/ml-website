import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';

function Popup(props) {
    const [show, setShow] = useState(false);
    const showing = () => {
      setShow(!show);
    };
        return (
            <div ref={props.refScroll} className="col-6 card">
                <img className="card-img" onClick={showing} src={props.img} alt="Projet." />
                <i class="fas fa-eye fa-5x view" onClick={showing}></i>
                <Modal id="modalProject" size="lg" show={show} onHide={showing}>
                    <Modal.Header closeButton><h3>{props.title}</h3></Modal.Header>
                    <Modal.Body>
                        { props.imgPopup ? <img className="card-img" src={props.imgPopup} alt="Projet" /> : null }
                        { props.vidPopup ? <iframe width="100%" height="400" src={props.vidPopup} title="Démonstration du projet final" frameborder="0"></iframe> : null }
                        { (props.git || props.link ) ? <div className="links d-flex">
                            { props.link ? <a target="_blank" rel="noopener noreferrer" href={props.link}><i class="fas fa-link fa-2x"></i></a> : null }
                            { props.git ? <a target="_blank" rel="noopener noreferrer" href={props.git}><i class="fab fa-github fa-2x"></i></a> : null }
                        </div> : null}
                    </Modal.Body>
                </Modal>
            </div>
        );
};

export default Popup; 