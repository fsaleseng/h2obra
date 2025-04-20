const waterFootprintData = [
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Concreto para sapatas",
      descricao: "Água incorporada na produção e cura",
      unidade: "m³",
      consumoPorUnidade: 180
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Concreto para baldrames",
      descricao: "Água incorporada na produção e cura",
      unidade: "m³",
      consumoPorUnidade: 180
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Concreto para radiers",
      descricao: "Água incorporada na produção e cura",
      unidade: "m³",
      consumoPorUnidade: 180
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Concreto para estacas",
      descricao: "Água incorporada na produção e cura",
      unidade: "m³",
      consumoPorUnidade: 180
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Aço para armadura de fundações",
      descricao: "Água virtual (produção siderúrgica)",
      unidade: "kg",
      consumoPorUnidade: 5.5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Formas de madeira para sapatas",
      descricao: "Água virtual (produção da madeira)",
      unidade: "m²",
      consumoPorUnidade: 20
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Tubos para estacas pré-moldadas",
      descricao: "Água virtual (produção industrial do tubo)",
      unidade: "m",
      consumoPorUnidade: 30
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Blocos de fundação",
      descricao: "Água incorporada na produção",
      unidade: "un",
      consumoPorUnidade: 2.5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Estacas metálicas",
      descricao: "Água virtual (produção siderúrgica)",
      unidade: "kg",
      consumoPorUnidade: 5.5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Estacas de madeira",
      descricao: "Água virtual (cultivo e corte)",
      unidade: "m",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Geotêxteis",
      descricao: "Água virtual (produção têxtil)",
      unidade: "m²",
      consumoPorUnidade: 12
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Brita para lastro",
      descricao: "Lavagem e britagem",
      unidade: "m³",
      consumoPorUnidade: 20
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Materiais",
      item: "Areia para regularização",
      descricao: "Lavagem e peneiramento",
      unidade: "m³",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Sapatas isoladas",
      descricao: "Consumo direto (escavação, concretagem, limpeza, cura)",
      unidade: "m²",
      consumoPorUnidade: 60
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Sapatas corridas",
      descricao: "Consumo direto (escavação, concretagem, limpeza, cura)",
      unidade: "m²",
      consumoPorUnidade: 65
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Baldrames",
      descricao: "Consumo direto (escavação, concretagem, limpeza, cura)",
      unidade: "m²",
      consumoPorUnidade: 70
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Radiers",
      descricao: "Consumo direto (grande volume de concreto e cura)",
      unidade: "m²",
      consumoPorUnidade: 90
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas brocas",
      descricao: "Consumo direto (perfuração, concretagem, limpeza)",
      unidade: "m",
      consumoPorUnidade: 50
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas hélice contínua",
      descricao: "Consumo direto (perfuração, bombeamento, concretagem)",
      unidade: "m",
      consumoPorUnidade: 70
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas Strauss",
      descricao: "Consumo direto (perfuração manual, concretagem, lavagem)",
      unidade: "m",
      consumoPorUnidade: 55
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas raiz",
      descricao: "Consumo direto (injeção de calda, lavagem de perfuração)",
      unidade: "m",
      consumoPorUnidade: 75
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas pré-moldadas",
      descricao: "Consumo direto (transporte, cravação e concretagem)",
      unidade: "m",
      consumoPorUnidade: 60
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Tubulões",
      descricao: "Consumo direto (escavação manual, concretagem, limpeza)",
      unidade: "m",
      consumoPorUnidade: 80
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas metálicas",
      descricao: "Consumo direto (cravação, corte, limpeza e concretagem)",
      unidade: "m",
      consumoPorUnidade: 65
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Estacas de madeira",
      descricao: "Consumo direto (implantação e limpeza)",
      unidade: "m",
      consumoPorUnidade: 40
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Fundações profundas",
      descricao: "Consumo direto (perfuração e concretagem de grande porte)",
      unidade: "m",
      consumoPorUnidade: 70
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Tipos de Fundação",
      item: "Fundações rasas",
      descricao: "Consumo direto (escavação e concretagem rasa)",
      unidade: "m²",
      consumoPorUnidade: 50
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Escavação manual",
      descricao: "Consumo direto (umedecimento do solo, poeira)",
      unidade: "m³ de solo",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Escavação mecânica",
      descricao: "Consumo direto (umedecimento do solo, controle de poeira)",
      unidade: "m³ de solo",
      consumoPorUnidade: 8
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Escavação úmida",
      descricao: "Consumo direto (uso intenso de água para escavação)",
      unidade: "m³ de solo",
      consumoPorUnidade: 40
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Compactação do solo",
      descricao: "Consumo direto (aspersão de água para compactar solo)",
      unidade: "m²",
      consumoPorUnidade: 20
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Regularização do terreno",
      descricao: "Consumo direto (umedecimento para nivelamento)",
      unidade: "m²",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Lançamento de concreto",
      descricao: "Consumo direto (lavagem de formas, mistura, vibração)",
      unidade: "m³ de concreto",
      consumoPorUnidade: 30
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Cura de elementos de fundação",
      descricao: "Consumo direto (aspersão diária durante a cura)",
      unidade: "m²",
      consumoPorUnidade: 15
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Armadura de sapatas",
      descricao: "Indireto (lavagem e montagem com argamassa ou graute)",
      unidade: "kg de aço",
      consumoPorUnidade: 0.2
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Formas para sapatas",
      descricao: "Indireto (umedecimento, limpeza das formas)",
      unidade: "m²",
      consumoPorUnidade: 5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Perfuração de estacas",
      descricao: "Consumo direto (lavagem da perfuratriz, fluido)",
      unidade: "m",
      consumoPorUnidade: 25
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Injeção de concreto em estacas",
      descricao: "Consumo direto (lavagem da estaca, vibração)",
      unidade: "m",
      consumoPorUnidade: 30
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Prova de carga em estacas",
      descricao: "Consumo direto (montagem hidráulica e limpeza)",
      unidade: "por teste",
      consumoPorUnidade: 200
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Processos construtivos",
      item: "Ensaios de penetração (SPT)",
      descricao: "Consumo técnico (lavagem de amostras, fluido de perfuração)",
      unidade: "por ensaio",
      consumoPorUnidade: 100
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Retroescavadeiras",
      descricao: "Consumo indireto (resfriamento e lavagem)",
      unidade: "hora de uso",
      consumoPorUnidade: 5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Marteletes hidráulicos",
      descricao: "Consumo indireto (resfriamento e lavagem)",
      unidade: "hora de uso",
      consumoPorUnidade: 3
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Perfuratrizes",
      descricao: "Consumo indireto (fluidos e lavagem)",
      unidade: "hora de uso",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Bombas de água",
      descricao: "Consumo direto (bombeamento e limpeza)",
      unidade: "hora de uso",
      consumoPorUnidade: 50
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Vibradores de concreto",
      descricao: "Consumo indireto (lavagem após uso)",
      unidade: "hora de uso",
      consumoPorUnidade: 5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Betoneiras",
      descricao: "Consumo indireto (lavagem da cuba e pás)",
      unidade: "m³ de concreto",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Compactadores de solo",
      descricao: "Consumo direto (aspersão de água para compactação)",
      unidade: "hora de uso",
      consumoPorUnidade: 20
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Guindastes para estacas",
      descricao: "Consumo indireto (lavagem e operação hidráulica)",
      unidade: "hora de uso",
      consumoPorUnidade: 8
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Caminhões basculantes",
      descricao: "Consumo indireto (lavagem de carroceria)",
      unidade: "viagem",
      consumoPorUnidade: 30
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Bomba de concreto",
      descricao: "Consumo direto (limpeza e lavagem de mangueiras)",
      unidade: "m³ de concreto bombeado",
      consumoPorUnidade: 15
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Equipamentos",
      item: "Geradores",
      descricao: "Consumo indireto (resfriamento, se movido a diesel)",
      unidade: "hora de uso",
      consumoPorUnidade: 4
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Rebaixamento de lençol freático",
      descricao: "Consumo direto (bombeamento contínuo)",
      unidade: "dia de operação",
      consumoPorUnidade: 500
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Contenção de taludes",
      descricao: "Consumo direto (aspersão para estabilidade)",
      unidade: "m² de talude",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Impermeabilização de fundações",
      descricao: "Consumo direto (aplicação com água + limpeza)",
      unidade: "m²",
      consumoPorUnidade: 8
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Drenagem do terreno",
      descricao: "Consumo direto (escavação e assentamento)",
      unidade: "m² de terreno",
      consumoPorUnidade: 6
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Terraplenagem",
      descricao: "Consumo direto (compactação com umedecimento)",
      unidade: "m³ de solo",
      consumoPorUnidade: 10
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Muro de arrimo",
      descricao: "Consumo direto (cura e limpeza)",
      unidade: "m²",
      consumoPorUnidade: 5
    },
    {
      categoria: "Estrutura",
      subcategoria: "Fundações",
      tipo: "Serviços especiais",
      item: "Reforço de solo",
      descricao: "Consumo direto (injeções, misturas com água)",
      unidade: "m²",
      consumoPorUnidade: 12
    },
    {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Pilares",
        item: "Concreto armado",
        descricao: "Consumo indireto (mistura para concreto)",
        unidade: "m³ de concreto",
        consumoPorUnidade: 170
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Pilares",
        item: "Aço para armadura",
        descricao: "Consumo indireto (lavagem de aço)",
        unidade: "kg de aço",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Pilares",
        item: "Fôrmas de madeira",
        descricao: "Consumo direto (remoção e limpeza de formas)",
        unidade: "m² de fôrma",
        consumoPorUnidade: 2
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Pilares",
        item: "Fôrmas metálicas",
        descricao: "Consumo direto (remoção e limpeza de formas)",
        unidade: "m² de fôrma",
        consumoPorUnidade: 1.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Pilares",
        item: "Cura de pilares",
        descricao: "Consumo direto (aspersão para cura)",
        unidade: "m² de pilar",
        consumoPorUnidade: 5
      },
    
      // Estrutura - Superestrutura - Vigas
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Vigas",
        item: "Concreto armado",
        descricao: "Consumo indireto (mistura para concreto)",
        unidade: "m³ de concreto",
        consumoPorUnidade: 170
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Vigas",
        item: "Aço para armadura",
        descricao: "Consumo indireto (lavagem de aço)",
        unidade: "kg de aço",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Vigas",
        item: "Fôrmas de madeira",
        descricao: "Consumo direto (remoção e limpeza de formas)",
        unidade: "m² de fôrma",
        consumoPorUnidade: 2
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Vigas",
        item: "Fôrmas metálicas",
        descricao: "Consumo direto (remoção e limpeza de formas)",
        unidade: "m² de fôrma",
        consumoPorUnidade: 1.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Vigas",
        item: "Cura de vigas",
        descricao: "Consumo direto (aspersão para cura)",
        unidade: "m² de viga",
        consumoPorUnidade: 5
      },
    
      // Estrutura - Superestrutura - Lajes
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Lajes",
        item: "Laje maciça de concreto",
        descricao: "Consumo indireto (mistura para concreto)",
        unidade: "m² de laje",
        consumoPorUnidade: 80
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Lajes",
        item: "Laje nervurada",
        descricao: "Consumo indireto (mistura para concreto)",
        unidade: "m² de laje",
        consumoPorUnidade: 90
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Lajes",
        item: "Laje pré-fabricada",
        descricao: "Consumo indireto (mistura na fábrica + limpeza)",
        unidade: "m² de laje",
        consumoPorUnidade: 20
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Lajes",
        item: "Aço para armadura",
        descricao: "Consumo indireto (lavagem de aço)",
        unidade: "kg de aço",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Lajes",
        item: "Cimbramento",
        descricao: "Consumo direto (umidificação de escoramento)",
        unidade: "m² de cimbramento",
        consumoPorUnidade: 3
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Lajes",
        item: "Cura de lajes",
        descricao: "Consumo direto (aspersão para cura)",
        unidade: "m² de laje",
        consumoPorUnidade: 5
      },
    
      // Estrutura - Superestrutura - Escadas
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Escadas",
        item: "Concreto armado",
        descricao: "Consumo indireto (mistura para concreto)",
        unidade: "m³ de escada",
        consumoPorUnidade: 170
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Escadas",
        item: "Degraus pré-moldados",
        descricao: "Consumo indireto (produção + limpeza)",
        unidade: "unidade",
        consumoPorUnidade: 20
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Escadas",
        item: "Aço para armadura",
        descricao: "Consumo indireto (lavagem de aço)",
        unidade: "kg de aço",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Escadas",
        item: "Fôrmas",
        descricao: "Consumo direto (remoção e limpeza de formas)",
        unidade: "m² de fôrma",
        consumoPorUnidade: 2
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Escadas",
        item: "Cura de escadas",
        descricao: "Consumo direto (aspersão para cura)",
        unidade: "m² de escada",
        consumoPorUnidade: 5
      },
    
      // Estrutura - Superestrutura - Estruturas Metálicas
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Estruturas Metálicas",
        item: "Perfis de aço",
        descricao: "Consumo indireto (lavagem e refrigeração de corte)",
        unidade: "kg de aço",
        consumoPorUnidade: 1
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Estruturas Metálicas",
        item: "Chapas",
        descricao: "Consumo indireto (produção e resfriamento)",
        unidade: "m² de chapa",
        consumoPorUnidade: 0.7
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Estruturas Metálicas",
        item: "Conectores",
        descricao: "Consumo indireto (produção)",
        unidade: "unidade",
        consumoPorUnidade: 0.2
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Estruturas Metálicas",
        item: "Solda",
        descricao: "Consumo indireto (arrefecimento da solda)",
        unidade: "junta",
        consumoPorUnidade: 1.5
      },
      {
        categoria: "Estrutura",
        subcategoria: "Superestrutura",
        tipo: "Estruturas Metálicas",
        item: "Pintura de proteção",
        descricao: "Consumo indireto (limpeza antes da pintura)",
        unidade: "m² pintado",
        consumoPorUnidade: 2
      },
      // Estrutura - Superestrutura - Processos construtivos
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Processos construtivos",
    item: "Lançamento de concreto",
    descricao: "Consumo direto (mistura para concreto)",
    unidade: "m³ de concreto",
    consumoPorUnidade: 170
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Processos construtivos",
    item: "Vibração do concreto",
    descricao: "Consumo direto (limpeza do vibrador após uso)",
    unidade: "hora de uso",
    consumoPorUnidade: 3
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Processos construtivos",
    item: "Limpeza de fôrmas",
    descricao: "Consumo direto (lavagem das fôrmas reutilizáveis)",
    unidade: "m² de fôrma",
    consumoPorUnidade: 2
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Processos construtivos",
    item: "Desforma",
    descricao: "Consumo direto (remoção com água sob pressão)",
    unidade: "m² desformado",
    consumoPorUnidade: 1
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Processos construtivos",
    item: "Tratamento superficial",
    descricao: "Consumo direto (lavagem e selagem com água)",
    unidade: "m² tratado",
    consumoPorUnidade: 3
  },

  // Estrutura - Superestrutura - Equipamentos
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Equipamentos",
    item: "Guindastes",
    descricao: "Consumo indireto (limpeza após uso)",
    unidade: "hora de operação",
    consumoPorUnidade: 5
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Equipamentos",
    item: "Betoneiras",
    descricao: "Consumo indireto (limpeza após uso)",
    unidade: "hora de operação",
    consumoPorUnidade: 3
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Equipamentos",
    item: "Vibradores de imersão",
    descricao: "Consumo direto (limpeza após uso)",
    unidade: "hora de operação",
    consumoPorUnidade: 3
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Equipamentos",
    item: "Bombas de concreto",
    descricao: "Consumo direto (lavagem dos tubos e mangotes)",
    unidade: "m³ de concreto bombeado",
    consumoPorUnidade: 10
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Equipamentos",
    item: "Serras para corte de fôrmas",
    descricao: "Consumo direto (refrigeração e limpeza)",
    unidade: "hora de operação",
    consumoPorUnidade: 2
  },

  // Estrutura - Superestrutura - Perdas e Desperdícios
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Perdas e Desperdícios",
    item: "Vazamentos em bombas de concreto",
    descricao: "Consumo indireto (lavagem da área e recomposição)",
    unidade: "evento",
    consumoPorUnidade: 50
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Perdas e Desperdícios",
    item: "Retrabalho por falhas de cura",
    descricao: "Consumo direto (nova cura + lavagem)",
    unidade: "m² de área",
    consumoPorUnidade: 10
  },
  {
    categoria: "Estrutura",
    subcategoria: "Superestrutura",
    tipo: "Perdas e Desperdícios",
    item: "Excesso de água no concreto",
    descricao: "Consumo direto (mistura com excesso)",
    unidade: "m³ de concreto",
    consumoPorUnidade: 20
  },
   // Alvenaria e vedações - Paredes - Materiais
   {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Tijolo cerâmico (6, 8, 9 furos)",
    descricao: "Consumo indireto (produção do tijolo)",
    unidade: "milheiro",
    consumoPorUnidade: 80
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Tijolo baiano",
    descricao: "Consumo indireto (produção do tijolo)",
    unidade: "milheiro",
    consumoPorUnidade: 70
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Tijolo ecológico",
    descricao: "Consumo indireto (produção e cura)",
    unidade: "milheiro",
    consumoPorUnidade: 30
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Bloco de concreto estrutural",
    descricao: "Consumo indireto (fabricação do bloco)",
    unidade: "m² de parede",
    consumoPorUnidade: 15
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Bloco de concreto não estrutural",
    descricao: "Consumo indireto (produção do bloco)",
    unidade: "m² de parede",
    consumoPorUnidade: 10
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Bloco sílico-calcário",
    descricao: "Consumo indireto (fabricação)",
    unidade: "m² de parede",
    consumoPorUnidade: 12
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Bloco de vidro",
    descricao: "Consumo indireto (fabricação)",
    unidade: "m² de parede",
    consumoPorUnidade: 5
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Bloco de concreto celular",
    descricao: "Consumo indireto (produção com espuma)",
    unidade: "m² de parede",
    consumoPorUnidade: 25
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Bloco de concreto leve",
    descricao: "Consumo indireto (produção)",
    unidade: "m² de parede",
    consumoPorUnidade: 15
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Adobe",
    descricao: "Consumo indireto (umidificação do barro)",
    unidade: "milheiro",
    consumoPorUnidade: 40
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Taipa",
    descricao: "Consumo direto (umidificação da terra + compactação)",
    unidade: "m²",
    consumoPorUnidade: 60
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Drywall (placas padrão, RF, RU)",
    descricao: "Consumo direto (montagem e ajustes)",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Painéis pré-moldados de concreto",
    descricao: "Consumo indireto (fabricação do painel)",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Painéis de madeira",
    descricao: "Consumo indireto (tratamento da madeira)",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Alvenaria e vedações",
    subcategoria: "Paredes",
    tipo: "Materiais",
    item: "Painéis de aço",
    descricao: "Consumo indireto (limpeza e pintura do painel)",
    unidade: "m²",
    consumoPorUnidade: 6
  },
    // Alvenaria e vedações - Paredes - Sistemas Construtivos
    {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Alvenaria estrutural",
        descricao: "Consumo direto (cura e grauteamento)",
        unidade: "m² de parede estrutural",
        consumoPorUnidade: 30
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Alvenaria de vedação",
        descricao: "Consumo direto (umidificação e assentamento)",
        unidade: "m² de parede de vedação",
        consumoPorUnidade: 15
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Alvenaria armada",
        descricao: "Consumo direto (mistura e cura)",
        unidade: "m² de alvenaria armada",
        consumoPorUnidade: 35
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Alvenaria com graute",
        descricao: "Consumo direto (mistura e lançamento)",
        unidade: "m² de parede",
        consumoPorUnidade: 20
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Steel frame",
        descricao: "Consumo indireto (fabricação dos painéis)",
        unidade: "m²",
        consumoPorUnidade: 12
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Wood frame",
        descricao: "Consumo indireto (tratamento da madeira)",
        unidade: "m²",
        consumoPorUnidade: 10
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Sistemas Construtivos",
        item: "Alvenaria com isolamento térmico",
        descricao: "Consumo indireto (fabricação do sistema)",
        unidade: "m²",
        consumoPorUnidade: 10
      },
    
      // Alvenaria e vedações - Paredes - Componentes
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Componentes",
        item: "Vergas e contravergas",
        descricao: "Consumo indireto (mistura da argamassa para assentamento)",
        unidade: "m linear",
        consumoPorUnidade: 1.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Componentes",
        item: "Cintas de amarração",
        descricao: "Consumo direto (mistura para graute)",
        unidade: "m linear",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Componentes",
        item: "Amarrações metálicas",
        descricao: "Consumo direto (limpeza e fixação)",
        unidade: "unidade",
        consumoPorUnidade: 0.3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Componentes",
        item: "Chumbadores",
        descricao: "Consumo direto (lavagem e limpeza)",
        unidade: "m linear",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Componentes",
        item: "Juntas de dilatação",
        descricao: "Consumo direto (remoção de resíduos)",
        unidade: "m² de junta",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Componentes",
        item: "Juntas de assentamento",
        descricao: "Consumo direto (lavagem de molduras)",
        unidade: "m linear",
        consumoPorUnidade: 0.2
      },
    
      // Alvenaria e vedações - Paredes - Acessórios
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Acessórios",
        item: "Sancas",
        descricao: "Consumo direto (limpeza após instalação)",
        unidade: "m linear",
        consumoPorUnidade: 0.2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Acessórios",
        item: "Rodapés",
        descricao: "Consumo direto (limpeza para aplicação)",
        unidade: "m linear",
        consumoPorUnidade: 0.2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Acessórios",
        item: "Guarnições",
        descricao: "Consumo direto (limpeza e instalação)",
        unidade: "m linear",
        consumoPorUnidade: 0.2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Acessórios",
        item: "Cantoneiras",
        descricao: "Consumo direto (aplicação em drywall)",
        unidade: "m²",
        consumoPorUnidade: 0.3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Acessórios",
        item: "Perfis para drywall",
        descricao: "Consumo direto (instalação entre placas)",
        unidade: "m²",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Acessórios",
        item: "Fitas de junta",
        descricao: "Consumo direto (mistura da argamassa)",
        unidade: "m²",
        consumoPorUnidade: 12
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Assentamento manual",
        descricao: "Consumo direto (mistura e projeção)",
        unidade: "m²",
        consumoPorUnidade: 15
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Assentamento mecanizado",
        descricao: "Consumo direto (cura e limpeza)",
        unidade: "m²",
        consumoPorUnidade: 10
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Grauteamento",
        descricao: "Consumo direto (umidificação antes do assentamento)",
        unidade: "m²",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Umidecimento prévio",
        descricao: "Consumo direto (lavagem da peça)",
        unidade: "unidade",
        consumoPorUnidade: 0.3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Corte e ajuste",
        descricao: "Consumo direto (umidificação de base)",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Nivelamento",
        descricao: "Consumo direto (lavagem dos excessos)",
        unidade: "m linear",
        consumoPorUnidade: 0.3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Prumo e alinhamento",
        descricao: "Consumo direto (limpeza e preparação)",
        unidade: "m²",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Processos Construtivos",
        item: "Limpeza de juntas",
        descricao: "Consumo direto (mistura e lavagem após uso)",
        unidade: "hora de operação",
        consumoPorUnidade: 5
      },
    
      // Alvenaria e vedações - Paredes - Equipamentos
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Equipamentos",
        item: "Betoneira para argamassa",
        descricao: "Consumo direto (resfriamento e corte)",
        unidade: "unidade",
        consumoPorUnidade: 0.2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Equipamentos",
        item: "Cortadora de blocos",
        descricao: "Consumo direto (ajustes e corte)",
        unidade: "m²",
        consumoPorUnidade: 0.2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Equipamentos",
        item: "Serrote para drywall",
        descricao: "Consumo direto (alinhamento e limpeza)",
        unidade: "hora de operação",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Equipamentos",
        item: "Nível laser",
        descricao: "Consumo direto (calibração e limpeza)",
        unidade: "hora de uso",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Equipamentos",
        item: "Máquina de projetar argamassa",
        descricao: "Consumo direto (nivelamento e limpeza)",
        unidade: "m²",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Equipamentos",
        item: "Talocha mecânica",
        descricao: "Consumo direto (aplicação e cura)",
        unidade: "m²",
        consumoPorUnidade: 10
      },
    
      // Alvenaria e vedações - Paredes - Tratamentos Especiais
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Tratamentos Especiais",
        item: "Impermeabilização",
        descricao: "Consumo indireto (camadas de mantas líquidas/cimentícias)",
        unidade: "m²",
        consumoPorUnidade: 8
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Tratamentos Especiais",
        item: "Isolamento acústico",
        descricao: "Consumo indireto (camadas de isolantes)",
        unidade: "m²",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Tratamentos Especiais",
        item: "Isolamento térmico",
        descricao: "Consumo indireto (camadas de lã ou espumas)",
        unidade: "m²",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Tratamentos Especiais",
        item: "Proteção contra umidade",
        descricao: "Consumo direto (lavagem e preparação)",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Tratamentos Especiais",
        item: "Tratamento antifungo",
        descricao: "Consumo direto (aplicação líquida ou em pasta)",
        unidade: "m²",
        consumoPorUnidade: 2
      },
    
      // Alvenaria e vedações - Paredes - Serviços Complementares
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Serviços Complementares",
        item: "Instalação de embutidos",
        descricao: "Consumo direto (lavagem do local antes da instalação)",
        unidade: "ponto de instalação",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Serviços Complementares",
        item: "Passagem de tubulações",
        descricao: "Consumo direto (passagem com água para lubrificação)",
        unidade: "ponto",
        consumoPorUnidade: 1.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Serviços Complementares",
        item: "Passagem de eletrodutos",
        descricao: "Consumo direto (lavagem dos eletrodutos)",
        unidade: "ponto",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Serviços Complementares",
        item: "Fixação de quadros e prateleiras",
        descricao: "Consumo direto (limpeza e fixação)",
        unidade: "ponto",
        consumoPorUnidade: 0.5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Paredes",
        tipo: "Serviços Complementares",
        item: "Reparos e recuperação",
        descricao: "Consumo direto (remoção + nova aplicação de argamassa)",
        unidade: "m²",
        consumoPorUnidade: 8
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Drywall (standard, RF, RU)",
        descricao: "Produção de gesso, uso de água na fabricação e resfriamento",
        unidade: "m²",
        consumoPorUnidade: 4
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Divisórias de gesso acartonado",
        descricao: "Produção de gesso, resfriamento do material",
        unidade: "m²",
        consumoPorUnidade: 4
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Painéis modulares metálicos",
        descricao: "Uso de água para resfriamento e limpeza na fabricação",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Divisórias de vidro temperado",
        descricao: "Processo de fabricação e resfriamento",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Biombos de madeira ou acrílico",
        descricao: "Produção de acrílico ou madeira, limpeza",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Painéis deslizantes",
        descricao: "Fabricação e processos de acabamento",
        unidade: "m²",
        consumoPorUnidade: 7
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Divisórias Internas",
        item: "Paredes dobráveis",
        descricao: "Produção e pintura",
        unidade: "m²",
        consumoPorUnidade: 6
      },
    
      // Alvenaria e vedações - Vedações especiais - Fachadas Leves
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Fachadas Leves",
        item: "Fachadas ventiladas",
        descricao: "Fabricação dos componentes, resfriamento",
        unidade: "m²",
        consumoPorUnidade: 10
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Fachadas Leves",
        item: "Brises (madeira, alumínio, concreto)",
        descricao: "Produção e resfriamento do material",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Fachadas Leves",
        item: "Painéis sandwich (alumínio, aço, fibrocimento)",
        descricao: "Fabricação e resfriamento",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Fachadas Leves",
        item: "Cortinas de vidro",
        descricao: "Processos de vidro, fabricação",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Fachadas Leves",
        item: "Cobogós",
        descricao: "Fabricação do material (cerâmica, concreto)",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Fachadas Leves",
        item: "Elementos vazados de concreto",
        descricao: "Fabricação do concreto, lavagem",
        unidade: "unidade",
        consumoPorUnidade: 4
      },
    
      // Alvenaria e vedações - Vedações especiais - Proteções Acústicas
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Acústicas",
        item: "Paredes acústicas (lã de rocha, fibra de vidro)",
        descricao: "Produção e aplicação de materiais isolantes",
        unidade: "m²",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Acústicas",
        item: "Portas acústicas",
        descricao: "Produção e testes",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Acústicas",
        item: "Janelas com vidro duplo",
        descricao: "Produção e resfriamento do vidro",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Acústicas",
        item: "Barreiras sonoras externas",
        descricao: "Produção de concreto, materiais acústicos",
        unidade: "m²",
        consumoPorUnidade: 7
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Acústicas",
        item: "Espumas acústicas",
        descricao: "Produção do material, espumas",
        unidade: "m²",
        consumoPorUnidade: 4
      },
    
      // Alvenaria e vedações - Vedações especiais - Proteções Térmicas
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Térmicas",
        item: "Painéis termoisolantes",
        descricao: "Produção de material isolante e resfriamento",
        unidade: "m²",
        consumoPorUnidade: 4
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Térmicas",
        item: "Telhas translúcidas com isolamento",
        descricao: "Produção e resfriamento",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Térmicas",
        item: "Paredes verdes (jardins verticais)",
        descricao: "Irrigação e manutenção",
        unidade: "m²",
        consumoPorUnidade: 10
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Proteções Térmicas",
        item: "Manta térmica reflexiva",
        descricao: "Produção e corte",
        unidade: "m²",
        consumoPorUnidade: 2
      },
    
      // Alvenaria e vedações - Vedações especiais - Vedações Flexíveis
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Flexíveis",
        item: "Cortinas industriais",
        descricao: "Fabricação e manutenção",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Flexíveis",
        item: "Portas rápidas (PVC, lâminas)",
        descricao: "Produção e testes",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Flexíveis",
        item: "Divisórias retráteis",
        descricao: "Produção e montagem",
        unidade: "unidade",
        consumoPorUnidade: 4
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Flexíveis",
        item: "Telas de proteção (sombreamento)",
        descricao: "Produção e acabamento",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações de Emergência",
        item: "Barreiras antifumaça",
        descricao: "Produção de materiais e testes",
        unidade: "unidade",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações de Emergência",
        item: "Selos corta-fogo",
        descricao: "Produção e teste de vedação",
        unidade: "unidade",
        consumoPorUnidade: 2
      },
    
      // Alvenaria e vedações - Vedações especiais - Vedações Sanitárias
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Sanitárias",
        item: "Box para banheiro",
        descricao: "Fabricação do vidro e materiais de vedação",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Sanitárias",
        item: "Divisórias de lavabo",
        descricao: "Produção e acabamento",
        unidade: "unidade",
        consumoPorUnidade: 4
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Sanitárias",
        item: "Paredes anti-mofo",
        descricao: "Produção e aplicação de materiais anti-mofo",
        unidade: "m²",
        consumoPorUnidade: 6
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Sanitárias",
        item: "Revestimentos hidrofóbicos",
        descricao: "Produção e aplicação do revestimento",
        unidade: "m²",
        consumoPorUnidade: 3
      },
    
      // Alvenaria e vedações - Vedações especiais - Vedações Decorativas
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Decorativas",
        item: "Painéis 3D",
        descricao: "Produção de material (plástico, madeira, resinas)",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Decorativas",
        item: "Papel de parede vinílico",
        descricao: "Produção e aplicação",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Decorativas",
        item: "Revestimentos têxteis",
        descricao: "Produção e aplicação de tecidos",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Decorativas",
        item: "Espelhos decorativos",
        descricao: "Produção e acabamento",
        unidade: "unidade",
        consumoPorUnidade: 2
      },
    
      // Alvenaria e vedações - Vedações especiais - Sistemas Inteligentes
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Sistemas Inteligentes",
        item: "Vidros eletrocrômicos (opacidade variável)",
        descricao: "Produção e testes de opacidade",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Sistemas Inteligentes",
        item: "Paredes com iluminação integrada",
        descricao: "Fabricação de materiais e testes",
        unidade: "m²",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Sistemas Inteligentes",
        item: "Superfícies interativas (toque, projeção)",
        descricao: "Produção de componentes eletrônicos",
        unidade: "m²",
        consumoPorUnidade: 6
      },
    
      // Alvenaria e vedações - Vedações especiais - Vedações Temporárias
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Temporárias",
        item: "Tapumes de obra",
        descricao: "Produção e montagem",
        unidade: "unidade",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Temporárias",
        item: "Lonas plásticas",
        descricao: "Produção e corte",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Temporárias",
        item: "Telas de proteção",
        descricao: "Produção de material (nylon, plástico)",
        unidade: "m²",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Vedações Temporárias",
        item: "Divisórias provisórias",
        descricao: "Produção e montagem",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
    
      // Alvenaria e vedações - Vedações especiais - Acessórios para Vedações
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Acessórios para Vedações",
        item: "Perfis de fixação",
        descricao: "Fabricação e acabamento",
        unidade: "metro",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Acessórios para Vedações",
        item: "Ferragens ocultas",
        descricao: "Fabricação e testes",
        unidade: "unidade",
        consumoPorUnidade: 2
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Acessórios para Vedações",
        item: "Juntas de dilatação",
        descricao: "Produção e instalação",
        unidade: "metro",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Acessórios para Vedações",
        item: "Sistemas de ancoragem",
        descricao: "Produção de material e instalação",
        unidade: "unidade",
        consumoPorUnidade: 2
      },
    
      // Alvenaria e vedações - Vedações especiais - Processos Especiais
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Processos Especiais",
        item: "Instalação de painéis estruturais",
        descricao: "Uso de ferramentas e técnicas de montagem",
        unidade: "unidade",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Processos Especiais",
        item: "Aplicação de selantes especiais",
        descricao: "Fabricação e aplicação",
        unidade: "metro",
        consumoPorUnidade: 1
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Processos Especiais",
        item: "Montagem de sistemas modulares",
        descricao: "Uso de água para montagem e resfriamento",
        unidade: "unidade",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Processos Especiais",
        item: "Guindastes para painéis pesados",
        descricao: "Operação e resfriamento",
        unidade: "hora",
        consumoPorUnidade: 15
      },
    
      // Alvenaria e vedações - Vedações especiais - Equipamentos para Instalação
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Equipamentos para Instalação",
        item: "Plataformas elevatórias",
        descricao: "Operação e resfriamento",
        unidade: "hora",
        consumoPorUnidade: 10
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Equipamentos para Instalação",
        item: "Furadeiras de alto torque",
        descricao: "Uso de água para resfriamento",
        unidade: "hora",
        consumoPorUnidade: 3
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Equipamentos para Instalação",
        item: "Níveis a laser",
        descricao: "Calibração e manutenção",
        unidade: "unidade",
        consumoPorUnidade: 1
      },
    
      // Alvenaria e vedações - Vedações especiais - Manutenção
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Manutenção",
        item: "Limpeza de fachadas",
        descricao: "Uso de água para lavagem",
        unidade: "m²",
        consumoPorUnidade: 15
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Manutenção",
        item: "Substituição de elementos danificados",
        descricao: "Reparo de materiais danificados",
        unidade: "unidade",
        consumoPorUnidade: 5
      },
      {
        categoria: "Alvenaria e vedações",
        subcategoria: "Vedações especiais",
        tipo: "Manutenção",
        item: "Reaplicação de tratamentos superficiais",
        descricao: "Uso de produtos de limpeza e tratamento",
        unidade: "m²",
        consumoPorUnidade: 3
      },
      // Revestimentos - Paredes - Revestimentos Cerâmicos
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Azulejo esmaltado",
    descricao: "Produção de cerâmica, esmaltação",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Porcelanato",
    descricao: "Produção de cerâmica, resfriamento e acabamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Pastilha de vidro",
    descricao: "Fabricação e resfriamento do vidro",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Pastilha de cerâmica",
    descricao: "Produção de cerâmica, resfriamento",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Mosaico português",
    descricao: "Produção de peças, assentamento manual",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Ladrilho hidráulico",
    descricao: "Produção de ladrilhos e pigmentação",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Cerâmicos",
    item: "Placa cerâmica de grande formato",
    descricao: "Produção de cerâmica, resfriamento e acabamento",
    unidade: "m²",
    consumoPorUnidade: 4
  },

  // Revestimentos - Paredes - Revestimentos Pétreos
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Mármore",
    descricao: "Extração, corte e acabamento",
    unidade: "m²",
    consumoPorUnidade: 7
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Granito",
    descricao: "Extração, corte e acabamento",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Ardósia",
    descricao: "Extração, corte e acabamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Quartzito",
    descricao: "Extração, corte e acabamento",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Pedra-sabão",
    descricao: "Extração, corte e acabamento",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Pedra-madeira",
    descricao: "Extração, corte e acabamento",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Pedra de rio",
    descricao: "Extração e lavagem das pedras",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Pétreos",
    item: "Seixo rolado",
    descricao: "Extração e lavagem dos seixos",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Revestimentos - Paredes - Revestimentos de Concreto
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Concreto",
    item: "Concreto aparente",
    descricao: "Produção de concreto, resfriamento e acabamento",
    unidade: "m²",
    consumoPorUnidade: 7
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Concreto",
    item: "Concreto queimado",
    descricao: "Produção e acabamento com resfriamento",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Concreto",
    item: "Concreto pigmentado",
    descricao: "Produção e mistura de pigmentos",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Concreto",
    item: "Concreto moldado in loco",
    descricao: "Produção e aplicação de concreto no local",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Concreto",
    item: "Painéis de concreto pré-moldado",
    descricao: "Produção e transporte dos painéis",
    unidade: "m²",
    consumoPorUnidade: 5
  },

  // Revestimentos - Paredes - Revestimentos Orgânicos
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Orgânicos",
    item: "Madeira maciça",
    descricao: "Extração e tratamento da madeira",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Orgânicos",
    item: "Painéis de madeira",
    descricao: "Produção e acabamento de painéis",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Orgânicos",
    item: "Bambu",
    descricao: "Extração, tratamento e secagem",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Orgânicos",
    item: "Cortiça",
    descricao: "Extração e processamento",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Orgânicos",
    item: "Fibra natural",
    descricao: "Produção e processamento da fibra",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  // Revestimentos - Paredes - Revestimentos Têxteis
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Têxteis",
    item: "Tecido acústico",
    descricao: "Produção e tratamento do tecido acústico",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Têxteis",
    item: "Couro ecológico",
    descricao: "Produção e tratamento do couro",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Têxteis",
    item: "Feltro",
    descricao: "Produção e acabamento de feltro",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Têxteis",
    item: "Papel de parede vinílico",
    descricao: "Produção e aplicação do papel de parede",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Têxteis",
    item: "Papel de parede não-tecido",
    descricao: "Produção e aplicação do papel não-tecido",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Revestimentos - Paredes - Revestimentos Metálicos
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Metálicos",
    item: "Aço inox escovado",
    descricao: "Produção e acabamento do aço inox",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Metálicos",
    item: "Chapas de alumínio",
    descricao: "Produção e acabamento das chapas",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Metálicos",
    item: "Cobre envelhecido",
    descricao: "Produção e acabamento do cobre",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Metálicos",
    item: "Latão",
    descricao: "Produção e acabamento do latão",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Metálicos",
    item: "Painéis metálicos perfurados",
    descricao: "Produção e acabamento dos painéis metálicos",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Revestimentos - Paredes - Revestimentos de Gesso
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Gesso",
    item: "Gesso liso",
    descricao: "Produção e aplicação de gesso liso",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Gesso",
    item: "Gesso texturizado",
    descricao: "Produção e aplicação de gesso texturizado",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Gesso",
    item: "Gesso acartonado",
    descricao: "Produção e montagem de gesso acartonado",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Gesso",
    item: "Painéis 3D em gesso",
    descricao: "Produção e aplicação dos painéis 3D",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos de Gesso",
    item: "Gesso com fibras",
    descricao: "Produção e aplicação de gesso com fibras",
    unidade: "m²",
    consumoPorUnidade: 4
  },

  // Revestimentos - Paredes - Revestimentos Plásticos
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Plásticos",
    item: "PVC expandido",
    descricao: "Produção e acabamento do PVC expandido",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Plásticos",
    item: "Acrílico",
    descricao: "Produção e resfriamento do acrílico",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Plásticos",
    item: "Policarbonato",
    descricao: "Produção e resfriamento do policarbonato",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Plásticos",
    item: "Painéis sandwich",
    descricao: "Produção e aplicação dos painéis sandwich",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Plásticos",
    item: "Revestimento vinílico",
    descricao: "Produção e aplicação de revestimento vinílico",
    unidade: "m²",
    consumoPorUnidade: 1
  },

  // Revestimentos - Paredes - Revestimentos Especiais
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Especiais",
    item: "Tinta magnética",
    descricao: "Produção e aplicação de tinta magnética",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Especiais",
    item: "Tinta lavável",
    descricao: "Produção e aplicação de tinta lavável",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Especiais",
    item: "Tinta anti-mofo",
    descricao: "Produção e aplicação de tinta anti-mofo",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Especiais",
    item: "Tinta térmica",
    descricao: "Produção e aplicação de tinta térmica",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Especiais",
    item: "Tinta fotocatalítica",
    descricao: "Produção e aplicação de tinta fotocatalítica",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Revestimentos Especiais",
    item: "Tinta com glitter",
    descricao: "Produção e aplicação de tinta com glitter",
    unidade: "m²",
    consumoPorUnidade: 3
  },

  // Revestimentos - Paredes - Sistemas de Fixação
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Sistemas de Fixação",
    item: "Argamassa colante",
    descricao: "Produção e aplicação de argamassa",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Sistemas de Fixação",
    item: "Massa adesiva",
    descricao: "Produção e aplicação de massa adesiva",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Sistemas de Fixação",
    item: "Rejunte epóxi",
    descricao: "Produção e aplicação de rejunte epóxi",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Sistemas de Fixação",
    item: "Rejunte flexível",
    descricao: "Produção e aplicação de rejunte flexível",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Sistemas de Fixação",
    item: "Perfis de alumínio",
    descricao: "Produção e acabamento de perfis de alumínio",
    unidade: "metro",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Sistemas de Fixação",
    item: "Estrutura metálica",
    descricao: "Produção e montagem de estrutura metálica",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  // Revestimentos - Paredes - Tratamentos Superficiais
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tratamentos Superficiais",
    item: "Impermeabilização",
    descricao: "Produção e aplicação de impermeabilização",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tratamentos Superficiais",
    item: "Selador",
    descricao: "Produção e aplicação de selador",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tratamentos Superficiais",
    item: "Verniz",
    descricao: "Produção e aplicação de verniz",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tratamentos Superficiais",
    item: "Cera",
    descricao: "Produção e aplicação de cera",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tratamentos Superficiais",
    item: "Resina epóxi",
    descricao: "Produção e aplicação de resina epóxi",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tratamentos Superficiais",
    item: "Resina poliuretano",
    descricao: "Produção e aplicação de resina poliuretano",
    unidade: "m²",
    consumoPorUnidade: 3
  },

  // Revestimentos - Paredes - Ferramentas e Equipamentos
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Ferramentas e Equipamentos",
    item: "Espátulas",
    descricao: "Produção de espátulas",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Ferramentas e Equipamentos",
    item: "Nível a laser",
    descricao: "Calibração e manutenção do nível a laser",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Ferramentas e Equipamentos",
    item: "Cortador de porcelanato",
    descricao: "Uso para corte e ajuste de porcelanato",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Ferramentas e Equipamentos",
    item: "Máquina de cortar azulejo",
    descricao: "Uso para corte de azulejos e cerâmica",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Ferramentas e Equipamentos",
    item: "Aplicador de rejunte",
    descricao: "Aplicação de rejunte em superfícies",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Ferramentas e Equipamentos",
    item: "Pistola de cola quente",
    descricao: "Uso em montagem e adesão de materiais",
    unidade: "unidade",
    consumoPorUnidade: 1
  },

  // Revestimentos - Paredes - Processos de Aplicação
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Chapisco",
    descricao: "Produção e aplicação de chapisco",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Emboço",
    descricao: "Produção e aplicação de emboço",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Reboco",
    descricao: "Produção e aplicação de reboco",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Assentamento",
    descricao: "Aplicação de revestimentos e azulejos",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Rejuntamento",
    descricao: "Aplicação de rejunte nas juntas",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Texturização",
    descricao: "Aplicação de texturas em superfícies",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Processos de Aplicação",
    item: "Pintura",
    descricao: "Aplicação de tintas em superfícies",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Revestimentos - Paredes - Manutenção
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Manutenção",
    item: "Limpeza profissional",
    descricao: "Limpeza de materiais após a instalação e obra",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Manutenção",
    item: "Restauração",
    descricao: "Reparos e restauração de superfícies",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Manutenção",
    item: "Substituição parcial",
    descricao: "Substituição de elementos danificados",
    unidade: "unidade",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Manutenção",
    item: "Repintura",
    descricao: "Aplicação de tinta para repintura",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Manutenção",
    item: "Reaplicação de selante",
    descricao: "Aplicação de selante em superfícies",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Revestimentos - Paredes - Tendências e Inovações
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tendências e Inovações",
    item: "Revestimento fotovoltaico",
    descricao: "Instalação de revestimento fotovoltaico",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tendências e Inovações",
    item: "Tinta que muda de cor",
    descricao: "Produção e aplicação de tinta inteligente",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tendências e Inovações",
    item: "Painéis interativos",
    descricao: "Instalação de painéis interativos",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tendências e Inovações",
    item: "Revestimento auto-limpante",
    descricao: "Aplicação de revestimento auto-limpante",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Paredes",
    tipo: "Tendências e Inovações",
    item: "Superfícies táteis",
    descricao: "Instalação de superfícies táteis para interação",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Cerâmicos e Porcelanatos",
    item: "Azulejos (esmaltados e não esmaltados)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Cerâmicos e Porcelanatos",
    item: "Porcelanato (polido, acetinado, retificado)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Cerâmicos e Porcelanatos",
    item: "Pastilhas cerâmicas",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Cerâmicos e Porcelanatos",
    item: "Ladrilhos hidráulicos",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 30
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Cerâmicos e Porcelanatos",
    item: "Mosaicos portugueses",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 25
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Mármore (polido e fosco)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 50
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Granito (polido e flameado)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 40
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Ardósia natural",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 45
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Quartzito",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 35
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Pedra-sabão",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 30
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Basalto",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pétreos Naturais",
    item: "Seixos rolados",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Madeira e Derivados",
    item: "Madeira maciça (tábuas e assoalho)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 25
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Madeira e Derivados",
    item: "Piso laminado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Madeira e Derivados",
    item: "Deck de madeira",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Madeira e Derivados",
    item: "Taco de madeira",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Madeira e Derivados",
    item: "Bambu laminado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 12
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Concreto e Cimentícios",
    item: "Cimento queimado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Concreto e Cimentícios",
    item: "Concreto estampado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Concreto e Cimentícios",
    item: "Microconcreto",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Concreto e Cimentícios",
    item: "Piso elevado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Concreto e Cimentícios",
    item: "Pavimento intertravado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 7
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Vinílicos e Plásticos",
    item: "Piso vinílico em rolo",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Vinílicos e Plásticos",
    item: "Manta vinílica",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Vinílicos e Plásticos",
    item: "Piso modular de PVC",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Vinílicos e Plásticos",
    item: "Borracha (placas e tatame)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Têxteis e Especiais",
    item: "Carpete (nylon e poliéster)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Têxteis e Especiais",
    item: "Tapetes artesanais",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Têxteis e Especiais",
    item: "Piso elevado técnico",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Têxteis e Especiais",
    item: "Piso antiestático",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Metálicos",
    item: "Aço inoxidável",
    descricao: "Produção e processamento",
    unidade: "kg",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Metálicos",
    item: "Alumínio industrial",
    descricao: "Produção e processamento",
    unidade: "kg",
    consumoPorUnidade: 0.4
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Metálicos",
    item: "Ferro fundido",
    descricao: "Produção e processamento",
    unidade: "kg",
    consumoPorUnidade: 0.6
  },
  // Revestimentos - Pisos - Revestimentos Industriais
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Revestimentos Industriais",
    item: "Epóxi auto-nivelante",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Revestimentos Industriais",
    item: "Poliuretano",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 12
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Revestimentos Industriais",
    item: "Resinas acrílicas",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },

  // Revestimentos - Pisos - Acabamentos e Tratamentos
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Acabamentos e Tratamentos",
    item: "Rejunte epóxi",
    descricao: "Produção e processamento",
    unidade: "kg",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Acabamentos e Tratamentos",
    item: "Impermeabilizante líquido",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 5
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Acabamentos e Tratamentos",
    item: "Selador protetor",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Acabamentos e Tratamentos",
    item: "Cera para pisos",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 2
  },

  // Revestimentos - Pisos - Pisos Inteligentes
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pisos Inteligentes",
    item: "Pisos aquecidos",
    descricao: "Consumo em uso",
    unidade: "m²",
    consumoPorUnidade: 50
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pisos Inteligentes",
    item: "Pisos fotovoltaicos",
    descricao: "Consumo em uso",
    unidade: "m²",
    consumoPorUnidade: 70
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Pisos Inteligentes",
    item: "Pisos interativos com LED",
    descricao: "Consumo em uso",
    unidade: "m²",
    consumoPorUnidade: 30
  },

  // Revestimentos - Pisos - Processos de Instalação
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Processos de Instalação",
    item: "Assentamento colado",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Processos de Instalação",
    item: "Sistema flutuante",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Processos de Instalação",
    item: "Encaixe mecânico",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Processos de Instalação",
    item: "Aplicação auto-nivelante",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 5
  },

  // Revestimentos - Pisos - Manutenção
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Manutenção",
    item: "Cristalização",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Manutenção",
    item: "Polimento profissional",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Manutenção",
    item: "Restauração de pisos",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Revestimentos",
    subcategoria: "Pisos",
    tipo: "Manutenção",
    item: "Troca de seções danificadas",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 5
  },
   // Coberturas e telhados - Telhas - Telhas Cerâmicas
   {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Romana (tradicional, curva)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 25
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Francesa (plana com encaixe)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Colonial (trapezoidal)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Paulista (similar à colonial, mas mais larga)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 18
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Portuguesa (ondulada)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 22
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Vã (para ventilação)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Capelo (cumeeira)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Cerâmicas",
    item: "Bocal (para rufos)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Coberturas e telhados - Telhas - Telhas de Concreto
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas de Concreto",
    item: "Fibrocimento (ondulada ou trapezoidal)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 30
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas de Concreto",
    item: "Shingle (simulação de madeira)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 28
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas de Concreto",
    item: "Termoacústica (com isolamento)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 35
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas de Concreto",
    item: "Sanduíche (com núcleo térmico)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 40
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas de Concreto",
    item: "Translúcida (policarbonato ou acrílico)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 25
  },

  // Coberturas e telhados - Telhas - Telhas Metálicas
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Galvanizada (zincada)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Galvalume (zinco + alumínio)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 18
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Alumínio (leve e anticorrosivo)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 12
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Cobre (envelhecido ou natural)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 50
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Aço inox (para ambientes agressivos)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 45
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Perfil trapezoidal (industrial)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Metálicas",
    item: "Termoacústica (com isolamento interno)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 30
  },

  // Coberturas e telhados - Telhas - Telhas Sintéticas e Especiais
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Sintéticas e Especiais",
    item: "PVC (leve e resistente)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Sintéticas e Especiais",
    item: "Policarbonato (translúcida ou opaca)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 18
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Sintéticas e Especiais",
    item: "PET Reciclado (ecológica)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Sintéticas e Especiais",
    item: "Fibra de Vidro (translúcida)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 12
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Sintéticas e Especiais",
    item: "Bambu (tratado para cobertura)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Sintéticas e Especiais",
    item: "Telha Solar (fotovoltaica integrada)",
    descricao: "Consumo em uso",
    unidade: "m²",
    consumoPorUnidade: 50
  },

  // Coberturas e telhados - Telhas - Telhas Ecológicas
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Ecológicas",
    item: "Madeira Plástica (reciclada)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Ecológicas",
    item: "Fibra Natural (coco, sisal)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Ecológicas",
    item: "Telha Verde (com vegetação)",
    descricao: "Consumo em uso",
    unidade: "m²",
    consumoPorUnidade: 60
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Telhas Ecológicas",
    item: "Telha de Papelão Impermeabilizado",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Coberturas e telhados - Telhas - Componentes Complementares
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Componentes Complementares",
    item: "Rufos (alumínio, PVC ou chumbo)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 3
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Componentes Complementares",
    item: "Calhas (metálicas, PVC ou cerâmicas)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Componentes Complementares",
    item: "Peças de Vedação (cumeeira, espigão)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Componentes Complementares",
    item: "Telhas de Ventilação (com exaustor)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 2
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Componentes Complementares",
    item: "Manta Térmica (subcobertura)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },

  // Coberturas e telhados - Telhas - Sistemas de Fixação
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Sistemas de Fixação",
    item: "Estrutura de Madeira (caibros e ripas)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 12
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Sistemas de Fixação",
    item: "Estrutura Metálica (aço galvanizado)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Sistemas de Fixação",
    item: "Fixadores Mecânicos (parafusos, ganchos)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Sistemas de Fixação",
    item: "Cola Especial (para telhas leves)",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 3
  },

  // Coberturas e telhados - Telhas - Processos de Instalação
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Processos de Instalação",
    item: "Assentamento Tradicional (com argamassa)",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Processos de Instalação",
    item: "Sistema Seco (encaixe mecânico)",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Processos de Instalação",
    item: "Inclinação Mínima (varia por tipo de telha)",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Processos de Instalação",
    item: "Vedação com Silicone (para junções)",
    descricao: "Processo de instalação",
    unidade: "m",
    consumoPorUnidade: 0.3
  },

  // Coberturas e telhados - Telhas - Manutenção
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Manutenção",
    item: "Limpeza de Calhas (prevenção de entupimentos)",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Manutenção",
    item: "Substituição de Telhas Quebradas",
    descricao: "Manutenção",
    unidade: "unidade",
    consumoPorUnidade: 3
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Manutenção",
    item: "Aplicação de Impermeabilizante",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Telhas",
    tipo: "Manutenção",
    item: "Pintura Anticorrosiva (para metálicas)",
    descricao: "Manutenção",
    unidade: "m²",
    consumoPorUnidade: 6
  },
   // Coberturas e telhados - Impermeabilização - Membranas Asfálticas
   {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Asfálticas",
    item: "Manta asfáltica (auto-aderente ou com aplicação a quente)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 25
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Asfálticas",
    item: "Manta aluminizada (com barreira reflexiva)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 30
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Asfálticas",
    item: "Manta com geotêxtil (anti-raiz)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 35
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Asfálticas",
    item: "Manta pré-fabricada (para lajes e telhados)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 40
  },

  // Coberturas e telhados - Impermeabilização - Sistemas Líquidos
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas Líquidos",
    item: "Poliuretano líquido (flexível e resistente)",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 10
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas Líquidos",
    item: "Acrílico (para áreas não tráfegáveis)",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 8
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas Líquidos",
    item: "Silicone (alta resistência UV)",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 6
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas Líquidos",
    item: "Epóxi (para lajes industriais)",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 12
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas Líquidos",
    item: "Cimento polimérico (armado com fibra)",
    descricao: "Produção e processamento",
    unidade: "kg",
    consumoPorUnidade: 20
  },

  // Coberturas e telhados - Impermeabilização - Membranas Sintéticas
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Sintéticas",
    item: "PVC (soldável, para grandes áreas)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 18
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Sintéticas",
    item: "TPO (termoplástico, eco-friendly)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 22
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Sintéticas",
    item: "EPDM (borracha sintética, durável)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 28
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Membranas Sintéticas",
    item: "Argamassa polimérica (com cristalizante)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 15
  },

  // Coberturas e telhados - Impermeabilização - Impermeabilizantes Rígidos
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Impermeabilizantes Rígidos",
    item: "Cimento modificado (flexível)",
    descricao: "Produção e processamento",
    unidade: "kg",
    consumoPorUnidade: 18
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Impermeabilizantes Rígidos",
    item: "Membrana cristalizante (penetrante)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 10
  },

  // Coberturas e telhados - Impermeabilização - Impermeabilizantes Vegetados
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Impermeabilizantes Vegetados",
    item: "Manta drenante (para telhado verde)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Impermeabilizantes Vegetados",
    item: "Barreira anti-raiz (PEAD ou PVC)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Impermeabilizantes Vegetados",
    item: "Camada de retenção (argila expandida)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 7
  },

  // Coberturas e telhados - Impermeabilização - Tratamentos Complementares
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Tratamentos Complementares",
    item: "Selante para juntas (poliuretano ou silicone)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 2
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Tratamentos Complementares",
    item: "Fita de vedação (autofusível)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 1
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Tratamentos Complementares",
    item: "Primer de preparação (para melhor aderência)",
    descricao: "Produção e processamento",
    unidade: "l",
    consumoPorUnidade: 3
  },

  // Coberturas e telhados - Impermeabilização - Sistemas de Drenagem
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas de Drenagem",
    item: "Manta drenante (geocomposto)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 25
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas de Drenagem",
    item: "Calhas e rufos (em PVC, alumínio ou cobre)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 5
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Sistemas de Drenagem",
    item: "Caimento otimizado (para escoamento)",
    descricao: "Processo de instalação",
    unidade: "m²",
    consumoPorUnidade: 2
  },

  // Coberturas e telhados - Impermeabilização - Aplicação e Manutenção
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Aplicação e Manutenção",
    item: "Limpeza prévia (remoção de resíduos)",
    descricao: "Aplicação e Manutenção",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Aplicação e Manutenção",
    item: "Reparos localizados (em fissuras)",
    descricao: "Aplicação e Manutenção",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Aplicação e Manutenção",
    item: "Reaplicação periódica (para sistemas líquidos)",
    descricao: "Aplicação e Manutenção",
    unidade: "l",
    consumoPorUnidade: 10
  },

  // Coberturas e telhados - Impermeabilização - Verificação de Eficácia
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Verificação de Eficácia",
    item: "Teste de estanqueidade (com lâmina d'água)",
    descricao: "Verificação de Eficácia",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Coberturas e telhados",
    subcategoria: "Impermeabilização",
    tipo: "Verificação de Eficácia",
    item: "Inspeção por ultrassom (para detectar falhas)",
    descricao: "Verificação de Eficácia",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de PVC (rígido e flexível)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 15
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de CPVC (para água quente)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 20
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de PPR (termofusão)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 18
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de cobre (soldável e prensado)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 25
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de PEX (multicamadas)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 22
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de aço galvanizado",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 30
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Tubulações e Conexões",
    item: "Tubos de polietileno (para enterramento)",
    descricao: "Produção e processamento",
    unidade: "m",
    consumoPorUnidade: 20
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Conexões e Acessórios",
    item: "Luvas, curvas e tês (PVC, CPVC, cobre, PPR)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Conexões e Acessórios",
    item: "Registros de gaveta (metal ou PVC)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Conexões e Acessórios",
    item: "Registros de pressão",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Conexões e Acessórios",
    item: "Válvulas de retenção",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 4
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Conexões e Acessórios",
    item: "Uniões e adaptadores",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Conexões e Acessórios",
    item: "Abraçadeiras e suportes",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Reservatórios e Aquecedores",
    item: "Caixas d'água (fibrocimento, polietileno, inox)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Reservatórios e Aquecedores",
    item: "Reservatórios de pressão",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Reservatórios e Aquecedores",
    item: "Boilers (elétricos, a gás, solar)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Reservatórios e Aquecedores",
    item: "Aquecedores instantâneos",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Reservatórios e Aquecedores",
    item: "Sistemas solares térmicos",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Pontos de Consumo",
    item: "Torneiras (parede, bancada, cozinha, lavanderia)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 1.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Pontos de Consumo",
    item: "Chuveiros (elétrico, a gás, misturador)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Pontos de Consumo",
    item: "Misturadores (para lavatórios e bidês)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 4
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Pontos de Consumo",
    item: "Válvulas de descarga (caixa acoplada, parede)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 12
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Pontos de Consumo",
    item: "Bebedouros",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Sistemas Especiais",
    item: "Água gelada (para chopeiras e refrigeradores)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Sistemas Especiais",
    item: "Água purificada (filtros e purificadores)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Sistemas Especiais",
    item: "Sistemas de reúso (água cinza)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Isolamento Térmico",
    item: "Manta térmica (para tubos de água quente)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Isolamento Térmico",
    item: "Espuma expansiva (para evitar condensação)",
    descricao: "Produção e processamento",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Controle e Medição",
    item: "Hidrômetros (individual ou geral)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Controle e Medição",
    item: "Pressurizadores",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Controle e Medição",
    item: "Redutores de pressão",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Ferramentas e Instalação",
    item: "Cortador de tubos (para PVC, cobre)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 1
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Ferramentas e Instalação",
    item: "Solda para cobre (maçarico e solda capilar)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Ferramentas e Instalação",
    item: "Ferramentas de termofusão (PPR)",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Ferramentas e Instalação",
    item: "Fita veda-rosca",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 0.2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Ferramentas e Instalação",
    item: "Cola para PVC",
    descricao: "Produção e processamento",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Água fria e quente",
    tipo: "Normas e Testes",
    item: "Teste de pressão (para verificar vazamentos)",
    descricao: "Verificação de Eficácia",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "PVC soldável (branco ou marrom, para esgoto interno)",
    descricao: "Água incorporada na produção",
    unidade: "kg",
    consumoPorUnidade: 2.7
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "PVC rígido (laranja, para esgoto externo)",
    descricao: "Água incorporada na produção",
    unidade: "kg",
    consumoPorUnidade: 2.7
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "PVC corrugado (flexível, para enterramento)",
    descricao: "Água incorporada na produção",
    unidade: "kg",
    consumoPorUnidade: 2.7
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "PPR (para esgoto quente, como em cozinhas industriais)",
    descricao: "Água incorporada na produção",
    unidade: "kg",
    consumoPorUnidade: 3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "Ferro fundido (para sistemas prediais e hospitalares)",
    descricao: "Água incorporada na produção",
    unidade: "kg",
    consumoPorUnidade: 4
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "Concreto armado (para redes públicas e galerias)",
    descricao: "Água incorporada na produção e cura",
    unidade: "m³",
    consumoPorUnidade: 180
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tubos e Conexões para Esgoto",
    item: "PEAD (polietileno de alta densidade, para grandes diâmetros)",
    descricao: "Água incorporada na produção",
    unidade: "kg",
    consumoPorUnidade: 2.7
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Joelhos 90° e 45° (para mudanças de direção)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Tês e cruzetas (para derivações)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.6
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Luvas de redução (para adaptação de diâmetros)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.4
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Válvulas de retenção (evitar refluxo)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 1.2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Caixas de gordura (PVC ou concreto)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Caixas de inspeção (com tampa removível)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 12
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Sifões (para lavatórios, pias e ralos)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Conexões e Acessórios para Esgoto",
    item: "Anéis de vedação (para junções)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.1
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Calhas (PVC, alumínio, galvanizado ou cobre)",
    descricao: "Água incorporada na produção",
    unidade: "metro",
    consumoPorUnidade: 1.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Condutores verticais (tubos de PVC ou metal)",
    descricao: "Água incorporada na produção",
    unidade: "metro",
    consumoPorUnidade: 1.8
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Ralos e grelhas (inox, ferro fundido ou plástico)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.7
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Caixas de passagem (para coleta de água)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Poços de visita (concreto ou plástico)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Dispositivos de retenção (para controle de vazão)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 20
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Sistemas de Águas Pluviais",
    item: "Drenos franceses (com brita e geotêxtil)",
    descricao: "Água incorporada na produção",
    unidade: "metro",
    consumoPorUnidade: 5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Fossa séptica (concreto ou fibra de vidro)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 800
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Filtro anaeróbio (com pedras e areia)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 500
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Sumidouro (para infiltração no solo)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 300
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Estação de tratamento compacta (ETE)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 1000
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Clorador (para desinfecção final)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Sistemas de Drenagem",
    descricao: "Água incorporada na produção",
    unidade: "sistema",
    consumoPorUnidade: 2000
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Tubos perfurados (para drenagem subterrânea)",
    descricao: "Água incorporada na produção",
    unidade: "metro",
    consumoPorUnidade: 3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Mantas drenantes (geotêxtil + agregado)",
    descricao: "Água incorporada na produção",
    unidade: "metro",
    consumoPorUnidade: 2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Sarjetas e canaletas (concreto ou plástico)",
    descricao: "Água incorporada na produção",
    unidade: "metro",
    consumoPorUnidade: 20
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Tratamento de Esgoto",
    item: "Bocas-de-lobo (com grelha metálica)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Equipamentos e Ferramentas",
    item: "Desentupidor (manual ou hidráulico)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.2
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Equipamentos e Ferramentas",
    item: "Máquina de limpeza de tubos (elétrica)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 1.5
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Equipamentos e Ferramentas",
    item: "Cortador de PVC (para ajustes precisos)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.3
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Equipamentos e Ferramentas",
    item: "Nível a laser (para verificar inclinação)",
    descricao: "Água incorporada na produção",
    unidade: "unidade",
    consumoPorUnidade: 0.1
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Normas e Testes",
    item: "Teste de estanqueidade (com água ou ar comprimido)",
    descricao: "Água utilizada no teste",
    unidade: "metro",
    consumoPorUnidade: 10
  },
  {
    categoria: "Hidrossanitários",
    subcategoria: "Esgoto e Águas Pluviais",
    tipo: "Normas e Testes",
    item: "Teste de declividade (mínimo 1% para esgoto)",
    descricao: "Água utilizada no teste",
    unidade: "metro",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo PP (PVC/PVC)",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo PX (PVC/XLPE)",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 35
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo EPR (Borcha EPR)",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo RV (Vinil Flexível)",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo RVV (Vinil Flexível Multipolar)",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 28
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo Coaxial (TV e Telecomunicações)",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Condutores e Cabos",
    item: "Cabo de Fibra Óptica",
    descricao: "Fabricação de cabos",
    unidade: "unidade",
    consumoPorUnidade: 45
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Eletroduto PVC rígido",
    descricao: "Fabricação de tubos e cabos",
    unidade: "metro",
    consumoPorUnidade: 50
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Eletroduto PVC flexível",
    descricao: "Fabricação de tubos e cabos",
    unidade: "metro",
    consumoPorUnidade: 55
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Eletroduto metálico (EMT)",
    descricao: "Fabricação de tubos metálicos",
    unidade: "metro",
    consumoPorUnidade: 80
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Eletroduto corrugado",
    descricao: "Fabricação de tubos e cabos",
    unidade: "metro",
    consumoPorUnidade: 60
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Canaleta plástica",
    descricao: "Fabricação de canaletas",
    unidade: "metro",
    consumoPorUnidade: 45
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Canaleta metálica",
    descricao: "Fabricação de canaletas",
    unidade: "metro",
    consumoPorUnidade: 70
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Eletrodutos e Canaletas",
    item: "Calha de cabos",
    descricao: "Fabricação de canaletas",
    unidade: "metro",
    consumoPorUnidade: 85
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "Disjuntor monopolar",
    descricao: "Fabricação de disjuntores",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "Disjuntor bipolar",
    descricao: "Fabricação de disjuntores",
    unidade: "unidade",
    consumoPorUnidade: 20
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "Disjuntor tripolar",
    descricao: "Fabricação de disjuntores",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "Disjuntor DR (Diferencial Residual)",
    descricao: "Fabricação de disjuntores",
    unidade: "unidade",
    consumoPorUnidade: 18
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "DPS (Dispositivo de Proteção contra Surtos)",
    descricao: "Fabricação de dispositivos",
    unidade: "unidade",
    consumoPorUnidade: 12
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "Fusíveis NH e Diazed",
    descricao: "Fabricação de fusíveis",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Dispositivos de Proteção",
    item: "IDR (Interdiferencial Residual)",
    descricao: "Fabricação de disjuntores",
    unidade: "unidade",
    consumoPorUnidade: 18
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Quadros e Painéis",
    item: "Quadro de distribuição",
    descricao: "Fabricação de quadros",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Quadros e Painéis",
    item: "Painel elétrico industrial",
    descricao: "Fabricação de painéis elétricos",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Quadros e Painéis",
    item: "Quadro de medição",
    descricao: "Fabricação de painéis",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Quadros e Painéis",
    item: "Quadro de comando",
    descricao: "Fabricação de painéis",
    unidade: "unidade",
    consumoPorUnidade: 55
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Quadros e Painéis",
    item: "Gabinete para equipamentos",
    descricao: "Fabricação de gabinetes",
    unidade: "unidade",
    consumoPorUnidade: 70
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Tomada 10A",
    descricao: "Fabricação de tomadas",
    unidade: "unidade",
    consumoPorUnidade: 8
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Tomada 20A",
    descricao: "Fabricação de tomadas",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Tomada USB",
    descricao: "Fabricação de tomadas",
    unidade: "unidade",
    consumoPorUnidade: 12
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Interruptor simples",
    descricao: "Fabricação de interruptores",
    unidade: "unidade",
    consumoPorUnidade: 6
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Interruptor paralelo",
    descricao: "Fabricação de interruptores",
    unidade: "unidade",
    consumoPorUnidade: 8
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Interruptor three-way",
    descricao: "Fabricação de interruptores",
    unidade: "unidade",
    consumoPorUnidade: 8
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tomadas e Interruptores",
    item: "Dimmer",
    descricao: "Fabricação de interruptores",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Iluminação",
    item: "Luminária LED embutida",
    descricao: "Fabricação de luminárias",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Iluminação",
    item: "Luminária de emergência",
    descricao: "Fabricação de luminárias",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Iluminação",
    item: "Projetor LED",
    descricao: "Fabricação de luminárias",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Iluminação",
    item: "Fita de LED",
    descricao: "Fabricação de fitas de LED",
    unidade: "metro",
    consumoPorUnidade: 15
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Iluminação",
    item: "Arandelas",
    descricao: "Fabricação de luminárias",
    unidade: "unidade",
    consumoPorUnidade: 35
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Iluminação",
    item: "Plafons",
    descricao: "Fabricação de luminárias",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Rack 19\"",
    descricao: "Fabricação de racks",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Patch Panel",
    descricao: "Fabricação de painéis de telecomunicações",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Switch",
    descricao: "Fabricação de switches",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Roteador",
    descricao: "Fabricação de roteadores",
    unidade: "unidade",
    consumoPorUnidade: 20
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Ponto de rede RJ45",
    descricao: "Fabricação de pontos de rede",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Ponto telefônico RJ11",
    descricao: "Fabricação de pontos de telefone",
    unidade: "unidade",
    consumoPorUnidade: 6
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Infraestrutura de Telecomunicações",
    item: "Central PABX",
    descricao: "Fabricação de PABX",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Especiais",
    item: "SPDA (Para-raios)",
    descricao: "Fabricação de sistemas de proteção",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Especiais",
    item: "Aterramento elétrico",
    descricao: "Fabricação de sistemas de aterramento",
    unidade: "unidade",
    consumoPorUnidade: 70
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Especiais",
    item: "No-break",
    descricao: "Fabricação de no-breaks",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Especiais",
    item: "Estabilizador",
    descricao: "Fabricação de estabilizadores",
    unidade: "unidade",
    consumoPorUnidade: 90
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Especiais",
    item: "Gerador de energia",
    descricao: "Fabricação de geradores",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Especiais",
    item: "Sistema de automação",
    descricao: "Fabricação de sistemas de automação",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Ferramentas e Equipamentos",
    item: "Alicate amperímetro",
    descricao: "Fabricação de ferramentas",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Ferramentas e Equipamentos",
    item: "Teste de continuidade",
    descricao: "Fabricação de ferramentas",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Ferramentas e Equipamentos",
    item: "Multímetro digital",
    descricao: "Fabricação de multímetros",
    unidade: "unidade",
    consumoPorUnidade: 20
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Ferramentas e Equipamentos",
    item: "Crimpador para conectores",
    descricao: "Fabricação de ferramentas",
    unidade: "unidade",
    consumoPorUnidade: 12
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Ferramentas e Equipamentos",
    item: "Lanterna de inspeção",
    descricao: "Fabricação de lanternas",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Ferramentas e Equipamentos",
    item: "Detector de tensão",
    descricao: "Fabricação de detectores de tensão",
    unidade: "unidade",
    consumoPorUnidade: 18
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Normas e Testes",
    item: "Teste de continuidade",
    descricao: "Testes de equipamentos",
    unidade: "unidade",
    consumoPorUnidade: 8
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Normas e Testes",
    item: "Teste de isolação",
    descricao: "Testes de equipamentos",
    unidade: "unidade",
    consumoPorUnidade: 12
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Normas e Testes",
    item: "Medição de aterramento",
    descricao: "Testes de aterramento",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Componentes Complementares",
    item: "Caixa de passagem",
    descricao: "Fabricação de caixas",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Componentes Complementares",
    item: "Caixa de derivação",
    descricao: "Fabricação de caixas",
    unidade: "unidade",
    consumoPorUnidade: 6
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Componentes Complementares",
    item: "Conectores rápidos",
    descricao: "Fabricação de conectores",
    unidade: "unidade",
    consumoPorUnidade: 3
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Componentes Complementares",
    item: "Fita isolante",
    descricao: "Fabricação de fitas isolantes",
    unidade: "unidade",
    consumoPorUnidade: 2
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Componentes Complementares",
    item: "Terminal de cabo",
    descricao: "Fabricação de terminais de cabo",
    unidade: "unidade",
    consumoPorUnidade: 4
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Componentes Complementares",
    item: "Luva de redução",
    descricao: "Fabricação de luvas de redução",
    unidade: "unidade",
    consumoPorUnidade: 5
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Inteligentes",
    item: "Automação residencial",
    descricao: "Fabricação de sistemas de automação",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Inteligentes",
    item: "Iluminação inteligente",
    descricao: "Fabricação de sistemas de iluminação",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Inteligentes",
    item: "Controle de energia",
    descricao: "Fabricação de sistemas de controle",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Sistemas Inteligentes",
    item: "Monitoramento remoto",
    descricao: "Fabricação de sistemas de monitoramento",
    unidade: "unidade",
    consumoPorUnidade: 35
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Manutenção",
    item: "Inspeção termográfica",
    descricao: "Inspeção em sistemas elétricos",
    unidade: "serviço",
    consumoPorUnidade: 100
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Manutenção",
    item: "Limpeza de quadros",
    descricao: "Manutenção de equipamentos",
    unidade: "serviço",
    consumoPorUnidade: 50
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Manutenção",
    item: "Substituição de componentes",
    descricao: "Manutenção de equipamentos",
    unidade: "serviço",
    consumoPorUnidade: 80
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Manutenção",
    item: "Atualização de circuitos",
    descricao: "Manutenção de sistemas elétricos",
    unidade: "serviço",
    consumoPorUnidade: 75
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tendências",
    item: "Energia solar fotovoltaica",
    descricao: "Instalação de sistemas solares",
    unidade: "unidade",
    consumoPorUnidade: 500
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tendências",
    item: "Carregadores para veículos elétricos",
    descricao: "Fabricação de carregadores",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tendências",
    item: "Sistemas de armazenamento de energia",
    descricao: "Instalação de sistemas de armazenamento",
    unidade: "unidade",
    consumoPorUnidade: 200
  },
  {
    categoria: "Elétrica e infraestrutura",
    subcategoria: "Instalações",
    tipo: "Tendências",
    item: "Redes inteligentes (smart grid)",
    descricao: "Desenvolvimento de sistemas",
    unidade: "unidade",
    consumoPorUnidade: 300
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Tapumes e Cercamentos",
    item: "Tapumes de madeira",
    descricao: "Fabricação de tapumes",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Tapumes e Cercamentos",
    item: "Tapumes metálicos",
    descricao: "Fabricação de tapumes metálicos",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Tapumes e Cercamentos",
    item: "Tapumes de alvenaria",
    descricao: "Fabricação de tapumes",
    unidade: "unidade",
    consumoPorUnidade: 120
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Tapumes e Cercamentos",
    item: "Cercas plásticas",
    descricao: "Fabricação de cercas plásticas",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Tapumes e Cercamentos",
    item: "Placas de sinalização",
    descricao: "Fabricação de placas",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Galpões e Almoxarifados",
    item: "Containers",
    descricao: "Fabricação de containers",
    unidade: "unidade",
    consumoPorUnidade: 200
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Galpões e Almoxarifados",
    item: "Galpões pré-fabricados",
    descricao: "Fabricação de galpões",
    unidade: "unidade",
    consumoPorUnidade: 300
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Galpões e Almoxarifados",
    item: "Barracões de obra",
    descricao: "Fabricação de barracões",
    unidade: "unidade",
    consumoPorUnidade: 350
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Infraestrutura Básica",
    tipo: "Galpões e Almoxarifados",
    item: "Tendas e coberturas",
    descricao: "Fabricação de tendas",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Banheiros",
    item: "Banheiros químicos",
    descricao: "Fabricação de banheiros",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Banheiros",
    item: "Banheiros pré-fabricados",
    descricao: "Fabricação de banheiros",
    unidade: "unidade",
    consumoPorUnidade: 90
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Banheiros",
    item: "Lavatórios temporários",
    descricao: "Fabricação de lavatórios",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Água Potável",
    item: "Bebedouros temporários",
    descricao: "Instalação de bebedouros",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Água Potável",
    item: "Reservatórios de água",
    descricao: "Instalação de reservatórios",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Água Potável",
    item: "Caixas d'água plásticas",
    descricao: "Fabricação de caixas d'água",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Esgoto Temporário",
    item: "Fossas sépticas temporárias",
    descricao: "Instalação de fossas",
    unidade: "unidade",
    consumoPorUnidade: 120
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Esgoto Temporário",
    item: "Caixas de gordura provisórias",
    descricao: "Instalação de caixas de gordura",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Hidrossanitárias Temporárias",
    tipo: "Esgoto Temporário",
    item: "Tubulações PVC para esgoto",
    descricao: "Instalação de tubulações",
    unidade: "metro",
    consumoPorUnidade: 50
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Elétricas Temporárias",
    tipo: "Distribuição de Energia",
    item: "Quadros de distribuição provisórios",
    descricao: "Fabricação de quadros",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Elétricas Temporárias",
    tipo: "Distribuição de Energia",
    item: "Postes de iluminação temporários",
    descricao: "Fabricação de postes",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Elétricas Temporárias",
    tipo: "Distribuição de Energia",
    item: "Geradores de energia",
    descricao: "Fabricação de geradores",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Elétricas Temporárias",
    tipo: "Iluminação",
    item: "Projetores LED temporários",
    descricao: "Fabricação de projetores",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Elétricas Temporárias",
    tipo: "Iluminação",
    item: "Luminárias de emergência",
    descricao: "Fabricação de luminárias",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Elétricas Temporárias",
    tipo: "Iluminação",
    item: "Fios e cabos temporários",
    descricao: "Fabricação de fios e cabos",
    unidade: "metro",
    consumoPorUnidade: 25
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações de Segurança",
    tipo: "Proteção Coletiva",
    item: "Guarda-corpos",
    descricao: "Fabricação de guarda-corpos",
    unidade: "unidade",
    consumoPorUnidade: 20
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações de Segurança",
    tipo: "Proteção Coletiva",
    item: "Telas de proteção",
    descricao: "Fabricação de telas",
    unidade: "metro",
    consumoPorUnidade: 40
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações de Segurança",
    tipo: "Proteção Coletiva",
    item: "Redes de segurança",
    descricao: "Fabricação de redes",
    unidade: "metro",
    consumoPorUnidade: 45
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações de Segurança",
    tipo: "Sinalização",
    item: "Placas de advertência",
    descricao: "Fabricação de placas",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações de Segurança",
    tipo: "Sinalização",
    item: "Faixas de delimitação",
    descricao: "Fabricação de faixas",
    unidade: "metro",
    consumoPorUnidade: 10
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações de Segurança",
    tipo: "Sinalização",
    item: "Sinalização luminosa",
    descricao: "Fabricação de sinalização",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Administrativas",
    tipo: "Escritórios",
    item: "Containers office",
    descricao: "Instalação de containers",
    unidade: "unidade",
    consumoPorUnidade: 200
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Administrativas",
    tipo: "Escritórios",
    item: "Móveis temporários",
    descricao: "Fabricação de móveis",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Administrativas",
    tipo: "Escritórios",
    item: "Equipamentos de informática",
    descricao: "Fabricação de equipamentos",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Administrativas",
    tipo: "Vestiários",
    item: "Vestiários provisórios",
    descricao: "Fabricação de vestiários",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Administrativas",
    tipo: "Vestiários",
    item: "Armários temporários",
    descricao: "Fabricação de armários",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Instalações Administrativas",
    tipo: "Vestiários",
    item: "Bancos e mesas",
    descricao: "Fabricação de bancos e mesas",
    unidade: "unidade",
    consumoPorUnidade: 20
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Áreas de Apoio",
    tipo: "Refeitórios",
    item: "Cozinha temporária",
    descricao: "Instalação de cozinhas",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Áreas de Apoio",
    tipo: "Refeitórios",
    item: "Mesas e cadeiras",
    descricao: "Fabricação de mesas e cadeiras",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Áreas de Apoio",
    tipo: "Refeitórios",
    item: "Pias e lavatórios",
    descricao: "Instalação de pias e lavatórios",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Áreas de Apoio",
    tipo: "Áreas de Descanso",
    item: "Bancos e cadeiras",
    descricao: "Fabricação de bancos e cadeiras",
    unidade: "unidade",
    consumoPorUnidade: 25
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Áreas de Apoio",
    tipo: "Áreas de Descanso",
    item: "Bebedouros",
    descricao: "Instalação de bebedouros",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Áreas de Apoio",
    tipo: "Áreas de Descanso",
    item: "Lixeiras",
    descricao: "Fabricação de lixeiras",
    unidade: "unidade",
    consumoPorUnidade: 10
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Equipamentos de Canteiro",
    tipo: "Armazenamento",
    item: "Caçambas estacionárias",
    descricao: "Fabricação de caçambas",
    unidade: "unidade",
    consumoPorUnidade: 250
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Equipamentos de Canteiro",
    tipo: "Armazenamento",
    item: "Caixas organizadoras",
    descricao: "Fabricação de caixas",
    unidade: "unidade",
    consumoPorUnidade: 40
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Equipamentos de Canteiro",
    tipo: "Armazenamento",
    item: "Paletes",
    descricao: "Fabricação de paletes",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Equipamentos de Canteiro",
    tipo: "Movimentação",
    item: "Rampas provisórias",
    descricao: "Fabricação de rampas",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Equipamentos de Canteiro",
    tipo: "Movimentação",
    item: "Passarelas",
    descricao: "Fabricação de passarelas",
    unidade: "unidade",
    consumoPorUnidade: 100
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Equipamentos de Canteiro",
    tipo: "Movimentação",
    item: "Plataformas",
    descricao: "Fabricação de plataformas",
    unidade: "unidade",
    consumoPorUnidade: 150
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Proteção Ambiental",
    tipo: "Contenção de Resíduos",
    item: "Caçambas para entulho",
    descricao: "Fabricação de caçambas",
    unidade: "unidade",
    consumoPorUnidade: 200
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Proteção Ambiental",
    tipo: "Contenção de Resíduos",
    item: "Lixeiras seletivas",
    descricao: "Fabricação de lixeiras",
    unidade: "unidade",
    consumoPorUnidade: 50
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Proteção Ambiental",
    tipo: "Contenção de Resíduos",
    item: "Filtros para água de lavagem",
    descricao: "Fabricação de filtros",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Proteção Ambiental",
    tipo: "Controle de Poeira",
    item: "Nebulizadores",
    descricao: "Fabricação de nebulizadores",
    unidade: "unidade",
    consumoPorUnidade: 35
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Proteção Ambiental",
    tipo: "Controle de Poeira",
    item: "Aspersores",
    descricao: "Fabricação de aspersores",
    unidade: "unidade",
    consumoPorUnidade: 30
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Proteção Ambiental",
    tipo: "Controle de Poeira",
    item: "Lonas de cobertura",
    descricao: "Fabricação de lonas",
    unidade: "metro",
    consumoPorUnidade: 50
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Manutenção",
    tipo: "Limpeza",
    item: "Equipamentos de limpeza",
    descricao: "Fabricação de equipamentos",
    unidade: "unidade",
    consumoPorUnidade: 60
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Manutenção",
    tipo: "Limpeza",
    item: "Pás e vassouras",
    descricao: "Fabricação de pás e vassouras",
    unidade: "unidade",
    consumoPorUnidade: 15
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Manutenção",
    tipo: "Limpeza",
    item: "Carros de mão",
    descricao: "Fabricação de carros de mão",
    unidade: "unidade",
    consumoPorUnidade: 80
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Manutenção",
    tipo: "Conservação",
    item: "Tintas para marcação",
    descricao: "Limpeza de equipamentos e ferramentas",
    unidade: "L",
    consumoPorUnidade: 5
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Manutenção",
    tipo: "Conservação",
    item: "Ferramentas de reparo",
    descricao: "Limpeza de equipamentos",
    unidade: "L",
    consumoPorUnidade: 10
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Manutenção",
    tipo: "Conservação",
    item: "Materiais de reposição",
    descricao: "Limpeza e conservação",
    unidade: "L",
    consumoPorUnidade: 3
  },
  {
    categoria: "Canteiro de obras",
    subcategoria: "Desmobilização",
    tipo: "Plano de Desmontagem",
    item: "Limpeza final",
    descricao: "Lavagem de áreas",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Corte de grama e vegetação rasteira",
    descricao: "Irrigação e limpeza de equipamentos",
    unidade: "m²",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Roçagem manual e mecânica",
    descricao: "Irrigação e limpeza de equipamentos",
    unidade: "m²",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Destoca (remoção de raízes e tocos)",
    descricao: "Limpeza de equipamentos",
    unidade: "un",
    consumoPorUnidade: 15
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Desmatamento de árvores",
    descricao: "Limpeza de equipamentos",
    unidade: "un",
    consumoPorUnidade: 20
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Poda de árvores preservadas",
    descricao: "Limpeza de equipamentos e irrigação",
    unidade: "un",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Remoção de lixo e entulho",
    descricao: "Lavagem de áreas e equipamentos",
    unidade: "m³",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Coleta seletiva de materiais recicláveis",
    descricao: "Lavagem de materiais",
    unidade: "kg",
    consumoPorUnidade: 0.2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Limpeza e Desmatamento",
    item: "Destinação de resíduos vegetais",
    descricao: "Lavagem de equipamentos",
    unidade: "m³",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Escavação manual",
    descricao: "Limpeza de ferramentas",
    unidade: "m³",
    consumoPorUnidade: 5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Escavação mecânica",
    descricao: "Limpeza de máquinas",
    unidade: "m³",
    consumoPorUnidade: 8
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Corte de terra",
    descricao: "Supressão de poeira",
    unidade: "m³",
    consumoPorUnidade: 1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Aterro compactado",
    descricao: "Compactação e umidificação",
    unidade: "m³",
    consumoPorUnidade: 4
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Nivelamento do terreno",
    descricao: "Supressão de poeira",
    unidade: "m²",
    consumoPorUnidade: 0.3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Compactação do solo",
    descricao: "Umidificação do solo",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Regularização de superfície",
    descricao: "Supressão de poeira",
    unidade: "m²",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Terraplenagem",
    item: "Transporte de terra",
    descricao: "Lavagem de caminhões",
    unidade: "m³",
    consumoPorUnidade: 6
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Abertura de valetas",
    descricao: "Limpeza de ferramentas e equipamentos",
    unidade: "m",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Instalação de sarjetas",
    descricao: "Limpeza de materiais e ferramentas",
    unidade: "m",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Construção de poços de infiltração",
    descricao: "Lavagem de agregados",
    unidade: "un",
    consumoPorUnidade: 50
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Colocação de tubos de drenagem",
    descricao: "Limpeza de tubos e ferramentas",
    unidade: "m",
    consumoPorUnidade: 1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Bombeamento de água acumulada",
    descricao: "Tratamento de água",
    unidade: "m³",
    consumoPorUnidade: 1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Contenção contra erosão",
    descricao: "Preparação de misturas (ex.: solo-cimento)",
    unidade: "m²",
    consumoPorUnidade: 1.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Aplicação de manta geotêxtil",
    descricao: "Limpeza de áreas",
    unidade: "m²",
    consumoPorUnidade: 0.2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Drenagem Preliminar",
    item: "Construção de barreiras de sedimentos",
    descricao: "Lavagem de materiais",
    unidade: "m",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Realização de sondagem SPT",
    descricao: "Lavagem de equipamentos e amostras",
    unidade: "m",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Coleta de amostras de solo",
    descricao: "Lavagem de amostras e ferramentas",
    unidade: "un",
    consumoPorUnidade: 5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Ensaio de compactação",
    descricao: "Umidificação do solo para ensaio",
    unidade: "un",
    consumoPorUnidade: 15
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Análise granulométrica",
    descricao: "Lavagem de amostras",
    unidade: "un",
    consumoPorUnidade: 8
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Teste de permeabilidade",
    descricao: "Saturação de amostras",
    unidade: "un",
    consumoPorUnidade: 20
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Ensaio de CBR",
    descricao: "Umidificação do solo",
    unidade: "un",
    consumoPorUnidade: 12
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Determinação do teor de umidade",
    descricao: "Secagem e umidificação controlada",
    unidade: "un",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Sondagem do Solo",
    item: "Avaliação da capacidade de suporte",
    descricao: "Preparação de corpos de prova",
    unidade: "un",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Demolição de estruturas existentes",
    descricao: "Supressão de poeira e limpeza de equip.",
    unidade: "m²",
    consumoPorUnidade: 5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Remoção de fundações antigas",
    descricao: "Lavagem de equipamentos e supressão",
    unidade: "m³",
    consumoPorUnidade: 8
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Retirada de pavimentos",
    descricao: "Supressão de poeira",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Desmontagem de redes enterradas",
    descricao: "Limpeza de tubos e ferramentas",
    unidade: "m",
    consumoPorUnidade: 4
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Remoção de obstáculos subterrâneos",
    descricao: "Lavagem de equipamentos",
    unidade: "un",
    consumoPorUnidade: 6
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Descontaminação de solo",
    descricao: "Lavagem de áreas e equipamentos",
    unidade: "m²",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Tratamento de áreas contaminadas",
    descricao: "Lavagem e diluição de contaminantes",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Demolições e Remoções",
    item: "Destinação de resíduos de demolição",
    descricao: "Lavagem de caminhões e equipamentos",
    unidade: "m³",
    consumoPorUnidade: 7
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Locação da obra",
    descricao: "Limpeza de instrumentos topográficos",
    unidade: "un",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Marcação de limites",
    descricao: "Limpeza de equipamentos",
    unidade: "m",
    consumoPorUnidade: 1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Estaqueamento",
    descricao: "Limpeza de estacas e ferramentas",
    unidade: "un",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Nivelamento topográfico",
    descricao: "Limpeza de equipamentos",
    unidade: "m²",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Implantação de referências",
    descricao: "Limpeza de materiais",
    unidade: "un",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Proteção de árvores preservadas",
    descricao: "Irrigação temporária",
    unidade: "un",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Instalação de canteiro provisório",
    descricao: "Limpeza de áreas e equipamentos",
    unidade: "m²",
    consumoPorUnidade: 4
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Serviços Complementares",
    item: "Montagem de tapumes e cercas",
    descricao: "Limpeza de materiais",
    unidade: "m",
    consumoPorUnidade: 1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Tratores esteira",
    descricao: "Lavagem de equipamentos",
    unidade: "h",
    consumoPorUnidade: 20
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Retroescavadeiras",
    descricao: "Lavagem de equipamentos",
    unidade: "h",
    consumoPorUnidade: 15
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Motoniveladoras",
    descricao: "Lavagem de equipamentos",
    unidade: "h",
    consumoPorUnidade: 12
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Patrolas",
    descricao: "Lavagem de equipamentos",
    unidade: "h",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Rolo compactador",
    descricao: "Lavagem de equipamentos",
    unidade: "h",
    consumoPorUnidade: 8
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Caminhões basculantes",
    descricao: "Lavagem de caçambas",
    unidade: "h",
    consumoPorUnidade: 25
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Marteletes hidráulicos",
    descricao: "Limpeza de equipamentos",
    unidade: "h",
    consumoPorUnidade: 5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Preparação do terreno",
    tipo: "Equipamentos Utilizados",
    item: "Bombas de água",
    descricao: "Consumo operacional",
    unidade: "h",
    consumoPorUnidade: 30
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Roçagem de grama e vegetação rasteira",
    descricao: "Limpeza de equipamentos e irrigação",
    unidade: "m²",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Capina manual de ervas daninhas",
    descricao: "Limpeza de ferramentas",
    unidade: "m²",
    consumoPorUnidade: 0.3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Remoção de arbustos e pequenas plantas",
    descricao: "Limpeza de equipamentos",
    unidade: "un",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Varrição e recolhimento de folhas secas",
    descricao: "Lavagem de áreas",
    unidade: "m²",
    consumoPorUnidade: 0.2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Coleta de lixo e detritos superficiais",
    descricao: "Lavagem de áreas",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Remoção de entulho solto",
    descricao: "Lavagem de equipamentos",
    unidade: "m³",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Limpeza de pequenos resíduos de construção",
    descricao: "Lavagem de áreas",
    unidade: "m²",
    consumoPorUnidade: 1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Superficial",
    item: "Varredura mecânica com sopradores",
    descricao: "Limpeza de equipamentos",
    unidade: "m²",
    consumoPorUnidade: 0.1
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Corte de árvores de pequeno porte",
    descricao: "Limpeza de equipamentos",
    unidade: "un",
    consumoPorUnidade: 5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Destoca (remoção de tocos e raízes)",
    descricao: "Lavagem de equipamentos",
    unidade: "un",
    consumoPorUnidade: 10
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Desmatamento de áreas arborizadas",
    descricao: "Supressão de poeira e limpeza de equip.",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Remoção de cercas e estruturas antigas",
    descricao: "Lavagem de equipamentos",
    unidade: "un",
    consumoPorUnidade: 4
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Retirada de pavimentos deteriorados",
    descricao: "Supressão de poeira",
    unidade: "m²",
    consumoPorUnidade: 3
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Demolição de pequenas construções",
    descricao: "Supressão de poeira e lavagem de equip.",
    unidade: "m²",
    consumoPorUnidade: 6
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Remoção de postes e fundações",
    descricao: "Lavagem de equipamentos",
    unidade: "un",
    consumoPorUnidade: 7
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Pesada",
    item: "Limpeza de terrenos baldios",
    descricao: "Lavagem de áreas",
    unidade: "m²",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Descontaminação de solo",
    descricao: "Lavagem de áreas e equipamentos",
    unidade: "m²",
    consumoPorUnidade: 12
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Remoção de resíduos perigosos",
    descricao: "Lavagem de EPIs e equipamentos",
    unidade: "kg",
    consumoPorUnidade: 5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Coleta de materiais recicláveis",
    descricao: "Lavagem de materiais",
    unidade: "kg",
    consumoPorUnidade: 0.5
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Separação de resíduos classe A, B, C",
    descricao: "Lavagem de áreas",
    unidade: "m³",
    consumoPorUnidade: 2
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Limpeza pós-demolição",
    descricao: "Lavagem de áreas e equipamentos",
    unidade: "m²",
    consumoPorUnidade: 8
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Remoção de amianto",
    descricao: "Lavagem de EPIs e contenção",
    unidade: "m²",
    consumoPorUnidade: 15
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Tratamento de áreas contaminadas",
    descricao: "Lavagem e diluição de contaminantes",
    unidade: "m²",
    consumoPorUnidade: 20
  },
  {
    categoria: "Processos construtivos",
    subcategoria: "Limpeza de áreas",
    tipo: "Limpeza Especializada",
    item: "Desinsetização e desratização",
    descricao: "Preparação de soluções químicas",
    unidade: "m²",
    consumoPorUnidade: 0.3
  }
    
  ];
  
  // Exportando os dados para uso em outros arquivos JS
  export default waterFootprintData;