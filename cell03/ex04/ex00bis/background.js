function random_color(){
    var hex , color ;
    hex = '0123456789ABCDEF';
    color = '#'
    for(let i = 0 ;i < 6 ; i++) color += hex[Math.floor(Math.random() * 16)];
    return color ;
}

$(document).ready(function(){
    $("#toggle1").on("click",function(){
        $("body").css("background-color",random_color());
    })
});