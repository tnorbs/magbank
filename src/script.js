/* Document ready -> implementação do jQuery */ 

$(document).ready(() => {

    // adicionando texto inicial no mag-faq-title
    $('.mag-faq-title').text('Cartão de crédito e débito');

    // adicionando a cor branca para o primeiro ícone da seção do mag-faq
    $('.mag-faq .mag-icon-and-text').first().css('color', '#FFF');

    $('.mag-faq .mag-icon-and-text').on('click', function () {
        // pegando o data-content somente do <i> que foi clicado
        const content = $(this).find('i').data('content');

        // pegando o h3 e colocando o texto do data-content como conteúdo quando o ícone for clicado
        $('.mag-faq-title').text(content);

        // deixando todos os mag-icon-and-text cinza
        $('.mag-faq .mag-icon-and-text').css('color', '#a8a8a8');

        // deixando a cor do texto em branco
        $(this).css('color', '#fff');
    });
});