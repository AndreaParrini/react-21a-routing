import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  /* if(data.isError){
    return <p>{data.message}</p>
  }
 */
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: "Could not fetch events."}
    throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {
      status: 500
    })
   //throw json({message: 'Could not fetch events.'}, {status:500}) se si usa l'helper fornito da react router json() -> solo con versioni precedenti alla 7, ora ho installato la 7.30 e quindi non funziona
  } else {
    return response;
  }
}