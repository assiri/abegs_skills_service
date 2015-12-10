
import Ember from 'ember';
export default Ember.Route.extend({
  service:Ember.inject.service('service'),
  model: function(params) {
     return this.get('service').find('abegs',params.table); 
  }
});
