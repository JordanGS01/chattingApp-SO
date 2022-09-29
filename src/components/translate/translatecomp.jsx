//import {TranslateScript} from './translatescript'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import {BsTranslate} from 'react-icons/bs'
import Modal from 'react-bootstrap/Modal';

export const Translate = () => {

    const [textTrans, settextTrans] = useState("")
    const [translation, setTranslation] = useState({ data: { translations: { translatedText: "" } } })

    const fetchData = async (text) => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '3fe541773dmsh4cd1f76c7d70721p18302fjsn6afb9e3945ef',
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            body: '{"q":"' + text + '","source":"es","target":"en"}'
        };
        const request =
            fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
                .then(response => response.json())


        console.log(await request)
        setTranslation(await request)


    }


    const onFormSubmit = async (e) => {
        e.preventDefault()
        await fetchData(textTrans)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button type="button" class="nes-btn is-primary" onClick={handleShow}><BsTranslate size={20}></BsTranslate></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Translate</Modal.Title>
                </Modal.Header>

                <Modal.Body>{<BsTranslate size={50}></BsTranslate>}


                    <Form onSubmit={onFormSubmit} style={{ display: "block", justifyContent: "space-between " }}>
                    <br></br>
                    <h6>Translation:</h6>
                        <textarea id="textarea_field"
                        class="nes-textarea"
                        value={textTrans} onChange={(e) => { settextTrans(e.target.value) }}
                        ></textarea>
                        <br></br>
                        <div>
                        <button class="nes-btn is-primary" variant="success" type='submit' >
                            Translate
                        </button>
                        <br></br>
                        <br></br>
                        <h5>Text Translated:</h5>
                        <div class="nes-container is-rounded">
                        <span style={{fontSize: "12px"}}>{translation.data.translations.translatedText}</span>
                        </div>
                       
                        
                        </div>
                        
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="nes-btn is-error" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}