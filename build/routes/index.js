"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_1 = __importDefault(require("./api/image"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Api index route');
});
router.use('/image', image_1.default);
exports.default = router;
