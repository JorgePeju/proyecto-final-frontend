export const getUrl = (entry, id) => {

    let url = ''
 
    if(!id) {
       url = ` ${import.meta.env.VITE_URL_BASE_API}/${entry}`
       return url
    } else {
        url = `${import.meta.env.VITE_URL_BASE_API}/${entry}/${id}`
        return url
    }
    
    

}