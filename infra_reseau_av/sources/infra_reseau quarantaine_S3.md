<center> <h1> Infrastructure Réseau quarantaine S3 </h1> </center>

## IPV6

M=0, on ne le mettra à 1 que quand on travaillera avec un vrai serveur DHCP.
O=1 quand on travail avec un serveur DHCP stateless, ce qui n'est pas le cas quand on travail avec SLAAC

Une configuration de type SLAAC est une configuration standart

Le flag A(Autonomous address-configuration), qui est addressé par défaut, demande aux clients de générer eux-même leur adresse IPV6.  Soit avec EUI-64(Linux/MAC), soit avec une valeur aléatoire RFC 3041(Windows).

RFC 3041 : Security Privacy $\rightarrow$ elle améliore la sécurité et la confidentialité des adresses IPV6.

### DHCPv6 sans état

M=0, O=1, A=1

Dans la réalité, on fera du DHCPv6 stateless avec un routeur comme serveur DHCP pour les informations complémentaires.  Ce n'est pas nécessaire de configurer un serveur DHCP dédié dans ce cas-ci.

**DAD :** Duplication Address Détection.

L'annonce du DHCP doit absolument contenir l'identifiant du seveur, mais aussi l'identifiant du PC pour une raison de sécurité.  Donc pour avoir une Annonce du DHCP il faut obligatoirement avoir une Sollicitation du DHCP par le PC.

FF02::1:2 $\rightarrow$ indique un serveur dhcp ipv6

### DHCPv6 avec état

idem que sans état mais il faut rajouter la commande *prefix*

pas de notions d'exclusion dans le DHCP en IPV6 !

Il faut désactivé autoconfig car :

* Si on transmet des informations avec le DHCP, elles seront réécrite si autoconfig est actif
* Pour la sécurité c'est aussi utile : ce sera plus facile de repérer un traffic suspect si l'addresse du PC ne changent pas toutes les 30 secondes, ce qui sera le cas si on garde l'autoconfig active.

#### Notion de délégation de préfix

Quand le DCHPv6 a été créé, il a été pensé pour fournir une adresse globale, qui doit être valable partout, pas juste localement.  Un fournisseur d'accès donne un fragment de toutes ses plages IPV6 disponible à la personne demandant un préfix.  Le routeur de l'ISP (Delegating router) va déléguer une partie de sa plage à un router personnel (Requesting Router).  
