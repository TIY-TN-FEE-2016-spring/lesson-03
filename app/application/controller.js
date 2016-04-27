import Ember from 'ember';

export default Ember.Controller.extend({
  alert: Ember.inject.service(),

  showAlert() {
    this.get(`alert`).show();
  },
});
