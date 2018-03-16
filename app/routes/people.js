import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      people: [
        {
          id: 'cristian',
          name: 'Cristian',
          gender: 'M',
          salary: 100000
        },
        {
          id: 'melissa',
          name: 'Melissa',
          gender: 'F',
          salary: 30000
        },
        {
          id: 'juan',
          name: 'Juan',
          gender: 'M',
          salary: 120000
        }
      ]
    };
  }
});
