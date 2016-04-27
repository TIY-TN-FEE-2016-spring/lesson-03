import Ember from 'ember';

export default Ember.Component.extend({
  alert: Ember.inject.service(),

  goAway() {

    this.get(`alert`).hide();
  },
});
