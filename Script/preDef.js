
// Seleciona o botão do menu e a lista de menu
const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('men');

// Adiciona um ouvinte de evento de clique ao botão do menu
menuButton.addEventListener('click', () => {
    // Verifica se a lista de menu está oculta
    if (menuList.style.maxHeight === '0px') {
        // Se estiver oculta, define a altura máxima para um valor maior
        menuList.style.maxHeight = '200px'; // Ajuste a altura máxima conforme necessário
    } else {
        // Se estiver visível, redefine a altura máxima para 0 para ocultá-la
        menuList.style.maxHeight = '0px';
    }
});