import $ from 'jquery';

let textIndex = 0;
const texts = [
    'Hello Unhas',
    'Nama Saya M Farhan Bachtiar',
    'Angkatan 2022 NIM D121221011'
];

$('#changeTextBtn').click(function() {
    textIndex = (textIndex + 1) % texts.length;
    $('#heading').text(texts[textIndex]);
});

function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    $('#colorBox').css('background-color', `rgb(${r}, ${g}, ${b})`);
}

setInterval(changeColor, 1000);