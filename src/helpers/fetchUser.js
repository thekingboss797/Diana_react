export const fetchUser = async(body)=>{
    const url = 'http://localhost/PhProblox/login.php';
    try {
        const res = await fetch(url,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        });
        
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}