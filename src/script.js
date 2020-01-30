/* Document ready */ 

$(document).ready(() => {


    $('.mag-faq .mag-icon-and-text i').on('click', function () {
        const content = $(this).data('content');
        alert(content);
    });
});