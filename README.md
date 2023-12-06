 # Simulação de Compra de Ingressos: Formulário de Envio de Informações
 
## Membros do grupo
- Gabriela Silva Memento
- Gustavo Viana Avelar Dutra
- Lucas Carvalho Ferreira

## Descrição do projeto
  O projeto "Simulação de Compra de Ingressos: Formulário de Envio de Informações" é um trabalho para a disciplina de Sistemas Distribuídos. 
Consiste em uma aplicação web simples que simula o processo de compra de ingressos por meio de um formulário que depois de enviado as informações são passadas para a página de confirmação utilizando Vue Js.
  A aplicação é desenvolvida utilizando HTML, CSS e Vue.js. O HTML é utilizado para estruturar as páginas. O CSS é utilizado para estilizar as páginas, garantindo uma experiência visualmente atraente e coerente em diferentes telas. O Vue.js é utilizado para criar a interatividade dinâmica do formulário, estabelecendo a lógica por trás da coleta e manipulação das informações inseridas pelo usuário.

## Tecnologias Utilizadas
- Vue.js
- HTML
- CSS
- Javascript
  
## Vue.js
Vue é um framework destinado à construção de interfaces de usuário. Esta estrutura se baseia nos elementos tradicionais da web, como HTML, CSS e JavaScript, e oferece um modelo de programação declarativo, centrado em componentes. Isso permite o desenvolvimento eficiente de interfaces de usuário, independentemente da sua complexidade, oferecendo uma maneira organizada, sendo muito utilizado para criar aplicações de página única (single page) e também para desenvolver vários tipos de interfaces, que necessitam de maior interação e experiência mais valorosa para o usuário.
Ele é construído em torno do conceito de componentes reutilizáveis. Significa que podemos criar um componente (como o formulário, por exemplo) e reutilizá-lo em várias partes do sistema.

  
## Arquitetura Utilizada
Este projeto apresenta uma aplicação frontend simples que coleta informações do usuário, valida o preenchimento dos campos e encaminha esses dados para outra página através da URL. A arquitetura mais apropriada seria a cliente-servidor, que é um exemplo de sistema distribuído que distribui as cargas e tarefas entre os fornecedores de um serviço e os requerentes, em que o lado cliente da aplicação faz as requisições e o servidor retorna uma resposta. O servidor é um host que pode executar mais de um serviço e compartilha recursos com o cliente. Os clientes solicitam funções ou conteúdo do servidor e aguardam as respostas. Algumas funcionalidades como troca de email, acesso à internet e conexão com banco de dados são construídos com base no modelo de cliente-servidor. Há vários tipos de modelo de cliente-servidor, a arquitetura foi dividida em várias camadas a fim de facilitar o processo de distribuição, tem-se desde o modelo de duas camadas e o mais utilizado atualmente, que é o modelo de três camadas que é inspirado no modelo de arquitetura de software Model-View-Controller(MVC). Alguns protocolos utilizados nessa arquitetura, são o TCP que é um protocolo de transporte orientado à conexão em que o cliente estabelece uma conexão com o servidor e ambos trocam mensagens, sendo a aplicação do cliente quem termina a sessão. Já o protocolo UDP não é orientado à conexão, nele o cliente constrói uma mensagem e a envia num pacote UDP para o servidor, que responde porém, sem garantia de entrega em uma conexão permanente com o cliente. Algumas vantagens dessa arquitera são: responsabilidades dividas entre vários computadores distribuídos, dados armazenados nos servidores garantem mais segurança, armazenamento de dados centralizado permite que a atualização deles seja feita de forma mais fácil, muitas tecnologias avançadas de cliente-servidor estão disponíveis que foram projetadas para garantir a segurança e a facilidade de uso, funciona com vários clientes diferentes. Mas essa arquitetura também tem suas desvantagens, como por exemplo, o servidor pode fica sobrecarregado, pois os clientes só podem solicitar serviços e não podem oferecê-los a outros clientes, com isso, quanto mais clientes, mais informações que vão demandar do sistema. Outra desvantagem é que o servidor pode ficar sobrecarregado caso receba mais solicitações simultâneas de clientes do que pode suportar. Como esse trabalho é apenas uma demonstração da parte do front-end, ou seja, do lado do cliente, não há uma conexão com um banco de dados, ficando somente o lado cliente da aplicação. Mas em um cenário real, teríamos os dois lados. Atualmente, a arquitetura de cliente-servidor é amplamente utilizada, sendo principalmente utilizada na web. 

## Como Rodar Esse Projeto
Há duas maneiras de rodar esse projeto
1 - NPM 
 Clone em sua máquina com o comando git clone + a url do repositório GitHub. Com isso, o projeto estará na sua máquina local, após isso, rode um npm install para instalar os pacotes do node e rode o comando npm run dev, será gerado um link que vai te direcionar para um navegador com a aplicação.
2 - VsCode + extensões
 Clone em sua máquina com o comando git clone + a url do repositório GitHub, se estiver usando o VsCode, instale a extensão Live Server. Após isso, aparecerá no canto inferior direito um botão "Go Live" que clicando nele você é direcionado ao navegador com a aplicação.

 ## Tutorial de vue.js 
 Passos para criar um formulário simples utilizando o Vue.js 

1- Fazer um formulário simples em HTML;<br />
2- Adicionar uma <div> com a tag com id=app;<br />
3- Dizer ao navegador como lidar com o código Vue adicionando um script com um link do vue e um para a página javaScript;<br />
4-  Criar a página javaScript com as instâncias do Vue;<br />
5- Criar uma instância Vue, conecte ela ao formulário através do id;<br />
6- Definir os dados que serão utilizados pela instância;<br />
7- Definir  os métodos que podem ser chamados pela instância;<br />


