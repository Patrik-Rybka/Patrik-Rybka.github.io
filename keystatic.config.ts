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
            'Student 3. ročníku IT na Úžlabině se zaměřením na sítě a hardware. Doma stavím virtuální laby, připravuju se na maturitu z kyberbezpečnosti a směřuju na techniku (FIT ČVUT / VUT). Mimo terminál beru do ruky Canon R10 a fotím reportáže z akcí a táborů.',
        }),
        aboutSystemsHeadline: fields.text({
          label: 'IT sekce - Nadpis',
          defaultValue: 'IT, sítě a kód',
        }),
        aboutSystemsCopy: fields.text({
          label: 'IT sekce - Text',
          multiline: true,
          defaultValue:
            'Baví mě hardware, bastlení a rozebírání věcí na součástky, abych pochopil, jak fungují uvnitř. Můj hlavní směr jsou počítačové sítě a kyberbezpečnost, ze kterých příští rok maturuji. Na domácí stanici simuluji síťová prostředí a testuji systémy ve VirtualBoxu. Při kódování a vývoji beru moderní nástroje jako samozřejmost, ale stavím na tom, abych do hloubky rozuměl logice kódu a architektuře celého řešení.',
        }),
        aboutGearHeadline: fields.text({
          label: 'Foto sekce - Nadpis',
          defaultValue: 'Foto výbava',
        }),
        aboutGearCopy: fields.text({
          label: 'Foto sekce - Text',
          multiline: true,
          defaultValue:
            'Na akce a reportáže tahám bezzrcadlovku Canon R10. V terénu spoléhám na univerzální 18–150 mm, abych nemusel v prachu měnit skla, a na portréty nasazuji pevnou padesátku f/1.8. Výbavu doplňuji o CPL, ND a difuzní filtry. Video stříhám v DaVinci Resolve, fotky barevně ladím v Lightroomu a Photoshopu.',
        }),
        careerHeadline: fields.text({
          label: 'Kariérní sekce - Nadpis',
          defaultValue: 'Hledám uplatnění & Spolupráci',
        }),
        careerCopy: fields.text({
          label: 'Kariérní sekce - Text',
          multiline: true,
          defaultValue:
            'Otevřen brigádám a juniorským pozicím v IT (správa sítí, L1/L2 technická podpora, správa systémů, hardware servis) i zakázkám na reportážní focení a videotvorbu z akcí a táborů.',
        }),
        contactHeadline: fields.text({
          label: 'Kontakt - Nadpis',
          defaultValue: 'Kontakt',
        }),
        contactCopy: fields.text({
          label: 'Kontakt - Text',
          multiline: true,
          defaultValue:
            'Hledáte posilu do IT týmu, nebo potřebujete spolehlivě nafotit vaši akci? Napište mi.',
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
