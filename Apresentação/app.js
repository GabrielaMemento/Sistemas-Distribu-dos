new Vue({
    el: '#app', // Conecta esta instância Vue ao elemento com o ID "app"
    data: { //define os dados que serão utilizados pela instância Vue.
      userInput: '', // Armazena o valor digitado pelo usuário
      submitted: false // Controla a exibição da mensagem após o envio do formulário
    },
    methods: {
      // Função para lidar com o envio do formulário
      submitForm() {
        this.submitted = true; // Define submitted como true para exibir a mensagem
      }
    }
  });
  
