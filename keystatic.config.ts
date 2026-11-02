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
            'Jsem ve třeťáku na Úžlabině na IT gymplu a chci pokračovat na FIT ČVUT nebo VUT na sítě a servery. Baví mě si železo sám poskládat a rozchodit. Když nesedím u kompu, beru foťák a fotím na táborech a akcích.',
        }),
        aboutSystemsHeadline: fields.text({
          label: 'IT sekce - Nadpis',
          defaultValue: 'IT, sítě a kód',
        }),
        aboutSystemsCopy: fields.text({
          label: 'IT sekce - Text',
          multiline: true,
          defaultValue:
            'Doma si stavím a zprovozňuju hardware, projekty testuju ve VirtualBoxu. Kód nepíšu ručně od nuly – jedu vibe coding přes AI a držím si to na GitHubu. K tomu řeším sítě, směrování a kyberbezpečnost, ze které budu i maturovat. Běžím na Legionu s i7 a RTX 4060.',
        }),
        aboutSystemsTags: fields.array(fields.text({ label: 'Technologie' }), {
          label: 'IT Technologie (Tagy)',
          itemLabel: (props) => props.value || 'Nová technologie',
          defaultValue: [
            'VirtualBox',
            'Vibe coding (AI)',
            'GitHub',
            'Sítě & Směrování',
            'Kyberbezpečnost',
            'Legion RTX 4060',
          ],
        }),
        aboutGearHeadline: fields.text({
          label: 'Foto sekce - Nadpis',
          defaultValue: 'Foto výbava',
        }),
        aboutGearCopy: fields.text({
          label: 'Foto sekce - Text',
          multiline: true,
          defaultValue:
            'Na akce a tábory tahám Canon R10. Většinu času mám nasazený 18–150 mm, abych nemusel měnit skla v prachu, a na portréty přehazuju pevnou padesátku f/1.8. Na objektivy točím CPL, NDčka a difuzní filtr. Střihám v DaVinci, fotky ladím v Lightroomu a Photoshopu.',
        }),
        aboutGearTags: fields.array(fields.text({ label: 'Vybavení' }), {
          label: 'Foto Vybavení (Tagy)',
          itemLabel: (props) => props.value || 'Nové vybavení',
          defaultValue: [
            'Canon EOS R10',
            'RF-S 18–150 mm',
            'RF 50 mm f/1.8',
            'CPL / ND / Difuzní filtry',
            'DaVinci Resolve',
            'Lightroom & Photoshop',
          ],
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
          defaultValue: 'https://instagram.com/',
        }),
        contactLinkedin: fields.text({
          label: 'LinkedIn URL',
          defaultValue: 'https://linkedin.com/',
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
