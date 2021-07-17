$(document).ready(function() {
    $("#login").on("click", function(){
        fetch('http://d98764d484bc.ngrok.io/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: $("#usernameInput").val(),
                password: $("#passwordInput").val()
            })
        })
    })
})