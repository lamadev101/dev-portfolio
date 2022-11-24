export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'group',
      title: 'Group',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
    }
  ]
}