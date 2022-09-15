const aCar = {
    owner : "Joe Bloggs",
    type : {make: "Toyota", model:"Corolla",cc:1.8},
    registration: {year:"201",countyCode:"WD",number:1058}
  };
  
  aCar.mileage = 10000;
  aCar.colour = {exteriorColour:"Red", interiorFabric:"Leather",
    shade:"Cream"}


  console.log(aCar.owner + " drives a "+aCar.type.make);
  console.log(aCar.registration.year+"-"+aCar.registration.countyCode);
  console.log("It is a "+aCar.colour.exteriorColour+" car, "+
  aCar.mileage+" mileage, with "+aCar.colour.interiorFabric+
  " interior.")