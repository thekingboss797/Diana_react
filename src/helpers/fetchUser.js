export const fetchUser = async()=>{
    const url = 'http://localhost/PhProblox/user.php';
    try {
        const res = await fetch(url);
        
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}