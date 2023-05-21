import { useState } from "react";
import Modal from "./modal/Modal";
import Backdrop from "./modal/Backdrop";

function EventCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log(props.title);
  }

  // function closeModalHandler() {
  //   setModalIsOpen(false);
  //   console.log('modal clicked');
  // }
  function closeModalHandler(){
    setModalIsOpen(false);
  }


  return (
    <div className="card">
      <div>{props.image}</div>
      <p>{props.altText}</p>
      <h2>{props.title}</h2>
      <p>{props.datetime}</p>
      <p>{props.address}</p>
      <p>{props.description}</p>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}
export default EventCard;
