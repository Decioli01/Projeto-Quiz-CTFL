let questions = [
    {
        //questão 1
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
        //questão 2
        question: 'Qual das seguintes declarações é um objetivo válido para os testes?',
        options: [
            'O teste deve começar o mais tarde possível para que o desenvolvimento tenha tempo suficiente para criar um bom produto',
            'Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas',
            'Para provar que todos os possíveis defeitos são identificados',
            'Para provar que qualquer defeito remanescente não causará nenhuma falha'
        ],
        answer: 1
    },
    {
        //questão 3
        question: 'Qual das seguintes declarações descreve corretamente a diferença entre teste e depuração?',
        options: [
            'Os testes identificam a fonte dos defeitos; a depuração analisa os defeitos e propõe atividades de prevenção',
            'Os testes dinâmicos mostram falhas causadas por defeitos; a depuração elimina os defeitos, que são a fonte das falhas',
            'Os testes não removem as falhas; mas a depuração remove os defeitos que causam as falhas',
            'Os testes dinâmicos previnem as causas das falhas; a depuração remove as falhas'
        ],
        answer: 1
    },
    {
        //questão 4
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
        //questão 5
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
        //questão 6
        question: 'De que forma os testes podem ser parte da Garantia de Qualidade?',
        options: [
            'Ela garante que os requisitos sejam suficientemente detalhados',
            'Os testes reduzem o risco de má qualidade do software',
            'Assegura que as normas da organização sejam seguidas',
            'Mede a qualidade do software em termos de número de casos de teste executados'
        ],
        answer: 1
    },
    {
        //questão 7
        question: 'Qual das seguintes atividades faz parte da atividade principal "análise de teste" no processo de teste?',
        options: [
            'Identificação de qualquer infraestrutura e ferramentas necessárias',
            'Criação de conjuntos de teste a partir de scripts de teste',
            'Análise das lições aprendidas para a melhoria do processo',
            'Avaliando a base de teste de testabilidade'
        ],
        answer: 3
    },
    {
        //questão 9
        question: 'Como os testes caixa-branca podem ser aplicados durante os testes de aceite?',
        options: [
            'Para verificar se grandes volumes de dados podem ser transferidos entre sistemas integrados',
            'Para verificar se todas as declarações de código e caminhos de decisão de código foram executadas',
            'Verificar se todos os fluxos do processo de trabalho foram cobertos',
            'Para cobrir todas as navegações da página web'
        ],
        answer: 2
    },
    {
        //questão 10
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
        //questão 11
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
        //questão 12
        question: 'Qual das seguintes definições e a MELHOR definição de um modelo de desenvolvimento incremental?',
        options: [
            'Definição de requisitos, projeto de software e testes são feitos em fases em cada uma parte do sistema que é adicionada',
            'Uma fase no processo de desenvolvimento deve começar quando a fase anterior estiver concluída',
            'Os testes são vistos como uma fase separada que ocorre após a conclusão do desenvolvimento',
            'Os testes são adicionados ao desenvolvimento como um incremento'
        ],
        answer: 0
    },
    {
        //questão 13
        question: 'Qual dos seguintes itens NAO deve ser um gatilho para testes de manutenção?',
        options: [
            'Decisão de testar a possibilidade de manutenção do software',
            'Decisão de testar o sistema após a migração para uma nova plataforma operacional',
            'Decisão de testar se os dados arquivados são possíveis de serem recuperados',
            'Decisão de testar após "hot fixes"'
        ],
        answer: 0
    },
    {
        //questão 14
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
        //questão 15
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
        //questão 16
        question: 'Qual dos tipos de revisão abaixo é a MELHOR opção para escolher quando a revisão deve seguir um processo formal baseado em regras e listas de verificação?',
        options: [
            'Revisão Informal',
            'Revisão Técnica',
            'Inspeção',
            'Passagem'
        ],
        answer: 2
    },
    {
        //questão 17
        question: 'Quais das seguintes afirmações sobre testes estáticos são as mais verdadeiras?',
        options: [
            'Os testes estáticos são uma forma barata de detectar e remover defeitos',
            'Os testes estáticos tornam os testes dinâmicos menos desafiadores ',
            'Os testes estáticos permitem encontrar problemas de tempo de execução no início do ciclo de vida',
            'Ao testar um sistema crítico de segurança, os testes estáticos tem menos valor porque os testes dinâmicos encontram melhor os defeitos'
        ],
        answer: 0
    },
    {
        //questão 19
        question: 'O que é teste baseado em checklist?',
        options: [
            'Uma técnica de teste na qual os testes são derivados com base no conhecimento do testador sobre falhas do passado, ou conhecimento geral de falhas',
            'Uma técnica de teste baseada em uma análise da especificação de um componente ou sistema',
            'Uma técnica de teste baseada na experiência em que o testador experiente usa uma lista de itens a serem anotados, verificados ou lembrados, ou um conjunto de regras ou critérios contra os quais um produto deve ser verificado',
            'Uma abordagem aos testes onde os testadores projetam e executam dinamicamente testes baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores'
        ],
        answer: 2
    },
    {
        //questão 20
        question: 'Qual das seguintes opções é classificada como uma técnica de teste caixa-preta?',
        options: [
            'Uma técnica baseada na análise da arquitetura',
            'Uma técnica que verifica se o objeto de teste está funcionando de acordo com o projeto detalhado',
            'Uma técnica baseada no conhecimento de falhas do passado, ou conhecimento geral de falhas',
            'Uma técnica baseada em requisitos formais'
        ],
        answer: 3
    },
    {
        //questão 22
        question: 'Qual das seguintes é a descrição da cobertura das declarações?',
        options: [
            'É uma métrica, que é a porcentagem de casos de teste que foram executados',
            'É uma métrica, que é a porcentagem de declarações no código fonte que foram executadas',
            'É uma métrica, que é o número de declarações no código fonte que foram executadas por casos de teste que são aprovados',
            'É uma métrica, que dá uma confirmação verdadeira/falsa se todas as declarações são cobertas ou não'
        ],
        answer: 1
    },
    {
        //questão 23
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
        //questão 24
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
        //questão 30
        question: 'Qual das seguintes declarções MELHOR descreve como as tarefas são divididas entre o gerente de testes e o testador?',
        options: [
            'O gerente de testes planeja as atividades de teste e escolhe os padrões a serem seguidos, enquanto o testador escolhe as ferramentas e estabelece as diretrizes de uso das ferramentas',
            'O gerente de testes planeja, coordena e controla as atividades de teste, enquanto o testador automatiza os testes',
            'O gerente de testes planeja, monitora e controla as atividades de teste, enquanto o testador projeta os testes e decide sobre a liberação do objeto de teste',
            'O gerente de testes planeja e organiza os testes e especifica os casos de teste, enquanto o testador executa os testes'
        ],
        answer: 1
    },
    {
        //questão 31
        question: 'Qual das seguintes métricas seria a mais útil para monitorar durante a execução do teste?',
        options: [
            'Porcentagem de casos de teste executados',
            'Número médio de testadores envolvidos na execução do teste',
            'Cobertura dos requisitos por código fonte',
            'Porcentagem de cãsos de teste já criados e revisados'
        ],
        answer: 0
    },
    {
        //questão 32
        question: 'Qual dos seguintes aspectos pode afetar e fazer parte do planejamento (inicial) do teste?',
        options: [
            'Limitações orçamentárias',
            'Diário de testes',
            'Taxa de falha',
            'Casos de uso'
        ],
        answer: 0
    },
    {
        //questão 33
        question: 'Qual das listas a seguir contém apenas os critérios típicos de saída dos testes?',
        options: [
            'Medidas de confiabilidade, cobertura do teste, cronograma e status sobre a correção de defeitos e riscos remanescentes',
            'Medidas de confiabilidade, cobertura de teste, grau de independência do testador e completude do produto',
            'Medidas de confiabilidade, cobertura de teste, custo do teste, disponibilidade do ãmbiente de teste, tempo de colocação no mercado e completude do produto',
            'Tempo para comercialização, defeitos restantes, qualificação do testador, disponibilidade de casos de uso testável, cobertura de teste e custo do teste'
        ],
        answer: 0
    },
    {
        //questão 34
        question: 'Qual dos itens a seguir NÃO está incluído em um relatório resumido de teste?',
        options: [
            'Definição de critérios de aprovação/reprovação e objetivos dos testes',
            'Desvios da abordagem de teste',
            'Medições do progresso real em relação aos critérios de saída',
            'Avaliação da qualidade do objeto de teste'
        ],
        answer: 0
    },
    {
        //questão 36
        question: 'Qual das seguintes é a característica de uma abordagem baseada em métricas para a estimativa de teste?',
        options: [
            'Orçamento que foi utilizado por um projeto de teste anterior semelhante',
            'Experiência geral coletada em entrevistas com gerentes de testes',
            'Estimativa de esforço para automação de testes acordada na equipe de teste',
            'Média dos cálculos coletados de especialistas empresariais'
        ],
        answer: 0
    },
    {
        //questão 39
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
        //questão 40
        question: 'Qual das seguintes ferramentas de teste é mais adequada para desenvolvedores do que para testadores?',
        options: [
            'Ferramentas de gerenciamento de requisitos',
            'Ferramentas de gerenciamento da configuração',
            'Ferramentas de gerenciamento de defeitos',
            'Ferramentas de teste de desempenho'
        ],
        answer: 2
    },
];