
function Phone(serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price - 100;
  }
  
  let phone1 = new Phone(123, "Red", 500);
  let phone2 = new Phone(159, "Black", 500);
  let phone3 = new Phone(167, "Silver", 500);
  
  console.log(phone1.serial);
  console.log(phone1.color);
  console.log(phone1.price);
  
  console.log(phone2.serial);
  console.log(phone2.color);
  console.log(phone2.price);
  
  console.log(phone3.serial);
  console.log(phone3.color);
  console.log(phone3.price);
  
  // const phone1 = {
  //   serial: 123,
  //   color: "Red",
  //   price: 500,
  // };
  
  // const phone2 = {
  //   serial: 159,
  //   color: "Black",
  //   price: 500,
  // };
  
  // const phone3 = {
  //   serial: 167,
  //   color: "Silver",
  //   price: 500,
  // };