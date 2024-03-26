var customerName = "bob"
const leastFavoriteCustomer = 'some initial value'
function upperCaseCustomerName(){
     customerName=customerName.toUpperCase()
     return customerName
}
function setBestCustomer(){
     bestCustomer = "not bob"
    return bestCustomer
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
  }
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy'
  }
