<center> <h1> Développement Web Avancé S1 </h1> </center>

## Framework :

boîte à outils contenant un ensemble d'éléments servant de bae à une application et permettant de définir une architecture cohérente pour celle-ci.  Cela permet aussi d'utiliser une architecture et des fonctionnalité connue par d'autres programmeurs, ainsi que de gagner du temps car il permet de pas toujours devoir réinventer la roue.

En comparaison, la programmation *maison* permet d'avoir une meilleur compréhension du langage, d'avoir un code parfaitement adapté à nos besoins,

Une librairie (par rapport à un framework) est un ensemble de fonctionnalités spécialisées.

## PHP :

Un langage mature, ayant une grosse communauté de développeurs l'utilisant.  Son plus gros défaut est de vite générer du code assez brouillon et difficile à lire.

###  Composer

Composer est un gestionnaire de dépendances par projet.  Il permet, pour chaque projet, de gérer les modules et les bibliothèques pour que ceux-ci tourne correctement.

### LAMP, WAMP

Pour faciliter le développement en local, possibilité d'installer aisément une combinaison populaire de logiciels libre.gratuit fréquemment utilisées ensemble.

LAMP : Linux Apache MariaDB(ou MySQL) PHP
WAMP : Windows Apache MariaDB(ou MySQL) PHP

$\rightarrow$ PHP nécessite d'avoir un serveur tournant en dessous pour être exécuter.

### Frameworks PHP :

#### Symfony

Symfony esr un ensemble de composants PHP ainsi qu'un Framework MVC livre.  Il est plus compliqué à prendre en main pour Laravel.  A la réputation d'être mieux que Laravel pour les gros projets, car permet de mieux savoir ce que l'on fait.  

NB : Possède une interface en ligne de commande permettant de tester rapidement des bouts de code.

**à savoir :**

  * Symfony sera souvent utilisé avec un schéma ORM
  *

#### Laravel

Laravel permet de déployer rapidement un petit site.  Il permet pas mal de raccourci pour pouvoir développer facilement et rapidement notre site.  Par contre, le petit défaut est que, comme il existe beaucoup de raccourcis, on a une moins bonne idée du code se trouvant derrière notre site.

****
##### petit rappel :

ORM (Object-Relationnal Mapping) : programme qui s'interface entre votre programme et votre base de données de manière à convertir le schéma de données de l'un en des données utilisable par l'autre.

  * permet d'avoir moins de code à écrire et plus facile.
  * rajoute une coche supplémentaire à gérer
  * peut nuire aux performances
  * complexifie les requêtes très spécifiques : c'est un programme écrit à l'avance, dans un gros projet que l'on souhaiterait optimisé, ça peut arriver qu'on se retrouve limité par l'ORM.  

****

#### Templating

Un template est un modèle permettant de représenter le résultat désiré et évitant la duplication du code.

### Node.JS

ENvironnement d'exécution qui permet d'exécuter du javascript sur un serveur, hors d'un navigateur.

L'avantage du Node.JS, c'est de pouvoir utiliser le même langage de programmation côté client et côté serveur.

Node.JS est très performant.  Il peut gérer un énorme nombre de requête en même temps, sans être bloqué (en asynchrone).

#### npm

Gestionnaire de package de Node.JS très populaire.  Il est devenu le gestionnaire de package du monde javascript, même pour le front-end.

pour l'initialiser et l'utiliser dans un dossier : npm init

### Frameworks Node.JS

####  Express

Framework Web minimal et performant, très utilisé avec Node.JS.  Permet de facilement générer une API.

#### MEAN

MEAN veut dire : MongoDB Express Angular Node.JS

C'est une combinaison pour créer un site web très populaire car elle permet d'utiliser de bout en bout du développement du javascript.

### Python

C'est un langage de programmation élégant et lisible, souvent installé par défaut (dans les distro Linux).

Python a l'avantage principal de posséder énormément de librairie et de modules, ce qui permet de l'utiliser de beaucoup de manières différentes.

pour installer des librairies en python, il faut utiliser le gestionnaire de package *pip* : pip install "nom_du_package"

## TESTING

Chaque langage possède des outils de testing pour essayer de détecter les bugs le plus rapidement possible.  Ils ne seront pas présenter durant les cours et c'est à nous d'aller nous renseigné !
