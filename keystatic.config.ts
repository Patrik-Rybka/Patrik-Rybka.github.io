import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'patrik-rybka/patrik-rybka',
  },
  singletons: {
    homepage: singleton({
      label: 'Úvodní stránka (Texty a profil)',
      path: 'src/content/homepage/index',
      schema: {
        heroEyebrow: fields.text({
          label: 'Horní štítek (např. IT Systems & Terénní Reportáž)',
          defaultValue: 'IT Systems & Terénní Reportáž',
        }),
        heroTitle: fields.text({
          label: 'Hlavní nadpis (Jméno)',
          defaultValue: 'Patrik Rybka',
        }),
        heroDesc: fields.text({
          label: 'Úvodní text (Bio)',
          multiline: true,
          defaultValue:
            'Student IT se zaměřením na počítačové sítě, Linux a hardware. Paralelně působím v terénu s bezzrcadlovkou Canon R10, kde zachycuji autentickou atmosféru letních akcí, táborů a festivalů. V obou oborech sázím na přímé, funkční a spolehlivé řešení.',
        }),
        aboutSystemsHeadline: fields.text({
          label: 'IT sekce - Nadpis',
          defaultValue: 'Systémy & Sítě',
        }),
        aboutSystemsCopy: fields.text({
          label: 'IT sekce - Text',
          multiline: true,
          defaultValue:
            'Věnuji se návrhu a správě LAN infrastruktur, konfiguraci směrování, přepínání a segmentaci sítí přes VLAN. Běžně pracuji v linuxovém terminálu (Debian, Ubuntu), spravuji služby přes SSH a využívám kontejnerizaci v Dockeru. K tomu patří i hardware: diagnostika komponent a stavba spolehlivých PC sestav.',
        }),
        aboutSystemsTags: fields.array(fields.text({ label: 'Technologie' }), {
          label: 'IT Technologie (Tagy)',
          itemLabel: (props) => props.value || 'Nová technologie',
          defaultValue: [
            'TCP/IP & VLAN',
            'Linux / Bash',
            'Docker',
            'Git',
            'PC Hardware',
          ],
        }),
        aboutGearHeadline: fields.text({
          label: 'Foto sekce - Nadpis',
          defaultValue: 'Foto & Video kit',
        }),
        aboutGearCopy: fields.text({
          label: 'Foto sekce - Text',
          multiline: true,
          defaultValue:
            'Mým hlavním pracovním nástrojem je bezzrcadlovka Canon EOS R10. Pro reportáže v běhu nasazuji univerzální zoom RF-S 18–150 mm IS STM, který pokryje celou scénu bez nutnosti měnit objektiv v prachu. Na portréty a nízké světlo používám pevnou padesátku RF 50 mm f/1.8. Výbavu doplňuje směrový mikrofon s ochranou proti větru a bi-color LED světla.',
        }),
        aboutGearTags: fields.array(fields.text({ label: 'Vybavení' }), {
          label: 'Foto Vybavení (Tagy)',
          itemLabel: (props) => props.value || 'Nové vybavení',
          defaultValue: [
            'Canon EOS R10',
            'RF-S 18–150 mm',
            'RF 50 mm f/1.8',
            'Shotgun Mic + Deadcat',
            'Bi-Color LED',
          ],
        }),
        contactHeadline: fields.text({
          label: 'Kontakt - Nadpis',
          defaultValue: 'Pojďme spolupracovat',
        }),
        contactCopy: fields.text({
          label: 'Kontakt - Text',
          multiline: true,
          defaultValue:
            'Hledáte fotografa pro vaši akci, tábor či reportáž, nebo chcete probrat síťovou infrastrukturu a Linux? Napište mi.',
        }),
        contactEmail: fields.text({
          label: 'Kontaktní E-mail',
          defaultValue: 'kontakt@patrikrybka.me',
        }),
        contactGithub: fields.text({
          label: 'GitHub URL',
          defaultValue: 'https://github.com/Patrik-Rybka',
        }),
      },
    }),
  },
  collections: {
    blog: collection({
      label: 'Blogové články',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Název článku' } }),
        description: fields.text({
          label: 'Popis článku (krátké shrnutí)',
          multiline: true,
        }),
        pubDate: fields.date({
          label: 'Datum publikace',
          defaultValue: { kind: 'today' },
        }),
        tags: fields.array(fields.text({ label: 'Štítek' }), {
          label: 'Štítky (Tagy)',
          itemLabel: (props) => props.value || 'Nový štítek',
        }),
        content: fields.markdoc({
          label: 'Obsah článku',
          extension: 'md',
        }),
      },
    }),
  },
});
