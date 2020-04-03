<center> <h1> Administration Système Avancé </h1> </center>

### Les schémas

#### Woody-toys ou schéma réel

Le schéma réel de l'entreprise tel qu'il devrait être dans la réalité

#### Prototype ou schéma logique

C'est un outil de travail devant répondre à la question : "où est le conteneur X".

* Indiquer les adresses IP des container et des VPS
* Indiquer les ports devant être ouvert


### Le mail

#### niveau stockage

* Database ?
* fichier ?
* Utilisateur Unix ?

#### niveau DNS

Le record MX dans le dns renvoie le nom du serveurmail du domaine.  Puis il faut un record A qui transforme le nom du MX en IP.

#### Envois de mails

Serveur SMTP interne.

#### Réception

Serveur SMTP interne qui placera les mails dans la mailbox. On va devoir le placer dans la DMZ.

#### Consultation des mails

Serveur POP/IMAP, peut être placé en interne car pas besoin d'être joint de l'extérieur.

#### En pratique

Il faut un server MSTP, une mail box et un serveur POP/IMAP.

### Sécurité des mails

* Confidentialité
* Intégrité
* Spam
* Phishing

Attention à l'Open relays =>  il faut faire en sorte que le serveur mail n'accepte d'envoyer des mails qu'a partir des adresses de l'entreprise.

Pour faire des filtres anti-Spam : SpamAssassin.

#### Chiffrer des mails

* On peut chiffrer les communications entre chaque serveur (TLS).
* On peut chiffrer la communication de bout en bout, à la source(S/MIME, PGP).

Chiffrer : rendre les données illisible sans la clé de chiffrement.
SIgner : garantir la source de l'email.

**S/MIME** permet de faire les deux : chiffrer et signer

#### Les proxies mails
