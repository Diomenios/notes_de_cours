<center> <h1> Réseau Théorique S10 </center> </h1>

#Module 4 : Le Web

Le world wide web est un système de partage de document à grande échelle.  
Il est constitué de 3 parties principale :

* un système d'addressage standardisé pour identifier les documents (URI)

* un format de documents standardisé (HTML)

* Protocole standardisé pour récupérer les documents sur un serveur (HTTP)

## L'URI

Uniform Resource identifier => il identifie de manière non-ambigüe une ressource sur le world wide Web.  Il est consitué de 3 parties distinctes :

* Le Protocole :
* L'Authority :
* Le chemin d'accès au document

## HTTP :

Le https est sur le port 443.

document MIME : c'est une manière de présenter des documents : par exemple text/html.

CR : Carriage return
LF : Line Feed

le serveur renvoie la date de dernière modification de la page lors d'une réponse HTTP pour la gestion des caches.

le web fonctionne par des connections TCP.

****
**culture générale**

HTTP 2 : idée : gagner du temps en multiplexant les réponses dans une seule connection TCP.  Puis ensuite, on a fait en sorte que le serveur anticipe les demandes en envoyant les ressources nécessaire à un document HTML en même temps que celui-ci.  

****

Dans le cours, nous allons rester en HTTP 1.1.  

Page statique : page suffisant à elle-même, n'utilisant pas de JavaScript, ou alors dont le serveur n'adapte pas le contenu en fonction de l'utilisateur

Page dynamique : pourra être modifier selon les besoins, et pourra donc être différente.

Les pages dynamique requiert une architecture en couche ou architecture multi-tier.

##serveur Web

adresse localhost : 127.0.0.1

Il faut éviter de mettre une base de données directement accessible depuis le net.  Elle sera facilement attaquable si jamais elle n'est pas "protégée" avec un pare-feu par exemple.  S'assurer que seul le serveur web pourra y avoir accès et seulement en lecture par exemple !

***Attention important :*** en Linux : les erreurs ddes serveurs web sera dans : **/var/log**

* Virtual Hosting : c'est quand un même hôte physique, on a plusieurs serveurs web différents indépendants.  C'est un niveau très basique de virtual hosting.  Le serveur (physique) devra utiliser le champ host de la requête pour retrouver quel serveur il doit contacter.

Par défaut, un serveur web ne sait pas générer une page web de lui-même; il faudra utiliser une API : fastCGI ou un module PHP.

### IIS

grosse boîte noir qui fait pleins de choses.  (Active Directory : c'est la gestion des utilisateurs et des ressources sur un réseau windows).

### Apache

Apache est un serveur web, et seulement un serveur web.  Un processus par connexion simultannée.

Les fichiers .htaccess permet de faire des sous-répertoires.

Listen : permet de définir le port sur lequel on va écouter !  

DocumentRoot : permet de définir la racine des documents.

ErrorLog : permet de donner le dossier dans lequel se trouveront des erreurs
LogLevel : permet de définir si les logs d'erreurs seront plus ou moins verbeux (debbug est un niveau assez verbeux)

DefaultType : donne le type de fichier renvoyer par défaut (par exemple : text/html)

Les sections : permet de définir des configurations pour des répertoires particuliers et non globale.

## Point Bonus : les proxys

Un proxy est une machine qui vient au niveau applicatif se mettre entre un client et un serveur.  Un proxy HTTP "parle" seulement le HTTP et permet de récupérer les requêtes venant du web et des les retransmettre (ou les couper au besoin) aux clients se trouvant dans un réseau local.

Un proxy devant un serveur s'appelle : un reverse proxy.  Ainsi, c'est le proxy qui sera exposé à l'extérieur, et il triera les requêtes avant de les envoyer (si elles sont bonnes) vers le serveur.
