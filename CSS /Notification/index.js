// $('.search-icon').bind('click', function() {
//     $('.search-input').toggleClass('active');
// });

// $('.menu-icon').bind('click', function() {
//     $('.panel').toggleClass('show-menu');
//     $('.menu').toggleClass('active');
// });
// (method) JQery.bind(eventTyoe: string, handler: (eventObject: JQueryEventObject) => any)

document.querySelector('.search-icon').addEventListener('click', () => {
    
    document.querySelector('.search-input').classList.toggle('active');
});


document.querySelector('.menu-icon').addEventListener('click', () =>  {
    document.querySelector('.panel').classList.toggle('show-menu');
    document.querySelector('.menu').classList.toggle('active');
});
// console.log('test')