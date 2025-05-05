export const RandomPass = (): string => {
    const string = "0123456789";
    
    let myPass = "";
    for (let i = 0; i < 8; i++) {
        const myNo = Math.floor(Math.random() * string.length);
        myPass += string.charAt(myNo);
    }
    return myPass;
};
