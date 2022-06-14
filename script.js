let buttonContact = document.querySelectorAll('.button__contact')

for(let i = 0; i<buttonContact.length; i++){
  buttonContact[i].addEventListener('click', function(){
    this.classList.toggle('active');
    let contactText = this.nextElementSibling;
    if(contactText.style.maxHeight){
      contactText.style.maxHeight = null;
    } else{
      contactText.style.maxHeight = contactText.scrollHeight + 'px'
    }
  })
}