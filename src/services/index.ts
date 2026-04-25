
const URL_SERVICE = import.meta.env.VITE_SERVICE_URL;

export const getAllItems = async () => {
    try {
        const response = await fetch(URL_SERVICE);
        const data = await response.json();
        return [data, null];
    } catch (error) {
        return [null, error]
    }
}

export const saveLead=()=>{
    
}