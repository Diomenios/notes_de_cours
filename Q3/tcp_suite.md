<center> <h1>Réseaux </h1> </center>

# Echauffement

## Exercice 1

**Réponse :** 1

## Exercice 2

**Réponse 1 :** Utilisez click droit => suivre => Flux TCP

**Réponse 2 :** 1,2,3 => ce sont les nombres dans la colonne la plus à gauche.

****
*notes :*
* MSS = Maximum Segment Size (1 seul segment)
* Windows Size(dans header TCP) = Maximum de données envoyées avant de recevoir un ACK, concerne plusieurs segments !
* le SYN concomme 1 octet
* Sequence Number == 1 : trace partielle recomposée par wireshark.
****

## Exercice 3

Aller dans le partie TCP de la trame => trouver le "flag" => click droit => Apply as column

**Réponse 1 :**
* Numéro de séquence : 726
* Donnée par segment (Len) : 0
* correspondance des données : ici il n'y a pas de données car on ne fait qu'envoyer des signaux ACK
**Réponse 2 :**
* Numéro de séquence : s'incrémente de $1+(n*1448)$ car il augmente avec la quantité de données envoyées.
* Donnée par segment (Len) : 1448
* correspondance des données : Ce sont à chaque fois des bouts de l'image demandée par le client.
**Réponse 3 :**
