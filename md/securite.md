# Sécurité

## Etapes pour sécuriser

- Empecher l'accès
- Enregistrement des utilisateurs
  - dans le web enregistrement en BDD
    - formulaire d'inscription
    - enregistrement par un admin
- Authentification ( qui es tu ? )
  - on obtient une preuve de notre authentification
- Autorisation
  - qui peut accéder à quoi

- Surveillance
  - journal d'accès ( vérifier qui à accéder )

## CORS

Cross Origin Request Sharing : permet de limiter l'accès aux ressources d'un serveur depuis un autre site web.

Cela est configurable depuis le serveur qui contient la donnée.

Avec express, comme souvent, il existe un middleware pour gérer les CORS.

## Enregistrement Utilisateur

- aider l'utilisateur à avoir un mdp fort
  - lors de la validation du mot de passe
- /!\ On ne stocke pas le mot de passe en clair en BDD /!\

Pour stocker le mdp on va d'abord le hasher cf ( [hash vs encryption](https://www.pingidentity.com/fr/resources/blog/post/encryption-vs-hashing-vs-salting.html) ).

Les modules de hashages fonctionnent toujours de la meme manière

- une fonction pour hasher une chaine de caractère ( que l'on stockera en BDD )
- une fonction pour vérifier qu'une chaine de caractère correspond à un hash défini.

