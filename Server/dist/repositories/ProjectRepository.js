"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const database_1 = require("../config/database");
class ProjectRepository {
    constructor() {
        this.db = database_1.pool;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
      INSERT INTO project_forms (name, email, company, project_type, description, budget_range)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
            const values = [
                data.name,
                data.email,
                data.company || null,
                JSON.stringify(data.project_type),
                data.description,
                data.budget_range || null,
            ];
            const [result] = yield this.db.execute(query, values);
            return result.insertId;
        });
    }
}
exports.ProjectRepository = ProjectRepository;
