# ShrederPlays [Labor]-[Finished]

## Bot für mich
Bot für Discord der verschiedene Funktionen erfüllt.
* Website: [Pika-Army-Jimdo](https://pika-army.jimdofree.com)
* Discord-Hauptserver: [PikaArmy](https://discord.gg/XR7Vw9J)
* Discord-Labor: [Shrederplays-Labor](https://discord.gg/qDXgc48)
https://tipp.ga/2018/04/29/windows-installieren-via-pxe/
## Index
1. [Dependencies / Node modules](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#dependencies--node-modules)
2. [How to install Node Modules](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#how-to-install-node-modules)
    * [Discord.js](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#discordjs)
    * [FFMPEG-Binaries](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#ffmpeg-binaries)
    * [Node-Opus](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#node-opus)
    * [Simple-YouTube-API](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#simple-youtube-api)
    * [YTDL-Core](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#ytdl-core)
3. [Config](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#config)
4. [Bot initialisiert](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#bot-initialisiert)
5. [User tritt Server bei](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#user-tritt-server-bei)
6. [Commands](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#commands)
    * [8Ball](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#8ball--aliases-ball)
    * [Avatar](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#avatar)
    * [Botinfo](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#botinfo--aliases-binfo)
    * [Clear](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#clear)
    * [Help](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#help)
    * [KitTV-Role](https://github.com/leonshrederplays/shrederplays#kittv--aliases-kit-kitv)
    * [Reload](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#reload)
    * [Say](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#say)
    * [Serverinfo](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#serverinfo)
    * [PikaArmy-Role](https://github.com/leonshrederplays/shrederplays#pikaarmy--aliases-pa-pikarmy)
    * [Raccrew-Role](https://github.com/leonshrederplays/shrederplays#raccrew--aliases-racc-racrew)
    * [Userinfo](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#userinfo)
    * [Bot-Role](https://github.com/leonshrederplays/shrederplays#bot)
    * [KitTV-Partner](https://github.com/leonshrederplays/shrederplays#kittv-partner--aliases-kp)
    * [Raccrew-Partner](https://github.com/leonshrederplays/shrederplays#raccrew-partner--aliases-rp)
7. [Music Commands NOT WORKING]()
    * [Pause](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#pause)
    * [Play](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#play)
    * [Queue](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#queue)
    * [Search](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#search)
    * [Skip](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#skip)
    * [Stop](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#stop)
    * [Resume](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#resume)
    * [Volume](https://github.com/leonshrederplays/shrederplays/blob/master/README.md#volume)

### Dependencies / Node modules
* Node Modules
  * discord.js         | Version:^11.4.2
  * ffmpeg-binaries    | Version:^4.0.0
  * node-opus          | Version:^0.3.1
  * simple-youtube-api | Version:^5.1.1
  * ytdl-core          | Version:^0.29.1
  
## How to install Node Modules
**NodeJS must be installed!**
  
#### Discord.js
* npm install discord.js

#### FFMPEG-Binaries
* npm install ffmpeg

#### Node-Opus
* npm install node-opus

#### Simple-YouTube-API
* npm install simple-youtube-api

#### YTDL-Core
* npm install ytdl-core

### Config
* Prefix: "!" (Standard-Prefix)

### Bot initialisiert
* Playing-Status !help wird gesetzt.
* Online-Status wird gesetzt.

### Commands

#### 8ball / Aliases: ball
* Der Befehl "!8ball / !ball" gibt eine zufällige Antwort aus wenn mehrere Argumente angegeben wurden.

* Antwortmöglichkeiten
  * Ja², Nein², Das weiß ich nicht, Frag mich später noch mal², Vielleicht²

#### Avatar
* Gibt das Profilbild des getaggten Users als Nachricht in den Chat wieder.

#### Botinfo / Aliases: Binfo
* Der Befehl "!botinfo / !binfo" zeigt dir die Informationen über den Bot an.
  * Version: v3.2.4
  * Node JS: v10.5.0
  * Library: [Discord.js](https://discord.js.org/#/)
  * Server: Auf wievielen Servern der Bot ist.
  * Benutzer: Auf dem Server.
  * Website: [PikaArmy](https://pika-army.jimdofree.com)
  * Erstellt am: Wann der Bot erstellt wurde.
  * Developer: @Leon|ShrederPlays#2076
  * Discord: [PikaArmy](https://discord.gg/XR7Vw9J) | [Shrederplays-Labor](https://discord.gg/qDXgc48)
  
#### Bot
* Der Befehl "!bot" gibt dir die Rolle "BOT".
  * Der Channel wird überprüft und die Rolle vergeben.

#### Clear
* Der Befehl prüft auf die Rolle "Admin" & "Developer" wenn keine davon an den User vergeben ist schickt er eine Nachricht das man nicht die nötigen Rechte hat. Prüft ob der Parameter eine Zahl ist wenn nicht schickt er ebenfalls eine Nachricht raus. "!clear" löscht Nachrichten in der Anzahl die angegeben wurde. Bsp: !clear Fünf (Löscht Fünf Nachrichten.).

#### Help
* Der Befehl "!help" zeigt dir die Hilfe für alle Commands in einer DM an.
   * Wenn man hinter dem Befehl noch einen Parameter in Form einer der Gruppen angibt dann werden die Befehle herausgefiltert die nicht in der Gruppe sind.
   
#### KitTV / Aliases: Kit, Kitv
* Der Befehl "!kittv / !kit / !kitv" gibt dir die Rolle "KitTV".
  * Der Channel wird überprüft und die Rolle vergeben.
  
#### KitTV-Partner / Aliases: Kp
* Der Befehl "!kittvpartner / !kp" gibt die Socials aus.
  * Server Name: KitTV
  * Server Besitzer: KitTV
  * Twitch: [KitTV](https://discordapp.com/invite/DcxKjWR)
  * Twitter: [KitTVDE](https://www.twitter.com/kittvde/)
  * Instagram: [KitTVDE](https://www.instagram.com/kittvde/)
  
#### Raccrew / Aliases: Racc, Racrew
* Der Befehl "!raccrew / !racc / !racrew" gibt dir die Rolle "Raccrew".
  * Der Channel wird überprüft und die Rolle vergeben.
  
#### Raccrew-Partner / Aliases: Rp
* Der Befehl "!raccrewpartner / !rp" gibt die Socials aus.
  * Server Name: Raccrew & Raccoon Aiming
  * Server Besitzer: Bluestripe
  * Webseite: [Raccoon-Gaming](http://raccoon-gaming.jimdofree.com/)
  * Twitch: [Bluestripe](https://www.twitch.tv/bluestripe/)
  * Twitter: [Bluestripee](https://twitter.com/bluestripee)
  * Instagram: [Bluestripee](https://www.instagram.com/bluestripee/)
  * DeviantArt: [Hawkwhisper](https://www.deviantart.com/hawkwhisper)

#### Reload
* Der Befehl "!reload" mit einem Command als Parameter lädt den Command neu.
  * Vorher wird überprüft ob du die Administrator-Rechte hast.

#### Resume
* Der Befehl "!resume" startet die Wiedergabe wieder.

#### Say
* Der Befehl "!say" gibt die Argumente die angegeben wurden wieder.
  * Vorher wird überprüft ob du die Rolle "Admin" oder "Developer" hast.

#### Serverinfo
* Der Befehl "!serverinfo" zeigt dir die Serverinformationen an.
  * Server-Name: Server-Name
  * Benutzer: Wieviele User
  * Rollen: Wieviele Rollen
  * Webseite: [PikaArmy](https://pika-army.jimdofree.com)
  * Erstellt am: Wann der Server erstellt
  * You joined at: Wann du gejoint ist
  * Discord: [PikaArmy](https://discord.gg/XR7Vw9J) | [Shrederplays-Labor](https://discord.gg/qDXgc48)

#### Userinfo
* Der Befehl "!userinfo" gibt eine Nachricht mit informationen über den User.
  * Benutzername: Username
  * Discriminator: 1234
  * Benutzer-ID: 123456789876543212
  * Status: Online
  * Spiel: Slime Rancher
  * Rolle: Everyone
  * Erstellt am: Wann der User seinen Account erstellt hat.
  * Discord: [PikaArmy](https://discord.gg/XR7Vw9J) | [Shrederplays-Labor](https://discord.gg/qDXgc48)

### Music Commands [DEPRECATED/NOT WORKING/NOT FROM ME]

#### Pause
* Der Befehl "!pause" pausiert die Musik.

#### PikaArmy / Aliases: Pa, Pikarmy
* Der Befehl "!pikaarmy / !pa / !pikarmy" gibt dir die Rolle "PikaArmy".
  * Der Channel wird überprüft und die Rolle vergeben.

#### Play
* Der Befehl "!play" spielt Musik ab wenn ein YouTube Link angegeben wurde und fügt den Titel der Warteschlange hinzu.

#### Queue
* Der Befehl "!queue" zeigt dir die Lider an die in der Warteschlange sind.

#### Search
* Der Befehl "!search" lässt dich YouTube Videos suchen und nach eingabe der Zahl fügt er diese der Warteschlange hinzu.

#### Skip
* Der Befehl "!skip" überspringt das Lied was gerade läuft und geht zum nächsten Lied in der Warteschlange über.

#### Stop
* Der Befehl "!stop" stoppt die Musik und disconnected vom Channel.

#### Volume
* Der Befehl "!volume" setzt die Lautstärke auf den angegebenen Integer.


