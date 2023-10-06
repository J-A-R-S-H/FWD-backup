

// innerHTML vs textContent
const $btnHTML = $('#btn-innerhtml');
const $btnTextContent = $('#btn-textcontent');
const $btnHTMLJSText = $('#btn-innerhtml-js-text');
const $btnTextJSText = $('#btn-text-conent-js-text');
const $textInput01 = $('#input-content-01');
const $outputHTML = $('#innerhtml-output');
const $outputText = $('#textcontent-output');
// JS Content
const jsContent = '<ul><li>Cat</li><li>Dog</li><li>Hamster</li>';
const jsContentBad = `<p onclick="alert('Hello!!!')>Hello!</p>`;
// Get the content
const contentViaHTML = $textInput01.html();
const contentViaText = $textInput01.text();
// Add the content
$btnHTML.click(function(){

});
$btnTextContent.click(function(){

});
$btnHTMLJSText.click(function(){

});
$btnTextJSText.click(function(){

});

