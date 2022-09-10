import { Adapter } from "./Adapter/Adapter";
import { Core } from "./Core/Core";

const adapter = new Adapter();
export const password = new Core(adapter);