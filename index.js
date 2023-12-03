// sidebar
function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
//contact us
document.querySelector('#contact-us').addEventListener('click', function(){
    document.querySelector('.popup').classList.add("active")
});
document.querySelector('#contact-mobile').addEventListener('click', function(){
    document.querySelector('.popup').classList.add("active")
});
document.querySelector('.popup .close-btn').addEventListener('click', function(){
    document.querySelector('.popup').classList.remove("active")
});

function emailCheck(){
    let email = document.getElementById('email').value;
    let cnfrmEmail = document.getElementById('cnfrmEmail').value;
    console.log(email, cnfrmEmail)
    let message = document.getElementById('message')

    if(email.length !=0){
        if(email==cnfrmEmail){
            message.textContent = "Emails Match"
        }
        else{
            message.textContent = "Emails Do Not Match"
            message.style.backgroundColor ="white"
            message.style.color ="red"
            preventDefault()

        }
    }
  
}


