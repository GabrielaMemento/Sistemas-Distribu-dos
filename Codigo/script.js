new Vue({
  el: '#app',
  data: {
    nome: '',
    email: '',
    dataNascimento: '',
    cpf: '',
    formaPagamento: ''
  },
  methods: {
    validarFormulario() {
      if (
        this.nome === '' ||
        this.email === '' ||
        this.dataNascimento === '' ||
        this.cpf === '' ||
        this.formaPagamento === ''
      ) {
        alert('Por favor, preencha todos os campos.');
      } else {
        
        var url = `confirmacao.html?nome=${this.nome}&email=${this.email}&dataNascimento=${this.dataNascimento}&cpf=${this.cpf}&formaPagamento=${this.formaPagamento}`;

       
          // Redirecionamento para outra página após a submissão do formulário
          window.location.href = url //  URL da página

        
        console.log('Formulário submetido!', this.nome, this.email, this.data, this.cpf, this.selectedPayments);
      }
    }
  }
});

