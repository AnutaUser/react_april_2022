"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.missionsService = void 0;
const axios_1 = __importDefault(require("axios"));
exports.missionsService = {
    getAll: () => axios_1.default.get('https://api.spacexdata.com/v3/missions'),
    getById: (id) => axios_1.default.get('https://api.spacexdata.com/v3/missions')
};
//# sourceMappingURL=missions.service.js.map