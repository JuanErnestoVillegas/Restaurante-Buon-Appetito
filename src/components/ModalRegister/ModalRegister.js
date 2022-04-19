// import {Modal, Button, FloatingLabel, Form, DropdownButton, Dropdown} from "react-bootstrap";
// import axiosClient from "../../config/axiosClient";
// import { LOGIN_VALUES } from "../../constants";
// import useForm from "../../hooks/useForm";
// import "./ModalRegister.css";







//   const { handleSubmit, handleKeyUp } = useForm(ADD_PRODUCT_VALUES, addProduct);
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Agregar Producto</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit} className="h-100">
//           <FloatingLabel
//             controlId="floatingInput"
//             label="Producto"
//             className="mb-3 floating"
//           >
//             <Form.Control
//               type="text"
//               placeholder="Prod"
//               onKeyUp={handleKeyUp}
//               name="name"
//               className=""
//             />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingPassword"
//             label="Descripcion"
//             className="mb-3 floating"
//           >
//             <Form.Control
//               type="text"
//               placeholder="Descrip"
//               onKeyUp={handleKeyUp}
//               name="description"
//               className=""
//             />
//           </FloatingLabel>
//           <FloatingLabel
//             controlId="floatingPassword"
//             label="Precio"
//             className="mb-3 floating"
//           >
//             <Form.Control
//               type="Number"
//               placeholder="P"
//               onKeyUp={handleKeyUp}
//               name="price"
//               className=""
//             />
//           </FloatingLabel>
//           <Button
//             className="m-1 modal-boton"
//             type="submit"
//             onClick={handleClose}
//           >
//             Agregar
//           </Button>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddModal;





// const ModalRegister = ({show, handleClose, setUsers, users }) => {
//     const addUser = async (info) => {
//         try {
//             const response = await axiosClient.post ("/users", info)
//             console.log(response.data);
//             setUsers([...users, response.data.addUser]);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     const {handleSubmit, handleKeyUp} = useForm (LOGIN_VALUES, addUser);
//     return (
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Agregar Usuario</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <FloatingLabel
//               controlId="floatingInput"
//               label="Nombre"
//               className="mb-3 floating"
//             >
//               <Form.Control
//                 type="text"
//                 placeholder="Nombre"
//                 onKeyUp={handleKeyUp}
//                 name="name"
//                 className=""
//               />
//             </FloatingLabel>
//             <FloatingLabel
//               controlId="floatingLastName"
//               label="Apellido"
//               className="floating"
//             >
//               <Form.Control
//                 type="text"
//                 placeholder="Apellido"
//                 onKeyUp={handleKeyUp}
//                 name="lastname"
//                 className="mb-3"
//               />
//             </FloatingLabel>
//             <FloatingLabel
//               controlId="floatingEmail"
//               label="Email"
//               className="floating"
//             >
//               <Form.Control
//                 type="email"
//                 placeholder="Email"
//                 onKeyUp={handleKeyUp}
//                 name="email"
//                 className="mb-3"
//               />
//             </FloatingLabel>    
//             <FloatingLabel
//               controlId="floatingPassword"
//               label="Password"
//               className="floating"
//             >
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 onKeyUp={handleKeyUp}
//                 name="password"
//                 className="mb-3"
//               />
//             </FloatingLabel>
//             <FloatingLabel
//               controlId="floatingPasswordConfirm"
//               label="Confirmación de Password"
//               className="floating"
//             >
//               <Form.Control
//                 type="password"
//                 placeholder="Confirme su Password"
//                 onKeyUp={handleKeyUp}
//                 name="password2"
//                 className="mb-3"
//               />
//             </FloatingLabel>
//             <DropdownButton id="dropdown-variants-secondary" className="m-1 modal-boton" variant='secondary' title="Rol" name="role">
//               <Dropdown.Item href="#/action-1">USER</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">ADMIN</Dropdown.Item>
//            </DropdownButton>
//             <Button
//               className="m-1 modal-boton"
//               type="submit"
//               onClick={handleClose}
//             >
//               {" "}
//               Agregar{" "}
//             </Button>
//           </form>
//         </Modal.Body>
//       </Modal>
//     );
// }
 
// export default ModalRegister;




import { Modal, Button, FloatingLabel, Form , DropdownButton, Dropdown} from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { LOGIN_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
import "./ModalRegister.css";

const ModalRegister = ({ show, handleClose, setUsers, users }) => {
  const addUser = async (info) => {
    try {
      const response = await axiosClient.post("/users", info);
      console.log(response.data);
      setUsers([...users, response.data.useradd]);
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSubmit, handleKeyUp } = useForm(LOGIN_VALUES, addUser);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="h-100">
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Nombre"
              onKeyUp={handleKeyUp}
              name="name"
              className=""
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Apellido"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Apellido"
              onKeyUp={handleKeyUp}
              name="lastname"
              className=""
            />
          </FloatingLabel>  
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3 floating"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              onKeyUp={handleKeyUp}
              name="mail"
              className=""
            />
          </FloatingLabel>                              
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Password"
              onKeyUp={handleKeyUp}
              name="password"
              className=""
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password2"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Password2"
              onKeyUp={handleKeyUp}
              name="password2"
              className=""
            />
          </FloatingLabel>   
          <DropdownButton id="dropdown-variants-secondary" className="m-1 modal-boton w-75" variant='secondary' title="Rol" name="role">
              <Dropdown.Item href="#/action-1">USER</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ADMIN</Dropdown.Item>
           </DropdownButton>
          {/* <FloatingLabel
            controlId="floatingPassword"
            label="Role"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Rol"
              onKeyUp={handleKeyUp}
              name="role"
              className=""
            />
          </FloatingLabel> */}
          <Button
            className="m-1 modal-boton"
            type="submit"
            onClick={handleClose}
          >
            Agregar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRegister;