const submitButtonElement =  document.querySelector('.submit-button')

const submitButtonHendler = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    
}

submitButtonElement.addEventListener('click', submitButtonHendler)