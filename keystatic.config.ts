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
          label: 'Horní štítek (např. Úžlabina • FIT ČVUT / VUT)',
          defaultValue: 'Úžlabina • FIT ČVUT / VUT',
        }),
        heroTitle: fields.text({
          label: 'Hlavní nadpis (Jméno)',
          defaultValue: 'Patrik Rybka',
        }),
        heroDesc: fields.text({
          label: 'Úvodní text (Bio)',
          multiline: true,
          defaultValue:
            'Jsem ve třeťáku na Úžlabině na IT gymplu a chci pokračovat na FIT ČVUT nebo VUT. Hodně mě baví hardware a svět sítí a serverů. Když nesedím u kompu, beru foťák a fotím na táborech, akcích i jen tak pro sebe venku.',
        }),
        aboutSystemsHeadline: fields.text({
          label: 'IT sekce - Nadpis',
          defaultValue: 'IT, sítě a kód',
        }),
        aboutSystemsCopy: fields.text({
          label: 'IT sekce - Text',
          multiline: true,
          defaultValue:
            'Vždycky mě lákalo železo, bastlení a jak věci fungují uvnitř. U vývoje a kódování je pro mě dneska AI primární nástroj na zrychlení práce, ale nespoléhám na něj slepě – snažím se do toho sám aktivně zapojovat, chápat architekturu a držet si projekty čisté na GitHubu. K tomu mě hodně táhnou počítačové sítě a kyberbezpečnost, ze které budu i maturovat. Doma běžím na Legionu s i7 a RTX 4060 a věci testuju ve VirtualBoxu.',
        }),
        aboutGearHeadline: fields.text({
          label: 'Foto sekce - Nadpis',
          defaultValue: 'Foto výbava',
        }),
        aboutGearCopy: fields.text({
          label: 'Foto sekce - Text',
          multiline: true,
          defaultValue:
            'Na akce, tábory i na vlastní focení venku tahám Canon R10. Většinu času mám nasazený 18–150 mm, abych nemusel přehazovat skla v prachu, a na portréty nasazuju pevnou padesátku f/1.8. Na objektivy točím CPL, NDčka a difuzní filtr. Střihám v DaVinci Resolve a fotky ladím v Lightroomu a Photoshopu.',
        }),
        contactHeadline: fields.text({
          label: 'Kontakt - Nadpis',
          defaultValue: 'Kontakt',
        }),
        contactCopy: fields.text({
          label: 'Kontakt - Text',
          multiline: true,
          defaultValue:
            'Chceš nafotit tábor nebo akci, pokecat o hardwaru nebo sítích? Napiš mi.',
        }),
        contactEmail: fields.text({
          label: 'Kontaktní E-mail',
          defaultValue: 'patrikrybka2008@gmail.com',
        }),
        contactGithub: fields.text({
          label: 'GitHub URL',
          defaultValue: 'https://github.com/Patrik-Rybka',
        }),
        contactInstagram: fields.text({
          label: 'Instagram URL',
          defaultValue: 'https://www.instagram.com/patrik_rybka/',
        }),
        contactLinkedin: fields.text({
          label: 'LinkedIn URL',
          defaultValue: 'https://www.linkedin.com/in/patrik-rybka-4546b1339',
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
