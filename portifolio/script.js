// Função para enviar formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtendo os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Verificando se os campos estão preenchidos
    if (name && email && message) {
      document.getElementById('form-message').textContent = 'Mensagem enviada com sucesso!';
      document.getElementById('contact-form').reset(); // Limpa o formulário
    } else {
      document.getElementById('form-message').textContent = 'Por favor, preencha todos os campos.';
    }
  });
  