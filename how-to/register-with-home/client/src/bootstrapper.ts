import { fin } from "openfin-adapter/src/mock";
import { register, deregister } from "./home";

export async function init() {
  // you can kick off your bootstrapping process here where you may decide to prompt for authentication,
  // gather reference data etc before starting workspace and interacting with it.
  console.log("Initialising the bootstrapper");
  await register();
  const providerWindow = fin.Window.getCurrentSync();
  providerWindow.once("close-requested", async (event) => {
    await deregister();
    fin.Platform.getCurrentSync().quit();
  });
}
