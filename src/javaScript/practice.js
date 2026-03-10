const BASE_URL = "https://jsonplaceholder.typicode.com";

// ✅ GET - Read data
const getUser = async () => {
  const res = await fetch(`${BASE_URL}/users/1`);
  const data = await res.json();
  console.log("GET:", data);
};

// ✅ POST - Create new data
const createUser = async () => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Ali Raza", age: 21, grade: "A" }),
  });
  const data = await res.json();
  console.log("POST:", data);
};

// ✅ PUT - Update existing data
const updateUser = async () => {
  const res = await fetch(`${BASE_URL}/users/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Ali Updated", age: 22 }),
  });
  const data = await res.json();
  console.log("PUT:", data);
};

// ✅ DELETE - Remove data
const deleteUser = async () => {
  const res = await fetch(`${BASE_URL}/users/1`, {
    method: "DELETE",
  });
  console.log("DELETE status:", res.status); // 200 = success
};

// Call them
getUser();
createUser();
updateUser();
deleteUser();