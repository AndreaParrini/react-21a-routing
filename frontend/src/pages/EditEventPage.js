import { useParams } from "react-router-dom";


function EditEventPage(){
    
    const params = useParams();

    return <h1>Edit {params.eventId}</h1>
}

export default EditEventPage;