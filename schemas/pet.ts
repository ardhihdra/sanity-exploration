export default {
  name: 'pet',
  type: 'document',
	title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age'
    }
  ]
}