import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      people: [
        {
          id: 'cristian',
          name: 'Cristian',
          isFemale: false,
        },
        {
          id: 'melissa',
          name: 'Melissa',
          isFemale: true,
        },
        {
          id: 'juan',
          name: 'Juan',
          isFemale: false,
        }
      ]
    };
  }
});
