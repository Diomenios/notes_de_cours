<center> <h1> Infrastructure Réseau S10
 </h1> </center>

# TP S9

* vtp domain formation => créer le domaine "formation"

-> si les interfaces se mettent en down, c'est que vtp les à couper, il va falloir tout refaire

*question* : qu'est ce que VTP ?

ça permet de donner à tout les switch de couche 2 les Vlans du switch de couche 3

après, pour permettre le broadcast vers le serveur DNCP/DNS :

* interface Vlan XX
* ip address-helper 192.168.XX.XX -> l'addresse du serveur.

**pour les NATs**

* show ip nat translation -> permet de voir si la NAT est bien configurée

outside globale : addresse du site que l'on veut contacter (1.1.1.1)
outside locale : on ne la connait pas, c'est l'addresse locale du site qu'on veut contacter
inside globale : c'est l'adresse du routeur qui gère la NAT
inside local :c'est l'adresse de l'ordinateur à l'intérieur de la NAT (192.168.XX.XX)

## IPV6

la fragmentation : c'est quand on envoies des informations sur le réseau, et que la connection est tellement mauvaise que le routeur segmente le paquet en plus petit paquets, et les envoyer par plusieurs chemins.

le checksum : puisqu'on a plus de checksum, ce sera l'application qui fera le checksum à la place du routeur.

**le but de tout cela, c'est de réduire le travail que doit faire le routeur**

Dual Stack : IPV4 et IPV6 sont activé en même temps sur la machine
Translation : Permet de passer d'un réseau full IPV4 vers un réseau full IPV6.

*permet de faire la transition de IPV4 vers IPV6 en douceur*

en IPV4, le champ protocol : permet de savoir vers quel protocole il faut renvoyer le paquet, ou alors quel protocole à "générer" le paquet.

IPV6 est modulaire car il a un entête de taille fixe.  l'entête "next header" indique qu'il y a un entête supplémentaire avant la partie message du paquet.  cela permet de rajouter des options supplémentaires au paquet.  Chaque "next header" pointe vers l'entête optionnel suivant.  Et une fois qu'il n'y a plus de "next header", on arrive sur les DATAs

#### représentation d'un chiffre en IPV6

On note les adresses en héxadécimale par soucis de place.  Dans une adresse IPV6, on peut supprimer les zéros de gauche non significatifs.  De plus, **une seule fois par adresse** on peut regrouper plusieurs groupe de zéros consécutif sous la forme "::"

les adresses globale unicast, sont les équivalent des adresses IPV4 qu'on utilise pour aller sur le net !

*2001:DB8 sont des adresses particulières réservées pour les laboratoires.*

****
**Attention :** en IPV6, on aura plusieurs adresses IPV6 sur la même interface, eet chacune aura un rôle particulier à jouer => en cas d'erreurs, il ne faudra pas essayer de réécrire au-dessus de la mauvaise adresse, car elle n'est pas unique comme en IPV4.
****
####les différents types d'adresse

* Local Link (le prof a dit que ce serait les plus importantes cette année) : elle seront en **FE80::/10**.  Elles ne seront pas routées.  elles ne seront bonnes, donc, que dans le sous-réseau dans lequel est la machine.  Pas besoin d'utiliser de masques.

* Global unicast : en 2001: (exemple : 2001:DB8:85A3:4289:21B:D5FF:FE5B:A408)

* Unique Local :

Pour faire une adresse IPV6 à partir d'une adresse MAC, voir *slide 251*

Sur un routeur cisco, il créé automatiquement l'adresse link local en FE80 quand on attribue une addresse Global unicast à une interface.


Slide page 254 est vraiment important => à bien comprendre !

EN IPV6, on pourra faire un ping sur toutes les machines se trouvant dans le même sous-réseau que la machine "pingante".

* ipv6 unicast-routing => permet d'activer le routage IPV6 !  Le routeur est devenu un routeur IPV6

la technologie, quel concept, dans quel but et quel limitation
