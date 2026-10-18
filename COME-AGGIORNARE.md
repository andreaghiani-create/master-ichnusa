# Master Ichnusa – come aggiornare

## Nuovo programma di allenamento
1. Mandare a Claude il nuovo programma (Word, PDF, foto o testo).
2. Claude restituisce un nuovo `programma.json`.
3. Su GitHub: **Add file → Upload files** → trascinare `programma.json` → **Commit changes**.
4. Gli atleti vedono il nuovo programma alla prima apertura dell'app con internet (attendere qualche minuto).

I programmi precedenti restano consultabili dal menu in cima alla scheda Programma.

## Nuova versione dell'app
Caricare i file ricevuti allo stesso modo (sovrascrivono i vecchi).

## Dati degli atleti
Restano solo sul telefono di ciascuno e non vengono toccati dagli aggiornamenti.
Ogni atleta può salvarli con **Profilo → Esporta CSV** e ripristinarli con **Importa da CSV**.

## Collegamento al foglio della squadra
L'app invia i dati al foglio "Master Ichnusa – Dati squadra" tramite lo script (Estensioni → Apps Script del foglio).
Se si modifica lo script: Esegui il deployment → Gestisci deployment → modifica → Versione: Nuova versione. Così l'indirizzo resta lo stesso e l'app non va aggiornata.
