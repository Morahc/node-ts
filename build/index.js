"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('Main index route');
});
app.listen(PORT, () => {
    console.log('Server running');
});
exports.default = app;
