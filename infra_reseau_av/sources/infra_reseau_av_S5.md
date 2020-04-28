<center> <h1> Infrastructure Réseau Avancé </h1> </center>

## EIGRP

* notion de feasible sucessor
* On peut utiliser d'autres métriques : le delay, la bande-bassante, la charge, la fiabilité, le MTU (par défaut, bande passante et delay);

caractéristique propre de l'EIGRP : la variance. c'est le fait qu'on peut utiliser deux liens qui ne sont pas équivalent.  Par exmemple utilisé en même temps un câble de 6GB
et un câble de 8 GB.  Les autres protocol de routage ne peuvent faire ça que quand les deux câbles sont équivalents.

L'interface NULL : dangereux quand on ne comprend pas comment ça fonctionne, mais sinon super utile.  Permet de jeter tout ce qu'il ne connaît pas.  L'interface NULL est en gros une corbeille pour les requêtes inconnues.

Utiliser les interfaces NULL permet de réduire le temps de réponse(réseau performant), mais il faut éviter d'avoir un réseau discontinu.  

L'algorithme de routage : DUAL (une route passive est une route correcte, une route est active quand elle est en cours de recalcul, et donc qu'il y a un soucis ! ).

**les slides 72-74 sont pour info !**

Réseau autonome : Un ensemble de machines gérées en interne par une même entité.

no auto-summary : permet de s'en sortir sur un réseau discontinu. Plus de summary veut dire : plus d'interface NULL. Donc convergeance très longue.

Class-full on travail avec les masques de sous-réseauw.
Class-less on travail sans tenir compte des masques de sous-réseau.

Dans la réalité, on est souvent en class-less.

## Révision

*show ip interface brief*

*show ip route*

Lors du ping sur une nouvelle route, un paquet est perdu car le routeur ne connait pas la mac-adress de la destination. il doit donc faire une requête ARP avant de pouvoir envoyer les paquets.

Pour les routes statiques.  Si on a plusieurs chemins : mettre le nextStop.  Si un seul chemin possible, mettre l'interface de sortie.

*ip access-list* permet de créer des access-lists nommées.
*access-list* permet de créer des access-lists avec des numéros.

Dans une NAT : l'otion overload permet d'utiliser une seule adresse IP pour envoyer des requêtes de plusieurs machines à l'intérieur de la NAT => le mécanisme fonctionne sur un principe de ports : un port source différent pour chacune des machines.

*show ip nat translation* permet de voir les traductions en cours faites par la NAT.

*nonegotiate* désactive DTP (Dynamic Trunk Protocol)
