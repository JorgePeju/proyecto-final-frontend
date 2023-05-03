import { Entry, Users } from "./"

export const AdminTable = () => {

    return (

        <>
            <table>

                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Tipo</th>
                    <th>Usuario</th>
                    <th>Estado</th>
                    <th>Vista Detalle</th>
                    <th>Editar</th>
                    <th>Borrar</th>
                </tr>

                <tbody>
                    <Entry />
                    <Users />
                </tbody>
            </table>
        </>
    )
}
