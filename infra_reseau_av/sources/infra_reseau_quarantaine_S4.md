<center> <h1> Infrastructure Réseau quarantaine S3 </h1> </center>

## IPV6

### SLAAC

Appropriation automatique d'une addresse IPV6 sans avir besoin d'une aide externe.

Mécanisme :

* Un pc qui se connecte sur un nouveau réseau va demander une router "solicitation"
* Même sans ça, tout les x temps, le routeur s'annonce de lui-même sur le réseau.
* Dans cette annonce, il transmet un préfix utilisez lors de l'appropriation.

### DHCP sans-état

La première étape reste la même : sollicitation du routeur.  Mais lors de la réponse du routeur, il fournit des information supplémentaires dont par exemple l'addresse du serveur DNS.  Dans le cas du slide 128, le routeur est lui-même serveur DHCP.  La DAD Détection permet de détecter s'il y a des voisins en IPV6.

### DHCP avec état

Le serveur DHCP va fonctionner de la même manière qu'il fonctionnait en IPV4 : il va distribuer les addresses, et garde en mémoire les addresses qu'il a attribué.  Dans un serveur DHCP avec état, il vaut mieux désactiver l'auto-cofig.  La raison est que sinon on risque d'avoir des clients avec 3 addresses différentes ce qui n'est pas super pour la trassabilité et la gestion

### labo

**router 2901 : routeur avec la fibre optique.**

**FF02::2 : groupe des routeurs en IPV6**

**undebug all** : permet de désactiver tous les types de debbug qu'on a pu activer sur le routeur.

Pas de notions d'exclusion en IPV6 parce que le système considère que le nombre d'addresse est trop grand, donc très peu probable d'avoir 2 addresses les mêmes.

Une grosse structure avec beaucoup de machines: DHCP statefull

Une petite structure avec peu de machines : DHCP stateless

Chez soi : SLAAC

### RIP

default-information originate : propage une route static définie en local aux autres routeurs (marche aussi avec OSPF)
