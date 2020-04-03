<center> <h1> Chapitre 5 </h1> </center>

****
### slide 11

le signal u1 n'est pas le même que que le signal u1'  car le modulateur et le démodulateur peuvent parfois altérer légèrement le signal, causant ainsi de petites différences entre le signal de départ et d'arriver !

Le démodulateur n'est pas une fonction réciproque du démodulateur.

Le signal dans le canal n'est pas non plus le même au départ et à l'arriver car il va subir des distorsions et des altérations dans le canal.

*PS : les modulations FM sont moins sensibles aux distortions que les modulations AM.*
****

#### Modulation analogique

Elle ne modifie pas la nature des signaux.  On va utiliser une porteuse, dont les paramètres seront affecté par le signal à moduler(moficication d'amplitude, de fréquence, ...).


#### Modulation numérique

on effectue une conversion analogique/numérique.  Le signal u2(t) devient caractérisé par un débit D, et la convention de modulation va devenir un code de réprésentation numérique d'information analogique.

#### La porteuse :

* Forme : Sinusoïdale ou impulsionnelle
* Paramètre moduler : amplitude, fréquence, phase, durée.
* information transmise : analogique ou numérique.

****
### Slide 16 (exercice)

* image 1 :
  * forme : sinusoïdale
  * modulation : amplitude
  * Information transmise : analogique
* image 2 :
  * forme : sinusoïdale
  * modulation : phase
  * Information transmise : analogique
* image 3 :
  * forme : impulsionnelle
  * modulation : amplitude
  * Information transmise : analogique

  ****
***Le slide 17 est à bien connaître.  le prof avait l'air de dire qu'il était important*** :)

**La PAM** est facile, mais mauvaise car très sensible au bruit : petit interrupteur qui se coupe et s'ouvre de manière régulière.  Sera utilisée dans un milieu où il n'y a pas de bruits. *Modulation d'amplitude*

**La PDM** permet d'éviter l'altération par le buit. *Modulation de durée*

**La PPM** permet d'éviter aussi l'altération par le bruit. *Modulation de phase*

**Delta M** méthode de compression en binaire.  Si deux échantillons qui se suivent sont très proche l'un de l'autre, on n'envoie pour le deuxième que ce qui à changé par rapport à la première.  Booste le débit et compresse l'information.

#### La modulation AM

la méthode de modulation la plus ancienne et le plus simple.  C'est aussi la méthode de modulation la plus efficace du point de vue de l'encombrement spectrale(pas besoin de *bloquer* de grosses bandes de fréquences).  Mais par contre ***fortement sensible au bruit*** apporté par le canal de transmission.

####  Principe de l'AM

La porteuse : $p(t) = p_0*\cos{(w_c*t)}$ est modulée par un signal

l'amplitude est reliée linéairement au signal modulant (primaire) par une loi du type :

$$ a(t) = a_0 + m*u_1(t) $$

voir slide 20 (à recopier).

****

***Le slide 22 est important !!!!***

$\Omega = 2*\pi*f$

la représentation spectrale d'une note (440hz) est une droite à 440 hz (Au lieu du triangle habituel.
  )

****

Il faut faire attention à ce que les porteuses des différents messages ne se touchent pas de trop, au risque que les messages des porteuses voisines ne se mélangent.

****
#### Slide 25 (exercices)

**Attention** :exercice type pour l'interro.
****

#### Modulation à double bande latérale avec porteuse

 Ceci est la modulation classique d'amplitude.  Dans ce procédé, le signal modulé a pour expression :

 $$  $$

 voir slide 26
