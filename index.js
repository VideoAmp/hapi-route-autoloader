const _ = require("lodash");
const traverse = require("traverse");
const requireAll = require("require-all");

const packageAttributes = require("./package.json");

const transformRoutes = routes => traverse(routes)
    .reduce((apiRoutes, routeDefinition) => {
        const isRoute = _.has(routeDefinition, "method") && _.has(routeDefinition, "path");
        if (isRoute) {
            apiRoutes.push(routeDefinition);
        }
        return apiRoutes;
    }, []);

const setUpRoutes = directory =>
    (server, options, next) => {
        const routes = requireAll(directory);
        server.route(transformRoutes(routes));
        next();
    };

module.exports = directory => ({
    register: _.merge(
        setUpRoutes(directory),
        {
            attributes: {
                pkg: packageAttributes,
            },
        }
    ),
});
