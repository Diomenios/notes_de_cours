<center> <h1> Infrastructure Réseau quarantaine S2 </h1> </center>

## IPV6 suite

2 mécanismes d'attribution d'ip dynamique : en SLAAX (sans état) ou en DHCPv6 (avec état ou sans état dans le cas d'IPV6).

### SLAAC

RFC 2462 : ne fournit pas de serveur DNS

S'il supporte la RFC 6106, il peut fournir un serveur DNS.

Quand on travail avec SLAAC, les hôtes utilisent uniquement des annonces RA(M=0 et O=0).

* M=0 : Pas besoin de communiquer avec un serveur DHCP avec état(*no ipv6 nd managed-config-flag*).
* O=0 : Pas besoin de communiquer avec un serveur DHCP sans état(*no ipv6 nd other-config-flag*).

***la config ci-dessus est la config par défaut des routeurs !***

**nd :** neighbour discovery.

Pour que cela fonctionne, il faut que ce soit le routeur qui envoie les annonces.  Pour savoir qu'on travaille en SLAAC, le pc va se baser sur le fait que les options du routeur **managed-config-flag** et **other-config-flag**.

Debian génère son adresse avec la norle EUI64 (FF FE) pour ses adresses link-local.
Windows utilise une génération aléatoire pour ses adresses link-local.

Autonomous addres-configuration $\rightarrow$ ce flag permet de dire aux machines du réseau qu'elles doivent configurer elles-même leur addresse IPV6

***attention :*** lors de la config d'un pc en IPV6 ne pas oublié le masque derrière l'addresse globale.  En cas d'oublis il n'y aura pas d'erreur mais l'addresse ne sera pas sauvée

En réalité, l'addresse IPV6 doit être un record de type 81 (pour les serveurs DNS).  Mais dans packet tracer, on doit mettre un record de type A (petite erreur de cisco).

Faire partie du groupe FF02::1 c'est faire partie du groupe des machines parlant l'IPV6 $\rightarrow$ cela permet de vérifier qu'une interface est bien configurée en IPV6. Commande : *show ipv6 interface <nom_de_l'interface>*

Pour définir le mode de fonctionnement d'un routeur en IPV6 : *ipv6 unicast-routing*
Pour retirer le routage IPV4 : *no ip routing*

Pour donner une addresse EUI64 à une interface : *2001:db8:cafe:2::/64 eui-64* $\rightarrow$ ceci donne une addresse de link local et une addresse globale dont les 64 derniers bytes sont configué à partir de la MAC-ADDRESS.

l'adresse BIA : Burn In Address.  C'est l'addresse MAC et donc l'addresse utilisée pour générer automatiquement l'adresse IPV6.

Le problème de SLAAC, c'est que dans sa configuration initiale, SLAAC n'est pas capable de découvrir les serveurs DNS en dehors du réseau link-local.

### DHCPv6

#### DHCPv6 stateless

RFC 3736 : un dhcp qui ne retient pas qui fait quoi.

On peut configurer le routeur pour qu'il fasse le boulot du DHCPv6 stateless.  C'est la seule utilité réelle de ceci.

Quand on travail avec DHCPv6, les hôtes utilisent des annonces RA et des paramètres DHCPv6(M=0 et O=1).

* M=0 : Pas besoin de communiquer avec un serveur DHCP avec état(*no ipv6 nd managed-config-flag*).
* O=1 : besoin de communiquer avec un serveur DHCP sans état(*no ipv6 nd other-config-flag*).

pour utiliser le dhcp sur un serveur :
* config d'interface : *ipv6 dhcp server <nom_de_la_pool>*
