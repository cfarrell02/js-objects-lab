const aCar = {
    owner : "Joe Bloggs",
    address: "3 Walkers Lane",
    type : {make: "Toyota", model:"Corolla",cc:1.8},
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration: {year:"201",countyCode:"WD",number:1058},
    previousOwners: [
        {name: "Pat Smith",address:"1 Main Street"},
        {name: "Sgeila Dwyer",address:"2 High Street"}
    ]
  };
  
  aCar.mileage = 10000;
  aCar.colour = {exteriorColour:"Red", interiorFabric:"Leather",
    shade:"Cream"};


  console.log(aCar.owner + " drives a "+aCar.type.make);
  console.log(aCar.registration.year+"-"+aCar.registration.countyCode);
  console.log("It is a "+aCar.colour.exteriorColour+" car, "+
  aCar.mileage+" mileage, with "+aCar.colour.interiorFabric+
  " interior.");
  console.log("First Owner: "+aCar.previousOwners[0].name);
  for(let i = 0;i<aCar.features.length;i++){
    console.log(aCar.features[i]);
  }
  aCar.previousOwners.forEach(owner =>{
    console.log(owner.name);
  })

