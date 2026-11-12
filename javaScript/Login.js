const GOOGLE_CLIENT_ID =
    "72671285332-knhpone20v8jbflb5fnfjnnp0efcmfun.apps.googleusercontent.com";

window.onload = function () {

    google.accounts.id.initialize({

        client_id: GOOGLE_CLIENT_ID,

        callback: receberRespostaGoogle

    });


    google.accounts.id.renderButton(

        document.getElementById("googleButton"),

        {
            theme: "outline",
            size: "large",
            width: 300,
            text: "continue_with",
            shape: "pill"
        }

    );

};

async function receberRespostaGoogle(response) {

    console.log("Token recebido do Google:", response.credential);

    try {

        const resposta = await fetch(
            "http://localhost:8080/auth/google",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    idToken: response.credential
                })
            }
        );


        const dados = await resposta.json();


        if (!resposta.ok) {

            alert(
                dados.message ||
                dados.mensagem ||
                "Não foi possível entrar com o Google."
            );

            return;
        }

        console.log("Usuário logado:", dados);

        localStorage.setItem(
            "usuario",
            JSON.stringify(dados)
        );


        alert("Login realizado com sucesso!");

        window.location.href = "Home.html";


    } catch (erro) {

        console.error("Erro ao conectar com o backend:", erro);

        alert(
            "Não foi possível conectar ao servidor. Verifique se o backend está funcionando."
        );

    }

}

const inputSenha = document.getElementById('senha');
const botaoToggle = document.getElementById('toggle-senha');
const iconeOlho = document.getElementById('icone-olho');

botaoToggle.addEventListener('click', () => {
    const estaOculta = inputSenha.type === 'password';

    inputSenha.type = estaOculta ? 'text' : 'password';
    botaoToggle.setAttribute('aria-label', estaOculta ? 'Ocultar senha' : 'Mostrar senha');

    iconeOlho.src = estaOculta ? 'assets/olho.png' : 'assets/olho-fechado.png';
});