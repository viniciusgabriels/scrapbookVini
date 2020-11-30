import Scrapbook from './classes/scrapbook';

const scrapbook = new Scrapbook();
const btnAdd = document.getElementsByClassName('btn-add')[0];
const btnBack = document.getElementsByClassName('btn-back')[0];
const btnSave = document.getElementsByClassName('btn')[0];

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    
    scrapbook.trocarTela();
});

btnBack.addEventListener('click', (event) => {
    event.preventDefault();

    scrapbook.trocarTela();
});

btnSave.addEventListener('click', (event) => {
    event.preventDefault();

    scrapbook.salvar();
    atribuirEventos();
});

function atribuirEventos() {
    for (let botao of document.getElementsByClassName('btn-edit')) {
        botao.addEventListener('click', (event) => {
            event.preventDefault();
            
            const btnEdit = botao.parentNode.parentNode.parentNode.parentNode;        
            
            scrapbook.atribuirEventosEditar(btnEdit);
        });
    };
}
