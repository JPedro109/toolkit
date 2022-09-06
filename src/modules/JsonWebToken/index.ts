import { Core } from "./Core/Core";
import { Adapter } from "./Adapter/Adapter";

const adapter = new Adapter();
export const jsonWebToken = new Core(adapter);