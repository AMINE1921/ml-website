import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import DisplayPDF from "./DisplayPDF";
import cv from '../media/CV.pdf'

const Popup = () => {
    const [show, setShow] = useState(false);
    const showing = () => {
      setShow(!show);
    };
        return (
            <div>
                <div className="btn-download">
                  { isMobile ? <div>
                    <Button className="btn-cv" variant="outline-light" onClick={showing}>Regarder le CV</Button>
                    <Modal id="modalCV" size="lg" show={show} onHide={showing}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body><DisplayPDF pdf={cv} /></Modal.Body>
                    </Modal> </div> :
                    <a className="btn-cv btn btn-outline-light" href={cv} download="CV_MohamedLamine_OUBAYA">Télécharger le CV</a> }
                </div>
                
            </div>
        );
};

export default Popup;