import { DataSource } from "typeorm";
import { Wilder } from "./entity/Wilder";
import { Skill } from "./entity/Skill";
// import { entitySkill } from "./entity/Skill";

const dataSource = new DataSource({
	type: "sqlite",
	database: "./wildersdb.sqlite",
	synchronize: true,
	entities: [Wilder, Skill],
	logging: ["query", "error"],
});
export default dataSource;

// si j'utilise une image sur docker hub pour le server ici postgres
// const dataSource = new DataSource({
// 	type: "postgres",
//     host: "postgres",
//     port: 5432,
//     username: "postgres",
//     password: "eplace_in_production_please",
// 	database: "postgres",
// 	synchronize: true,
// 	entities: [Wilder, Skill],
// 	logging: ["query", "error"],
// });
// export default dataSource;
