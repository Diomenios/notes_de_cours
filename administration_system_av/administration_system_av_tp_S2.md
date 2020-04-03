<center><h1> Administration Réseaux et Systèmes S2 </h1></center>

Un hyperviseur est une plate-forme de virtualisation qui permet à plusieurs systèmes d'exploitation de travailler sur une même machine en m

L'hyperviseur interragit directement avec le hardware de l'ordinateur hôte.  Les noyaux tourneront au-dessus de l'hyperviseur.  Cela permet d'isoler les différents OS tournant au-dessus de l'hyperviseur les uns des autres.  Ainsi, les modifications effectuer par l'OS 1, n'affectera jamais le fonctionnement de l'OS 2.

## La virtualisation

### Objectif de la virtualisation :

* Equivalence :
* Contrôle des ressources :
* Efficacité :

En virtualisation, on a la majorité des commandes qui sont effectuées directement.  Mais il peut arriver, dans certains cas, qu'il faille une intervention extérieur pour que cela soit fait !

### La virtualisation complète :

La virtualisation est subdivisée en différents rings : du ring 0 (le plus bas) au ring 3 (le plus haut).  Dans l'architecture classique, seul les ring 0 et 3 sont utilisé.  Le ring 0 fait tourner le noyau en kernel mode, et le ring 3 fait tourner la couche Applicative en usermode.

En virtualisation complète, on utilise en plus le ring 1 pour faire tourner des OS invités.  Les OS invités ne savent pas qu'ils sont virtuels, ils tournent comme s'ils étaient vraiment en train de tourner sur le hardware de la machine.  

En Paravirtualisation (type 1), le ring 1 fait tourner un OS modifié, qui lui a consience qu'il est virtualisé.  En gros, ce sera la même chose qu'en virtualisation complète sauf dans des cas spécifique où l'OS modifié sait qu'il doit passé le lead au véritable kernel.

En virtualisation assistée(type 1), on voit apparaître un ring -1 (root mode), dans lequel on retrouve l'hyperviseur.

En virtualisation assistée(type 2), on utilise le ring 3 pour faire tourner l'hyperviseur, l'os invité et la couche applicative.

## Emulation

L'ordinateur est entièrement simulé sur la machine, y compris le processeur.

Le CPU émulé peut être différent que le CPU du hardware, mais en revanche ses performances seront très médiocre.

## Les conteneurs

On virtualise seulement la couche applicative, ils ne nécessitent pas la présence d'un OS supplémentaire.

### Principe :

* Chaque environnement possède son propre espace mémoire
* Autres ressources systèmes partagées

## Initiation à Docker (conteneur)

Un container ne contient que ce qui est nécessaire à faire tourner l'application.  C'est en quelque sorte une machine virtuelle légère.  Un container est toujours démarré grâce à une image, et on n'aura qu'un seul service par container

* le démarrage sera exécutée grâce à une commande tournant en avant-plan.

#### QU'est ce qu'une image docker ?

C'est un template en lecture seule, utilisé pour créer un container?

Il est composé de couches :

* **la couche de base :** Généralement un OS : Ubuntu, Fedora, ...

* **Les couches supplémentaires :** Rajoute des fonctionnalités ou des mises à jour.  Par exemple   l'installation d'Apache.

### Le docker engine

Il permet de faire tourner les différents container.   Il est composé de différents éléments :

* **Le daemon docker :** C'est un serveur contenant une API REST, tournant en arrière-plan et permettant de faire toutes les interractions avec l'extérieur.

* **Le client docker :** il permet de communiquer avec le daemon docker directement via le shell, cela permet une interraction plus simple.

### Fonctionnement

Utilise des fonctionnalités d'isolation de ressources de Linux

* **cgroups :**
* **kernel namespaces :**

* **?????**



### Commandes utiles

La commande *EXPOSE*  permet de spécifier les numéros de port sur lesquels l'appilcation va utiliser.

*docker run -p 80:3000 -d --name web mean* $\rightarrow$ cela permet de relier le port 80 de l'hôte au port 3000 du container web

### Les réseaux docker

* bridge : permet de relier des applications dans des containers dockers séparés et devant communiquer
* host : utilisation directe de la stack réseau de l'hôte

????????

Le plus intéressant pour nous sera le réseau bridge.  Il existe un réseau docker de type *bridge* par défaut, mais il est plus intéressant de faire son propre réseau *bridge* car cela permet la résultion DNS automatique entre autres avantages.

Docker swarm : permet de relier dans un même réseau logique un ensemble de container dockers tournant sur plusieurs machines physiques différentes.

#### Partage de fichier
 * bind mount : permet de partager des fichiers de configuration ou de code source entre l'hôte et le container.  Intéressant lors de processus de développement.

 * Volume : ??????

### Docker compose

Très intéressant car cela permet de manager plusieurs applications sur un même réseau dockers
(information de cette section à vérifier).

## SSH

garantis la confidentialité des packets échangés via du chiffrement de paquets.  SSH garantis aussi l'intégrité des paquets échangés.  

* Authentification : du serveur (via une clé publique)


cryptographie asymétrique pour les échanges de clés et ensuite une cryptographie sysmétrique pour l'échange des données .

le chiffrement asymétrique : il est composé de deux éléments $\rightarrow$ Une clé publique et une clé privée.  La clé publique est une clé que tout le monde peut connaître, alors que la clé privée permet de garantir le chiffrement, et est gardée secrète.  Cela permet deux choses : de vérifier l'authentification de la personne et le chiffrement des paquets.  

La clé publique, disponible pour tout le monde, permet de chiffrer le message qu'on veut m'envoyer car seul la clé privée permet de déchiffré un message chiffré avec la clé publique.  Cela permet à tout le monde de m'envoyer des messages dont je serai le seul capable de voir le contenu !

1 : échangé le secret permettant de chiffrer la communication.

2 : vérifier que l'identité de la personne avec laquelle on communique est bien celui qu'il doit être.

Le canal sécurisé ne garantis pas que la personne ayant le canal est autorisée à utilisé votre serveur.  Il faut rahjouter une identification par mot-de-passe, et en plus rajouté une protection contre le Brut-Force.

Faire attention : il faut ajouter des comptes utilisateurs, pour sécurisé le serveur, en bloquant l'authentification en root.  Cela oblige un pirate, s'il arrive à craquer un compte utilisateur, à devoir craquer par la suite le mot de passe root, car cela ne peut être fait que de l'intérieur.  

générer une clé ssh : *ssh-keygen -t rsa -b 4096*

On peut coupler une pass phrase avec une clé privée, de manière à rajouté une couche de protection lors de l'utilisation de la clé privée.

la clé publique doit être déplacée sur le serveur distant dans le fichier ~/ssh/authorized_keys

### Tunelling ssh

ssh -L 2000:smtp.mail.com:25 toto@ssh.exemple.org
