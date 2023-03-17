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
// $('nav menu li a'). animate({
//     // 'color': '#fff000', 
//     'font-size': '25px',
//     'padding': '20px'
// }, 3000, () => {
//     alert('Succssesful')
// });

// =============================================
// Методи .before(), .after(), .prepend(), .append() дозволяють додавати будь які теги відповідно до методу, якщо .before() то перед обʼєтом, .after() - після обʼєкту, .prepend() - в середині обʼєкту на початку, .append() - в середині обʼєкту в кінці:
// $('.mainText').before('<p>New paragraph</p><span>old text</span>');
// $('.mainText').after('<p>New paragraph</p>');
// $('.mainText').prepend('<p>New paragraph</p>');
// $('.mainText').append('<p>New paragraph</p>');

// =============================================
// Метод .each + this:
// $('.icons img').each(function(){
//     if($(this).attr('src') =='img/icon3.png'){
//         $(this).fadeOut(1000);
//     }
// })

// =============================================
// Метод .clone():
//Клонує обʼєкт:
//  const mainText = $('.mainText').clone();
//  $('body').append(mainText);

// Клонує, видалить, збереже в змінну і можна буде потім використовувати:
//  const mainText = $('.mainText').remove();
//  $('nav').after(mainText);

// =============================================
// Вибірка елементів:
// Вибірка всіх img та a на сторінці:
// $('img, a').css('background', 'red');

// Вибірка всіх img в яких є атрибут alt:
// $('img[alt]').css('background', 'red');

// =============================================
// Події на jQuery:
// 1. mouseover:
// $('.logo').mouseover(()=>{
//     alert('event mouseover');
// })

// 2. mouseout:
// $('.logo').mouseout(()=>{
//     alert('event mouseout');
// })

// 3. click:
// $('.logo').click(()=>{
//     alert('event click');
// })

// $('.arrowDown').click(function(){
//     let clone = $(this).clone();
//     $(this).after(clone);
// })

// 4. mousemove:
// $('.logo').mousemove(()=>{
//     alert('event mousemove');
// })

// 4. mouseup:
// $('.logo').mouseup(()=>{
//     alert('event mouseup');
// })

// 5. .scroll:
// $(window).scroll(()=>{
//         alert('event scroll');
//     })

// 6. .hover:
// First variable:
// const link = $('menu li a');

// link.mouseover(function(){
//     $(this).addClass('border');
// })
// link.mouseout(function(){
//     $(this).removeClass('border');
// })

// Second variable:
// const link = $('menu li a');

// link.hover(
//     function(){
//     $(this).addClass('border');
// },
//     function(){
//     $(this).removeClass('border');
// })

// 7. Передавання в функцію параметра, наприклад е:
// $('.mainText').click(function(e){
//     alert(e.target);
// })
//Можна відстежувати клавіши, координати...

// 8. Методи які зупиняють виконання певного завдання(.preventDefault() та return false):
// $('.arrowDown').click(function(e){
//     e.preventDefault();
// })

// $('.arrowDown').click(function(){
//     return false;
// })

// Метод .slideToggle() - за допомогою якого можна приховати весь елемент(він ніби скрутиться наверх):
// $('.button').click(function(){
//     $('.gallery').slideToggle(500);
// })

// ============================================

// Practice:
// $('.small a').click(function(e){
//     if($('.big img').attr('src')!==$(this).attr('href')){
//     $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
// }
//     e.preventDefault();
// });
// $('.button').click(function(){
//     $('.gallery').slideToggle(500);
//     if($('.button').text()=='-'){
//         $('.button').text('+');
//     } else {
//         $('.button').text('-');
//     }
// })
// $('.small a img').click(function(){
//     $('.small a img').fadeTo(500, 1).css({
//         'border': 'none'
//     });
//     $(this).fadeTo(500, 0.6).css({
//         'border': '1px dotted green'
//     });
// })

// ============================================
// Вибірка і фільтрація елементів форми:

// Щоб вибрати всі елементи checkbox на сторінці:
// $(':checkbox').fadeOut(1000);
//Всі елементи checkbox які є на сторінці зникнуть через 1сек.

//Якщо потрібно щоб зникли елементи тільки у потрібній формі потрібно перед цим вказати клас або інший селектор:
// $('.form1 :checkbox').fadeOut(1000);

// Щоб вибрати всі елементи radio на сторінці:
// $(':radio').fadeOut(1000);

// Щоб вибрати всі елементи submit на сторінці:
// $(':submit').fadeOut(1000);

// Щоб вибрати всі елементи reset на сторінці:
// $(':reset').fadeOut(1000);

// Щоб вибрати всі елементи file на сторінці:
// $(':file').fadeOut(1000);

// Щоб вибрати всі елементи button на сторінці:
// $(':button').fadeOut(1000);

// Щоб вибрати всі елементи text на сторінці:
// $(':text').fadeOut(1000);

// Щоб вибрати всі елементи password на сторінці:
// $(':password').fadeOut(1000);

// Щоб вибрати всі елементи input на сторінці:
// $(':input').fadeOut(1000);