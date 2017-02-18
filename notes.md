# Notes
x positif vers la droite, y positif vers le haut, icône en bas à gauche = (1;1)

ProtossGroundArmorLevel1 et les autres niveaux doivent avoir la même valeur.

# TODO

## Design
- [ ] refaire Presets
- [ ] Mettre en rouge les touches non affectées (se reconnaissent au "=" vide dans le fichier .sc2hotkeys)
- [ ] implémenter la matrice x y des abilities (afficher l'icône vide autant de fois que nécessaire pour compléter la matrice)
- [ ] logo
- [ ] suggestions de nom (actuel: "a.pm" mais ça veut rien dire, juste sw@g)
- [ ] Indiquer le répertoire où se trouvent les fichiers .sc2hotkeys lors de l'upload et download
- [ ] Ajouter en petit, haut à gauche de chaque icône d'ability, le raccourci actuel. Comme en jeu ou dans l'éditeur.
- [ ] image d'arrière-plan
- [ ] donner un nom adéquat au fichier .sc2hotkeys. Si le site s'appelle a.pm, le fichier peut s'appeler apm.sc2hotkeys
- [ ] devenir fidèle au toshop

## Fonctions
- [ ] Donner un statut spécial aux commandes globales (attack, move, movepatrol, moveholdposition, stop, cancel, rally, liste exhaustive). Il ne faut pas afficher toutes les unités qui les partagent, peut-être un avertissement "partagé par beaucoup"
- [ ] Cliquer sur un partage dans le panneau "partagé" renvoie vers le key selector correspondant, mode de jeu>unité>ability
- [ ] Gérer différents modes pour une unité: récolteur qui a: attaque, bâtiments, bâtiments avancés. Plusieurs matrices 3x5 doivent s'empiler verticalement, le key-selector doit connaître le nom d'un mode d'unité. Exemple: sentry mode 1="general" sentry mode 2="hallucinations"
  Actuellement, le maximum présent dans le jeu est 3 modes pour 1 unité. Peu probable que 4 arrive un jour.

- [ ] Tant que l'utilisateur n'a pas cliqué en dehors du champ de touche (ou un bouton )
    Gérer les conflits pour ne pas enregistrer des mauvais fichiers: virer le panneaux de conflits
  Si l'utilisateur crée un conflit, pop-up
  "désaffecter" les touches avec conflits sauf celle en train d'être éditée
  pop-up des touches qui viennent d'êtres désaffectées ?
  liste des touches alternatives qui n'auraient pas créé de conflit
  possiblité d'annuler le changement (ou confirmer/annuler sur le pop-up)
- [ ] Changer d'unité/batiment sélectionné clear le panneau des abilities
- [ ] Recherche inversée: répondre à "qu'est-ce qui utilise H ?" ou même "qu'est-ce qui utilise H en zerg multijoueur ?"
  Cliquer sur un résultat de la recherche inversée amène au key-selector correspondant
  Avertissements
  "vous allez remplacer un fichier de config non sauvegardé" si c'est le cas lors d'un upload
- [ ] dispositions prédéfinies (c'est à val de les trouver)
- [ ] Forcer certains partages, en avertissant éventuellement. Cas rare. Exemple: le warpin d'adepte a 2 hkeyname associés en fonction du type de gate. Confusion car c'est le seul dans ce cas.
- [ ] function undo

# Issues
- [ ] debug fonction récupération des paramètres non fonctionnelle dans Firefox stable
- [ ] comment avoir un halo propre autour de l'icône sélectionnée ?
