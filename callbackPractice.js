/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 
*/

function sayHi(thingtoSay, callback){
  callback(thingtoSay);
}


sayHi('Hi Katie', function(thingToSay){
  alert(thingToSay);
});


//and what you should write is the sayHi function that makes the code above work, 


var sayHi = function(str, cb){
  cb(str);
};

sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
    });





  //Code Here for first
  

  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
  first(names, function(firstName){
    console.log('The first name in names is ' + firstName);
  });

  var first = function(arr, callback){
    callback(arr[0]);
  };



  /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
  last(names, function(lastName){
    console.log('The last name in names is ' + lastName);
  });

  var last = function(arr, callback){
    callback(arr[arr.length-1]);
  };





  /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply


var multiply = function(num1, num2, cb){
  var result = num1*num2;
  cb(result);
};

  multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});





  /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

  var contains = function(arr, value, cb){
    for(var i=0; i<arr.length; i++){
      if(arr[i]===value){
        return cb(true);
      }
    }
    return cb(false);
  };

  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
  contains(names, 'Colt', function(result){
    if(result === true){
      console.log('Colt is in the array');
    } else {
      console.log('Colt is not in the array');
    }
  });





  /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

    var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

    var uniq = function(arr, cb){
      arr.sort();
      for(var i=0; i<arr.length-1; i++){
        if(arr[i]===arr[i+1]){
          arr.splice(i+1, 1);
        }
      }
      cb(arr);
    };



    var uniq = function(arr, cb){
      var newNames = [];
      for(var i=0; i<arr.length; i++){
        if(newNames.indexOf(arr[i])===-1){
          newNames.push(arr[i]);
        }
      }
      cb(newNames);
    };


    // alternative way, more looping, (I guess more strain on CPU) 
    // and doesn't work, 
    // function uniq(arr, cb){
    //   for(var i=arr.length-1; i>=1; i--){
    //     var currentName = arr[i];
    //     for(var k=arr.length-2; k>=0; k--){
    //       if(currentName===arr[k]){
    //         arr.splice(k, 1);
    //       }
    //     }
    //   }
    //   cb(arr);
    // }


    uniq(names, function(uniqArr){
      console.log('The new names array with all the duplicate items removed is ', uniqArr);
    });





    /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

    var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

    var each = function(arr, cb){
      var randIndice = Math.floor((Math.random()*arr.length));  // makes random indice that is in array
      var item = arr[randIndice];
      cb(item, randIndice);
    };

    each(names, function(item, indice){
      console.log('The item in the ' + indice + ' position is ' + item);
    });





    /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
var getUserById = function(users, id, cb){
  for(var i=0; i<users.length; i++){
    var currentUser = users[i];
    if(currentUser.id===id){
      return cb(currentUser);
    }
  }
};



 var users = [
 {
  id: '12d',
  email: 'tyler@gmail.com',
  name: 'Tyler',
  address: '167 East 500 North'
},
{
  id: '15a',
  email: 'cahlan@gmail.com',
  name: 'Cahlan',
  address: '135 East 320 North'
},
{
  id: '16t',
  email: 'ryan@gmail.com',
  name: 'Ryan',
  address: '192 East 32 North'
},
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
