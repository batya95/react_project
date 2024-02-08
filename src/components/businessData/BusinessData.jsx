
import { observer } from "mobx-react"
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dataServer from "../../data/server/dataServer";
import ButtonEdit from "./ButtonEdit";
import bussinessStore from "../../data/stores/bussinessStore";

const BusinessData = (observer((props) => {
  useEffect(() => {
    dataServer.getBusiness();
  }, []);
  return (
    <>
      <div id="businessData">
        <Card sx={{ maxWidth: 550 }}>
          <CardContent>
            <img src="/images/logo.gif" alt="logo" />
            <Typography gutterBottom variant="h5" component="div">
              name: {bussinessStore.details.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              address: {bussinessStore.details.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              mail: {bussinessStore.details.mail}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              phone: {bussinessStore.details.phone}
            </Typography>
          </CardContent>
          {props.isAdmin == true ? <ButtonEdit /> : null}
          <br />
        </Card> </div>
    </>
  )
}))

export default BusinessData
