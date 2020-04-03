<center>
<h1> OS S3</h1>
</center>

###  Ecrire dans une MQ

msgnd(msgqid, msg, count, flag) avec :

* msg : une structure message constituée d'un int et de data .. => type de données
* count : la taille de la zone de données (data)
* msgqid : la file de message visée
### Recevoir un message (Lire)

msgrcv(msgqid, msg, maxcount, type, flag)

* msg :
  * int
  * data
* maxcount : la taille de la partie data
* type :
  * type 0 : on prend le premier message de la Q, quelque soit le destinataire.
  * type > 0 : on prend le premier message dont le type == le nombre passer en paramètre.
  * type < 0 : prendre le premier message dont le type est == à la valeur absolue du nombre passer.

Pour envoyer des messages à un processus : passer en type le "getpid()" du processus visé, alors il verra les messages qu'on luit aura envoyé. \
A savoir : une fois que le message est lu, il est supprimé de la MQ.

## La mémoire partagée (MP)

### Table des processus :

schéma voir note manuscrite.

### Récupérer l'id :

shmid = shmget(key, size, flag)

* key : c'est un entier que doivent choisir les processus qui vont partager la mémoire (par exemple : 77).
* size : la taille de la région occupée (par exemple 20fois "size of" voiture).
* flag : les permissions à donner.

shmid permet de récuperer l'emplacement d'une partie de la mémoire partagée(de la taille sélectionnée) et ainsi permettre à plusieurs processus d'écrire dans celle-ci par la suite.

### Attacher la région de la mémoire partagée au programme :

virtaddr = shmat(shmid, 0)

* shmid : récupérer grâce à shmget().
* 0 : laisse le système récupérer l'adresse retlative de la mémoire par lui-même (fortement conseillé).
Pourquoi devoir attacher la région de la mémoire partagée au programme ?  Car shmget() ne fait que réserver une partie de la mémoire pour le programme.  Il faut encore attacher cette mémoire au programme pour que celui-ci puisse la lire et y écrire.  C'est le travail de shmat().

## Les sémaphores (recette de cuisine)

Un sémaphore est un entier plus grand ou égal à zéro, sur lequel on peut faire des opérations.  

### récupérer un sémaphore :

semid = semget(key, count, flag)

* key : c'est un entier que doivent choisir les processus qui vont partager la mémoire (par exemple : 77).
* count : le nombre de sémaphores qu'on désire utiliser.
