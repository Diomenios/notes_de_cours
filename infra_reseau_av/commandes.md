<center> <h1> Commandes Infra-réseau avancé </h1> </center>

## config par défaut

### config routeur

* *ipv6 address 2001:db8:cafe::1/64* : donne une adresse IPV6 unicast global a une interface (#config-if).
* *ipv6 address FE80::1 link-local* : donne une adresse IPV6 link-local (non-routable) a une interface (#config-if).
* *shipv6 interface brief* : montre une description des différentes interfaces fonctionnant en IPV6 (#config).
* *no ip routing* : désactive ipv4 (#config).
* *ipv6 unicast-routing* : active le routage ipv6 (#config).
* *ipv6 enable* : active IPV6 sur une interface (#config-if).
* *sh ipv6 dhcp binding* : permet de voir les clients qui utilise du dhcpv6 avec état.
* *show ipv6 route* : permet de montrer les routes ipv6.
* *ipv6 route ::/0 L0* : configure une route par défaut pour le routeur.

## SLAAC

### config routeur

* *no ipv6 nd managed-config-flag* : en #config-if
* *no ipv6 nd other-config-flag* : en #config-if

+ configuration normale sur une interface de routeur (adresse ipv6)

## DHCPv6 sans état

config pour que le routeur fasse serveur DHCPv6

* *ipv6 dhcp pool IPV6-STATELESS* : défini le nom d'une pool d'adresse ipv6 (#config).
* *dns-server 2001:db8:11:1::100* : défini l'adresse ip du serveur dns (#config-dhcp).
* *domain-name formation.lab* : défini le nom du domaine (#config-dhcp).

sur l'interface :

* *no ipv6 ndmanaged-config-flag* : en #conf-if
* *ipv6 nd other-config-flag* : en #conf-if
* *ipv6 dhcp server IPV6-STATELESS* : défini le serveur dhcp utilisé (#conf-if)

## DHCPv6 avec état

* *ipv6 dhcp pool LAN-POOL* : défini le nom d'une pool d'adresse ipv6 (#config).
* *dns-server 2001:db8:11:1::100* : défini l'adresse ip du serveur dns (#config-dhcp).
* *domain-name formation.local lifetime 1800 600* :  défini le nom du domaine et donne la durée pendant laquelle l'adresse est valable (#config-dhcp).
* *address prefix 2001:db8:11:1::1000 /120* : défini la plage d'adresse disponible

sur l'interface réseau :

* *ipv6 nd managed-config-flag* : en #conf-if
* *ipv6 dhcp server LAN-POOL* : en #conf-if

## RIPng

*  *ipv6 rip MYRIP enable* : permet d'activer RIP (#conf-if)
* *ipv6 rip MYRIP default-information originate* :
* *show ipv6 rip database* : permet de montrer les routes obtenues grâce à RIP.

## OSPFv6

* *ipv6 router ospf 1* : permet de rentrer dans la configuration d'ospf, en lui donnant une ID (#config).
* *router-id 1.1.1.1* : donne une ID au routeur (obligatoire car pas auto-configurée comment en IPV4) (#config-rtr).
* *default-information originate* :

sur une interface

* *ipv6 ospf 1 area 0* : permet de définir l'appartenance de l'interface à une zone OSPF(#conf-if).
