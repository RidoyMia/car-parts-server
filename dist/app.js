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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_codes_1 = require("http-status-codes");
const bestServices_route_1 = __importDefault(require("./app/modules/bestServices/bestServices.route"));
const Blog_route_1 = __importDefault(require("./app/modules/Blog/Blog.route"));
const Expert_route_1 = __importDefault(require("./app/modules/Expert/Expert.route"));
const product_route_1 = __importDefault(require("./app/modules/product/product.route"));
const service_route_1 = __importDefault(require("./app/modules/services/service.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use('/api/v1/bestService', bestServices_route_1.default);
app.use('/api/v1/blog', Blog_route_1.default);
app.use('/api/v1/expert', Expert_route_1.default);
app.use('/api/v1/product', product_route_1.default);
app.use('/api/v1/service', service_route_1.default);
app.use('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_codes_1.StatusCodes.OK).send({
        result: 'app is running'
    });
}));
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
exports.default = app;
