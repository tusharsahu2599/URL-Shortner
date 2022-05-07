
var ajax = new XMLHttpRequest();
var endpoint = 'https://api.shorturl.com/v1/shorten';

function getrandom() {
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string;
}
function geturl() {
    var url = document.getElementById('urlInput').value;
    var protocol_ok = url.startsWith('http://') || url.startsWith('https://') || url.startsWith('ftp://');
    if (!protocol_ok) {
        newurl = 'http://' + url;
        return newurl;
    } else {
        return url;
    }
}
function genhash() {
    if (window.location.hash == '') {
        window.location.hash = getrandom();
    }
}
function shortUrl() {
    var longurl = geturl();
    genhash();
    send_request(longurl);
}


function send_request(url) { 
    this.url = url;
    $.ajax({  
            'url': endpoint + '/' + window.location.hash.substr(1),
            'type': 'POST',
            'data': JSON.stringify(this.url),  
            'dataType': 'json',        
            'contentType': 'application/json; charset = utf - 8' 
        })}

        var hashh = window.location.hash.substr(1)
        console.log(hashh)
        // $.ajax({
        //     'url': endpoint + '/' + hashh,
        //     'type': 'GET',
        //     'dataType': 'json',
        //     'success': function(data) {
        //         console.log(data)
        //         document.getElementById('urlOutput').innerHTML = data.url;
        //     }
        // })



        //       getJSON(endpoint + "/" + hashh, function (data) {
        //           data = data["result"];
        //             if (data != null) {
        //                 window.location.href = data;
        //             }
        //         });
        // }