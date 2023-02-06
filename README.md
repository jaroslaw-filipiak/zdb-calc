# Vue 3 + Vite

Podgląd : --> https://zdb-calc.vercel.app/

## Instalacja

Wymagane środowisko node.js , instalacja :

```sh
yarn install
yarn dev
```

Aby zbudować folder dist

```sh
yarn build
```

## Edycja

plik style.scss zawiera 3 zmienne za pomocą których możemy manewrować szerokością kontenera + szerokością lewej oraz prawej kolumny

```sh
$left-width: 30%;
$right-width: 70%;
$wrapper-width: 1240px;
```

a także miejsce gdzie wrzucamy url do zdjęcia w tle:

```sh
$bg-url: 'https://images.unsplash.com/photo-1616587894998-eb4d3007bbb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMDE5OXwwfDF8c2VhcmNofDUwfHxzYWxlc3xlbnwwfHx8fDE2NTgyMTA0NzU&ixlib=rb-1.2.1&q=80&w=1080';
```

## Konfiguracja

Całe miejsce dowodzenia znajduje się w pliku calc.js , to jest store [Pinia](https://pinia.vuejs.org/)

```sh
state: () => ({
    isFull: false,
    result: null,
    currency: 'pln',
    salary: 200,
    members: 45,
    hours_per_employee: 233,
    software_setup_cost: 34,
    subscription_cost: 1000,
  }),
```

Regułe obliczania mamy tutaj :
( na chwilę obecną jest ustawione wg. wyimaginowanego wzoru :) )

```sh
getters: {
    result(state) {
      const res =
        state.members * state.hours_per_employee + state.hours_per_employee * 2;
      return Math.round(res);
    },
  },
```
