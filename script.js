
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>

    <!-- CSS Code -->
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f4f8;
            padding: 50px;
        }

        h1 {
            color: #2563eb;
        }

        button {
            background-color: #2563eb;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #1d4ed8;
        }

        #message {
            color: #15803d;
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <!-- HTML Code -->
    <h1>Welcome to My Website!</h1>
    <p>Click the button to see JavaScript in action.</p>

    <button onclick="showMessage()">Click Me</button>

    <p id="message"></p>

    <!-- JavaScript Code -->
    <script>
        function showMessage() {
            document.getElementById("message").textContent =
                "Hello World! JavaScript is working!";
        }
    </script>

</body>
</html>
