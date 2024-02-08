import { Outlet } from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import serviceStore from "../../data/stores/serviceStore";
import serviceServer from "../../data/server/serviceServer";

const ServiceList = (observer(() => {
  const arr = serviceStore.services;
  useEffect(() => {
    serviceServer.getServices();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div id="list">
        {arr.map((service, i) =>
          <Item key={i} className="item">
            <br />
            Type of service: {service.name}
            <br />
            Discreption: {service.discreption}
          </Item>
        )
        }
      </div>
      <br />
      <Outlet />
    </>
  )
}))
export default ServiceList
