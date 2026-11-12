const botoesTipo = document.querySelectorAll('.tipo-conta');
const rotuloNome = document.getElementById('rotulo-nome');
const campoNome = document.getElementById('nome');
const notaAgencia = document.getElementById('nota-agencia');


const tipos = {
    viajante: {
        rotulo: 'Nome',
        placeholder: 'Digite o seu nome completo',
        mostrarNota: false
    },
    agencia: {
        rotulo: 'Nome da Empresa',
        placeholder: 'Digite o nome da sua empresa',
        mostrarNota: true
    }
};

function selecionarTipo(tipo) {
    const config = tipos[tipo];


    botoesTipo.forEach(function (botao) {
        const ativo = botao.dataset.tipo === tipo;
        botao.classList.toggle('active', ativo);
        botao.setAttribute('aria-checked', ativo);
    });


    rotuloNome.textContent = config.rotulo;
    campoNome.placeholder = config.placeholder;
    notaAgencia.hidden = !config.mostrarNota;
}

botoesTipo.forEach(function (botao) {
    botao.addEventListener('click', function () {
        selecionarTipo(botao.dataset.tipo);
    });
});

selecionarTipo('viajante');


const campoSenha = document.getElementById('senha');
const botaoOlho = document.getElementById('toggle-senha');
const iconeOlho = document.getElementById('icone-olho');
const ICONE_FECHADO = 'assets/olho-fechado.png';
const ICONE_ABERTO = 'assets/olho-aberto.png';

botaoOlho.addEventListener('click', function () {
    const mostrando = campoSenha.type === 'text';

    campoSenha.type = mostrando ? 'password' : 'text';
    iconeOlho.src = mostrando ? ICONE_FECHADO : ICONE_ABERTO;
    botaoOlho.setAttribute('aria-label', mostrando ? 'Mostrar senha' : 'Esconder senha');
});