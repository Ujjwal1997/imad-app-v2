console.log('Loaded!');

var img = document.getElementById('madi');


img.Onclick = function() {
    img.style.marginleft = '100px';
};

var counter = document.getElementById('counter');

counter.Onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHtml = counter;
    
};
