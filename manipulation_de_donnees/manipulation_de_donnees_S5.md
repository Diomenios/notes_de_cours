<center> <h1> Manipulation de données S5 </h1> </center>

Clé primaire : Colonne dont toutes les valeurs se doit d'être unique; et servira de référence pour les clés étrangères. Sera déclarée par le mot-clé : PRIMARY KEY

Clé secondaire : C'est une colonne qui se doit d'être unique, mais qui est en présence d'une autre colonne qui sert déjà de clé primaire. Sera déclarée par le mot clé : UNIQUE

DDL : Data Definition Langage;
DML : Data Manipulation Langade;

Les valeurs par défaut ne se trouve pas dans le DML mais dans le DDl.  Lors d'un insert, il ne sera pas obligé de préciser une valeur car elle se trouvera déjà par la table.  Si jamais on entre une valeur pour une clé possédant déjà une valeur par défaut, on ira écraser la valeur par défaut avec la nouvelle valeur.

### Redondances internes
Index et espaces de stockage : font entièrement partie de la couche physique.

La vue logique : c'est le fait qu'on aie un schéma relationnel qui référence les clients, les produits, ... qui doit être compréhesible pour des utilisateurs non-informaticiens.

**indépendance entre la couche logique et la couche physique :** La manière dont est agencée de manière logique, ne correspont pas exactement à la manière dont les données sont stockées sur le disque physique.  Le SGBD va donc organisé les données de manière à joindre les données de différentes tables interdépendantes, en les liant physiquement.  Par exemple si deux tables qui sont très souvent prise ensemble, les données seront mêlées au niveau physique.  Cela permet d'accélérer le temps d'accès à la DB.

Donc on garde une indépendance cognitive (au niveau du schéma relationnel).

Dans les mécanismes physiques qui permettent d'accéder plus rapidement à l'information :

* Les index : quand on créé un index, on créé une table de métadonnées(table temporaire).  Dans cette ligne sera stockés les numéros de lignes qui corresponde à un type de colonne demandé.  Est préciser par la notification *ACC*. 
*  Espaces de stockage : l'endroit où l'on va stocker les données.  On peut définir à la main différents espace de stokage.  

fichier log : on enregistre toutes les transactions qui ont lieux dans la base de données, dans le but de faire un fichier de backup ; pour garder une trace.
une transaction : toute opération qui vient modifié l'état d'une donnée dans la database (update, delete, insert);  
