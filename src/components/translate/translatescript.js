export function TranslateScript(text){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3fe541773dmsh4cd1f76c7d70721p18302fjsn6afb9e3945ef',
            'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
        },
        body: '{"q":'+text+',"source":"en","target":"es"}'
    };
    
    fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}