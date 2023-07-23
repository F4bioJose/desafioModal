const openModal = document.getElementById("openModal")
const body = document.querySelector('body')
const modalWrapper = document.querySelector('.modalWrapper')


 function clickOnButton() {
     openModal.style.display = "none";
     body.style.backgroundColor = "#7f828c";
     modalWrapper.style.display = "block";
 }

 openModal.addEventListener('click',clickOnButton)

 document.addEventListener('keydown', clickOnEscButton)

 function clickOnEscButton(event) {
    
    if(event.key === 'Escape') {
        openModal.style.display = "block";
        body.style.backgroundColor = "#cec2e6";
        modalWrapper.style.display = "none";
        }
    }






