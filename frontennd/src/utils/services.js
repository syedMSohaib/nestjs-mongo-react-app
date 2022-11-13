const BASEURL = "http://localhost:3000/";

export const fetchUsers = async () => {
    const response = await fetch(BASEURL + 'api/users');
    return await response.json();
}