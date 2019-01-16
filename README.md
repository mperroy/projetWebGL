# projetWebGL

Mode de visite : visiteur/utilisateur.

Pour passer en mode de visiteur "utilisateur", il faut s'enregistrer.
Le mode de visite "utilisateur" permet de conserver des laboratoires ou des équipes de laboratoires en favoris.

1 - Identification d'un utilisateur (login, mot de passe, adresse mail, nom d'utilisateur tout obligatoires).


2 - L'utilisateur/visiteur peut effectuer une recherche sur un labo en particulier.

3 - L'utilisateur/visiteur peut naviguer sur une carte interactive afin de situer le(s) labo(s) (issue de sa recherche) dans le monde.

4 - L'utilisateur/visiteur peut cliquer sur un labo (sur la carte) afin d'afficher une pop-up listant les équipes de ce labo.

5 - L'utilisateur/visiteur peut ajouter des filtres à sa recherche d'équipe pour l'affiner (date, type de collaboration, équipe).

6 - L'utilisateur/visiteur peut visualiser les résultats de ces recherches.

7 - L'utilisateur peut ajouter en favori des laboratoires et/ou des équipes.

Informations sur le projet :

    Technologies :
                      Front : Angular
                      Back  : Node.js
            Base de données : Postgres

    API consommé :
                    API Maps JavaScript (carte du monde)/OpenLayers/OpenStreetMap
                    HAL.CNRS (recherche de labo)
