# werewolfGame

Werewolf Valley is a side project to help me learn html/css/js through the process of creating.  I have enjoyed playing Werewolf (a version of the game Mafia) 
in team building at work.  My colleague improved the game with custom town roles so everyone has abilities to consider.  While this madee the game more fun, it is 
also much more complicated to run.  I aim to make it possible for anyone to run the game and I have plenty of ideas to iterate new features from there.  
Images were AI generated via Stable Diffusion and I've written the code myself, with some help from ChatGPT along to way when I need to learn how to do something I have never done before.  
This project is for personal education first and foremost.  Any useful/fun outcomes are a welcome secondary benefit.<br><br>

Here is my plan for version iterations:<br>
v1. Assistant to human game master, visible only to game master. Benefit: Anyone can run the game with reminders that make it easy to manage many roles.<br>
v2. Assistant to human game master with screensharing page to display realtime game progress. Benefit: Same as before plus everyone can see game progress.<br>
v3. Automated game master with player login. Benefit: Everyone can play the game! All actions handled through the UI.<br><br>

Unsure of how far down the list I will make it, but as long as I keep learning from the process I will keep going.<br><br>

Current Progress<br>
v0.7:<br>
Game setup - done<br>
Day cycle - done<br> 
Night cycle - IN PROGRESS<br> 
Layout revisions/mobile layout - not started

<a href="https://crtotoro.github.io/werewolfGame/">Try the latest version</a><br>
Player night abilities/logic are not yet implemented. You can use the following console commands to get by:<br><br>
<b>adminKill("name")</b> - Eliminates player, moves them to graveyard, checks if game is won and updates log if game is over<br><br>
<b>adminResurrect("name")</b> - Resurrects player and moves them to active player list. Use this if you killed a player by mistake, or if the witch doctor uses their ability.<br><br>
<b>refreshPlayerCards()</b> - You shouldn't need this, but in case living or dead players are not showing up in the correct place, this will put them in the active list or graveyard based on the player's 'alive' property
