# Fantasma Digital V2

Fantasma Digital is a modern software development and technology solutions agency. This repository contains the V2 of the company's platform, featuring a comprehensive suite of services, case studies (EngDossier), and a digital product catalog.

## Project Structure

This project is structured with separate frontend and backend environments:

- **/Client**: A React application built with Vite, TypeScript, and React Router. It includes interactive UI components, routing, pre-rendering for SEO, and elegant product displays.
- **/Server**: A Node.js backend built with Express and TypeScript. It provides a RESTful API, features database connectivity (MySQL), and handles services such as emailing and project inquiries.

### Tech Stack - Client (Frontend)
- **Framework**: React 19, Vite
- **Language**: TypeScript
- **Routing**: React Router DOM v7
- **Styling/UI**: Custom Styles & Lucide React for icons
- **Features**: Pre-rendering (Puppeteer), Helmet for SEO, Dynamic Product Catalogs, Interactive Forms.

### Tech Stack - Server (Backend)
- **Framework**: Node.js, Express
- **Language**: TypeScript
- **Database**: MySQL (via `mysql2`)
- **Validation**: Zod
- **Utilities**: Nodemailer for emails, Helmet & CORS for security

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MySQL Server

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Fantasma-Digital-V2
   ```

2. **Backend Setup:**
   ```bash
   cd Server
   npm install
   # Configure your .env file based on .env.example
   npm run dev
   ```

3. **Frontend Setup:**
   ```bash
   cd ../Client
   npm install
   # Configure your .env.local if required
   npm run dev
   ```

## Key Features
- **Solutions Portfolio**: Showcase of Fantasma Digital's software services.
- **Engineering Dossier**: Detailed case studies of past successful projects.
- **Product Catalog**: Advanced product browsing with dynamic filtering, sorting, and elegant image displays.
- **Project Inquiry**: Integrated contact forms powered by the backend API and NodeMailer.

## License
Copyright (c) 2024-2026 Fantasma Digital. All rights reserved. See [LICENSE](LICENSE) for details.
