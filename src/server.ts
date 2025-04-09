import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*", // Allow all origins for CORS
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
});

server.get("/", async (request, response) => {
    response.type("application/json").code(200);
    return { hello: "world" };
});

const teams = [
    { id: 1, name: "Scuderia Ferrari", drivers: ["Charles Leclerc", "Carlos Sainz"], base: "Maranello, Italy" },
    { id: 2, name: "McLaren F1 Team", drivers: ["Lando Norris", "Oscar Piastri"], base: "Woking, England" },
    { id: 3, name: "Aston Martin Aramco Cognizant F1 Team", drivers: ["Lance Stroll", "Fernando Alonso"], base: "Silverstone, England" },
    { id: 4, name: "Mercedes-AMG Petronas F1 Team", drivers: ["Lewis Hamilton", "George Russell"], base: "Brackley, England" },
    { id: 5, name: "Oracle Red Bull Racing", drivers: ["Sergio Pérez", "Max Verstappen"], base: "Milton Keynes, England" },
    { id: 6, name: "Alfa Romeo F1 Team Stake", drivers: ["Valtteri Bottas", "Zhou Guanyu"], base: "Hinwil, Switzerland" },
    { id: 7, name: "Haas F1 Team", drivers: ["Kevin Magnussen", "Nico Hülkenberg"], base: "Kannapolis, USA" },
    { id: 8, name: "BWT Alpine F1 Team", drivers: ["Pierre Gasly", "Esteban Ocon"], base: "Enstone, England" },
    { id: 9, name: "Williams Racing", drivers: ["Alexander Albon", "Logan Sargeant"], base: "Grove, England" },
    { id: 10, name: "Scuderia AlphaTauri", drivers: ["Yuki Tsunoda", "Daniel Ricciardo"], base: "Faenza, Italy" },
];

const drivers = [
    { id: 1, name: "Charles Leclerc", team: "Scuderia Ferrari" },
    { id: 2, name: "Carlos Sainz", team: "Scuderia Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren F1 Team" },
    { id: 4, name: "Oscar Piastri", team: "McLaren F1 Team" },
    { id: 5, name: "Lance Stroll", team: "Aston Martin Aramco Cognizant F1 Team" },
    { id: 6, name: "Fernando Alonso", team: "Aston Martin Aramco Cognizant F1 Team" },
    { id: 7, name: "Lewis Hamilton", team: "Mercedes-AMG Petronas F1 Team" },
    { id: 8, name: "George Russell", team: "Mercedes-AMG Petronas F1 Team" },
    { id: 9, name: "Sergio Pérez", team: "Oracle Red Bull Racing" },
    { id: 10, name: "Max Verstappen", team: "Oracle Red Bull Racing" },
    { id: 11, name: "Valtteri Bottas", team: "Alfa Romeo F1 Team Stake" },
    { id: 12, name: "Zhou Guanyu", team: "Alfa Romeo F1 Team Stake" },
    { id: 13, name: "Kevin Magnussen", team: "Haas F1 Team" },
    { id: 14, name: "Nico Hülkenberg", team: "Haas F1 Team" },
    { id: 15, name: "Pierre Gasly", team: "BWT Alpine F1 Team" },
    { id: 16, name: "Esteban Ocon", team: "BWT Alpine F1 Team" },
    { id: 17, name: "Alexander Albon", team: "Williams Racing" },
    { id: 18, name: "Logan Sargeant", team: "Williams Racing" },
    { id: 19, name: "Yuki Tsunoda", team: "Scuderia AlphaTauri" },
    { id: 20, name: "Daniel Ricciardo", team: "Scuderia AlphaTauri" },
];


server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

interface Params {
    id: number;
}

server.get<{ Params: Params }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id as unknown as string);
    const driver = drivers.find(driver => driver.id === id);
    if (!driver) {
        response.type("application/json").code(404);
        return { error: "Driver not found" };
    } else {
    response.type("application/json").code(200);
    return { driver };
    }
});

server.get<{ Params: Params }>("/teams/:id", async (request, response) => {
    const id = parseInt(request.params.id as unknown as string);
    const team = teams.find(team => team.id === id);
    if (!team) {
        response.type("application/json").code(404);
        return { error: "Team not found" };
    } else {
    response.type("application/json").code(200);
    return { team };
    }
});
    

server.listen({ port: 3333 }, () => {
    console.log("Server is running on http://localhost:3333");
    });