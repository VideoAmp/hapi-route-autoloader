const getUsers = (request, reply) => reply("Users");
const getUser = ({ params }, reply) => reply(`User ${params.userId}`);

module.exports = [
    {
        method: "GET",
        path: "/users",
        handler: getUsers,
    },
    {
        method: "GET",
        path: "/users/{userId}",
        handler: getUser,
    },
];
