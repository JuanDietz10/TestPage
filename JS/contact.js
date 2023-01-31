document.getElementById('submitBtn').addEventListener('click', function(){

const name = document.getElementById("name").value;
const e_mail = document.getElementById("email").value;
const message = document.getElementById("message").value;

    if(name.length != 0 && e_mail.length != 0 && message.length != 0)
    {
        document.getElementById('result').innerHTML = "Mensaje enviado con éxito";
        console.log("Enviado");
    }
    else
    {
        document.getElementById('result').innerHTML = "Por favor complete los campos obligatorios";
        console.log("No enviado");
    }

    document.getElementById('resultConteiner').style.display = 'block';
})

