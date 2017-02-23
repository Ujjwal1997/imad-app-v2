console.log('Loaded!');

var myname = getElementById('name');
var marginleft = 0;
function moveleft(){
    marginleft = marginleft + 10;
    image.style.marginleft= marginleft + 'px';
}
myname.Onclick = function(){
    var interval = setintervat(moveleft,100);
};


