function EventCard(props) {
    function deleteHandler(){
        console.log(props.title)

    }
  return (
    <div className="card">
      <image>{props.image}</image>  
      <alt>{props.altText}</alt>
      <h2>{props.title}</h2>
      <p>{props.datetime}</p>
      <p>{props.address}</p>
      <p>{props.description}</p>
      <div className='actions'>
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}
export default EventCard;
