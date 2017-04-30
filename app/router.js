import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('evaluator');
  this.route('entry-test');
  this.route('directory');
  this.route('demonstrator');
  this.route('dashboard');
  this.route('login');
  this.route('notification');
  this.route('settings');
  this.route('sql');
  this.route('statistics');
  this.route('student');
  this.route('logout');
  this.route('error');
});

export default Router;
