import { CardsRouter } from "./routers/Cards";
import { CostRouter } from "./routers/Costs";
import { UserRouter } from "./routers/User";
import { UsersRouter } from "./routers/Users";

const ROUTES = [
  {
    path: "/cards",
    router: CardsRouter,
  },
  {
    path: "/costs",
    router: CostRouter,
  },
  {
    path: "/user",
    router: UserRouter,
  },
  {
    path: "/users",
    router: UsersRouter,
  },
];

export default ROUTES;
