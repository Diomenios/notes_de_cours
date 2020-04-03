<center> <h1> Service réseau S14 </h1></center>

/usr/sbin/sendmail -bd -q15s & => permet de lancer sendmail

-bd est pour :
-q est paramètrer la queue

fg : exécuter un processus en avant plan
bg : exécuter un processus en arrière-plan

## analyser les port à l'écoute

**netstat -nltp**

Local address c'est l'adresse sur laquelle on autorise les entrées de segment TCP.  C'est donc l'adresse de destination

127.0.0.1:25 : c'est l'adresse loopback sur le port 25

ici, on ne pourra recevoir de mail que de la part de la machine hébergeant le serveur.  Pour envoyer des messages d'une machine distante, il faudra modifier sendmail.mc

les serveurs mails écoutent toujours sur le port 25

## trouver les mails reçu

**cd /var/mail**

## envoyer un mail

**mail <user>@me-mysendmail-1**

pour finir un mail, taper un point .  sur une ligne vide, le serveur mail détetectera la fin du message

puis vérifier l'arriver du mail :

**ls /var/mail**

PS : il faut généralement quelques secondes pour que le mail arrive, après avoir été écrit

Pour lire le mail, il suffit de taper le numéro du mail que l'on veut lire.

## envoyer un mail avec telnet

**telnet localhost 25** on contacte notre serveur local

reception d'un code 220

en premier taper : HELO

reception d'un code 250

MAIL FROM: adresse.expediteur@domaine.dexpedition (exemple : louis.arys@gmail.com)

RCPT TO: <user_cible>@me-mysendmail-1 (exemple : root)


#### envoyer un mail à un serveur sendmail distant

premièrement : modifier dans sendmail.mc la directive DAEMON_OPTIONS('Port:smtp, Addr=127.0.0.1, ???), pour cela, il faudra utiliser VI ou nano.

changer l'adresse en 0.0.0.0, pour permettre de recevoir des mails de n'importe quelle adresse.

ensuite : killer le processus faisant tourner sendmail

**kill <numero_du_processus>**

ensuite : relancer sendmail

**/usr/sbin/sendmail -bd -q15s**

ensuite : attendre que le processus initialise correctement le serveurs

On peut maintenant retourner sur la machine distante, et on pourra envoyer un mail sur le serveur de mail avec un telnet
