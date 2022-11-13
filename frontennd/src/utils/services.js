const BASEURL = "http://localhost:3000/";

// User Endpoints
export const fetchUsers = async () => {
    const response = await fetch(BASEURL + 'api/users');
    return await response.json();
}

export const createUsers = async (name) => {
    const response = await fetch(BASEURL + 'api/users', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "name": name
        }),
    });
    return await response.json();
}

// Hobbie Endpoints
export const fetchHobbies = async (id) => {
    const response = await fetch(BASEURL + 'api/hobbies/' + id);
    const result = await response.json();
    return result;
}

export const createHobby = async (title, passionType, year, userId) => {
    const response = await fetch(BASEURL + 'api/hobbies', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "title": title,
            "passionType": passionType,
            "year": parseInt(year),
            "user": userId
        }),
    });
    const result = await response.json();
    return result;
}

export const removeHobby = async (hid) => {
    const response = await fetch(BASEURL + 'api/hobbies/' + hid, {
        method: 'delete',
        headers: {
            'content-type': 'application/json',
        },
    });
    return true;
}