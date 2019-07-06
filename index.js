import './index.scss';

var lang = navigator.language || navigator.userLanguage;

var url = window.location.hash.slice(1).replace(/^https?:\/\//i, '');
var link = document.getElementById('wrapper');

if (url) {

    document.getElementById('label').textContent = url;

    link.href = window.location.hash.slice(1);

    var path = link.pathname.split('/', 3);
    var str = '';

    switch (path[1]) {
        case 'socks':
            str = 'tg://socks' + link.search;
            break;
        case 'share':
            str = 'tg://msg_' + path[2] + link.search;
            break;
        case 'joinchat':
            str = 'tg://join?invite=' + path[2];
            break;
        case 'addstickers':
            str = 'tg://addstickers?set=' + path[2];
            break;
        case 'proxy':
            str = 'tg://proxy' + link.search;
            break;
        default:
            str = 'tg://resolve?domain=' + path[1] + link.search.replace('?start=', '&start=');
            if (path[2]) {
                str += '&post=' + path[2];
            }
    }

    link.href = str || '#';
    link.style.display = 'inline-block';

    if (str) {
        window.location.href = str;
    }
}
else {
    if (lang == "ru-RU")
        var istr = "Как использовать";
    else
        var istr = 'How to use';
    document.getElementById('label').textContent = istr;
    link.href = 'https://github.com/roslovets/tg/blob/master/README.md';
}
link.style.display = 'inline-block';