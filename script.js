let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#username').onchange = function () {
      if (document.querySelector('#username').value.length > 8) {
          document.querySelector('#checkuser').innerHTML = "";

      } else {
          document.querySelector('#checkuser').innerHTML = " Username larger than 8 characters ";
      }
  }
  document.querySelector('#email').onchange = function () {
      var email = document.querySelector("#email").value;
      var checkemail = email.indexOf("@");
      var checkmail = email.indexOf(".com");
      if ((checkemail < 1) || (checkmail < 1)) {
          document.querySelector("#checkemail").innerHTML = "Email notavailable (example@gmail.com)";
          return false;
      } else {
          document.querySelector("#checkemail").innerHTML = "";
      }
  }
  document.querySelector('#telephone').onchange = function () {
    if (document.querySelector('#telephone').value.length == 10) {
        document.querySelector('#checktel').innerHTML = "";

    } else {
        document.querySelector('#checktel').innerHTML = "Available phone number";
    }
}
  document.querySelector('#submit').onclick = function () {
      alert(`Order Success`);

  };
});