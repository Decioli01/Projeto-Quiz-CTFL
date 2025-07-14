let questions = [
    {
        question: 'Qual das seguintes respostas descreve uma condição de teste?',
        options: [
            'Uma característica distinta de um componente ou sistema',
            'Um aspecto testável de um componente ou sistema identificado como base para os testes',
            'O grau em que um produto de software fornece funções que atendem as necessidades declaradas e implícitas quando o software e utilizado sob condições específicas',
            'Casos de teste projetados para executar combinações de condições e ações resultantes delas'
        ],
        answer: 1
    },
    {
        question: "Quais das seguintes afirmações descrevem um objetivo de teste válido?",
        options: [
            "Para provar que não há defeitos não corrigidos no sistema em teste",
            "Para provar que não haverá falhas após a implementação do sistema na produção",
            "Reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade",
            "Para verificar se não há combinações não testadas de entradas"
        ],
        answer: 2
    },
    {
        question: "Qual das opções a seguir mostra um exemplo que contribui para o sucesso das atividades de teste?",
        options: [
            "O envolvimento dos testadores durante várias atividades do ciclo de vida de desenvolvimento de software (SDLajudará a detectar defeitos nos produtos de trabalho",
            "Os testadores tentam não perturbar os desenvolvedores durante a codificação, para que eles escrevam um código melhor",
            "Os testadores que colaboram com os usuários finais ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes e o teste do sistema",
            "Os testadores certificados modelarão casos de teste muito melhores do que os testadores não certificados"
        ],
        answer: 0
    },
    {
        question: "Você foi designado como testador de uma equipe que está produzindo um novo sistema de forma incremental. Você notou que nenhuma alteração foi feita nos casos de teste de regressão existentes durante várias iterações e nenhum novo defeito de regressão foi identificado. Seu gerente está feliz, mas você não está. Qual princípio de teste explica seu ceticismo?",
        options: [
            "Os testes se desgastam",
            "Falácia da ausência de erros.",
            "Os defeitos se agrupam",
            "É impossível realizar testes exaustivos"
        ],
        answer: 0
    },
    {
        question: "Você trabalha em uma equipe que desenvolve um aplicativo móvel para pedidos de comida. Na iteração atual, a equipe decidiu implementar a funcionalidade de pagamento. Qual das atividades a seguir faz parte da análise de teste?",
        options: [
            "Estimativa de que o teste da integração com o serviço de pagamento levará 8 dias/homem",
            "Decidir que a equipe deve testar se é possível realizar o pagamento entre muitos usuários.",
            "Usar a análise de valor limite (BVpara derivar os dados de teste para os casos de teste que verificam o processamento correto do pagamento para o valor mínimo permitido a ser pago.",
            "Analisar a discrepância entre o resultado real e o resultado esperado após a execução de um caso de teste que verifica o processo de pagamento com cartão de crédito e relatar um defeito."
        ],
        answer: 1
    },
    {
        question: "Quais dos seguintes fatores (i-v) têm influência SIGNIFICATIVA no processo de teste? <br> i. O SDLC; <br>	ii. O número de defeitos detectados em projetos anteriores <br> iii. Os riscos identificados do produto; <br> iv. Novos requisitos regulatórios forçando; <br> v. O número de testadores certificados na organização;",
        options: [
            "i, ii têm influência significativa; iii, iv, v não têm",
            "i, iii, iv têm influência significativa; ii, v não têm",
            "ii, iv, v têm influência significativa; i, iii não têm",
            "iii, v têm influência significativa; i, ii, iv não têm"
        ],
        answer: 1
    },
    {
        question: "Quais das seguintes habilidades (i-v) são as MAIS importantes para um testador?<br> i. Ter conhecimento do domínio; <br> ii. Criação de uma visão do produto; <br> iii. Ser um bom membro da equipe; <br>	iv. Planejar e organizar o trabalho da equipe; <br>	v. Pensamento crítico;",
        options: [
            "ii e iv são importantes; i, iii e v não são",
            "i, iii e v são importantes; ii e iv não são",
            "i, ii e v são importantes; iii e iv não são",
            "iii e iv são importantes; i, ii e v não são"
        ],
        answer: 1
    },
    {
        question: "Como a abordagem de equipe inteira está presente nas interações entre os testadores e os representantes da empresa?",
        options: [
            "Os representantes do negócio decidem sobre as abordagens de automação de testes.",
            "Os testadores ajudam os representantes da empresa a definir a estratégia de teste",
            "Os representantes de negócio não participam da abordagem de equipe inteira.",
            "Os testadores ajudam os representantes de negócio a criar testes de aceite adequados"
        ],
        answer: 3
    },
    {
        question: "Considere a seguinte regra: 'para cada atividade do SDLC, há uma atividade de teste correspondente'. Em quais modelos de SDLC essa regra é válida?",
        options: [
            "Somente em modelos sequenciais",
            "Somente em modelos iterativos",
            "Somente em modelos iterativos e incrementais",
            "Em modelos de sequenciais, incrementais e iterativos"
        ],
        answer: 3
    },
    {
        question: "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado por testes de aceite (ATDD)?",
        options: [
            "No ATDD, os critérios de aceite geralmente são criados com base no formato dado/quando/então",
            "No ATDD, os casos de teste são criados principalmente no teste de componentes e são orientados para o código",
            "No ATDD, os testes são criados com base em critérios de aceite para orientar o desenvolvimento do software",
            "No ATDD, os testes são baseados no comportamento desejado do software, o que facilita a compreensão dos membros da equipe."
        ],
        answer: 2
    },
    {
        question: "Você trabalha como testador em um projeto de um aplicativo móvel para pedidos de comida para um de seus clientes. O cliente lhe enviou uma lista de requisitos. Um deles, com alta prioridade, diz: 'O pedido deve ser processado em menos de 10 segundos em 95% dos casos'. Você criou um conjunto de casos de teste em que foram feitos vários pedidos aleatórios, o tempo de processamento foi medido e os resultados do teste foram comparados com os requisitos. Que tipo de teste você realizou?",
        options: [
            "Funcional, porque os casos de teste abrangem os requisitos de negócio do usuário para o sistema",
            "Não funcionais, pois medem o desempenho do sistema.",
            "Funcional, porque os casos de teste interagem com a interface do usuário",
            "Estrutural, porque precisamos conhecer a estrutura interna do programa para medir o tempo de processamento de pedidos"
        ],
        answer: 1
    },
    {
        question: "Qual das opções a seguir NÃO é um exemplo da abordagem shift-left?",
        options: [
            "Revisar os requisitos do usuário antes que eles sejam formalmente aceitos pelos stakeholders",
            "Escrever um teste de componente antes que o código correspondente seja escrito",
            "Execução de um teste de eficiência de performance para um componente durante o teste do componente",
            "Escrever um script de teste antes de definir o processo de gerenciamento de configuração."
        ],
        answer: 3
    },
    {
        question: "Qual dos argumentos abaixo você usaria para convencer seu gerente a organizar retrospectivas no final de cada ciclo de lançamento?",
        options: [
            "As retrospectivas são muito populares hoje em dia e os clientes gostariam que as adicionássemos aos nossos processos.",
            "A organização de retrospectivas economizará dinheiro, pois os representantes dos usuários finais não fornecem feedback imediato sobre o produto.",
            "Os pontos fracos do processo, identificados durante a retrospectiva, podem ser analisados e servir como uma lista de tarefas para o programa de melhoria contínua do processo da organização.",
            "As retrospectivas adotam cinco valores, incluindo coragem e respeito, que são cruciais para manter o aprimoramento contínuo na organização"
        ],
        answer: 2
    },
    {
        question: "Qual das opções a seguir NÃO é um benefício dos testes estáticos?",
        options: [
            "Ter um gerenciamento de defeitos menos dispendioso devido à facilidade de detectar defeitos mais tarde no processo SDLC.",
            "A correção de defeitos encontrados durante o teste estático geralmente é muito mais barata do que a correção de defeitos encontrados durante o teste dinâmico",
            "Encontrar defeitos de codificação que poderiam não ter sido encontrados apenas com a realização de testes dinâmicos.",
            "Detecção de lacunas e inconsistências nos requisitos"
        ],
        answer: 0
    },
    {
        question: "Qual dos seguintes é um benefício do feedback antecipado e frequente?",
        options: [
            "Melhora o processo de teste para projetos futuros.",
            "Ele força os clientes a priorizarem seus requisitos com base nos riscos acordados",
            "Essa é a única maneira de medir a qualidade das mudanças",
            "Isso ajuda a evitar mal-entendidos sobre os requisitos"
        ],
        answer: 3
    },
    {
        question: "As revisões que estão sendo usadas em sua organização têm os seguintes atributos: <br> • Há o papel de um redator. <br> • O principal objetivo é avaliar a qualidade. <br> • A reunião é conduzida pelo autor do produto de trabalho. <br> • Há uma preparação individual. <br> • É produzido um relatório de revisão <br> Qual dos seguintes tipos de revisão é MAIS provável que esteja sendo usado?",
        options: [
            "Revisão informal.",
            "Walkthrough",
            "Revisão técnica",
            "Inspeção"
        ],
        answer: 1
    },
    {
        question: "Qual dessas afirmações NÃO é um fator que contribui para revisões bem-sucedidas?",
        options: [
            "Os participantes devem dedicar tempo suficiente para a análise",
            "Dividir grandes produtos de trabalho em pequenas partes para tornar o esforço necessário menos intenso.",
            "Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade com outros participantes",
            "As falhas encontradas devem ser reconhecidas, apreciadas e tratadas de forma objetiva"
        ],
        answer: 3
    },
    {
        question: "Qual das seguintes é uma característica das técnicas de teste baseadas em experiência?",
        options: [
            "Os casos de teste são criados com base em informações detalhadas do projeto.",
            "Os itens testados na seção de código da interface são usados para medir a cobertura",
            "As técnicas dependem muito do conhecimento do testador sobre o software e o domínio do negócio",
            "Os casos de teste são usados para identificar desvios dos requisitos."
        ],
        answer: 2
    },
    {
        question: "Seu conjunto de testes atingiu 100% de cobertura de instrução. Qual é a consequência desse fato?",
        options: [
            "Cada instrução no código que contém um defeito foi executada pelo menos uma vez.",
            "Qualquer conjunto de testes que contenha mais casos de teste do que o seu conjunto de testes também alcançará 100% de cobertura de instrução.",
            "Cada caminho no código foi executado pelo menos uma vez",
            "Cada combinação de valores de entrada foi testada pelo menos uma vez"
        ],
        answer: 0
    },
    {
        question: "Qual das opções a seguir NÃO é verdadeira para testes caixa-branca?",
        options: [
            "Durante o teste caixa-branca, toda a implementação do software é considerada",
            "As métricas de cobertura caixa-branca podem ajudar a identificar testes adicionais para aumentar a cobertura do código.",
            "As técnicas de teste caixa-branca podem ser usadas em testes estáticos.",
            "O teste caixa-branca pode ajudar a identificar lacunas na implementação dos requisitos"
        ],
        answer: 3
    },
    {
        question: "Qual das opções a seguir descreve MELHOR o conceito por trás da suposição de erros?",
        options: [
            "A suposição de erros envolve o uso de seu conhecimento e experiência de defeitos encontrados no passado e erros típicos cometidos por desenvolvedores.",
            "A suposição de erros envolve o uso de sua experiência pessoal de desenvolvimento e os erros que você cometeu como desenvolvedor.",
            "A suposição de erros exige que você imagine que é o usuário do objeto de teste e adivinhe os erros que o usuário poderia cometer ao interagir com ele.",
            "A suposição de erros exige que você duplique rapidamente a tarefa de desenvolvimento para identificar os tipos de erros que um desenvolvedor pode cometer."
        ],
        answer: 0
    },
    {
        question: "Em seu projeto, houve um atraso no lançamento de um aplicativo totalmente novo e a execução do teste começou tarde, mas você tem um conhecimento de domínio muito detalhado e boas habilidades analíticas. A lista completa de requisitos ainda não foi compartilhada com a equipe, mas a gerência está pedindo que alguns resultados de testes sejam apresentados. <br> Qual técnica de teste se encaixa MELHOR nessa situação?",
        options: [
            "Testes baseados em listas de verificação.",
            "Suposição de erros",
            "Testes exploratórios",
            "Teste de ramificação"
        ],
        answer: 2
    },
    {
        question: "Qual das opções a seguir descreve MELHOR a maneira como os critérios de aceite podem ser documentados?",
        options: [
            "Realizar retrospectivas para determinar as necessidades reais dos stakeholders em relação a uma determinada história de usuário",
            "Usar o formato dado/quando/então para descrever um exemplo de condição de teste relacionada a uma determinada história de usuário",
            "Usar a comunicação verbal para reduzir o risco de outras pessoas não entenderem os critérios de aceite.",
            "Documentar os riscos relacionados a uma determinada história de usuário em um plano de teste para facilitar o teste baseado em riscos de uma determinada história de usuário"
        ],
        answer: 1
    },
    {
        question: "Como os testadores agregam valor aos planejamentos de iteração e lançamento?",
        options: [
            "Os testadores determinam a prioridade das histórias de usuários a serem desenvolvidas.",
            "Os testadores se concentram apenas nos aspectos funcionais do sistema a ser testado.",
            "Os testadores participam da identificação de riscos e da avaliação de riscos das histórias de usuários.",
            "Os testadores garantem o lançamento de software de alta qualidade por meio de um projeto de teste antecipado durante o planejamento do lançamento."
        ],
        answer: 2
    },
    {
        question: "Qual ferramenta pode ser usada por uma equipe ágil para mostrar a quantidade de trabalho que foi concluída e a quantidade de trabalho total restante para uma determinada iteração?",
        options: [
            "Critérios de aceite",
            "Relatório de defeitos",
            "Relatório de conclusão do teste",
            "Gráfico de Burndown"
        ],
        answer: 3
    },
    {
        question: "Você precisa atualizar um dos scripts de teste automatizados para que esteja de acordo com um novo requisito. Qual processo indica que você deve criar uma nova versão do script de teste no repositório de testes?",
        options: [
            "Gerenciamento de Rastreabilidade",
            "Teste de Manutenção",
            "Gerenciamento de Configuração",
            "Engenharia de Requisitos"
        ],
        answer: 2
    },
    {
        question: "Qual atividade de teste é suportada por uma ferramenta de preparação de dados?",
        options: [
            "Monitoramento e controle de testes",
            "Análise e projeto de testes",
            "Implementação e execução de testes",
            "Conclusão do teste"
        ],
        answer: 2
    },
    {
        question: "Qual item identifica corretamente um risco potencial de realizar a automação de testes",
        options: [
            "Ele pode introduzir regressões desconhecidas na produção.",
            "Esforços suficientes para manter o material de teste podem não ser alocados adequadamente.",
            "As ferramentas de teste e o material de teste associado podem não ser suficientemente confiáveis.",
            "Pode reduzir o tempo alocado para testes manuais"
        ],
        answer: 1
    },
    {
        question: 'Qual das seguintes ferramentas de teste é mais adequada para desenvolvedores do que para testadores?',
        options: [
            'Ferramentas de gerenciamento de requisitos',
            'Ferramentas de gerenciamento da configuração',
            'Ferramentas de gerenciamento de defeitos',
            'Ferramentas de teste de desempenho'
        ],
        answer: 2
    },
    {
        question: 'Qual dos seguintes é o MAIS provável que seja um benefício das ferramentas de execução de testes?',
        options: [
            'É fácil criar testes de regressão',
            'É fácil manter o controle de versão dos ativos de teste',
            'É fácil projetar testes para testes de segurança',
            'É fácil executar testes de regressão'
        ],
        answer: 3
    },
    {
        question: 'Para qual das seguintes situações é adequado o teste exploratório?',
        options: [
            'Quando a pressão do tempo requer a aceleração da execução de testes já especificados',
            'Quando o sistema é desenvolvido de forma incremental, e não há carta de teste disponível',
            'Quando houver testadores disponíveis que tenham conhecimento suficiente de aplicações e tecnologias similares',
            'Quando já existe um conhecimento avançado do sistema, e é necessário fornecer provas de que ele deve ser testado intensivamente'
        ],
        answer: 2
    },
    {
        question: 'Qual declaração sobre a relação entre a cobertura de declarações e a cobertura de decisões é verdadeira?',
        options: [
            '100% de cobertura de decisão também garante 100% de cobertura de declaração',
            '100% de cobertura de declaração também garante 100% de cobertura de decisão',
            '50% de cobertura de decisão também garante 50% de cobertura de declaração',
            'A cobertura de decisão nunca pode chegar a 100%.'
        ],
        answer: 0
    },
    {
        question: 'Quais atividades são realizadas no âmbito do planejamento de uma revisão formal?',
        options: [
            'Coleta de métricas para a avaliação da eficácia da revisão',
            'Responder a quaisquer perguntas que os participantes possam ter',
            'Definição e verificação do cumprimento dos critérios de entrada para a revisão',
            'Avaliação dos resultados da revisão em relação aos critérios de saída.'
        ],
        answer: 2
    },
    {
        question: 'Quais das seguintes opções são pápeis em uma revisão formal?',
        options: [
            'Desenvolvedor, Moderador, Líder de revisão, Revisor, Testador',
            'Autor, Moderador, Gerente, Revisor, Desenvolvedor',
            'Autor, Gerente, Líder de revisão, Revisor, Designer',
            'Autor, Moderador, Líder de revisão, Revisor, Redator'
        ],
        answer: 3
    },
    {
        question: 'Qual das seguintes definições é a MELHOR definição de um modelo de desenvolvimento incremental?',
        options: [
            'Definição de requisitos, projeto de software e testes são feitos em fases em cada uma parte do sistema que é adicionada',
            'Uma fase no processo de desenvolvimento deve começar quando a fase anterior estiver concluída',
            'Os testes são vistos como uma fase separada que ocorre após a conclusão do desenvolvimento',
            'Os testes são adicionados ao desenvolvimento como um incremento'
        ],
        answer: 0
    },
    {
        question: 'Qual das seguintes opções é VERDADEIRA?',
        options: [
            'O objetivo do teste de regressão é verificar se a correção foi implementada com sucesso, enquanto o objetivo do teste de confirmação é confirmar que a correção não tem efeitos colaterais',
            'O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o sistema ainda está funcionando em um novo ambiente',
            'O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido',
            'O objetivo do teste de regressão é verificar se a nova funcionalidãde está funcionando, enquanto o objetivo do teste de confirmação e verificar se o defeito original foi corrigido'
        ],
        answer: 2
    },
    {
        question: 'Qual das seguintes declarações comparando testes de componentes e testes de sistemas é VERDADEIRA?',
        options: [
            'O teste de componentes verifica a funcionalidade de módulos de software, objetos de programa e classes que são testados separadamente, enquanto o teste de sistema verifica interfaces entre componentes e interações entre diferentes partes do sistema',
            'Os casos de teste para teste de componentes são geralmente derivados das especificações de componentes, especificações de projeto ou modelos de dados, enquanto os casos de teste para teste de sistemas são geralmente derivados das especificações de requisitos ou casos de uso',
            'O teste de componentes concentra-se apenas nas características funcionais, enquanto o teste de sistemas concentra-se nas características funcionais e não-funcionais',
            'Os testes de componentes são de responsabilidade dos testadores, enquanto os testes de sistemas são tipicamente de responsabilidade dos usuários'
        ],
        answer: 1
    },
    {
        question: 'O Sr. Test tem testado aplicações de software em dispositivos móveis por um período de 5 anos. Ele tem uma grande experiência em testar aplicações móveis e alcança os melhores resultados em um tempo mais curto do que outros. Durante vários meses, o Sr. Test não modificou os casos de estes automatizados existentes e não criou casos de testes. Isto leva a que cada vez menos defeitos sejam encontrãdos através da execução dos testes. Que princípio de teste o Sr. Test não observou?',
        options: [
            'Os testes dependem do ambiente',
            'Não é possível realizar testes exaustivos',
            'A repetição dos mesmos testes não encontrará novos defeitos',
            'Defeitos agrupados'
        ],
        answer: 2
    },
    {
        question: 'Qual das declarções abaixo descreve a situação mais comum para uma falha descoberta durante os testes ou na produção?',
        options: [
            'O produto falhou quando o usuário selecionou uma opção em uma caixa de diálogo',
            'A versão errada de um arquivo de código fonte compilado foi incluída na compilação',
            'O algoritmo de computação utilizou as variáveis de entrada erradas',
            'O desenvolvedor interpretou erroneamente a exigência do algoritmo'
        ],
        answer: 0
    },
    {
        question: 'Qual das seguintes declarações descreve corretamente a diferença entre teste e depuração?',
        options: [
            'Os testes identificam a fonte dos defeitos; a depuração analisa os defeitos e propõe atividades de prevenção',
            'Os testes dinâmicos mostram falhas causadas por defeitos; a depuração elimina os defeitos, que são a fonte das falhas',
            'Os testes não removem as falhas; mas a depuração remove os defeitos que causam as falhas',
            'Os testes dinâmicos previnem as causas das falhas; a depuração remove as falhas'
        ],
        answer: 1
    },
];