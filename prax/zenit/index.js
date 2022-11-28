window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if( document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){
        document.getElementById('header').style.backgroundColor = 'inherit';
        document.getElementById('header').style.borderBottomColor = 'rgba(255, 255, 255, .4)';
        document.getElementById('header').style.color = 'white';
        document.getElementById('nic').style.color = 'white';
        document.getElementById('nic1').style.color = 'white';
        document.getElementById('nic2').style.color = 'white';
        document.getElementById('nic3').style.color = 'white';
        document.getElementById('first').style.color = 'white';
        document.getElementById('first').style.borderColor = 'white';
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById('header').style.color = 'black';
    document.getElementById('header').style.borderBottomColor = 'rgba(0,0,0,.1)';
    document.getElementById('nic').style.color = 'black';
    document.getElementById('nic1').style.color = 'black';
    document.getElementById('nic2').style.color = 'black';
    document.getElementById('nic3').style.color = 'black';
    document.getElementById('first').style.color = '#00A4B9';
    document.getElementById('first').style.borderColor = '#00A4B9';

  } 
};