function isBestFriend(f1, f2){
    if(typeof f1 !== 'object' || typeof f2 !== 'object'){
        return "Invalid";
    }
    // console.log(f1, f2);

    if(f1.roll === f2.bestFriend && f2.roll === f1.bestFriend){
        return true;
    }
    else{
        return false;
    }
}

const friend = isBestFriend({name: 'hashem', roll: 1, bestFriend: 2}, 'kashem er kono bondhu nai')
console.log(friend);