const getRouteStatus = (request, reply) => reply("OK");

const healthCheck = ({ pre }, reply) => reply(pre.routeStatus);

module.exports = {
    method: "GET",
    path: "/",
    handler: healthCheck,
    config: {
        pre: [{ method: getRouteStatus, assign: "routeStatus" }],
    },
};
