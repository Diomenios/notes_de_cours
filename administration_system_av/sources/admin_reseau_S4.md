<center> <h1> Administration réseau : VOIP 2 </h1> </center>

## RTP

**Real Time Transfert Protocol**

Notion de base temporelle importante, il faut que les morceaux de *sons* soient joués au bon moment.  Tourne au-dessus d'UDP et de TCP.  On peut le voir comme un protocol de couche 4.5.

permet :

* Reconstituer la base temporelles des flucs de données vidéo, audio et temps-réel en général.
* Détecter des perts et en informer rapidement la source. Permet à la source de réagir dans le cas où les pertes sont trop importante
* Identifier le contenu des données et permettre une tranmission sécurisée.

RTP est :
* Unidirectionnel (multicast possible dans certains cas).
* Bien adapté aux réseaux temps réel (ATM, canal optique, ...).
* Conçu pour une utilisation multipoint.

***Attention :*** Multicast != Multipoint

***Définition Multicast : ***
***Définition Multipoint : ***

RTP est une entête :

* Timestamp sur 32 bits (nécessite de sunchroniser la source et la destination NTP).
* numéro de séquence sur 16 bits.
* SSRC (32bits) Identifiant de la source de synchronisation (*référence* pour la base temporelle)
* Liste de CSRC : de 0 à 15 éléments sur 32bits : c'est la liste des sources ayant participé au flux.

Entités RTP :

* Le multiplexer
* Le convertisseur(translator) : permet de convertir le codex ou de passer les firewalls, permet aussi de passer de multicast à unicast ...

## RTCP

Flux parallèle a RTP et fournis des informations sur la qualité de la connection.

Rapport de performance :
* Compteur de âquest et d'octets
* Compteur de paquets perdu
* Jitter

## PABX

*Private Automatic Branch eXchange*

Commutateur, souvent présents dans les grandes entreprises
Entité logique, souvent gérée par un équipement hardware dont la fonction coniste à :

* Router les appels au sein d'un réseau privé
* Interconnecter les réseaux
* ???

Le PABX est le seul à connaître la localisation de chaque terminal téléphonique.  Fonction de routage.

En cas d'ajout, il faut donc juste mettre à jour le PABX

## Asterisk

* générique
* souplesse
* adaptabilité
* puissance

Il est modulable aussi permettant de l'adapter en fonction des besoins. Il peut servir de passerelles entre des réseaux hétérogènes.

On aura essentiellement un fichier SIP.conf.  L'option context : donne les règles qui s'appliquent par défaut à un utilisateur.  Dans slide 20 :

* 100 : le numéro d'appel

FQDN = Fully Qualified Domain Name : donne la position absolue de son noeud dans l'arborescence.
