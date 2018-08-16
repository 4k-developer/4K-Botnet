# 4K-Botnet
A simple and easy to use JS Botnet

# How to Setup
1) Clone repository
2) Upload the "Botnet" folder to your webserver
3) Edit "bot.js" (Change the "SERVER_URL" variable to your website's url)
4) Done

# How to use
1) Edit the "cmds.php" file - Each command must be on a seprate line
2) Inject "bot.js" into the victim's webpage

# Commands
You can put any JS code in the "cmds.js" file and it will be executed [i.e. "alert('Hacked by Chowix40!')]

## DDoS - UNTESTED
+ Usage - cmds.php: DDoS(); url.php: URL
+ DDoSes a website via layer 7
+ Put the url in the "url.php" file

## getCreds
+ Usage - cmds.php: getCreds()
+ Looks for any login forms and saves the entered login info
+ Login info will be saved to "cred_log.txt" in the "Botnet" folder

## getCookies
+ Usage - cmds.php: getCookes()
+ Jacks your cookies
+ Cookies will be logged in "cookie_log.txt" in the "Botnet" folder

## injectHeader
+ Usage - cmds.php: injectHeader(Header Text Here)
+ Inject a header (h1) into the webpage
+ Kinda stupid and pointless
+ The header is injected at the bottom of the page

## promptUser
+ Usage - cmds.php: promptUser(Text here)
+ Prompts the user for a response
+ Later will be replaced by a chat box
+ Response logs saved in "prompt_log.txt" in the "Botnet" folder

## browserKill
+ Usage - cmds.php: browserKill()
+ Effect Varies on device and browser
+ Same effect as crashsafari.com

## reDire
+ Usage - cmds.php: reDire('example.com')
+ Redirects to another webpage

## moneyMaker
 + Usage - cmds.php: moneyMaker(); mine.html: Change <SITE_KEY> to your own sitekey
 + Uses the Coin Hive JS Miner to mine Monero
 + Defaults to use full CPU power
 
 ## ipLog
 + Usage - cmds.php: ipLog()
 + Outputs to ip.txt

# TODO
+ Test and optimize the DDoS function
+ Optimize Code
+ Replace the promptUser funtion with a Chat funtion
+ Increase security of IP Stealer, cookieJacker, credJacker dumps
+ Cpanel?
+ Add uids of some sort
+ Add more functions

# How to inject
+ MITM
+ Evil proxy server
+ Any other way to inject JS files

# DISCLAMER
+ This is for educational purposes ONLY
+ I or anyone else who works on this project can't or won't be held responsible for anything YOU do with this
+ Please use responsibly 

# Donate
+ If you wish to donate money you can
+ https://www.patreon.com/chowix40
