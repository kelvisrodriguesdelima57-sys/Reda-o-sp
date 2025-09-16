const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 5000;

// DON'T DELETE THIS COMMENT - using javascript_gemini integration
// Initialize Gemini AI with API key from environment variable
// Prioritize GOOGLE_API_KEY as shown in server logs
const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

// Middleware to serve static files and parse JSON
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to generate essay using Gemini
app.post('/api/generate-essay', async (req, res) => {
    try {
        const { tema } = req.body;
        
        if (!tema) {
            return res.status(400).json({ error: 'Tema é obrigatório' });
        }

        if (!apiKey) {
            return res.status(500).json({ error: 'Chave da API Gemini não configurada' });
        }

        const prompt = `Escreva uma redação dissertativa no estilo ENEM sobre o tema: ${tema}`;

        // Get the generative model and generate content
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        
        if (!text) {
            throw new Error('Não foi possível gerar a redação');
        }

        res.json({ text });
    } catch (error) {
        console.error('Erro ao gerar redação:', error);
        res.status(500).json({ error: 'Erro interno do servidor ao gerar redação' });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});