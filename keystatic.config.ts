import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
        tags: fields.array(
          fields.text({ label: 'Štítek' }),
          {
            label: 'Štítky (Tagy)',
            itemLabel: (props) => props.value || 'Nový štítek',
          }
        ),
        content: fields.markdoc({
          label: 'Obsah článku',
          extension: 'md',
        }),
      },
    }),
  },
});
