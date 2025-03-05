function electionResult(votes){
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    //console.log(votes);
    countMango = 0;
    countBanana = 0;
    for(let vote of votes){
        //console.log(vote);
        if(vote === 'mango'){
            countMango++;
        }
        else if(vote === 'banana'){
            countBanana++;
        }
    }

    if(countMango > countBanana){
        return "Mango";
    }
    else if(countMango < countBanana){
        return "Banana";
    }
    else if(countMango == countBanana){
        return "Draw";
    }
}

const vote = electionResult(['mango', 'BananA', 'na vote', 'na vote']);
console.log(vote);