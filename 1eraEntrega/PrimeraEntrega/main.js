
  function reducirDescuento() {
    let precio = parseFloat(prompt("Ingrese el precio")); // Usar parseFloat para convertir el valor ingresado a un número decimal
    let cantidad = parseInt(prompt("Ingrese la cantidad")); // Usar parseInt para convertir el valor ingresado a un número entero
  
    let comprar = precio * cantidad;
    let descuento = comprar * 0.30;
    let pagar = comprar - descuento;
  
    alert("El descuento es: $" + descuento); // Corregir la impresión del descuento
    alert("El total a pagar es: $" + pagar);
    return pagar; // Devolver el valor de pagar para que esté disponible en la función cobrarPago
  }
  
  function cobrarPago(pagar) { // Pasar el valor de pagar como argumento
    let monto = parseFloat(prompt("Ingrese el monto a pagar")); // Usar parseFloat para convertir el valor ingresado a un número decimal
  
    if (monto === pagar) { // Usar === para comparar igualdad en lugar de =
      alert("Pago exitoso.");
    } 
    else if (monto >= pagar) { // Cambiar (monto >= pagar) en lugar de (monto >= pagar) { para corregir la sintaxis
      let vuelto = monto - pagar;
      alert("Compra exitosa, su vuelto es $" + vuelto);
    } 
    else { // Cambiar else if por else para manejar cualquier otro caso
      let falta = pagar - monto;
      alert("Faltan: $" + falta);
    }
  }
  
  let pagar = reducirDescuento(); // Almacenar el valor de pagar devuelto por la función reducirDescuento
  cobrarPago(pagar); // Pasar el valor de pagar como argumento a la función cobrarPago
  