export const fetchFriends = async()=>{
    const url = 'http://localhost/PhProblox/friends.php';
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (e) {
        throw new Error(e);
    }
}