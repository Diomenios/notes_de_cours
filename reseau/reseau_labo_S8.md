
mot de passe machine : user123

#### Troubleshooting

**client** :
  * 1. ping www.google.com
    * oui : parfait ça fonctionne
    * non : problème DNS ou IP (voir 2)
  * 2. ping 8.8.8.8
    * oui : IP ok mais DNS KO
    * non : IP KO -> quid du DHCP ?

**server**
  * 1. service dnsmasq status
  * 2. netstat -nltp
    * S3 pour le NDS
    * IS9 pour le DHCP

#### côté DNS

**DNSMasq**
  * DNS "ligth": server 10.4.2.1 (résolveur de l'ephec pour les machines fixes) ou
  8.8.8.8 (résolveur de google pour eduroam).
  * DHCP : dhcp-range = 192.168.0.50 + 192.168.0.150 , /24.

**Attention** : servcice dnsmasq restart -> à faire après chaque changement de configuration

Pour vérifier si un dnsmasq sert de serveur cash : envoyer une requête 2 fois vers la même machine qui n'a pas encore été contactée.
Si c'est un serveur-cash, on verra passer sur la trace wireshark les requêtes itératives la première fois mais pas la seconde !
