const users = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `User_${Math.random().toString(36).slice(-5)}`,
    email: `test${i}@example.com`
}));
console.log(JSON.stringify(users, null, 2));
