
import { useState } from "react"
import { InputAdornment, TextField } from "@mui/material";
import serviceServer from "../../data/server/serviceServer";



function AddService(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [discreption, setDicreption] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');

    const handleAddService = (e) => {
        e.preventDefault();
        const newService = { id, name, discreption, price, duration };
        serviceServer.addServiceToServer(newService);
        props.setToAdd2(false);
    }

    return (
        <>
            <form onSubmit={handleAddService} className='popup heightS'>
                <br />
                <br />
                <h3>Add Service</h3>
                <TextField
                    label="id: "
                    id="standard-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    variant="standard"
                    type='text' value={id} onChange={(e) => setId(e.target.value)}
                />
                <TextField
                    label="name: "
                    id="standard-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    variant="standard"
                    type='text' value={name} onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="discreption"
                    id="standard-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    variant="standard"
                    type='text' value={discreption} onChange={(e) => setDicreption(e.target.value)}
                />
                <TextField
                    label="price: "
                    id="standard-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    variant="standard"
                    type='number' value={price} onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    label="duration: "
                    id="standard-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                    variant="standard"
                    type='text' value={duration} onChange={(e) => setDuration(e.target.value)}
                />
                <button type='submit'>finish</button>
            </form>
        </>
    )
}

export default AddService