import { useState, useContext, useEffect } from "react"
import {contexto} from "./CartContext"
import Checkout from "./Checkout"


const ItemCartContainer=()=>{
  const [carrito, setCarrito] = useState([]) //inicia con un array vacío (¿como lo voy llenando?)
    console.log (carrito)
  const {Borrar, image, precio, id} = useContext (contexto)
  const resultado = useContext (contexto)
    console.log (resultado)
  
  
  return(
    <div>
      <h2>Carrito</h2>
        <div>
           <img src={image} alt={id}/>
           <h3>total: {precio}</h3>
        </div>
        <div>
           <button onClick={Borrar}>Vaciar carrito</button>
           <button>Confirmar la compra</button>
        </div>
      <div>
        <Checkout/>
      </div>
    </div>
  )

}

// import { useContext, useState } from "react"
// import { Link } from "react-router-dom"
// import { contexto } from "./CartContext"

// const Carrito = () => {

//   const {carrito} = useContext(contexto)
//   const [nombre,setNombre] = useState("")
//   const [tel,setTel] = useState("")
//   const [email,setEmail] = useState("")


//   const handleSubmit = (e) => {
//     e.preventDefault()
    
// //   const usuario = { nombre , tel , email}
// //     console.log(usuario)
//   }

//   const handleClick = (e) => {
//     e.preventDefault()
//     //e.target.value
//   }

//   const handleNombreChange = (e) => {
//     setNombre(e.target.value)
//   }

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value)
//   }

//   const handleTelChange = (e) => {
//     setTel(e.target.value)
//   }
  
//   return (
//     <div>
//       <h1>Carrito</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit sint minima cum minus? Numquam deleniti facilis, officiis perferendis quis sed voluptas nisi ipsa, magni, temporibus odio a commodi maiores!</p>

//       <form onSubmit={handleSubmit}>
//         {/* <div>
//           <input onChange={handleNombreChange} type="text" id="nombre" placeholder="Nombre..." value={usuario.nombre}/>
//         </div>
//         <div>
//           <input onChange={handleEmailChange} type="email" id="email" placeholder="Email..." value={usuario.email}/>
//         </div> */}
//         <div>
//           <input onChange={handleTelChange} type="number" id="telefono" placeholder="Telefono..."/>
//         </div>
//         <button /* onClick={handleClick} */>comprar</button>
//       </form>

//       <Link to="/checkout">Proceder con la compra</Link>
//     </div>
//   )
// }
export default ItemCartContainer