const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
//   const ana = order.order.delivery.deliveryPerson;
//   const customerInfo = (order) => {
//     // Adicione abaixo as informações necessárias.
//     console.log(`Olá ${ana}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`);
//   }

  const customerInfo2 = ({
      name,
      phoneNumber,
      address: {
        street,
        number,
        apartment,
      },
      order: {delivery: {deliveryPerson}}

  }) => `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R: ${street}, Nº ${number}, AP: ${apartment}`;
  console.log(customerInfo2(order));
  
  
  const orderModifier = ({
      name: 'Luiz Silva',
      

  }) => 
    // Adicione abaixo as informações necessárias.

  
  
  
  orderModifier(order);