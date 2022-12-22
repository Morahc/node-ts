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
exports.resolvePath = exports.createThumb = exports.checkImage = exports.imageIsAvaliable = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fullPath = path_1.default.resolve(__dirname, '../../assets/full');
const thumbPath = path_1.default.resolve(__dirname, '../../assets/thumb');
const imageIsAvaliable = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.access(path_1.default.resolve(fullPath, `${filename}.jpg`));
        return true;
    }
    catch (err) {
        console.log(`Image of ${filename} doesn't exist`);
        return false;
    }
});
exports.imageIsAvaliable = imageIsAvaliable;
const checkImage = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.access(file);
        return true;
    }
    catch (err) {
        console.log(`Image of ${file} doesn't exist`);
        return false;
    }
});
exports.checkImage = checkImage;
const createThumb = ({ filename, width, height, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thumb = path_1.default.resolve(thumbPath, `${filename}-${width}x${height}.jpg`);
        console.log(`Creating thumb with path: ${thumb}`);
        yield (0, sharp_1.default)(path_1.default.resolve(fullPath, `${filename}.jpg`))
            .resize(Number(width), Number(height))
            .toFile(thumb);
        return thumb;
    }
    catch (error) {
        return 'Thumb not created';
    }
});
exports.createThumb = createThumb;
const resolvePath = ({ filename, width, height }) => {
    const filePath = width && height
        ? path_1.default.resolve(thumbPath, `${filename}-${width}x${height}.jpg`)
        : path_1.default.resolve(fullPath, `${filename}.jpg`);
    return filePath;
};
exports.resolvePath = resolvePath;
