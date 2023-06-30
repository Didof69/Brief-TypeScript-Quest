
# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

1- Quels sont les différents types primitives de données en TypeScript ? 

Les differents types primitives sont :

- string : représente une chaine de caractères 
```
- const name: string = "Lydie";
```

- number : représente un nombre composer des chiffres de 0 à 9
```
const age: number = 40;
```

- boolean : represente deux valeurs true et false
```
const status: boolean = true;
```

- void : type de retour des fonctions qui ne renvoient aucun type de valeur
```
function sayHi(): void { 
    console.log('Hi!')
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined
```

- null : représente une variable dont la valeur n’est pas définie

- undefined : désigne toutes les variables non initialisées
```
let x: number;
let y: number | undefined;
let z: number | null | undefined;
x = 1; // Ok
y = 1; // Ok
z = 1; // Ok
x = undefined; // Error
y = undefined; // Ok
z = undefined; // Ok
x = null; // Error
y = null; // Error
z = null; // Ok
x = y; // Error
x = z; // Error
y = x; // Ok
y = z; // Error
z = x; // Ok
z = y; // Ok
```

Pour connaitre le type d'un variable, on peut utiliser `typeof`:
```
let age: number = 4;
console.log(typeof age);
//attendu 'number'
```

2- Comment typer un tableau ? 

Un tableau est typé avant les [].
Exemple d'un tableau composé de strings :
```
let tab: string[];
```
Exemple d'un tableau composé de numbers :
```
let tab: number[];
```
Exemple d'un tableau composé de booleans et de numbers :
```
let tab: (boolean | number)[];
```

On peut egalement utiliser la syntaxe Array\<Type>.
```
let tab: Array<boolean>;
```

3- Quel est le type `any` ?

Le type `any` permet de créer une variable qui accepte tous les types.
C'est déconseillé car peut créer de nombreuses erreurs.

4- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ? 

Le typage du retour d'une fonction et du/des paramètres se fait dans la déclaration.
```
function jeTypeMaFonction(name: string): string {
   return "Je suis une " + name";
}
function('string');
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

1- Qu'est ce qu'une classe ? 

Une classe est une structure qui définit les caractéristiques et le comportement d'un objet.
Les données de l'objet sont encapsulées dans la classe.
Une classe est composée d'un mot clé 'class', d'un nom de classe et de {} qui encapsulent les données de l'objet (caractéristiques).
```
class ma_classe { 
   //données de l'objet
}
```
Pour assigner un donnée dans un objet, on peut utiliser une propriété qui doit être typée.
```
class ma_classe { 
   eleve : string;
}
// ici la propriété 'eleve' a été assigné et typée 'string'
```

2- Qu'est ce qu'un constructeur de classe ? 

Un constructeur de classe est similaire à une méthode. Il est ajouter à la classe en utilisant le mot-clé 'contructor'. Il est construit comme une méthode mais il n'est pas possible de lui assigner un nom ou un type de retour.
Il permet d'initialiser les valeurs des prorpriétés d'une instance.

```
class ma_classe { 
  eleveFirstName: string; 
  eleveLastName: string; 
 
  constructor() { 
    this.eleveFirstName = "Lydie"; 
    this.eleveLastName = "Chevalier"; 
  } 
 
  getEleveFullName(): string { 
    return `${this.eleveFirstName} ${this.eleveLastName}`; 
  } 
} 
 
const eleve = new Eleve(); 
const eleveFullName = eleve.getEleveFullName(); 
 
// Log: Lydie Chevalier 
console.log(eleveFullName); 
```

3- Qu'est ce qu'une instance de classe ?

Une instance de classe est un nouvel objet.
C'est un exemplaire unique issu d'une classe.

```
let object_name = new class_name([ arguments ])
//Exemple
let voiture = new Voiture("BMW");
```
Pour faire rapide : une classe est un "moule" qui permet de créer des instances.

4- Comment vérifier qu'une instance est d'une certaine classe ?

Grâce à l'opérateur `instanceOf` il est possible de vérifier si un objet est d'une certaine classe. 
```
anObject instanceof AClass;

let result = anObject instanceof AClass;
```
On peut utiliser cet opérateur seulement avec un objet à gauche et une classe à droite.
Si l'objet est bien une instance de la classe alors le retour sera 'true' sinon 'false' sera renvoyé.

5- Qu'est ce que `this` dans une classe ?

Le mot-clé `this` fait référence à l'instance actuelle de la classe. 
```
class Voiture { 
   //Champs
   marque:string; 
 
   //constructor 
   constructor(marque:string) { 
      this.marque = marque 
   }  

   //fonction 
    marque_voiture():void { 
      console.log('Marque : '+this.engine);
   } 
}
```

6- Qu'est ce qu'une méthode de classe ? 

C'est une fonction attachée à l'instance d'une classe.
```
class ma_classe { 
   eleveName(param1: string, param2: string, ...): string { 
    // ... 
  } 
}
// ici la méthode 'eleveName' est typée 'string' et comporte deux parametres typés 'string'
```

7- Qu'est ce que la visibilité des propriétés ? 

Il existe trois types de visilité :
- public
- protected
- private

```
class User {
  private lastname: string
  private firstname: string
}
```

On utilise ces termes avant le nom de la propriété pour rendre la propriété accessible ou non en externe.
Par défaut, tout membre de classe est `public`.
Les membres `protected` ne sont visibles que dans les classes, ou sous-classes, qui les a déclarés.
Pour `private`, ressemble à `protected`, mais les membres `private` seront visibles uniquement dans la classe qui les a déclarés.


**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

1- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre) 

Il est possible d'importer ou d'exporter une classe dans un autre fichier TS.
Pour ça deux mots clés `export` et `import`.

Pour pouvoir importer, il est nécessaire d'avoir exporter le module. 

Exportation :
```
export class exportedFile {
    sayHello(user){
        return "Hello " + user+ "!";
    }
}

```
Importation :
```
import { exportedFile } from "./exportedFile";
  
let user = new exportedFile();
  
console.log(user.sayHello("Geek"));
```


2- Qu'est ce que l'héritage ? 

L'héritage est le fait de pouvoir créer une nouvelle classe à partir d'une classe déjà existante.
La première classe est appelée 'classe mère' et la deuxième 'classe fille'.La classe fille hérite des propriétés de la classe mère.

Pour utiliser l'héritage, il y a le mot-clé `extends`. Il prend en charge l'héritage simple ou à plusieurs niveaux mais pas l'héritage multipe ou hybride.

```
class Personne {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Eleve extends Personne {
    niveauEleve: number;
    
    constructor(niveauEleve: number, name:string) {
        super(name);
        this.niveauEleve = niveauEleve;
    }
    
    displayName():void {
        console.log("Nom = " + this.name +  ", Niveau = " + this.niveauEleve);
    }
}

let eleve = new Eleve(3, "Chevalier");
eleve.displayName(); // Nom = Chevalier, Niveau = 3
```

3- Comment appeler le constructeur d'une classe mère ?

Le mot clé `super` dans la classe fille permet d'appeler le constructor de la classe mère. /!\ Il est nessaire de préciser dans les () la totalité des propriétés de la classe mère.

4- Comment appeler une méthode d'une classe mère ? 

Pour appeler une méthode d'une classe mère depuis une classe fille, il suffit d'utiliser le nom de la classe fille '.' le nom de la méthode de la classe mère.
```
class mere {
    maFunction(); //méthode déclarée dans la classe mère
}

class fille extends mère {}; //récupère l'héritage de la classe mère

fille.maFunction(); // utilise grace au nom de la classe fille la méthode de la classe mère
```

5- Qu'est ce que le polymorphisme ? 

Le polymorphisme permet de traiter des objets de différents types d'une manière identique.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

