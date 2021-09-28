import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");
  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(
      id,
      name,
      email,
      password,
      driver_license,
      "isAdmin",
      avatar,
      created_at
    ) VALUES (
      '${id}',
      'Atka',
      'atka@rentx.com',
      '${password}',
      '123456789',
      true,
      'https://avatars.githubusercontent.com/u/62728230?v=4',
      'now()'
    )`
  );
}

create().then(() => console.log("Admin created"));
