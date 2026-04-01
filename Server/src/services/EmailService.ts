import nodemailer from 'nodemailer';
import { env } from '../config/env';
import { ProjectFormDTO } from '../dtos/ProjectForm.dto';

export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: env.SMTP_HOST,
            port: env.SMTP_PORT,
            secure: env.SMTP_SECURE, // true for 465, false for other ports
            auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS,
            },
        });
    }

    async verifyConnection(): Promise<void> {
        try {
            await this.transporter.verify();
            console.log('✅ SMTP Connection verified successfully');
        } catch (error) {
            console.error('❌ SMTP Connection failed:', error);
            throw error; // Let the server know it failed
        }
    }

    async sendProjectConfirmation(data: ProjectFormDTO): Promise<void> {
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

        // Send to Admin via Email
        await this.transporter.sendMail({
            from: `"Fantasma Digital System" <${env.SMTP_USER}>`,
            to: env.SMTP_USER,
            subject: `[PROJECT-REQ] ${projectTypes.toUpperCase()} - ${data.name}`,
            html: htmlContent,
        });

        // Send to Discord if configured
        if (env.DISCORD_WEBHOOK_URL) {
            await this.sendDiscordNotification(data);
        }

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

        await this.transporter.sendMail({
            from: `"Fantasma Digital" <${env.SMTP_USER}>`,
            to: data.email,
            subject: `[RECEIVED] Project Inquiry - Fantasma Digital`,
            html: clientHtmlContent,
        });
    }

    private async sendDiscordNotification(data: ProjectFormDTO): Promise<void> {
        const payload = {
            embeds: [
                {
                    title: "🚀 NUEVA SOLICITUD DE PROYECTO",
                    description: `Un nuevo cliente ha iniciado la secuencia de contacto.`,
                    color: 0xfab61e, // Hex to Int for #fab61e
                    fields: [
                        { name: "👤 Cliente", value: data.name, inline: true },
                        { name: "📧 Email", value: data.email, inline: true },
                        { name: "🏢 Empresa", value: data.company || "No especificada", inline: true },
                        { name: "🛠️ Servicios", value: data.project_type.join(', '), inline: false },
                        { name: "💰 Presupuesto", value: data.budget_range || "N/A", inline: true },
                        { name: "📝 Descripción", value: data.description || "Sin descripción" }
                    ],
                    footer: { text: "FANTASMA DIGITAL // HQ MONITOR" },
                    timestamp: new Date().toISOString()
                }
            ]
        };

        try {
            await fetch(env.DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            console.log('✅ Discord notification sent');
        } catch (error) {
            console.error('❌ Failed to send Discord notification:', error);
        }
    }
}
