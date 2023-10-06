

// innerHTML vs textContent
const btnInnerHTML = document.getElementById('btn-innerhtml');
const btnTextContent = document.getElementById('btn-textcontent');
const btnInnerHTMLJSText = document.getElementById('btn-innerhtml-js-text');
const btnTextContentJSText = document.getElementById('btn-text-conent-js-text');
const textInput01 = document.getElementById('input-content-01');
const outputInnerHTML = document.getElementById('innerhtml-output');
const outputTextContent = document.getElementById('textcontent-output');
// JS Content
const jsContent = '<ul><li>Cat</li><li>Dog</li><li>Hamster</li>';
const jsContentBad = `<p onclick="alert('Hello!!!')>Hello!</p>`;
// Get the content
const contentViaInnerHTML = textInput01.innerHTML;
const contentViaTextContent = textInput01.textContent;
// Add the content
btnInnerHTML.addEventListener('click', function(){
    outputInnerHTML.innerHTML = contentViaInnerHTML;
    //outputInnerHTML.innerHTML = contentViaTextContent;
});
btnTextContent.addEventListener('click', function(){
    outputTextContent.textContent = contentViaTextContent;
    //outputTextContent.textContent = contentViaInnerHTML;
});
btnInnerHTMLJSText.addEventListener('click', function(){
    outputInnerHTML.innerHTML = jsContent;
});
btnTextContentJSText.addEventListener('click', function(){
    outputTextContent.textContent = jsContentBad;
});

