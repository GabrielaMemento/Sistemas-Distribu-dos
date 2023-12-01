new Vue({
    el: '#app',
    data: {
      nome: '',
      email: '',
      dataNascimento: '',
      cpf: '',
      formaPagamento: ''
    },
    created() {
      // Extrair os parâmetros da URL
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
  
      // Obter os valores dos parâmetros da URL
      this.nome = urlParams.get('nome');
      this.email = urlParams.get('email');
      this.dataNascimento = urlParams.get('dataNascimento');
      this.cpf = urlParams.get('cpf');
      this.formaPagamento = urlParams.get('formaPagamento');
  
      // Exibir os dados na página de confirmação
      console.log(this.nome, this.email, this.dataNascimento, this.cpf, this.formaPagamento);
      // Faça o que for necessário com os dados na página de confirmação
    }
  });
  
