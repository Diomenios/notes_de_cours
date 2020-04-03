<center> <h1> Labo Réseau S5 </h1> </center>

adresse privée de classe A : 10.0.0.0
adresse privée de classe B : 172.16.0.0 jusque 172.31.0.0
adresse privée de classe C : 192.168.0.0

# Configurer un NAT :

En supposant que :
* 1: l'interface G0/0 fasse partie du réseau local
* 2: l'interface S0/0/1 permette d'accéder à internet

en config :
* interface G0/0
  * ip nat inside
* interface S0/0/1
  * ip nat outside
* ip nat inside source list1 interface S0/0/1 overload
* access-list 1 permit 192.168.1.0 0.0.0.255

***note :*** une wildcart est un masque inversé : par exemple, ci-dessus 0.0.0.255 est la windcart de 255.255.255.0
