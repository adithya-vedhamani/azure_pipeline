// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Function to generate a random password
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Serve the frontend directly from this file
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Generator 2.0</title>
            <style>
                body { font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
                .container { text-align: center; }
                #password { font-weight: bold; margin-top: 20px; }
                button { padding: 10px 20px; font-size: 16px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Password Generator 2.0</h1>
                <button onclick="generatePassword()">Generate Password</button>
                <div id="password"></div>
            </div>
            <script>
                function generatePassword() {
                    fetch('/generate-password')
                        .then(response => response.text())
                        .then(password => {
                            document.getElementById('password').innerText = password;
                        });
                }
            </script>
        </body>
        </html>
    `);
});

// Endpoint to generate and send a random password
app.get('/generate-password', (req, res) => {
    const password = generatePassword();
    res.send(password);
});

// Start the server
app.listen(80);
