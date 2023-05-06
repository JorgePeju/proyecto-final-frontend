import { consultation } from '../../api/fetch';

describe('consultation', () => {

  jest.setTimeout(10000);

  test('Se espera un booleano true al recibir los datos', async () => {

    const url = 'http://localhost:3000/api/v1/entries';
  
    const request = await consultation(url, 'GET');
  
    expect(request.data.length > 0).toBe(true);
  });
  
  test('Se espera un mensaje y un ok al crear entradas', async () => {

    const url = 'http://localhost:3000/api/v1/entries';
    const body = { key: 'value' };

    const request = await consultation(url, 'POST', body);

    expect(request).toHaveProperty('msg');
    expect(request).toHaveProperty('ok');
  });

  test('Se espera un mensaje y un ok editar entradas por ID', async () => {

    const url = 'http://localhost:3000/api/v1/entries';
    const body = { key: 'valueToUpdate' };
    const request = await consultation(url, 'POST', body);

    const id = request.id;
    const urlTest = `http://localhost:3000/api/v1/entries/${id}`;
    const bodyTest = { key: 'updatedValue' };
    const requestTest = await consultation(urlTest, 'PUT', bodyTest);

    expect(requestTest).toHaveProperty('msg');
    expect(requestTest).toHaveProperty('ok');
  });

  test('Se espera un mensaje y un ok usando DELETE', async () => {
 
    const url = 'http://localhost:3000/api/v1/entries';
    const body = { key: 'valueToDelete' };
    const request = await consultation(url, 'POST', body);
    
    const id = request.id;
    const urlTest = `http://localhost:3000/api/v1/entries/${id}`;
    const requestTest = await consultation(urlTest, 'DELETE');

    expect(requestTest).toHaveProperty('msg');
    expect(requestTest).toHaveProperty('ok');
  });
});
