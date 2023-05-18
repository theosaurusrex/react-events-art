import MainMenu from "./components/MainMenu";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <MainMenu/>
      <EventList />
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
