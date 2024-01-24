const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(newName) {
  if (typeof newName != 'string') {
    return 'O parâmetro passado deve ser do tipo string!';
  } else {
    trybeBankCustomers.push(newName);
    return 'Pessoa adicionada com sucesso!';
  }

}


console.log(addCustomer('Paula'));
console.log(trybeBankCustomers);