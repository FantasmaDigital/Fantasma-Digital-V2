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
exports.EmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = require("../config/env");
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: env_1.env.SMTP_HOST,
            port: env_1.env.SMTP_PORT,
            secure: env_1.env.SMTP_SECURE, // true for 465, false for other ports
            auth: {
                user: env_1.env.SMTP_USER,
                pass: env_1.env.SMTP_PASS,
            },
        });
    }
    verifyConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.transporter.verify();
                console.log('✅ SMTP Connection verified successfully');
            }
            catch (error) {
                console.error('❌ SMTP Connection failed:', error);
                throw error; // Let the server know it failed
            }
        });
    }
    sendProjectConfirmation(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectTypes = data.project_type.join(', ');
            const htmlContent = `
      <div style="font-family: 'Courier New', monospace; background-color: #0c0c0c; color: #e5e5e5; padding: 20px;">
        <h1 style="color: #fab16e;">[ NEW PROJECT INITIATED ]</h1>
        <p>A new project request has been logged in the system.</p>
        <hr style="border: 1px solid #333;" />
        <p><strong>CLIENT:</strong> ${data.name} (${data.email})</p>
        <p><strong>COMPANY:</strong> ${data.company || 'N/A'}</p>
        <p><strong>TYPE:</strong> ${projectTypes}</p>
        <p><strong>BUDGET:</strong> ${data.budget_range || 'N/A'}</p>
        <br />
        <p><strong>DESCRIPTION:</strong></p>
        <div style="background-color: #1a1a1a; padding: 15px; border-left: 4px solid #fab16e;">
          ${data.description || 'No description provided.'}
        </div>
        <br />
        <p style="font-size: 10px; color: #666;">FANTASMA DIGITAL // AUTOMATED TRANSMISSION</p>
      </div>
    `;
            // Send to Admin
            yield this.transporter.sendMail({
                from: `"Fantasma Digital System" <${env_1.env.SMTP_USER}>`,
                to: env_1.env.SMTP_USER,
                subject: `[PROJECT-REQ] ${projectTypes.toUpperCase()} - ${data.name}`,
                html: htmlContent,
            });
            // Send to Client (Auto-reply)
            const clientHtmlContent = `
      <div style="font-family: 'Courier New', monospace; background-color: #0c0c0c; color: #e5e5e5; padding: 20px;">
        <h1 style="color: #fab16e;">[ REQUEST RECEIVED ]</h1>
        <p>Greetings ${data.name},</p>
        <p>We have received your project inquiry. Our architects will analyze your requirements and establish contact shortly.</p>
        <hr style="border: 1px solid #333;" />
        <p><strong>PROJECT ID:</strong> ${projectTypes.toUpperCase()}</p>
        <p><strong>STATUS:</strong> PENDING_REVIEW</p>
        <br />
        <p style="font-size: 10px; color: #666;">FANTASMA DIGITAL // AUTOMATED TRANSMISSION</p>
      </div>
    `;
            yield this.transporter.sendMail({
                from: `"Fantasma Digital" <${env_1.env.SMTP_USER}>`,
                to: data.email,
                subject: `[RECEIVED] Project Inquiry - Fantasma Digital`,
                html: clientHtmlContent,
            });
        });
    }
}
exports.EmailService = EmailService;
