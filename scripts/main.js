var titleDB = [];
var available


$.get("https://3ds.titledb.com/v1/cia",function(res){enable(res)});

function enable(res){ 
    for(var i=0;i<res.length;i++){
        titleDB.push(res[i]["url_id"]);              
    }
    
    $("body").html("<div id='name'></div><div id='qr'></div><button onclick='candy()'>Get some candy</button>");
}

function candy(){
    var index = Math.floor(Math.random() * (titleDB.length-1));
    $.get("https://3ds.titledb.com/v1/url/" + titleDB[index],function(res){
        $("#qr").html("");
        new QRCode(document.getElementById("qr"), res.url);
    });
}