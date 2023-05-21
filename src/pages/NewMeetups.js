import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups() {
  const history = useHistory();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://artists-making-art-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" }
      }
    ).then (()=>{
      history.replace('/')
    });
  }
  return (
    <div>
      <section>
        <h1>Add New Art Event</h1>
        <NewMeetupForm onAddMeetup={AddMeetupHandler} />
      </section>
    </div>
  );
}
export default NewMeetups;
