/**
 * Created by gabrielkunkel on 10/13/15.
 */

var login = require('./login')
var angular = require('angular')
var app = angular.module('app', [])
require('./bands')(app)

login('admin', 'idunno')

console.log(app)

{
  let m = 27;
  if (!m === 27) {
    m = 5;
  }
}


console.log('App loaded! You\'re the shit! I love you, man!')