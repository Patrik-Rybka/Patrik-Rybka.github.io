---
title: "Proč jsem si jako student IT vytvořil vlastní web a blog"
description: "Moje důvody pro spuštění osobního portfolia, proč jsem zvolil Astro a jak mi psaní článků pomáhá v učení."
pubDate: 2026-11-01
tags: ["IT", "Astro", "WebDev", "Kariéra"]
---

Ahoj! Jsem Patrik Rybka a tohle je můj první příspěvek na mém novém osobním webu. Pokud studuješ IT nebo tě baví programování, možná jsi už taky přemýšlel nad tím, jestli má dnes ještě smysl mít vlastní webové portfolio.

Tady jsou 3 hlavní důvody, proč jsem se rozhodl do toho jít a proč si myslím, že je to pro studenta IT skvělá věc.

---

## 1. Důkaz místo pouhých slov (Proof of Work)

Napsat si do životopisu nebo na LinkedIn seznam technologií zvládne každý za pět minut. Ale když máš vlastní web na vlastní doméně, na kterém ukážeš reálné projekty s funkčními ukázkami a zdrojovým kódem na GitHubu, okamžitě tím ukážeš:

- že tě obor baví i mimo povinné školní zadání,
- že umíš dotáhnout věci od nuly až po ostré nasazení,
- a že chápeš, jak funguje Git, verzování a webhosting.

---

## 2. Psaní jako způsob učení (Learning in Public)

Znáš ten pocit, kdy se učíš novou technologii, chvíli ti to dává smysl, ale za týden už nevíš, jak jsi to vlastně vyřešil? Přesně proto chci mít na webu i tento blog.

> **Nejlepší způsob, jak si něco doopravdy zapamatovat a pochopit do hloubky, je zkusit to jednoduše vysvětlit někomu dalšímu.**

Plánuji sem psát krátké postřehy ze školy, zápisky z řešení zapeklitých chyb a návody na nástroje, které zrovna zkouším (jako Docker, Linux nebo databáze).

---

## 3. Výběr technologií: Rychlost a žádný zbytečný kód

Nechtěl jsem platit drahé měsíční poplatky za nástroje typu Webnode ani se trápit s pomalým WordPressem. Proto jsem zvolil moderní stack:

- **Astro:** Bleskově rychlý framework, který generuje čisté statické HTML bez zbytečného JavaScriptu.
- **Tailwind CSS:** Pro čistý a moderní minimalistický design s podporou tmavého režimu.
- **GitHub Pages:** Zcela bezplatný a spolehlivý hosting napojený na mou vlastní doménu `patrikrybka.me`.

Jednoduchá ukázka, jak příjemně se v Astru pracuje s komponentami:

```astro
---
// Příklad jednoduché komponenty v Astru
const title = "Můj první článek";
---

<article class="p-4 bg-neutral-900 rounded-xl">
  <h2>{title}</h2>
  <p>Jednoduché, rychlé a čisté.</p>
</article>
```

---

## Co bude dál?

Web mám hotový jako skvělý základ. Dalším krokem bude přidávání dalších projektů a článků o tom, na čem zrovna pracuji. 

Pokud máš jakoukoliv otázku nebo chceš pokecat o technologiích, klidně mi [napiš e-mail](/ #kontakt)!
