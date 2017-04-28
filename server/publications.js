import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections/projects';

Meteor.publish('projects', function() {
    return Projects.find({owner: this.userId});
});
