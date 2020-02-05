/* Document ready -> implementação do jQuery */ 

$(document).ready(() => {

    // adicionando texto inicial no mag-faq-title
    $('.mag-faq-title').text('Cartão de crédito e débito');

    $('.mag-faq .mag-icon-and-text i').on('click', function () {
        // pegando o data-content somente do <i> que foi clicado
        const content = $(this).data('content');
        // pegando o h3 e colocando o texto do data-content como conteúdo quando o íncone for clicado
        $('.mag-faq-title').text(content);
    });
});