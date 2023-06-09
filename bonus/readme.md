PROBLEMA : Create un array di oggetti (con proprietà text e done) che rappresentano le task e mostratele a schermo. Aggiungete poi le funzionalità di cambio dello stato del task (cambiate il valore di done), eliminazione di una task ed aggiunta di una nuova task.

1 - START
2 - Creo il markup della lista in maniera statica;
3 - Imposto l'utilizzo di Vue;
4 - Creo l'array di oggetti che conterranno le task e i rispettivi status;
5 - Ciclo l'array all'interno della lista in modo da visualizzare le task all'interno del Dom;
6 - Imposto i click per il cambio dello status e l'eliminazione della task;
    6.1 - Il click del check verrà collegato alla funzione addetta a cambiare il valore booleano dello status;
    6.2 - Il click del cestino verrà collegato invece alla funzione addetta ad eliminare l'oggetto a cui fa riferimento all'interno dell'array;
7 - Impostazione della classe di riferimento per lo status;
    7.1 - A seconda dello status la task dovrà essere visualizzata in maniere diverse;
        7.1.1 - ? SE lo status corrisponderà a true;
            7.1.1.1 - La task avrà assegnata la classe designata alle task svolte;
        7.1.2 - : ALTRIMENTI se lo status corrisponderà a false;
            7.1.2.1 - La task avrà assegnata la classe designata alle task da svolgere;
8 - Impostazione per l'aggiunta di nuove task;
    8.1 - Tramite l'input presente nel Dom, verrà anche impostata una funzione che avrà il compito di prenderè l'imput dell'utente;
    8.2 - Successivamente la stessa funzione trasformerà l'imput in un oggetto e lo pusherà all'interno dell'array delle task;
9 - FINISH