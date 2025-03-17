import classes from './EventItem.module.css';

import {Link} from 'react-router-dom';

const EVENTS = [
    {
      "id": "e1",
      "title": "A dummy event",
      "date": "2023-02-22",
      "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      "description": "Join this amazing event and connect with fellow developers."
    }
  ]

function EventItem({ eventId }) {

  const eventSelected = EVENTS.filter(event => event.id === eventId);

  const [event] = [...eventSelected];

  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
