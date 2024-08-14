export const parseArrayFromEnvironment = (val: string | undefined, defaultValue: any = []) => {
    try {
        return val ? JSON.parse(val) : defaultValue
    } catch (err) {
        return defaultValue
    }
}

export const parseNumberFromEnvironment = (val: string | undefined, defaultValue: number = 0) => {
    try{
        return val ? Number(val) : defaultValue;
    }catch(err){
        return defaultValue
    }
}