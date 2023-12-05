// Script da Pagina.html 
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
      } else if (!this.validarCPF(this.cpf)) {
        alert('Por favor, insira um CPF válido.');
      } else {
        //passando os campos por url 
        var url = `confirmacao.html?nome=${this.nome}&email=${this.email}&dataNascimento=${this.dataNascimento}&cpf=${this.cpf}&formaPagamento=${this.formaPagamento}`;

       
          // Redirecionamento para outra página após a submissão do formulário
          window.location.href = url 

        
        //console.log('Formulário submetido!', this.nome, this.email, this.data, this.cpf, this.selectedPayments);
      }
    },
    validarCPF(cpf) {
      // Expressão regular para validar CPF
      const cpfRegex = /^[0-9]{11}$/;

      // Verifica se o CPF possui 11 dígitos e atende à expressão regular
      return cpfRegex.test(cpf);
    }
  }
});