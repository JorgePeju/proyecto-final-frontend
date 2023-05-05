

export const useDeleteEntry = async (entry) => {

    console.log(entry)
  const method = 'POST';
  const id = entry.id
  const url = `http://localhost:3000/api/v1/entries/${id}`;
  try {
    const response = await consultation(url, method);
    
 
  } catch (error) {
   
}}
