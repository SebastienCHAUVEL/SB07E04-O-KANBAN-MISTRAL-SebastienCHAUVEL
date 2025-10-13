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
