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
// function widthAndHeight (element){
//     let className = '.'+element;
//     let w = $(className).width();
//     let h = $(className).height();
//     $('.mainText p').text('Ширина: ' + w + '; ' + 'Висота: ' + h + ';')
// }
// widthAndHeight('arrowDown');

// =============================================
// Метод .html():
// $('.mainText').html('<b>New text</b><h2>title</h2>');

// =============================================
// Методи .fadeOut() та fadeIn():
// $('.mainText').fadeOut(2000).fadeIn(3000);

function fadeOutElement(element, time){
    if(time > 5000 || time < 1000 ||isNaN(time)){
        return false;
    } else{
        let className = '.' + element;
        $(className).fadeOut(time);
    }
}
fadeOutElement('mainText', 200)




