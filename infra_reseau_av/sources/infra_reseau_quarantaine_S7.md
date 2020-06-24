<center> <h1> Infrastructure Réseau quarantaine S3 </h1> </center>

## IPV4

### Etherchannel

C'est une technoogie pûrement cisco.  Cela permet d'agréger plusieurs ports.  Cela permet d'augmenter virtuellement le quantité de données pouvant passer par une même connection.  Virtuellement car chaque câble est une connection différente, mais les câbles de l'agrégation seront considérés comme un seul.

La condition c'est que les ports fassent partie d'une même VLAN ou un même trunk.

En mode actif : toutes les X secondes, il enverra un paquet demandant si il y a une autre machine qui veut parler LACP
En mode passif : on attend qu'une autre machine nous demande de passer en LACP pour le faire.

La plupart des matériels fonctionnent avec la MAC address source.  Dans ce cas il y aura un soucis car il n'y aura qu'un seul lien qui sera utilisé à la fois.  La seule manière que plusieurs ports soient utiliser par l'etherchannel, il faudra que plusieurs clients se trouvent derrière.

Donc lors de traffic avec l'extérieur, on n'aura pas la possibilité d'utiliser vraiment l'etherchannel.  Par contre, si jamais on utilise l'address-ip destination, on pourra bénéficier de l'etherchannel.

Etherchannel permet de faire de la répartition en fonction du paramètre qu'on lui passe.

Pour voir un résumé des interfaces etherchannel : ***show etherchannel summary***
Pour voir les ports en etherchannel : ***show etherchannel port***

### HSRP

Cela permet de définir plusieurs passerelle.  On donnera plusieurs périphériques comme passerelles, mais le protocol n'en montrera qu'un seul à l'extérieur.  Donc on n'aura jamais les deux périphériques comme gateway en même temps !  On définira une priorité sur chacun des périphériques.  C'est celui avec la plus grosse priorité qui sera la passerelle, et s'il tombe en panne, ce sera celui d'après qui deviendra la passerelle.

priorité par défaut : 100, si on met une priorité plus élevée : ce sera ce switch là qui sera la passerelle => la priorité la plus grande l'emporte.

La notion de preempt : quand un système reviens dans son état initiale, celui qui était actif redevient actif, et celui qui était passif redevient passif.

delay : permet de tenir le coup dans une situation ou le réseau fait des up/down, up/down => évite un effet yoyo.

track : permet de surveiller une interface, si celle-ci tombe, la priorité du switch sera diminuée de 10.  Dans une situation réelle, on pourrait mettre un poids, permettant de faire des diminutions de priorité plus grande que 10.  Mais sur paquet tracer ce n'est pas possible.  
