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
exports.createRole = void 0;
const Role_1 = require("../database/models/Role");
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = req.body.roleName;
        if (!role) {
            return res.status(400).json({
                success: false,
                message: "Required: roleName",
            });
        }
        const newRole = yield Role_1.Role.create({ roleName: role }).save();
        res.status(201).json({
            success: true,
            message: "Role created",
            data: newRole,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to create role",
            error: error.message || error,
        });
    }
});
exports.createRole = createRole;
