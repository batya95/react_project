import { useState } from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import dataServer from "../../data/server/dataServer";

function EditBusinessData(props) {
  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newMail, setNewMail] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const detailsToUpdate = { name: newName, address: newAddress, mail: newMail, phone: newPhone };
    dataServer.putBusinessToServer(detailsToUpdate);
    props.setIsEdit2(false);
  };

  return (
    <>
      {
        <form onSubmit={handleSubmit} className='popup heightE'>
          <br />
          <br />
          <h3>Edit Details</h3>
          <TextField
            label="name"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            variant="standard"
            type='text' value={newName} onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            label="address"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            variant="standard"
            type='text' value={newAddress} onChange={(e) => setNewAddress(e.target.value)}
          />
          <TextField
            label="mail"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            variant="standard"
            type='email' value={newMail} onChange={(e) => setNewMail(e.target.value)}
          />
          <TextField
            label="phone number"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            variant="standard"
            type='phone' value={newPhone} onChange={(e) => setNewPhone(e.target.value)}
          />
          <Button type='submit'>To update</Button>

        </form>
      }
    </>
  )
}
export default EditBusinessData