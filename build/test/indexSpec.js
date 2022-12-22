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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoints responses', () => {
    describe('endpoint: /api', () => {
        it('gets /api', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api');
            expect(response.status).toBe(200);
        }));
    });
    describe('endpoint: /api/image', () => {
        it('gets /api/image?filename=fjord (valid args)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/image?filename=fjord');
            expect(response.status).toBe(200);
        }));
        it('gets /api/image?filename=fjord&width=200&height=200 (valid querys parameters)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/image?filename=fjord&width=200&height=200');
            expect(response.status).toBe(200);
        }));
        it('gets /api/image?filename=fjord&width=-200&height=200 (Invalid querys parameters)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/image?filename=fjord&width=200&height=-200');
            expect(response.status).toBe(200);
        }));
    });
    describe('endpoint: /api/thumb', () => {
        it('returns 404 for invalid endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/api/thumb');
            expect(response.status).toBe(404);
        }));
    });
});
