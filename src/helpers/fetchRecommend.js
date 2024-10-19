export const fetchRecommendedForYou = async()=>{
    const url = 'http://localhost/PhProblox/recommendedForYou.php';
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (e) {
        throw new Error(e);
    }
}