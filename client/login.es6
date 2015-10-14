/**
 * Created by gabrielkunkel on 10/13/15.
 */

let login = (username, password) => {
  if(username !== 'admin' || password !== 'radical') {
      console.log('incorrect login');
  }
};

login('admin', 'idunno');