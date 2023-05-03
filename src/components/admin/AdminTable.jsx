import { Entry, Users } from "./"
import { useFetchMarkers, useFetchUsers } from "../../hooks";
export const AdminTable = () => {

    const { markers } = useFetchMarkers('http://localhost:3000/api/v1/entries');
    const { users } = useFetchUsers('http://localhost:3000/api/v1/users')

    const relatedMarkers = markers.map((marker) => {

        const user = users.find((user) => user.id === marker.user);
        return {
            ...marker,
            user,
        };
    });

    return (

        <>
            
         <Entry markerMongo={relatedMarkers} />
                 

        </>
    );
}