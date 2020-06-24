<center> <h1> TP1 administration système et réseau 2 </h1> </center>

##Question sur le hello-world

### hello

1. hello from docker

2. Les images sont des snapchots immuables de "live container".  Les containers sont, quant à eux, des instances *running* ou *stopped* d'images.

3. Docker engine est ce qui permet de faire tourner les containers.  Il fait donc le lien entre le container et l'OS.

4. l'image hello-world vient du docker Hub.  Docker Hub est une énorme librairie contenant des centaines de milliers d'images de containers dockers.  

5. l'option **-it** est en fait la combinaison de 2 options : **-i** et **-t**
    * -i : permet de garder la STDIN ouverte même si elle n'est pas attachée au container.
    * -t : permet d'obtenir un pseudo TTY (une console en ligne de commande)

### d'autres images

1.  il suffit d'aller sur le docker hub et de chercher whalesay => facile
