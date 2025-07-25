import "./src/database/connection";
import app from "./src/app";
import { dotEnv } from "./src/config/config";

app.listen(dotEnv.port, () => {
  console.log(` Server is listening on port ${dotEnv.port}`);
});

export default app;
