<center> <h1> Infrastructure réseau avancé </h1> </center>

au niveau des PCMCIA : mettre 1Go de mémoire => initialisé à 0 Go par défaut

#### dans l'icône slot

au niveau des slots : \*-1FE veut dire : une interface FastEthernet

$\rightarrow$ \* permet de dire que ce qui est avant n'est pas important car c'est juste le format

#### advanced

l'option Idle-pc : permet de définir avec quelle valeur il va interragir avec le processeur du PC histoire d'avaoir le moins de perte de performance possible

### Tools

l'otion console permet d'avoir un retour sur les erreurs du circuit

### Edit

#### préference

On a besoin de Dynamips, c'est ce qui permet d'émuler le matériel cisco

*pfsensed :* bon firewall gratuit

pour travailler en IPV6 : IOSV

poru sauvegarder des modifications faites sur des doquers : aller dans advanced et mettre les répertoires qui doivent être sauvegardés.

****
*petit rappel :*
user : gns3
password : user123
****

## OSPF multi area

**show ip ospf network** $\rightarrow$ permet de savoir si tout est bien configuré (commande importante)

en multi area, tous les networks doitvent être connecter à la area 0 (backbone)

*Link State Advissement(LSA) :* les intérêts de ces messages sont les suivants : ce sont des annonces qui seront limité à l'area courante du routeur les émettant.

* permet de renforcer le concept de hiérarchie, en permettant à l'area 0 d'être la zone principale
* permet d'isoler des zones à risque et de limiter l'impact de changements sur cette zone sur les autres zones.

note : il ne peut y avoir d'une seule backbone par réseau.  Une area principale, et puis des area secondaires étant toutes au même niveau.

*Autonomous System Boundary Router(ASBR) :* fait la liaison entre le monde extérieur et notre area.

Regular Area : une zone qui ne possède aucune particulière (pas une backbone).

l'élection se fait sur la routeur ID ainsi que sur l'adresse IP de loopback (adresse logique).

BDR :
DR : le routeur avec l'identifiant le plus élevé

### LSA

le type 1 permet à un routeur n'ayant pas de rôle particulier de communiquer vers le DR, et le type 2 est utilisé pour quand le DR communique avec les autres routeurs de l'area

224.0.0.05 : c'est une adresse de multicast $\rightarrow$ toutes les adresses IP commençant par 224 sont des adresses de multicast.

Mettre une interface de Loopback sur le routeur et la faire connaître via OSPF permet 2 avantages :

* si notre routeur à un soucis, on n'a qu'une seule adresse à connaître, et permet de bypasser les soucis d'interface
* permet d'identifier le routeur avec une seule adresse IP sur le réseau, et on ne doit pas communiquer toutes les adresses de ses interfaces.

une information LSA de type 2 est une information zonale : elle permet d'envoyer la liste de tous les routeurs attaché au segment.

une information de type 3 est envoyé par l' A Border Routeur (ABR) (le routeur qui fait la lisaison entre deux zones OSPF différentes) permet de communiqué une liste résumée des réseaux d'une autres zones appartenant au même AS (Autonomous System $\rightarrow$ gérer par une même entreprise).  

O IA : OSPF Inter Area (information inter zone)

ce sont les informations qu'on reçoit via le routeur faisant la liaison entre 2 areas différentes.  Les O IA concernent les routeurs d'une area différentes.

Le numéro de process d'ospf est local, il n'est pas nécessaire d'utiliser le même sur tous les routeurs du réseau.  

ASBR : Routeur allant vers un autre domaine que l'on ne gère pas.  utilise des annons LSA de type 5

O E1 : on augmente le coup pour chaque routeur traversé
O E2 : on consifère qu'il n'y a pas d'intérêt à augmenter le coup lorsque l'on traverse les routeurs d'une même zone.

quand on créé plusieurs routes par défaut, la route avec le poids le plus élévé ne sera utilisé que comme une route de back-up.

redistributed static ????  utilisé pour permettre la redistribution du trafic d'un réseau.
