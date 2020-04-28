<center> <h1> </h1> </center>

Une adresse en 2001 indique que c'est une adresse de laboratoire qui n'est pas destinée à être utilisée à l'extérieur

ff02::2 groupe IPV6 seulement disponible pour les routeurs

ff02::1 groupe IPV6 disponible pour toutes les macgines IPV6

ICMP ne doit jamais être désactivé en IPV6 car tous les mécanismes de détection de duplication d'addresses envoies des messages avec seulement IPV6 =>  donc le retirer casserait tout le mécanisme.

Neighbour sollicitation : demande d'addresses

Neighbor advertissement : donne son addresse aux autres

Pour un ordinateur, ne pas oublié de mettre un masque /64 => pas d'erreurs, mais ne sera pas encodé.

Pour voir sur packt tracer les config ipv6 d'un pc : *ipv6config*

En IPV6, on peut avoir plusieurs adresses IPV6 sur la même interface.  Il faut donc bien supprimer une addresse pour la redéfinir par la suite

* route par défaut : *ipv6 route ::/0 "addresse du réseau"*

Quand on a une liaison de type Ethernet, on doit plutôt mettre le next-stop plutôt que l'interface de sortie directement !  Sinon on risque d'avoir des problèmes de routage.

Fonction en SLAAC : sans serveur DHCP par defaut :

* no ipv6 nd other-config-flag
* no ipv6 nd managed-config-flag

RFC 6106 :

route entièrement définie : route où l'on défini l'hôte.
route statique : route que l'on défini ou que l'on apprend grâce à un autre périphérique.
route directement liée : route avec un L dans la table de routage.
