import Ember from 'ember';
var cache = {};
export default Ember.Service.extend({
  name:'service',
  find: function(name, id) {
    if (cache[name] && cache[name][id]) {
      return cache[name][id];
    }
    return Ember.$.getJSON("http://skills.abegs.org/skills/api/v4/" + id + "?q=true&fields=id,name&norel=true")
      .then(function(result) {
        var s=id.replace(/s$/g,"");
        return result[s].map(function(c) {
          return {id: c.id,
                  name: c.name
                };
        });
      }).then(function(record) {
      cache[name] = cache[name] || {};
      cache[name][id] = record;
      return record;
    });
  }
});
