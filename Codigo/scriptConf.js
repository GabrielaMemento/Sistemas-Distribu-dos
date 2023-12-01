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
      // Extraindo os parâmetros da URL
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
  
      // Obtendo os valores dos parâmetros da URL
      this.nome = urlParams.get('nome');
      this.email = urlParams.get('email');
      this.dataNascimento = urlParams.get('dataNascimento');
      this.cpf = urlParams.get('cpf');
      this.formaPagamento = urlParams.get('formaPagamento');
  
      
      console.log(this.nome, this.email, this.dataNascimento, this.cpf, this.formaPagamento);
     
    }
  });
  
