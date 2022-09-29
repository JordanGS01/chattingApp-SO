//import {TranslateScript} from './translatescript'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { async } from '@firebase/util';
import { useEffect, useState } from "react";
/*
async function TranslateScript(text){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3fe541773dmsh4cd1f76c7d70721p18302fjsn6afb9e3945ef',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
        },
        body: '{"q":'+text+',"source":"en","target":"es"}'
    };
    
    await fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        
}
*/
export const Translate = () => {

    const [textTrans, settextTrans] = useState("")
    const [translation,setTranslation] = useState({data:{translations:{translatedText:""}}})

    const fetchData = async (text) => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '3fe541773dmsh4cd1f76c7d70721p18302fjsn6afb9e3945ef',
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            body: '{"q":"'+text+'","source":"en","target":"es"}'
        };
        const request = 
            fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
                .then(response => response.json())


        console.log(await request)
        setTranslation(await request)
        

    }


    const onFormSubmit =async (e) => {
        e.preventDefault()
        await fetchData(textTrans)
    }


    return (
        <div>
            <Form onSubmit={onFormSubmit} style={{ display: "flex", justifyContent: "space-between " }}>
                <input
                    //onSubmit={(e) => fetchData(e.target.value)} 
                    value={textTrans} onChange={(e) => { settextTrans(e.target.value) }}
                />
                <span>{translation.data.translations.translatedText}</span>
                <Button variant="success" type='submit' style={{ backgroundColor: "green" }}>
                </Button>
            </Form>
        </div>
    );
}