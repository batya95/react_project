import { observer } from "mobx-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessData from "../businessData/BusinessData"
import MeetingList from "../meeting/MeetingList";
import ServiceList from "../service/ServiceList"


const AdminHome = (observer((props) => {

  const navigate = useNavigate();
  const [isMeeting, setIsMeeting] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const handleClick2 = () => {
    setIsMeeting(current => !current);
    navigate(':meetings');
    setIsServices(false);
  }
  const handleClick3 = () => {
    setIsServices(current => !current);
    navigate(':addService');
    setIsMeeting(false);
  }

  return (
    <>
      <BusinessData isAdmin={props.isAdmin} />
      <br />
      <button onClick={handleClick2} className="button">meetings</button>
      <button onClick={handleClick3} className="button">services</button>
      <br />
      <br />
      {isServices && (
        <ServiceList />
      )}
      {isMeeting && (
        <MeetingList />
      )}
    </>
  )
}))

export default AdminHome