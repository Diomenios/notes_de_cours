<center> <h1> System Réseau S5 </h1></center>

Le service DNS convertis un nom de domaine à une adresse IPv4, IPv6 ou alors un serveur mail.

Un Nom de Domaine termine toujours par un point : wikipédia.org.  

Une URL est un nom DNS (qui identifie un serveur) couplé à d'autres informations : https://www.google.com:8080.acceuil.php.

Dans l'exemple ci-dessus, on peut retrouver le nom de serveur google.com, mais il n'y a pas que ça !

#### Analyse de www.lln.ephec.be.

* **www** =  
* **lln** = sous-domaine
* **ephec** = domaine
* **be** = Top Level Domain (TLD)
* **.** = la racine

Dans un domaine, on peut retrouver des sous-domaine (logique), mais aussi des machines terminales (tel qu'un serveur mail, ...).  Dans chaque domaine et chaque sous-domaine, on met un "Name Serveur".  Son utilité c'est de rediriger notre machine vers le serveur qui contient l'information que l'on cherche.  Un name serveur retient donc les adresses IP de sa zone (les machines étant dans le domaine, mais sans faire partie d'un sous-domaine), ainsi que les noms de tous les DNS de ses sous-domaines.  

#### 2 types de machines DNS

Le résolveur : faire les requêtes à notre place et mainetanir une cache avec les informations essentielles.

Le name serveur :

DIG : permet de faire des requêtes DNS manuellement

## Exercice

### Exercice 1

2: il fonctionne au-dessus d'UDP.  La raison est que ça permet d'obtenir les informations plus rapidement et d'évité d'encombrer le réseau avec des requêtes DNS.
3: le port utilisé pour le DNS est le port 53.
4: Aller sur le net et taper "who is "adresse ip recherchée"" (who is 193.190.198.10).  Trouver un site qui fait du DNS inverse et on obtient ainsi le nom de domaine (belnet dans le cas de eduroam).

## Ecercice 2

1: Utilise une requête DHCP pour obtenir une adresse IP et le serveur DNS automatiquement lors de l'arrivée sur un nouveau réseau

*note* : ARP sert au mapping entre une adresse IP et une adresse MAC.

2: Lors de l'arrivée sur un nouveau réseau.
