const accountId = 12343
let accountEmail = "bhargavhingu1122@gmail.com"
var accountPassword = "123456"
accountCity = "Surat"
let accountState;

// accountId = 2// not allowed

accountEmail = "bh@1122.com"
accountPassword = "3333"
accountCity = "Navsari"

console.log(accountId);


// Prefer not to use var(variable)
// because of issue in block scope and functional scope


console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

