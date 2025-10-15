# Sécurité

## Etapes pour sécuriser

- Empecher l'accès
- Enregistrement des utilisateurs
  - dans le web enregistrement en BDD
    - formulaire d'inscription
    - enregistrement par un admin
- Authentification ( qui es tu ? )
  - on obtient une preuve de notre authentification
    - token JWT
    - Session
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

## Authentification

Une fois enregistré, l'utilisateur voudra s'authentifier pour utiliser notre application.
Pour cela il devra nous fournir ses informations de connexion.

Ici on va créer une route /login qui attend un username et un password, et qui va vérifier si l'utilisateur existe bien en BDD.

```js
// page / login qui va recevoir un username et un password et mettre en place la logique suivante

// récupérer le usernameForm et le mdpForm ( en clair) fournit par l'utilisateur

// récupérer depuis la BDD le user correspondant au usernameForm fourni

// si l'utilisateur n'existe pas => renvoyer une erreur
// comparer les mdp avec argon2.verify() cf demo-app.js
// si les mots de passe ne correspondent pas => renvoyer une erreur
```

Une fois l'authentification réussie, on fournit au client une preuve de son authentification, on dit que l'on connecte l'utilisateur.

## Connexion

### Cas du SSR

Si notre application génère le HTML alors on est sur que le client sera un navigateur.

Du coup on pourra mettre en place des sessions pour connecter l'utilisateur.
