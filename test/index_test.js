const _ = require("lodash");
const Hapi = require("hapi");
const HapiRouteAutoloader = require("../index")(`${__dirname}/fixtures/controllers`);

describe("Hapi Route Autoloader Plugin", () => {
    it("initializes routes in given directory", function* () {
        const server = new Hapi.Server({ debug: false });
        server.connection({
            port: 3009,
            routes: { cors: true },
        });
        yield server.register(HapiRouteAutoloader);

        const [{ table: routes }] = server.table();
        expect(routes).to.have.lengthOf(3);

        const routePaths = _.map(routes, "path");
        expect(routePaths).to.containSubset([
            "/",
            "/users",
            "/users/{userId}",
        ]);
    });
});
