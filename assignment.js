
//kilometerToMeter

 function kilometerToMeter(kiloMeter, meter = 1000){
    return meter * kiloMeter;
}

const result = kilometerToMeter(20);
console.log(result);


//budgetCalucaltor
function budgetCalucaltor(watch, phone, laptop){
    const buyWatch = watch * 50
    const buyPhone = phone * 100
    const buyLaptop = laptop * 500
    return buyWatch + buyPhone + buyLaptop;
}
const totalQuantity = budgetCalucaltor(1,2,1);
console.log(totalQuantity);

//hotelCost
function hotelCost(days) {
    let cost = 0;
    for (let i = 1; i <= days; i++) {
      if (i <= 10) {
        cost += 100;
      } else if (i <= 20) {
        cost += 80;
      } else if (i > 20) {
        cost += 50;
      }
    }
    return cost;
  }
  
  console.log(hotelCost(40));


  //megaFriend

  function megaFriend (name){
    let biggestName = name[0];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if(element.length > biggestName.length){
            biggestName = element;
        }
    }
    return biggestName;
  }

  const output = megaFriend(['Jack Ma', 'Jeff Bezos', 'Bill gates', 'Mark Zukerbark']);
  console.log(output);