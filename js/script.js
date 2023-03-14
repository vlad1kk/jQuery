// let tagP = $('.mainText p').text();
// alert(tagP);

// =============================================
// Методи text, hide, show:
// $('.mainText p').text('Текст який буде змінений в тегу р');

// $('.mainText p').hide(3000);
// $('.mainText p').show(3000);

// =============================================
//Ланцюгова функція:
// $('.mainText p').hide(3000).show(3000);

// =============================================
// Присвоєння через сворення змінної:

// let tagP = $('.mainText p');
// tagP.hide(3000).text('Текст який буде змінений в тегу р').show(3000);

// =============================================
// Автоматизація цикла:
// $('.icons > div').hide (3000);

// =============================================
// Методи width, height:
function widthAndHeight (element){
    let className = '.'+element;
    let w = $(className).width();
    let h = $(className).height();
    $('.mainText p').text('Ширина: ' + w + '; ' + 'Висота: ' + h + ';')
}
widthAndHeight('arrowDown');



