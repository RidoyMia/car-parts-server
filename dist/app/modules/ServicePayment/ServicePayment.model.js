"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePaymentModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const ServicePaymentScheema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    postCode: {
        type: Number,
        required: true
    }, phone: {
        type: Number,
        required: true
    }, price: {
        type: Number,
        required: true
    }, productId: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        ref: 'service',
        required: true
    }, transaction: {
        type: String,
        required: false
    }, paid: {
        type: Boolean,
        required: false
    }, bookingDate: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.ServicePaymentModel = mongoose_2.default.model('servicePayment', ServicePaymentScheema);
