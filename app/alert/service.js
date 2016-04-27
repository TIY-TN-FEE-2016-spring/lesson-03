import Ember from 'ember';

export default Ember.Service.extend({
  isShowing: false,

  show() {
    this.set(`isShowing`, true);
  },

  hide() {
    this.set(`isShowing`, false);
  },
});
