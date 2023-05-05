import { consultation } from "../api/fetch";
import { getUrl } from "../helpers";

/**
 * Elimina una entrada utilizando una consulta DELETE.
 *
 * @param {string} id - El ID de la entrada .
 * @param {string} entry - El método.
 * @param {Function} refresh - Función para actualizar los datos después de eliminar la entrada.
 */
export const useDeleteEntry = async (id, entry, refresh) => {

  const method = 'DELETE';
  const url = getUrl(entry, id);

  try {

    const request = await consultation(url, method);

    if (request.ok === true) {
      refresh();
    }

  } catch (error) {

    console.log('No se pudo eliminar')

  }
}
