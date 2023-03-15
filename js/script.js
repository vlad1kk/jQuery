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

// function fadeOutElement(element, time){
//     if(time > 5000 || time < 1000 ||isNaN(time)){
//         return false;
//     } else{
//         let className = '.' + element;
//         $(className).fadeOut(time);
//     }
// }
// fadeOutElement('mainText', 2000)

// =============================================
// Метод .fadeTo():
// $('.mainText').fadeTo(2500, 0.5).fadeTo(2500, 1);

// =============================================
// // Методи .slideUp(), .slideDown():
// $('.mainText').slideUp(2000).slideDown(2000);

// =============================================
// Метод .attr();
// let src = $('.logo img').attr('src');
// alert(src);
//Покаже в алерт значення src.

// let src = $('.logo img').attr('src', 'img/icon1.png');
//Змінить значення src на img/icon1.png.

// $('.logo img').attr('title', 'Підсказка');
//Добавить атрибут 'title' з значенням 'Підсказка'

// =============================================
// Метод .removeAttr() - видаляє атрибут;
// $('.logo img').removeAttr('src');

//Функція за допомогою якої можна додати новий атрибут з своїм значенням:
// function changeAttr(element, attr ,newValue){
//     const className = '.' + element;
//     $(className).attr(attr, newValue);
// }
// changeAttr('logo img', 'title', 'text');

// =============================================
// Метод .addClass() - добавляє клас:
// $('nav menu').addClass('border');

// Метод .removeClass() - видаляє клас:
// $('nav menu').removeClass('border');

// =============================================
// Метод .css() - інформує, змінює, додає css стилі:
// Chain:
// $('nav menu li a'). css('color', '#fff000').css('font-size', '25px');

// Object:
// $('nav menu li a'). css({
//     'color': '#fff000',
//     'font-size': '25px'
// })

// =============================================
// Метод .animate({…}, 3000) - це метод, який працює за тим самим принципом що і .css(), але другим параметром може риймати мілісекунди протягом яких повинні відбутись css зміни. Також третім параметром може приймати функцію:
// *Працює тільки для числових значень. Для color працювати не буде!:
$('nav menu li a'). animate({
    // 'color': '#fff000', 
    'font-size': '25px',
    'padding': '20px'
}, 3000);




