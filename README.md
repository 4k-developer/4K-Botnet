# 4K-Botnet
A simple and easy to use JS Botnet

# How to Setup
1) Clone repository
2) Upload the "Botnet" folder to your webserver
3) Edit "bot.js" and/or "bot-d.js" (Change the "SERVER_URL" variable to your website's url)
4) Done

# How to use
1) Edit the "cmds.php" file - Each command must be on a seprate line
2) Inject "bot.js" or "bot-d.js" into the victim's webpage

# Commands
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
