<center> <h1> Infrastructure Réseau Avancé S2 </h1> </center>

Pour OSPF : il prend d'abord les adresses IP des routeurs ; si elles n'existent pas, il prend l'adresses IP du loopback, et finalement si les deux n'existent pas, il prendra les adresses IP physique.

**pour réinitialiser le process OSPF** : *clear ip ospf process*

Avantages de la notion de **zone régulière** : réduire le nombre de messages LSA et isoler une zone par rapport à une autre

### message LSA Type 5

**External Link LSA :** routes d'un autre domaine, générée par l'ASBR (interzonal) vers tous les routeurs de la zone.

*****
**attention :** Même si on a plusieurs zones différentes dans une config OSPF, il faut utiliser le même numéro de process OSPF dans chacune des zones.
*****
la command : *area 2* $\rightarrow$ permet de déclarer l'area 2 comme étant une area standart.

Définir l'adresse ip d'un routeur sur une area permet de bien indiquer qu'il se trouve dans une area particulière.  Ceci ne doit être fait que sur les routeurs se trouvant entre 2 zones(voir slide 21).

Un /32 est juste un réseau sans machine, ça peut tout à fait arriver dans la réalité (par exemple pour une interface de loop-back, une interface logique).

la commande : *redistribute static subnet* $\rightarrow$ redistribue les routes static configurées sur mon réseau.

la commande : *redistribute connected subnet* $\rightarrow$ redistribue les réseaux connectés aux voisins, dans un cas où on ne respecte pas les classes.

la commande : *summary address 10.10.2.0 255.255.255.248* $\rightarrow$ n'utilise plus le wildcart, mais bien le masque du réseau pour fonctionner correctement.

la commance : *default-information originate [always]* $\rightarrow$ la route ne tombera pas, elle sera toujours annoncée, même si la route physique est tombée.  En gros, cela permet de ne jamais changer notre plan d'adressage.

## les zones Stub
Quand on est dans une zone de stub, tous les routeurs compris dans cette zone doivent indiquer que cette zone est une zone de stub

la commande : *area x stub*

* ne peuvent pas inclure un lien virtuel
* ne peuvent pas inclure un ASBR
* doivent être configurées sur tous les routeurs de la zone (*area x stub*)
* ne peuvent pas être la zone 0 (backbone)

le gros avantage de la zone stub, est qu'on ne surcharge plus cette zone avec toutes les informations venant des autres zones, on ne fera que transmettre la route par défaut aux routeurs de la zone.  Toutes les modifications faites sur les autres zones (pas la backbone) n'affecteront aucunement la zone de stub, mais ce sera le routeur faisant le lien entre cette zone et la backbone qui devra faire le routage?

## les zones totaly stubby

Pour réduire encore plus la table de routage, on peut utiliser les zones totaly stubby ; cela permet aussi d'ajouter un coût par défaut aux routes par défaut distribuer.  Très intéressant si on veut, par exemple, préivilégié une route passant par un ABR plutôt que par un autre (dans le cas d'une zone ayant 2 ABR vers l'area 0).

## les zones NSSA

par défaut, l'ABR n'injecte pas la route par défaut dans les informations qu'il partage.  Pour remédier à ce soucis il faut rajouter la config : ????? (voir slide 37).
