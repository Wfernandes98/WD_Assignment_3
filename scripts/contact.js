// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let submit= document.getElementById('submit-button');
let contactpage= doucument.getElementById('contact-page');

function displaymessage(){
    let message='<p style="font-size:24px;">Thank you for your message!</p>';
    contactpage.innerHTML= message;

}

submit.addEventListener('click', displaymessage);
