import { Button } from "@mui/material";
import { useState } from "react";

import AddService from "./AddService";

function ToAdd() {

    const [toAdd, setToAdd] = useState(false)
    const handleClick = () => {
        setToAdd(true)
    };
    return (
        <>
            <Button
                onClick={handleClick}>
                + Add Service +
            </Button>
            {toAdd && (
                <AddService setToAdd2={setToAdd} />
            )}</>
    )
}

export default ToAdd
