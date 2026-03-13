import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import projectRoutes from './routes/project.routes';
import { env } from './config/env';
import { checkDatabaseConnection } from './config/database';
import { EmailService } from './services/EmailService';

const app = express();

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

app.use(cors({
    origin: (origin, callback) => {
        // Allow all if CORS_ALLOW_ALL is true
        if (env.CORS_ALLOW_ALL) return callback(null, true);

        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost:')) {
            callback(null, true);
        } else {
            console.warn(`[CORS REJECTED] Origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
}));

app.use(express.json());

// Database Check
checkDatabaseConnection();

// Email Service Check
const emailService = new EmailService();
emailService.verifyConnection().catch(err => console.error('⚠️ Email service not available:', err.message));

// Routes
app.use('/api/projects', projectRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start Server
app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
