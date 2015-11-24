/**
 * Created by gabrielkunkel on 10/13/15.
 */
"use strict";
    let login = (username, password) => {
      if(username !== 'admin' || password !== 'radical') {
        console.log('incorrect login you dummy');
      }
    };


module.exports = login;