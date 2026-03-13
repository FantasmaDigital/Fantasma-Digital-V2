"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const project_routes_1 = __importDefault(require("./routes/project.routes"));
const env_1 = require("./config/env");
const database_1 = require("./config/database");
const EmailService_1 = require("./services/EmailService");
const app = (0, express_1.default)();
// 1. Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Origin: ${req.headers.origin}`);
    next();
});
const allowedOrigins = [
    'https://fantasmadigital.dev',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:6677',
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow all if CORS_ALLOW_ALL is true
        if (env_1.env.CORS_ALLOW_ALL)
            return callback(null, true);
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost:')) {
            callback(null, true);
        }
        else {
            console.warn(`[CORS REJECTED] Origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
}));
app.use(express_1.default.json());
// Database Check
(0, database_1.checkDatabaseConnection)();
// Email Service Check
const emailService = new EmailService_1.EmailService();
emailService.verifyConnection().catch(err => console.error('⚠️ Email service not available:', err.message));
// Routes
app.use('/api/projects', project_routes_1.default);
// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// Start Server
app.listen(env_1.env.PORT, () => {
    console.log(`🚀 Server running on port ${env_1.env.PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
exports.default = app;
