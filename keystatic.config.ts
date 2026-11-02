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
            'Jsem ve třetím ročníku na IT gymnáziu V Úžlabině, baví mě sítě, hardware a po škole chci pokračovat na FIT ČVUT nebo VUT. Doma si ve VirtualBoxu zkouším síťové konfigurace a Linux, abych to uměl v praxi. Když nejsem u PC, jdu ven s foťákem a fotím různé momentky, situace na akcích a dětských táborech.',
        }),
        aboutSystemsHeadline: fields.text({
          label: 'IT sekce - Nadpis',
          defaultValue: 'IT, sítě a kód',
        }),
        aboutSystemsCopy: fields.text({
          label: 'IT sekce - Text',
          multiline: true,
          defaultValue:
            'Rád se vrtám v hardwaru a zkouším, jak věci reálně fungují uvnitř. Ze sítí a kyberbezpečnosti budu příští rok maturovat, takže si doma na virtuálkách stavím vlastní sítě a hraju si s Linuxem. U programování chci chápat, jak věci drží pohromadě, a nestavět jen naslepo.',
        }),
        aboutGearHeadline: fields.text({
          label: 'Foto sekce - Nadpis',
          defaultValue: 'Foto výbava',
        }),
        aboutGearCopy: fields.text({
          label: 'Foto sekce - Text',
          multiline: true,
          defaultValue:
            'Fotím na bezzrcadlovku Canon R10. Na rychlé momentky z akcí tahám objektiv 18–150 mm, na lidi a portréty nasazuju pevnou padesátku. K tomu používám pár filtrů na ostré slunce a odlesky. Fotky třídím a ladím v Lightroomu, video stříhám v DaVinci.',
        }),
        careerHeadline: fields.text({
          label: 'Kariérní sekce - Nadpis',
          defaultValue: 'Co mohu nabídnout & co hledám',
        }),
        careerCopy: fields.text({
          label: 'Kariérní sekce - Text',
          multiline: true,
          defaultValue:
            'Hledám brigádu v IT – rád pomůžu se správou počítačů, zapojováním a nastavováním sítě nebo jako technická výpomoc v kanclu a servisu. A pokud pořádáte tábor nebo akci, rád přijedu nafotit celou akci.',
        }),
        contactHeadline: fields.text({
          label: 'Kontakt - Nadpis',
          defaultValue: 'Kontakt',
        }),
        contactCopy: fields.text({
          label: 'Kontakt - Text',
          multiline: true,
          defaultValue:
            'Hledáte posilu do IT týmu nebo technickou výpomoc, případně chcete nafotit akci či tábor? Napište mi.',
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
        contactFacebook: fields.text({
          label: 'Facebook URL (nepovinné)',
          defaultValue: '',
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
