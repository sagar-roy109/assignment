// Kilometer to Meter Calculator 

function kilometerToMeter(killometer){
    
    if( killometer < 0){

        var errorMessage = "Please enter correct value";
        console.log(errorMessage);
    }else{
        var meterResult = killometer * 1000;
        return meterResult;
    }
    
}

// Budget Calculator 

function budgetCalculator(wtachQuantity, mobileQuantity , laptopQuantity){
    if(wtachQuantity < 0 || mobileQuantity < 0 || laptopQuantity < 0){
        
        var errorMessage = "Please enter correct value";
        console.log(errorMessage);

    }else{

        var watchTotalPrice = wtachQuantity * 50;
        var mobileTotalPrice = mobileQuantity * 100;
        var laptopTotalPrice = laptopQuantity * 500;

        var totalCost = watchTotalPrice + mobileTotalPrice + laptopTotalPrice ;

        return totalCost;
    }
        
    
}

// Hotel Price calculator 

function hotelCost(numOfDays){
    if(numOfDays < 0 ){
        var errorMessage = "Please enter correct value";
        console.log(errorMessage);
    }else if(numOfDays <= 10){
        var totalCost = numOfDays * 100;
        return totalCost;
    }else if(numOfDays > 10 && numOfDays <=20){
        var totalCost = numOfDays * 80;
        return totalCost;
    }else if(numOfDays > 20){
        var totalCost = numOfDays * 50;
        return totalCost;
    }
}


// Find large name

function megaFriend(nameOfFriend){
    var maxLength = 0;

    for ( var i = 0; i < nameOfFriend.length ; i++){
        if(nameOfFriend[i].length >= maxLength ){
            mmaxName = nameOfFriend[i];
            return mmaxName;
        }
    }
}

