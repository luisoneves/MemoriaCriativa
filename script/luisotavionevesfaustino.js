document.addEventListener('DOMContentLoaded', function () {
    // Função para verificar a visibilidade dos itens
    function checkVisibility() {
        const items = document.querySelectorAll('.highlight-row');
        const scrollPosition = window.scrollY + window.innerHeight;

        items.forEach(item => {
            const itemTop = item.offsetTop;

            // Verificar se a posição de rolagem atingiu a posição do item
            if (scrollPosition > itemTop) {
                item.classList.add('active');
            }
        });
    }

    // Função para mostrar o botão de voltar ao topo
    function toggleBackToTopButton() {
        const backToTopButton = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    // Função para voltar ao topo com animação suave
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Função para adicionar animação ao entrar na tela
    function observeSections() {
        const sections = document.querySelectorAll('.highlight-row');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.5 // 50% da seção deve ser visível
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Chama as funções ao carregar a página
    checkVisibility();
    observeSections();

    // Eventos
    window.addEventListener('scroll', function () {
        checkVisibility(); // Verificar visibilidade dos itens
        toggleBackToTopButton(); // Mostrar/ocultar botão de voltar ao topo
    });

    document.getElementById('backToTop').addEventListener('click', scrollToTop);
});
