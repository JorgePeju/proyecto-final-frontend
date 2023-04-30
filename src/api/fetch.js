


export const consultation = async (url, method, body = {}) => {
  let options = {};

  const data = { ...body };

  try {

    if (method === "POST" || method === "PUT") {
      
      options = {
        method: method,
        mode: 'cors',
        cache: 'force-cache',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      };
    }

    if (method === "DELETE") {
      options = { method };
    }

    const request = await fetch(url, options);

    if (request){

      return request.json();

    } else {

      throw new Error('Error al conectar con la api');
      
    }

  } catch (error) {
    throw new Error(`Error al conectar con la API: ${error.message}`);
  }
};

