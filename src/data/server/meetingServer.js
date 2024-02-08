import meetingStore from "../stores/meetingStore";
import axios from "axios";

async function getMeetings() {
    const meetings = await axios.get("http://localhost:8787/appointments");
    meetingStore.setMeetings(meetings.data);
}

const addMeetingToServer = async (meeting, closeForm, setAddMeeting, deleteInput) => {
    try {
        const res = await axios.post("http://localhost:8787/appointment", meeting);
        if (res.status === 200) {
            closeForm(false);
            meetingStore.addNewMeeting(meeting);
            alert("sucsess");

        }
    }
    catch (e) {
        if (e.response) {
            alert("The date is taken, please change!");
            setAddMeeting(false);
            deleteInput('');
        }
        else {
            console.log("faild");
        }
    }
}
export default { getMeetings, addMeetingToServer };