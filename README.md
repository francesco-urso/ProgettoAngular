# Magazzino

Quest'app Angular era nata originariamente come gestionale di magazzino, successivamente è stato implementato anche un login/logout.
Ho successivamente crato poi una pagina per la vetrina dei prodotti e quindi ho pensato di aggiungere anche un carrello per la gestione degli acquisti.
Per effettuare il login utilizzare le credenziali:
**admin** e **angular**

## Funzionalità

**Gestione Utenti**

Per la gestione dell'utente ho implementato il login/logout attraverso `AuthService` nella cartella `auth` e protezzione delle rotte con `AuthGuard` che si trova in `app-routing.module`. Ho utilizzato anche i `form validator` per il controllo dei campi e per far visualizzare che i campi sono obbligatori per accedere.

**Gestione Prodotti**

Per la gestione dei prodotti ho utilizzato dei metodi CRUD ai quali si può accedere quando si effettua il login. Questa implementaione si trova in `product.service.ts`. Attualmente non ho implementato un metodo per salvare i dati su json o su un backend, quindi all'aggiornamento della pagina i dati saranno persi. Ho utilizzato `BehaviorSubject` per la gestione dello stato dei prodotti.

**Carrello Acquisti**

Funzionalità per inserire i prodotti all'interno del carrello e per vedere quali prodotti sono stati inseriti che si trova implementato su `cart.service.ts`

**Componenti**:

- `navbar` : Barra di navigazione, trattata come componente per poterla inserire più agilmente in ogni pagina, inoltre ho implementato un input property per poter inserire il titolo della pagina corrente tramite la navbar. Ho utilizzato `ngIf` per il condizionale per far visualizzare determinati pulsanti.
- `product-list` : Visualizzazione prodotti per clienti, permette di far visualizzare i prodotti presenti nel magazzino e di esser inseriti nel carrello. Al caricamento si sottoscrive all'Observable per poi popolare i prodotti presenti.
- `product-management` : Gestione prodotti per admin, permette le operazioni CRUD. L'utente da qui può modificare, eliminare, creare e vedere i prodotti che poi saranno visibili nella vetrina prodotti.
- `cart` : Gestione carrello acquisti, da qui si possono vedere i prodotti inseriti nel carrello. Si può vedere quanti prodotti sono stati inseriti e si possono rimuovere anche i prodotti inseriti.
- `login` : Per poter effettuare il login, ho utilizzato `form validator` che quando il campo viene evidenziato e poi si clicca al di fuori del campo, compare un errore poichè il campo è obbligatorio.
- `home` : Pagina principale `home` con una breve descrizione e la visualizzazine di user e password per poter accedere al login. È possibile cambiare le credenziali e farle visualizzare nella home su `auth.service.ts`.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
