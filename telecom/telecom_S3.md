<center> <h1> Telecommunication S3 </h1> </center>

### Slide 27 :

*reprise du cours*

Le démodulateur MA : détection d'enveloppe(utilisation de filtre passe-bande).  
Procédé le plus simple et le plus ancien.
Est insensible à la phase du signal.
Nécessite de filtrer  

Le filtre passe-bande est présent dans tous les appareils de type radio/gsm, ... dès qu'on travail avec des bandes de féquencen, cela devient nécessaire pour trier les signaux.

**filtre passe-bande** : combinaison d'un filtre passe-bas et d'un filtre passe-haut.

* dans le cas d'un signal modulant sinusoïdal, le signal modulé s'écrit :

$$ u_2(t) = a_c * \cos(w_c * t) + a_c * (\frac{m}{2}) * \cos(w_c - \Omega) + a_c * (\frac{m}{2}) * \cos(w_c + \Omega) $$

* La puissance de la raie à la fréquence porteuse vaut (à une constante près):

$$ P_c = \frac{a^2}{2} $$

* et la puissance de chacune des raies latérales est :

$$P_c * \frac{m^2}{4}$$

* La puissance totale d'émission vaut donc :
  $$P_{em} = P_c + P_c * \frac{m^2}{4} + P_c * \frac{m^2}{4} = P_c*[1+\frac{m^2}{2}] $$

* **Question** : à quoi sert cette puissance ?
****
**note** : pour obtenir la puissance ci-dessus on part de :$\int{a_c^2 * \cos^2(w_c * t)}$
****

Sur la puissance fournie, il n'y a même pas 1/6 du signal qui sert à transporter le signal, tout le reste sert à alimenter la porteuse.

#### Pourquoi ?

car (dans le cas où m=1) $P_{em} = P_c + P_c * \frac{1}{4} + P_c * \frac{1}{4} = P_c * \frac{6}{4}$


#### Conclusion sur la modulation à double bande latérale :

* **son défaut :**
un rendement très médiocre.
* **Son intérêt :**
simplicité des récepteurs.


#### Conclusion sur la modulation à bande latéral unique BLU/SSB

* La modulation SSB minimise à la fois la puissance et l'encombrement en fréquence du signal modulé.
* Elle transmet l'information avec le maximum de rendement.
* Elle est à la base du multiplexage fréquentiel.
* Elle a été très utilisée pour les communications avec les navires, mobiles, radioémetteur, en ondes courtes.

### Modulation angulaire (slide 34)

**exemple :**
* $f_c = 1kHz$
* $u_1(t)/u_{1\ Max} = \frac{+}{-} 1$
* $m = \frac{\pi}{2}$

**définition :** *la modulation en fréquence :* l'amplitude de la porteuse reste constante, et sa fréquence varie en fonction du signal modulant $u_1(t)$ :

$$u_2(t) = a* \cos(w_c*t)$$

* $\Delta f = \Delta w /2\pi$ est appelé l'excursion de fréquence.  C'est la valeur maximale de la déviation de fréquence pour $u_{1\ Max}$
* Par analogie, on définit l'indice de modulation en fréquence : $m = \frac{\Delta w}{\Omega} = \frac{\Delta f}{F}$ où, par convention $F = F_{max}$ est la fréquence maximale du signal modulant.
* Pour la radiodiffusuion, la norme est : $\Delta{f} = 75 kHz$, pour $F_{max}=15kHz$, d'où $m=5$.

***Les modulations AM sont faites à partir de circuits composés de transistor bipolaire***

***Les modulations FM sont faites à partir du principe de l'oscillateur commandé VCO.  On utilise des oscillateurs LC($f=\frac{1}{2*\pi*\sqrt{L*C}}$)où le condesateur est une diode varactorqui varie sous l'effet d'une tension.***

***Le démodulateur FM : Discriminateur de phase.  C'est un circuit LC sélectif de type circuit bouchon*** \
le procédé classique consiste à utiliser un circuit fortement sélectif ou discriminateur, dont la réponse amplitude/fréquence présente une forte pente et une bonne linéarité autour de la fréquence porteuse.
***le démodulateur PM : Discriminateur de phase.***
* principe : transformer le déphasage $u_2(t)$ par rapport à $p(t)$ en une tension.
* comment : générer une dent de scie qui démarre avec la porteuse et qui  continue à monter en attendant  l'arrivée du signal $u_2(t)$, plus le temps de retard est long, plus la tension atteinte par la dent de scie sera élevée.

####notes du prof
la modulation permet de :
* s'adapter au support
* réduire la taille des antennes
* utiliser une bande de fréquence que personne n'utilise
* utiliser le même support de transmission à plusieurs.


****
***fin chapitre 5***
****

# Chapitre 6

## Introduction :

Maintenant toutes les transmissions se font en série.  

**Transmission synchrone** : Il est impensable de faire des systèmes de communications sans les synchronisés.  Dans les transmissions synchrones, on se synchronise en permanence, de manière à ne jamais risquer une désynchronisation. \
**Transmission assynchrone** : se synchronisent comme les synchrones, mais la différence c'est qu'on ne les synchronise qu'une fois au début.  Il y a donc un risque de désynchronisation qui augmente avec le temps entre deux synchronisation.  Plus le système fonctionne longtemps, plus il risque d'y avoir un problème.

Les systèmes assynchrones sont en général les systèmes bon marché et lent (clavier, souris, ...).  Par contre les systèmes rapides tels que les ordinateurs seront synchrones.

La transmission en bande de base, c'est plutôt le domaine des cartes réseaux.

La longueur entre une machine et un switch ne peut pas être de plus de 100/200m car après c'est dur pour les signaux carrés.  

#### terminologie :

*ETTD/DTE = Equipement Terminal de Traitement de Données.* \
*ETCD/DCE = Equipement Terminal de Communication de Données.*

Les ETTD sont, par exemple, des ordinateurs
les ETCD sont, par exemple, des cartes réseaux ou des modems.

**note :** une même machine peut faire DTE ou DCE en fonction de la fonction qu'elle occupe sur le réseau (ecemple : le multiplexeur).

## Liaison de données : Jonction et support

La jonction permet au DTE de gérer le DCE ppour assurer les communications :
* établissement du circuit (un cheminou une liaison).
* initialisation de la transmissions.
* échange de données.
* libération du circuit.

**note :** $Debit = BP * \log(1+\frac{S_{ignal}}{N_{bruit}})$

le support ou ligne de transmission :
* élément essentiel de la liaison.
* le débit de transmission et le taux d'erreurs dépendent beaucoup des caractéristiques physiques et de l'environnement du support.

la liaison de données est caractérisée par :
* le débit en bps (bits par seconde) : on distingue 2 débits : $D_r$ et $D_n$
  * Débit réel : le nombre de bits vraiment utile dans le débit
  * Débit nominal : ce qui a été transmis (bits utile + les bits utilisé pour synchroniser, ...)
  * efficaité du système = $E_{ff} = D_r/D_n$
* Mode d'échange Simplex, Half duplex, Full Duplex
* Le mode de transmission série ou parallèle
  * parallèle asymétrique, N+1 fils (la plus mauvaise manière de faire) car qu'un seul fil de terre.
  * parallèle symétrique :la meilleure manière, où chaque fils à son "propre fils de terre". En gros, on travaille avec des différences de courant entre 2 fils.  
* le mode de transmission asynchrone ou synchrone
  * asynchrone les horloges de E et R sont indépendantes
  * synchrone il y a une relation de phase stricte entre les horloges de E et R


## transmission série : principe

Tous les bits du mot sont transmis successivement sur une seule ligne.

Nécessité d'une interface de conversion parallèle/série en émission et d'une interface de conversion série parallèle ne réception.

2 fils conducteurs suffisent. \
En bidirectionnel, il faut :
* 3 fils de liaison si la liaison asymétrique
* 4 fils si la liaison est symétrique.

Utilisé pour les transmissions sur de longues distances.

### transmission série asynchrone : dérive d'horloge

Dans une transmission série, les bits sont émis au rythme de l'horloge de l'émetteur. \
L'horloge du récepteur est supposée fonctionner à la même fréquence (mais rien de peut la forcer donc risque de désynchronisation).

*Mais rien de permet de garantir la stabilité des horloges.*

**conséquence de la dérive d'horloge ?** dans l'exemple des slides, on lit les bits lors des front descendant de l'horloge.  On voit qu'on finit par raté un bit car l'instant de lecture sera arrivé après le passage d'un des bits.

Transmission asynchrone : les horloges de l'émetteur et du récepteur sont indépendants.  Nécessite toutefois, avant tout encoi de suite binaire, de synchroniser les horloges. *Comme l'horloge va dériver, la transmission asynchrone ne convient que pour la transmission d'une courte séquence binaire : le caractère.*

**Comment synchroniser E et R ?** Dans les anciens ports séries, la ligne reste à 1 (5V) jusqu'à la transmission.  Pour démarrer la transmission, on va descendre la ligne à 0 V, puis le port série lira tous les autres bits qui arriveront.  Pour stopper la trasmission, on enverra un bit de stop.
