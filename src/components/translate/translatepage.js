function translate(lang,text){
    let transUrl = 'https://nodejs.org/en/';
    translate.getPage(transUrl).then(function(htmlStr){
      console.log(htmlStr.length)
    });
}
export function translate();