import { createSlice } from "@reduxjs/toolkit";

initialState = {
  items: [
    {
      id: 1,
      imgUrl:
        "https://ecsmedia.pl/c/harry-potter-i-zakon-feniksa-tom-5-w-iext123071903.jpg",
      title: "Harry Potter i Zakon Feniksa",
      author: "J.K. Rowling",
      category: "Fantastyka",
      description:
        "Harry znów spędza nudne, samotne wakacje w domu Dursleyów. Czeka go piąty rok nauki w Hogwarcie i chciałby jak najszybciej spotkać się ze swoimi najlepszymi przyjaciółmi, Ronem i Hermioną. Ci jednak wyraźnie go zaniedbują. Gdy Harry ma już dość wszystkiego i postanawia zmienić swoją nieznośną sytuację, sprawy przyjmują całkiem nieoczekiwany obrót. Wygląda na to, że nowy rok nauki w Hogwarcie będzie bardzo dramatyczny. Po raz pierwszy w życiu Harry poczuje się tam nie jak w domu, tylko… więzieniu, i to nie za sprawą przywróconego do życia Lorda Voldemorta. ",
    },
    {
      id: 2,
      imgUrl: "https://ecsmedia.pl/c/psychologia-milosci-w-iext123522977.jpg",
      title: "Psychologia Miłości",
      author: "Bogdan Wojciszke",
      category: "Psychologia",
      description:
        "Zupełnie nowe poszerzone wydanie najlepiej sprzedającej się książki psychologicznej o miłości od lat. Wybitny psycholog profesor Bogdan Wojciszke po raz kolejny wprowadza nas w świat wielkich uczuć widzianych z perspektywy psychologii społecznej. To książka, której nie można przegapić. Miłość jest najważniejszym wydarzeniem między narodzinami a śmiercią człowieka. I choć trudno o pogląd mniej oryginalny, to właśnie on stał się przyczyną napisania tej książki. Wybitny psycholog prof. Bogdan Wojciszke przedstawia najnowsze, znacznie poszerzone wydanie wyjątkowego bestsellera.",
    },
    {
      id: 3,
      imgUrl: "https://ecsmedia.pl/c/milczenie-lasu-w-iext115552196.jpg",
      title: "Milczenie lasu",
      author: "Cunningham Grant Kimi",
      category: "Kryminał",
      description:
        "Bez dostępu do cywilizacji, kontaktu z rodziną i światem zewnętrznym. Od ośmiu lat Cooper i jego córeczka, Finch, żyją samotnie w opuszczonym domku pośrodku niczego, w jednym z Appalaskich lasów. Wszystko ułożyło się dokładnie tak, jak Cooper to zaplanował. I pozwoliło mu zakopać pod ziemią wszystkie tajemnice, które nie mogą wyjść na jaw. O istnieniu ich schronienia wiedzą tylko tajemniczy sąsiad, Szkot, i przyjaciel Coopera, Jake, który co roku przywozi im zapasy na zimę. Tym razem jednak wsparcie nie nadchodzi. Na domiar złego, dorastająca Finch ma już dosyć życia, jakie wybrał dla niej ojciec. Nie rozumie jeszcze, że granice bezpiecznej przestrzeni nieuchronnie się zacierają, a prawda, która nadal ich ściga, może na zawsze zniszczyć świat, jaki zbudowali.",
    },
    {
      id: 4,
      imgUrl: "https://ecsmedia.pl/c/afryka-kazika-w-iext117215669.jpg",
      title: "Afryka Kazika",
      author: "Łukasz Wierzbicki",
      category: "Dla dzieci",
      description:
        "Opowiadania zostały napisane na podstawie reportaży Kazimierza Nowaka, który w latach trzydziestych XX wieku przemierzył Afrykę na rowerze. Barwne spotkania z mieszkańcami Afryki, mrożące krew w żyłach, a niekiedy zabawne przygody, które zdarzyły się naprawdę, pozwolą poznać młodemu czytelnikowi tego niezwykłego podróżnika. Nowe poprawione wydanie zostało uzupełnione o dwa dodatkowe opowiadania i kilka nowych ilustracji.",
    },
    {
      id: 5,
      imgUrl:
        "https://ecsmedia.pl/c/slowa-z-ktorymi-was-zostawiam-w-iext115557782.jpg",
      title: "Słowa, z którymi was zostawiam",
      author: "Piotr Pawlukiewicz",
      category: "Książki religijne",
      description:
        "Czym jest wolność? Czym miłosierdzie? Czego możemy nauczyć się od starszych ludzi? Czy każde zakochanie jest dobre? Jak zrozumieć swoich rodziców, a jak swoje dzieci? Czy Bóg w ogóle się nami interesuje? Zadajemy sobie nieraz setki pytań, na które bardzo często nie potrafimy znaleźć odpowiedzi. Szukamy mądrych głosów, które by nam w tym pomogły, ale w natłoku informacji coraz trudniej jest nam je znaleźć.",
    },
  ],
  removedItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInCart) {
        state.items.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      const removedItem = state.items.filter(
        (item) => item.id == action.payload.id
      );
      state.removedItem = removedItem;

      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
