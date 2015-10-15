/**
 * Created by gabrielkunkel on 10/13/15.
 */

//require('./login');
import {login} from "./login"
login('admin', 'idunno');

var angular = require('angular');
var app = angular.module('app', []);
require('./bands')(app);

console.log(app);

console.log('App loaded! You\'re the shit! I love you, man!');