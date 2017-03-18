var button = document.getElementById("counter");
var z = 0;
button.Onclick = function() {
    z = z + 1;
    
    var span = document.getElementById("count");
    span.innerHTML = z.toString();
};
