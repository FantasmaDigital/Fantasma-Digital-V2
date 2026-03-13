"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load .env file
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const getEnv = (key, defaultValue) => {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};
exports.env = {
    PORT: parseInt(getEnv('PORT', '6677'), 10),
    DB_HOST: getEnv('DB_HOST', 'localhost'),
    DB_USER: getEnv('DB_USER', 'root'),
    DB_PASS: getEnv('DB_PASS', ''), // Allow empty password
    DB_NAME: getEnv('DB_NAME', 'phpmyadmin'),
    DB_PORT: parseInt(getEnv('DB_PORT', '3306'), 10),
    SMTP_HOST: getEnv('SMTP_HOST', 'smtp.gmail.com'),
    SMTP_PORT: parseInt(getEnv('SMTP_PORT', '587'), 10),
    SMTP_USER: getEnv('SMTP_USER', ''),
    SMTP_PASS: getEnv('SMTP_PASS', ''),
    SMTP_SECURE: getEnv('SMTP_SECURE', 'false') === 'true',
    CORS_ALLOW_ALL: getEnv('CORS_ALLOW_ALL', 'false') === 'true',
};
