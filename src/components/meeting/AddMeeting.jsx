import { useState } from "react"
import { InputAdornment, TextField, Autocomplete } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { observer } from "mobx-react";
import meetingServer from "../../data/server/meetingServer";
import serviceStore from "../../data/stores/serviceStore";

const AddMeeting = (observer((props) => {
  const [typeService, setType] = useState('');
  const [nameClient, setNameClient] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [addMeeting, setaddMeeting] = useState(true);

  const today = new Date();
  let newMeeting = {}
  function checkDate(dateMeet) {
    if (today > dateMeet) {
      setDateTime('');
      setaddMeeting(false);
      alert("The date has passed");
      return false;
    }
    else
      return true;
  }

  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (checkDate(dateTime) == true) {
      newMeeting = { typeService, nameClient, tel, mail, dateTime };
      meetingServer.addMeetingToServer(newMeeting, props.setToAdd2, setaddMeeting, setDateTime);
    }
  }
  let colorInput = ""
  if (addMeeting === false) { colorInput = "inputDateTaken" }
  else { colorInput = "" }
  return (
    <>
      <form onSubmit={handleAddMeeting} className='popup heightM'>
        <br />
        <br />
        <h3>Appointment</h3>
        <Autocomplete
          id="myAutoComplete"
          options={serviceStore.arrServices}
          renderInput={(typeService) => <TextField {...typeService} label="Type Of Service" />
          }
          value={typeService} onSelect={(e) => setType(e.target.value)}>
        </Autocomplete>
        <TextField
          label="name of client: "
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={nameClient} onChange={(e) => setNameClient(e.target.value)}
        />
        <TextField
          label="tel: "
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='text' value={tel} onChange={(e) => setTel(e.target.value)}
        />
        <TextField
          label="mail"
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="standard"
          type='email' value={mail} onChange={(e) => setMail(e.target.value)}
        />
        {
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              id="date"
              name="date"
              value={dateTime}
              type='date'
              className={colorInput}
              onChange={(e) => setDateTime(e.$d)}

            />
          </LocalizationProvider>}
        <br />
        <br />
        <button type='submit'>send</button>
      </form>
    </>
  )
}))
export default AddMeeting
