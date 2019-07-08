import './index.scss';

var lang = navigator.language || navigator.userLanguage;

var url = window.location.hash.slice(1).replace(/^https?:\/\//i, '');
var tgopen = document.getElementById('tgopen');
var webopen = document.getElementById('webopen');
var target = document.getElementById('target');

if (url) {

    document.getElementById('label').textContent = 'Open in Telegram';

    tgopen.href = window.location.hash.slice(1);

    var path = tgopen.pathname.split('/', 3);
    var str = '';
    var ischannel = false;

    switch (path[1]) {
        case 'socks':
            str = 'tg://socks' + tgopen.search;
            break;
        case 'share':
            str = 'tg://msg_' + path[2] + tgopen.search;
            break;
        case 'joinchat':
            str = 'tg://join?invite=' + path[2];
            break;
        case 'addstickers':
            str = 'tg://addstickers?set=' + path[2];
            break;
        case 'proxy':
            str = 'tg://proxy' + tgopen.search;
            break;
        default:
            str = 'tg://resolve?domain=' + path[1] + tgopen.search.replace('?start=', '&start=');
            if (path[2]) {
                str += '&post=' + path[2];
            };
            ischannel = true;
    }

    tgopen.href = str || '#';

    if (ischannel) {
        webopen.href = "https://tfeed.me/" + path[1];
        document.getElementById('label3').textContent = 'Open in browser';
        webopen.style.display = 'inline-block';
    }

    target.href = window.location.hash.slice(1);
    document.getElementById('label2').textContent = url;
    target.style.display = 'inline-block';

    if (str) {
        window.location.href = str;
    }
}
else {
    if (lang == "ru-RU")
        var istr = "Как использовать";
    else
        istr = 'How to use';
    document.getElementById('label').textContent = istr;
    tgopen.href = 'https://github.com/roslovets/tg/blob/master/README.md';
}
tgopen.style.display = 'inline-block';