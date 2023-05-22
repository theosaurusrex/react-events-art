import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if(favoritesContext.totalFavorites === 0 ){
    content = <p>You don't currently have any favorite events, add some from the 'All Meetups' page</p>
  }else{
    content = <MeetupList meetups={favoritesContext.favorites}/>
  }

  return <section>
    <h1>My Favorite Events</h1>
    {content}
  </section>;
}
export default Favorites;
