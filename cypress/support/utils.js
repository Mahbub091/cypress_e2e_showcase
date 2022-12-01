function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Utils = {
  menuClass: [
    "fa fa-home",
    "material-icons card_travel",
    "fa fa-shopping-cart",
    "fa fa-lock",
    "fa fa-list",
    "fa fa-list",
    "fa fa-youtube-play",
    "fa fa-envelope",
  ],

  menuLinkText: [
    " Home",
    " Products",
    " Cart",
    " Signup / Login",
    " Test Cases",
    " API Testing",
    " Video Tutorials",
    " Contact us",
  ],

  orangeColor: "rgb(254, 152, 15)",

  randomEmail: makeId(8) + "@mail.com",
  randomAccountName: makeId(12),
  randomPassword: makeId(8),
  firstName: "Robert",
  lastName: "Nero",
  companyName: "DevsDenBD",
  address: "Mirpur",
  address2: "Dhaka",
  country: "Canada",
  state: "None",
  city: "Dhaka",
  zipCode: "1216",
  mobileNo: "1234556789",
  accountEmail: "devsdenbd@mail.com",
  accountPassword: "12345667",
};

export default Utils;
