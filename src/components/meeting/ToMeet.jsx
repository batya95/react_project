import { useState } from "react";

import AddMeeting from "./AddMeeting";

function ToMeet() {

    const [toMeet, setToMeet] = useState(false)
    const handleClick = () => {
        setToMeet(true)
    };
    return (
        <>
            <button
                onClick={handleClick}>
                To meet
            </button>
            {toMeet && (
                <AddMeeting setToAdd2={setToMeet} />
            )}</>
    )
}

export default ToMeet



