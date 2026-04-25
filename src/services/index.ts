
const URL_SERVICE = import.meta.env.VITE_SERVICE_URL;

const HEADER: Record<string, string> = {
    "Content-Type": "application/json",
};

export const getAllItems = async () => {
    try {
        const response = await fetch(`${URL_SERVICE}/items`,{
            headers: HEADER
        });
        const data = await response.json();
        return [data, null];
    } catch (error) {
        return [null, error]
    }
}

export const saveLead=()=>{
    
}