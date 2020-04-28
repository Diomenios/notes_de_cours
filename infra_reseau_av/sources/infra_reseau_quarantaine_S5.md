<center> <h1> Infrastructure Réseau quarantaine S3 </h1> </center>

## IPV6

### OSPF

* 1. activer OSPF en IPV6 : ***ipv6 router ospf <numéro_du_process>***
* 2. puis définir l'id (en IPV4) du router : ***router-id 10.1.1.1*** => en IPV6 c'est obligatoire de mettre un identifiant
* 3. redistribuer la route par défault ***default-information originate***
* 3.5 en cas de soucis au point 3 : ***redistribute static*** redistribuer toutes les routes statiques
* 4. ***passive-interface G0/0*** : empêche d'envoyer les messages OSPF par cette interface
* 5. aller dans les interfaces du router : ***ipv6 ospf 1 area 0*** (pour définir la backbone)

Pour voir les voisins : ***show ipv6 ospf neighbour***

### Délégation de préfix

Voir slides

### IPV4-ipv6

Les principales techniques permettant la transition de IPV4 vers IPV6 :

* DualStack : les appareils sont configurés pour utiliser IPV4 et IPV6 **simultanément**
* Tunneling : **Encapsulation de traffic IPV6** dans des paquets IPV4.
  - 6to4 (slide 145)
  - ISATAP : Intra-Site ??? (voir slide 145)
  - Teredo : Tunnel IPv6 au-dessus d'UDP (par défaut sur windows) => n'est plus utilisé aujourd'hui.
* AFT(Address Family Translation) : On translate
  - NAT-PT : en 2007 il y a eu la RFC4966 qui dit qu'utiliser NAT-PT n'est vraiment pas une bonne idée.
  - NAT64 : On peut l'utiliser pour faire de la translation de IPV4 vers IPV6 et de IPV6 vers IPV4 **Mais** elle ne peut faire de la translation dynamique seulement de IPv6 vers IPv4.

D'un point de vue fonctionnel, le Dual-Stack est l'idéal car : la machine peut faire de l'IPv4 quand on en a besoin, le routeur peut communiquer en IPv4 ou IPv6 selon les besoins, et donc au final tout le monde peut facilement discuter avec tout le monde.

Par défaut, IPv6 est dominant sur IPv4.  Donc par défaut, si un système ne précise pas s'il doit parler en IPv6 ou IPv4, il parlera en IPv6.

Par contre, le soucis du DualStack : c'est que IPv6 est prioritaire.  Donc si, dans une application, on ne précise pas le mode de communication, on va d'abord tenter une communication IPv6, et seulement si on a un time-out, on essayera en IPv4 =>  on aura des relantissements notables dans ce cas !

### Tunnel 6to4

Si on a une addresse IPv6 qui commence par 2002 : on est certains qu'on est dans un tunnel 6to4 (16 premier bits).
