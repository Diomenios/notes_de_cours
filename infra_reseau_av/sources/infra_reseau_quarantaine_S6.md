<center> <h1> Infrastructure Réseau quarantaine S3 </h1> </center>

## IPV4-IPV6

### Tunnel 6-4 dynamique

***NE MARCHE PAS SUR PAQUET TRACER***

Les tunnels 6-4 sont fort utilisé dans la réalité, mais ça reste du temporaire : ça a été créer dans le but de facilité de passage de IPV4 a IPV6.

En dynamique on est obligé d'utiliser le préfix 2002.  Cela permet d'indiquer qu'on va faire un tunnel 6-4 dynamique.

On lui passe l'addresse IPV4 de l'entrée en Hexadecimal(slide 150).  Ainsi, 10.1.2.1 devient : 2002:A01:201 ??? (voir slide).

Autre exemple : 192.168.91.1 => 2002:C0A8:5b01 (slide 151).

**Très important :** slide 152

### Tunnel ISATAP

On l'utilise dans le cas où on voudrait passer en IPV6, mais qu'on voudrait faire des tests IPV6 dans une zone IPV4.  Cela permet de faire des tests avant de changer définitivement en IPV6.  On va utiliser une addresse en 2001

### Tunnel TEREDO

Par défaut sur toutes les machines windows.  Sous linux, le tunnel s'appel MIREDO.  Il permet de fonctionner à travers un NAT.  Il va encapsuler les informations dans une trame UDP.  Quand on récupère une adresse TEREDO, il faut d'abord inverser les bits car TEREDO occulte les adresses en inversant les bits.

### NAT PT

PT = Protocol Translation

Les premiers bits sont défini par le routeur, et les  derniers bits seront obtenu grâce à d'adresse IP convertie en Hexadécimale.  On fera tout ça au niveau du routeur.

### NAT64

Mappage statique : on doit donner une adresse statique pour toutes les interfaces ; ce qui est assez lourd.  
