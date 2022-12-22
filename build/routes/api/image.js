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
const express_1 = require("express");
const util_1 = require("../../util");
const image = (0, express_1.Router)();
image.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.query.filename) {
            return res.send('No image to process');
        }
        if (!(yield (0, util_1.imageIsAvaliable)(req.query.filename))) {
            return res.send('Image not available');
        }
        const filePath = (0, util_1.resolvePath)(req.query);
        const image = yield (0, util_1.checkImage)(filePath);
        if (image) {
            return res.status(200).sendFile(filePath);
        }
        else {
            const thumb = yield (0, util_1.createThumb)(req.query);
            if (!(yield (0, util_1.checkImage)(thumb))) {
                return res.send('Thumb could not be created');
            }
            return res.status(200).sendFile(thumb);
        }
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = image;
