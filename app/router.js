import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('patterns', { path: '/gallery' }, function() {});
  this.route('pattern', { path: '/patterns/:pattern_id' });
  this.route('project', { path: '/projects/:project_id' });
  this.route('project.edit', { path: '/projects/:project_id/edit' });
  this.route('projects');
  this.route('favorites');
  this.route('generate');
  this.route('newproject', { path: '/patterns/:pattern_id/newproject'});
  this.route('my-projects');
  this.route('faq');
});

export default Router;
