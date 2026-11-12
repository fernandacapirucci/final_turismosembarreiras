
(function () {
    const botao = document.querySelector('.btn-login');
    const usuario = obterUsuario();

    if (!botao || !obterToken() || !usuario) return;

    const primeiroNome = (usuario.nome || '').split(' ')[0];

    
    const icone = botao.querySelector('img');
    botao.textContent = '';
    if (icone) botao.appendChild(icone);
    botao.appendChild(document.createTextNode(' Olá, ' + primeiroNome));
    botao.removeAttribute('href');

    // Botão Sair ao lado
    const sairLink = document.createElement('a');
    sairLink.href = '#';
    sairLink.className = 'btn-login';
    sairLink.textContent = 'Sair';
    sairLink.addEventListener('click', function (e) {
        e.preventDefault();
        sair();
    });

   
    const grupo = document.createElement('div');
    grupo.style.display = 'flex';
    grupo.style.gap = '10px';
    botao.parentNode.insertBefore(grupo, botao);
    grupo.appendChild(botao);
    grupo.appendChild(sairLink);
})();