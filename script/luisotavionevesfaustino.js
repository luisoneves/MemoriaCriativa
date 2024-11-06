document.addEventListener('DOMContentLoaded', function () {
    // Selecionar todas as divs que representam os itens
    const items = document.querySelectorAll('.highlight-row');
    
    // Função para verificar a visibilidade dos itens
    function checkVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight;

        items.forEach(item => {
            const itemTop = item.offsetTop;

            // Verificar se a posição de rolagem atingiu a posição do item
            if (scrollPosition > itemTop) {
                item.classList.add('active'); // Adiciona a classe 'active' para mostrar o item
            }
        });
    }

    // Checa a visibilidade na rolagem
    window.addEventListener('scroll', checkVisibility);
    
    // Chama a função logo ao carregar a página para garantir que os itens visíveis sejam mostrados
    checkVisibility();
});
