<center> <h1> Infrastructure Réseau Avancé </h1> </center>

## Résumé S5

### EIGRP

#### Summarisation

Pour vérifier si la summarisation fonctionne : l'interface Null est activiée.  On ne pourra pas utiliser de summarisation lorsqu'on travaillera avec des réseaux discontinu(un réseau 192.168.16 d'un côté et après quelques routeurs, on retrouvera de nouveau 192.168.16, différent du premier).  Le summary permet de "jeter" des adresses IP ne faisant pas partie d'une liste de base, sur un sous-réseau.

## IPV6

- Elimination des adresses de diffusions (Plus de ARP).
- Dans un réseau local on communique via l'adresse MAC.

Lorsqu'un PC arrive dans un réseau, il vérifie d'abord que la machine qu'il désire joindre est bien sur le même sous-réseau $\rightarrow$ via le masque de sous-réseaux.  Si les masques correspondent, il envoie une requête ARP via un broadcast pour obtenir l'addresse MAC de la cible à joindre.

En IPV6 (une adresse APIPA == une addresse de lien local), il n'y a plus d'addresse de boradcast.  La machine devrait être capable de savoir par elle-même quelle adresse IP elle peut prendre $\rightarrow$ on aurait donc plus besoin de serveur DHCP.

IPV6 devrait permettre de garder son addresse IP même quand on change de fournisseurs.

### Avantages et Caractéristiques

*  Support natif de la mobilité et la sécutité(IPSec)
* Hiérarchie à plusieurs niveaux par la conception
  * Agrégation de route plus efficace
* Entête simplifié pour une meilleure efficacité de routeur :
  * Moins de fragmentation
  * Routage amélioré
  * Plus de checksum : car on ne veut plus à avoir à le recalculer à chaque décrémentation du TTL.
  * Mécanisme d'extension de l'entête amélioré : on le verra plus tard
  * Mécanisme de contrôle de flux amélioré : on le verra plus tard

* Transition progressive possible d'IPV4 vers IPV6:
  * Dual Stack (IPV4+IPV6) : on peut faire, sur un réseau, à la fois de l'IPV4 et de l'iPV6, mais attention en cas de conflits, ce sera IPV6 qui aura la priorité.
  * Translation (IPV4 <-> IPV6) : on peut transformer des informations routées en IPV4, vers des informations routées en IPV6.

Tout ceci est fait dans le but de diminué la charge sur les routeurs, pour qu'ils puissent router les informations de manière plus optimale.

le champ Payload : permet de connaître la charge utile de la trame IP.
le champ TTL devient le champ HopLimit.

Les 64 bits de poids faibles permettent d'identifier la carte réseau.

Les 64 ou 56 bits de poids forts compose l'identifiant global fournit par le fournisseur d'accès

*dans le cas 56 bits :* les 16 bits restant permettent de faire des sous-réseaux.

**unicast global :** utilisable sur internet

**link-local :** utilisable seulement sur le réseau local

l'adresse de lien local peut être générée automatiquement à partir de la MAC adresse de la machine.  Cela se fera en coupant la mac adresse en deux, en insérant :FF FE: au milieu des deux parties et en inversant le 7ième bit.

**anycast :** On veut communiquer avec une machine utilisant un service particulier, et on interroge toutes les machines possédant ce service.  Ce sera la machine répondant le plus rapidement qui sera sélectionnée.
