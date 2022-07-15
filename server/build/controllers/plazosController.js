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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PlazosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const plazos = yield database_1.default.query('SELECT * FROM plazos');
            res.json(plazos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const plazos = yield database_1.default.query('SELECT * FROM plazos WHERE id = ?', [id]);
            if (plazos.length > 0) {
                return res.json(plazos[0]);
            }
            res.status(404).json({ text: "El plazo no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO plazos set?', [req.body]);
            res.json({ message: 'Plazo guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM plazos WHERE id=?', [id]);
            res.json({ message: 'El Plazo fue eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE plazos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El plazo ha sido editado' });
        });
    }
}
const plazosController = new PlazosController();
exports.default = plazosController;
