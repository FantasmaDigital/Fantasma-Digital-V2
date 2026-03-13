import dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface EnvConfig {
    PORT: number;
    DB_HOST: string;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    DB_PORT: number;
    SMTP_HOST: string;
    SMTP_PORT: number;
    SMTP_USER: string;
    SMTP_PASS: string;
    SMTP_SECURE: boolean;
    CORS_ALLOW_ALL: boolean;
}

const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

export const env: EnvConfig = {
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
