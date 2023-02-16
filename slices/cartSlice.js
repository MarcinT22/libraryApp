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
    {
      id: 6,
      imgUrl: "https://ecsmedia.pl/c/zaproszenie-w-iext115558792.jpg",
      title: "Zaproszenie",
      author: "Keeland Vi",
      category: "Romans",
      description:
        "Stella to nieco szalona, nieprzewidywalna dziewczyna, która zawsze polega na swoim zmyśle węchu i wręcza obcym ludziom czekoladowe batoniki na poprawę humoru. Nie jest jednak typem osoby, która wprosi się na cudzą imprezę, aby najeść się do syta i napić drogiego szampana. Chyba że… owa impreza będzie wystawnym weselem odbywającym się w gmachu Nowojorskiej Biblioteki Publicznej, a zaproszenie wystawione na jej byłą współlokatorkę i tak by się zmarnowało. Ostatnie wątpliwości rozwiewa drużba – czyli najwspanialszy mężczyzna, jakiego kiedykolwiek widziała Stella – który prosi ją do tańca. Chemia między nimi grozi wybuchem.",
    },
    {
      id: 7,
      imgUrl:
        "https://ecsmedia.pl/c/lowcy-skor-tajemnice-zbrodni-w-lodzkim-pogotowiu-w-iext124142121.jpg",
      title: "Łowcy skór. Tajemnice zbrodni w łódzkim pogotowiu",
      author: "Tomasz Patora",
      category: "Literatura faktu",
      description:
        "Zaczęło się od anonimu. Kartka A4. Zestawienie zakładów pogrzebowych, które za łapówki przejęły prosektoria w łódzkich szpitalach. Tomasz Patora wraz z dwoma innymi dziennikarzami rozpoczął śledztwo, które wkrótce ujawniło jedną z największych afer w historii III RP. Handel informacjami o zgonach, opóźnianie wyjazdów karetek pogotowia, chaos w dystrybucji niebezpiecznych leków i wreszcie – coraz więcej przypadków zaskakujących śmierci. Kilka miesięcy po tym, jak dostarczono anonim do redakcji, sprawą łowców skór żył cały kraj, a organy ścigania wszczęły dochodzenie.",
    },
    {
      id: 8,
      imgUrl:
        "https://ecsmedia.pl/c/ostatnie-zyczenie-wiedzmin-tom-1-w-iext121324546.jpg",
      title: "Ostatnie życzenie. Wiedźmin",
      author: "Andrzej Sapkowski",
      category: "Fantastyka",
      description:
        "Tom 1. sagi o Wiedźminie to zbiór opowiadań, które pozwolą Ci poznać Geralta. Co ciekawe, książka „Ostatnie życzenie” ukazała się rok po drugim w chronologii wewnętrznej cyklu opowiadań – „Miecz przeznaczenia”. W skład tomu „Ostatnie życzenie” weszły cztery teksty z debiutanckiego zbioru „Wiedźmin”.",
    },
    {
      id: 9,
      imgUrl: "https://ecsmedia.pl/c/hobbit-w-iext122055294.jpg",
      title: "Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantastyka",
      description:
        "Światowej sławy pisarz angielski John Ronald Reuel Tolkien (1892–1973) był profesorem filologii angielskiej na uniwersytecie w Leeds oraz profesorem literatury średniowiecznej w Oksfordzie, znawcą literatury i języka staroangielskiego, staronordyckiego, starogermańskiego oraz gockiego. Jako powieściopisarz dał się poznać dopiero w 1937 roku, publikując Hobbita, który przyniósł mu rozgłos na całym świecie.W samej Anglii książka ta miała dziesiątki wydań. Zachęcony powodzeniemi prośbami oczarowanych czytelników, Tolkien powrócił do historii Bilbo Bagginsa, pisząc Trylogię Władca Pierścieni, kontynuację Hobbita. Zarówno Hobbit, jak i Władca Pierścieni powstały pod wpływem dobrze znanych autorowi skandynawskich mitów i staroangielskich legend, pełnych czarodziejów, smoków i przedmiotów o nadprzyrodzonej mocy. Fantastyczny, przemyślany do najdrobniejszych szczegółów świat powieści niezmiennie zachwyca kolejne pokolenia czytelników. ",
    },
    {
      id: 10,
      imgUrl: "https://ecsmedia.pl/c/zaczarowana-zagroda-w-iext123605891.jpg",
      title: "Zaczarowana zagroda",
      author: "Centkiewicz Alina , Centkiewicz Czesław",
      category: "Dla dzieci",
      description:
        "Grupa polskich polarników bada życie pingwinów na wschodnim wybrzeżu Antarktydy. Zafascynowani ptakami naukowcy postanawiają zapędzić pingwiny do lodowej zagrody, aby je zaobrączkować. Następnego dnia okazuje się jednak, że zagroda jest pusta… Nowe wydanie z pięknymi ilustracjami Agnieszki Żelewskiej. Kolorowe ilustracje, poręczny format i duża czcionka – książka idealna do samodzielnego czytania! ",
    },
    {
      id: 11,
      imgUrl: "https://ecsmedia.pl/c/krew-i-popiol-tom-1-w-iext115531667.jpg",
      title: "Krew i popiół. Tom 1",
      author: "Armentrout Jennifer L.",
      category: "Powieść historyczna",
      description:
        "Porzucone przez bogów i budzące strach w śmiertelnikach, upadłe królestwo znowu powstaje, by przemocą i zemstą odebrać to, co uznaje za swoją własność. A kiedy cień przeklętych zbliża się coraz bardziej, zaciera się granica między tym, co zakazane, a tym, co słuszne. Poppy może nie tylko zostać uznana za niegodną przez bogów, ale również stracić serce, a nawet życie, kiedy przesiąknięte krwią więzy spajające jej świat zaczną się strzępić.",
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

    undoRemoveFromCart: (state) => {
      state.items = [...state.items, state.removedItem[0]];
      state.removedItem = [];
    },
  },
});

export const { addToCart, removeFromCart, undoRemoveFromCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
