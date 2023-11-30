// script.js
new Vue({
    el: '#app',
    data: {
      nome: '',
      email: '',
      dataNascimento: '',
      cpf: '',
      formaPagamento: 'pix'
    },
    methods: {
      validarFormulario() {
        if (
          this.nome === '' ||
          this.email === '' ||
          this.dataNascimento === '' ||
          this.cpf === ''
        ) {
          alert('Por favor, preencha todos os campos.');
        } else {
          // Se os campos estiverem preenchidos, o formulário pode ser enviado
          // Aqui você pode adicionar lógica adicional para enviar o formulário
          console.log('Formulário submetido!', this.nome, this.email, this.data, this.cpf, this.selectedPayments);
        }
      }
    }
  });
  