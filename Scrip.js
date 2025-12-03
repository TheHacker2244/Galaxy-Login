        lucide.createIcons();

        // Variables de estado
        let isLoginMode = true;
        const confirmPasswordGroup = document.getElementById('confirm-password-group');
        const submitButton = document.getElementById('submit-button');
        const formSubtitle = document.getElementById('form-subtitle');
        const toggleText = document.getElementById('toggle-text');
        const messageBox = document.getElementById('message-box');

        /**
         * Muestra un mensaje en la caja de estado.
         * @param {string} message - El mensaje a mostrar.
         * @param {string} type - 'success', 'error', o 'info'.
         */
        function showMessage(message, type = 'info') {
            messageBox.textContent = message;
            messageBox.classList.remove('hidden', 'bg-red-900/50', 'bg-green-900/50', 'bg-blue-900/50', 'text-red-300', 'text-green-300', 'text-blue-300');
            
            if (type === 'error') {
                messageBox.classList.add('bg-red-900/50', 'text-red-300');
            } else if (type === 'success') {
                messageBox.classList.add('bg-green-900/50', 'text-green-300');
            } else {
                messageBox.classList.add('bg-blue-900/50', 'text-blue-300');
            }
        }

        /**
         * Cambia entre el modo 'login' y 'register'.
         * @param {string} mode - 'login' o 'register'.
         */
        function toggleMode(mode) {
            if (mode === 'register') {
                isLoginMode = false;
                confirmPasswordGroup.classList.remove('hidden');
                confirmPasswordGroup.querySelector('#confirm-password').setAttribute('required', 'required');
                submitButton.textContent = 'Crear Cuenta Estelar';
                formSubtitle.textContent = 'Completa el formulario para ser un nuevo tripulante.';
                toggleText.innerHTML = '¿Ya tienes un pase de acceso? <button onclick="toggleMode(\'login\')" class="text-purple-400 hover:text-purple-300 font-semibold transition duration-200 focus:outline-none">Iniciar Sesión</button>';
                messageBox.classList.add('hidden');
            } else {
                isLoginMode = true;
                confirmPasswordGroup.classList.add('hidden');
                confirmPasswordGroup.querySelector('#confirm-password').removeAttribute('required');
                submitButton.textContent = 'Iniciar Sesión';
                formSubtitle.textContent = 'Introduce tus credenciales cósmicas para iniciar la misión.';
                toggleText.innerHTML = '¿Primera vez en esta galaxia? <button onclick="toggleMode(\'register\')" class="text-purple-400 hover:text-purple-300 font-semibold transition duration-200 focus:outline-none">¡Crea un nuevo tripulante!</button>';
                messageBox.classList.add('hidden');
            }
        }

        /**
         * Maneja el envío del formulario.
         * @param {Event} event - El evento de envío.
         */
        function handleFormSubmit(event) {
            event.preventDefault();
            
           
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            
            
            submitButton.disabled = true;
            submitButton.classList.add('opacity-50', 'cursor-not-allowed');
            showMessage('Estableciendo comunicación con la base de datos estelar...', 'info');

           
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-50', 'cursor-not-allowed');

                if (isLoginMode) {
                    
                    if (email === 'user@test.com' && password === 'password123') {
                        showMessage('¡Acceso exitoso! Bienvenido, comandante.', 'success');
                       
                    } else {
                        showMessage('Error de acceso: Credenciales estelares no válidas.', 'error');
                    }
                } else {
                    
                    if (password !== confirmPassword) {
                        showMessage('Error de registro: Las claves estelares no coinciden.', 'error');
                        return;
                    }
                    if (password.length < 8) {
                         showMessage('Error de registro: La clave estelar debe tener al menos 8 caracteres.', 'error');
                         return;
                    }

                    
                    showMessage(`Registro exitoso para ${email}. ¡Bienvenido a la tripulación!`, 'success');
                    
                    setTimeout(() => toggleMode('login'), 2000); 
                }

            }, 1500); 
        }
