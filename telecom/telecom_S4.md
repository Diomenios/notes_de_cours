<center> <h1> Telecom Chapitre 6 (lundi 7 octobre)</h1></center>

# Transcodage

*Fourrier : tout signal périodique est une somme de sinus jusqu'à l'infini !*

## NRZ (Non Retour à Zéro)


**Principe :** Tous les bits à 0 vont devenir la tension inverse des bits à 1 : Si le 1 correspond à un voltage de 5V, le 0 correspondra à une tension de -5V.

 **Inconvénients :**
 * Diminue la bande passante disponnible car le NRZ possède un spectre assez large.  
 * Présente un maximum de puissance à la fréquence 0 => composante continue non nulle.
 * S'il y a beaucoup de 0 ou de 1 qui se suivent, on a un risque de désynchrnisation car la composante continue est non nulle.

La distorsion harmonique : énergie qui se retrouve dans les fréquences autre que la fréquence principale.

On peut voir que la distorsion harmonique dans un signal NRZ avec composante continue, est très importante, et que le signal occupe beaucoup de bande de fréquence (190 %) de distorsion.  pour que le signal ne perdent pas de son intégrité, cela demande une large bande passante.

#### Transcodage But et Techniques

**Pourquoi utiliser le transcodage ou codage en ligne ?**
* pour adapter le spectre au canal de transmission
* pour maintenir la synchronisation de l'horloge de réception
* pour supprimer la composante continue

**Quelles sont les techniques de transcodage**
* celles qui effectuent un codage des 1 et des 0
* celles qui ne codent que les 1 ou les 0
* celles qui substituent à un ensemble de N1 bits en un autre ensemble de N2 bits (codage N1BN2B)

**Avantages du codage NRZ :**

- facile à mettre en oeuvre : on peut facilement convertir un signal TTL en un signal NRZ avec l'aide d'un comparateur.

**Inconvénients :**
* composante continue non nulle
* perte de synchronisation si longue suite de 1 et de 0

* erreur de lecture si inversion  des fils au récepteur

**Utilité :** port série, liaison RS232

## Codage de Manchester

Permet de corriger plusieurs des défauts du codage NRZ !

**Avantages :**
* Facile à mettre en oeuvre
* La composante continue est moindre que le NRZ (quantité de haut et de bas + ou - pareil)

**Inconvénients :**
* erreur de lecture si inversion des fils au récepteur
* Bande passante doublée  

**utilité :** réseaux informatiques : Ethernet 10BASE5, 10BASE2, 10BASE-T, 10BASE-FL

Exercice codage : voir note manuscrite

## Codage de Manchester différentiel

On va faire la comparaison avec l'état passé du signal. Les montées/descente sont décidées par le nombre de bit à 1 rencontré : dès qu'on rencontre un 1, on inverse, sinon on ne change pas le sens des montées/descente (voir note manuscrite).

## Codage de Miller

Il est meilleur que le codage Manchester, car il permet de réduire la bande passante nécessaire !

* transition au milieu du bit 1
* pas de transition au milieu du bit 0
* une transition en fin de bit 0 si celui-ci est suivi d'un autre 0

**Avantages :**
* Mise en oeuvre simple
* Bande passante réduite
* pas de perte de synchronisation
**utilité :** réseaux informatiques

## Codage bipolaire

On ne code qu'un seul type de bit (par exemple les 1), et on alterne les polarités à chaque fois qu'on rencontre le bit encodé.  L'autre bit sera représenté par une tension à 0.

**Avantage :** bande passante réduite
**Inconvénient :** risque de perte de synchronisation sur les longues suite de bits 0

## Codage HDBn

où le n représente le nombre de bits 0 qui peuvent se suivre avant qu'une action soit nécessaire.

par exemple : HDB2 : on doit faire quelque chose lorsque plus de 2 mêmes bits 0 se suivent.

* Les bits 1 sont codés comme dans le codage bipolaire
* au 3ième 0 consécutif, on rajoute un *bit de viol de parité* de même polarité que le 1 précédent
* les bits de viol de parité doivent toujours être alternés : +U et -U
* Si on ne peut pas stafisfaire les conditions 2 et 3, on rajoute un *bit de bourrage* qui rétablit la condition de viol et respectant la condition 3

*Voir slide 30*

****

**Avantage du codage 4B5B :** permet de casser les longues suites et donc d'éviter les désynchronisations.

*La rapidité de modulation :* c'est le nombre de transition que subit le support par unité de temps.

(Question) quel est le lien entre R et la bande passante BP d'un support ?

Si $t_e$ est le temps de transmission d'un bit, alors une succession de 0 et 1 constitue un signal périodique de fréquence f tel que $f = \frac{1}{T}$ et $t_e = \frac{1}{2} f$ (dans notre exemple) car $T = 2*t_e = \frac{1}{f}$

SI la rapidité de modulation du système vaut R(R transmission par seconde) alors R et F sont liés par la relation : $R_{max} = 2*f_{max}$ ou $R <= 2*f_{max}$

*dans 1 sec, il y a f périodes, c'est à dire 2*f transitions*

ou encore R = 2*BP(critère de Nyquist)

****

Slide 35

Que vaut la rapidité de modulation maximale admissible sur une voie téléphonique caractérisée par une bande passante allant de 300 à 3400 Hz


* la rapidité de modulation max : 6200 baud
* Un support peut travailler avec une rapidité de modulation inférieur à sa rapidité max car s'il peut faire le max, il peut aussi aller un peu moins vite
* 6200 bits
* Utiliser des codages multisymboles.
