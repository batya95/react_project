import { Button } from "@mui/material";
import { useState } from "react";
import EditBusinessData from "./EditBusinessData";


function ButtonEdit() {
    const [isEdit, setIsEdit] = useState(false);
    const handleClick = () => {
        setIsEdit(true)
    };
    return (
        <>
            <Button variant="outlined"
                onClick={handleClick}>
                EDIT
            </Button>
            {isEdit && (
                <EditBusinessData setIsEdit2={setIsEdit} />
            )}
            <br />
        </>
    )
}

export default ButtonEdit