export const fetchFriends = async(id)=>{
    const url = `http://localhost/PhProblox/friends.php?id=${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (e) {
        throw new Error(e);
    }
}