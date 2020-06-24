

## 3.1 Les jointures

Lors d'une requête sur des lignes célibataire, on a besoin du même nombre de colonnes que dans la jointure.  On va donc créer des colonnes fictives (slide 8).  Cela est une obligation pour pouvoir utiliser le mot clé *union*.  C'est une joiture de droite car Client se trouve à droite (Slide 22).

C'est utile lors des externalités externes.  Dans celles-ci on a besoin d'avoir ce qui est commun au 2 tables, ainsi que les externalités de cette union.

## 3.3 Les structure cycliques directes

La clé étrangère d'une table fait référence à la clé primaire de la même table.

## 3.3 Les structure cycliques indirectes

On revient à la table de départ, mais en passant par une table intermédiaire.

## 4. Le langage SQL avancé.

***On ne voit pas les requêtes récursives***

### 4.1 la création de rôle et l'attribution de permission

On peut faire 2 choses en SQl :

* Donner des permissions directement à un utilisateur (vite handicapant dans de grosses base de données).
* Créer un rôle, et lui attribuer des permissions, puis donner se rôle à un utilisateur.  Celui-ci hérite donc des permissions.

### 4.2 Les vues SQL

Une vue est une manière particulière de présenter les données.
Une procédure est un traitement particulier sur les données.

Parfois pour des raisons de performances, le RGBD va pré-calculer la vue et la stocker dans la mémoire vive.  c'est une vue Matérialisée.  En temps normal, les vues sont dématérialisée, et ne seront calculées que lors que c'est nécessaire.

Les vues permettent :

* De restreindre les accès aux informations de la DB à certains utilisateurs.
* D'avoir un mécanisme d'évolution de la base de données.  Permet de récréer virtuellement une table dans une vue, pour permettre à des applications qui nécessitaient cette table de continuer à fonctionner.  Donc on pourrait faire évoluer Une structure de DB, sans devoir retoucher toutes les procédures nécessitant cette structure.
* De faire de la formulation complexe : permet d'utiliser 2 fonctions d'aggrégations l'une dans l'autre, alors que c'est possible en faisant une vue calculant préalablement la moyenne de certaines données, puis sélectionner sur cette vue le maximum de ces moyennes.

En principe on peut modifier des données au travers d'une vue, mais il y a des restrictions qui s'appliquent au travers des moyens utiliser pour faire cette vue.

### 4.3 Extension de la structure des requêtes Select From Where(SFW)

natural join : prend la clé primaire de la première table et la couple avec la colonne du même nom dans la deuxième table (ne marche pas toujours).
... join ... using ??? : marche pour tout les SGBD.

### 4.5 Extensionsobjet de SQL3
Introduit 2 nouveaux objets :

* row : permet d'introduire des attributs composites : un attribut qui se compose lui-même d'autres attributs.
* array : permet de rentrer des attributs multi-valeurs.

On a maintenant un mécanisme d'héritage.  On utilise le mot-clé *under* (slide 43).

 ### Les procédures SQL

 Quand on a besoin de faire des traitements sur les données, on peut créer des fonctions, permettant de faire un traitement spécifique sur les données.

 ### Les déclencheurs

 Les triggers sont de plus en plus utilisé dans l'industrie moderne, de manière à pouvoir se passer des interventions humaines.  Un trigger lance des procédures lorsque certains événements arrivent.
