"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plazosController_1 = __importDefault(require("../controllers/plazosController"));
class PlazosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', plazosController_1.default.list);
        this.router.get('/:id', plazosController_1.default.getOne);
        this.router.post('/', plazosController_1.default.create);
        this.router.put('/:id', plazosController_1.default.update);
        this.router.delete('/:id', plazosController_1.default.delete);
    }
}
const plazosRoutes = new PlazosRoutes();
exports.default = plazosRoutes.router;
