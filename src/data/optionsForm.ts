export const DataTypeSS = [
    {value: "1", label: "Adequação"},
    {value: "2", label: "Cadastro"},
    {value: "3", label: "Dúvida"},
    {value: "4", label: "Erro"},
    {value: "5", label: "Personalização"},
];

export const DataTypeUrgency = [
    {value: "1", label: "Pode esperar"},
    {value: "2", label: "Pouco urgente"},
    {value: "3", label: "O mais rápido possível"},
    {value: "4", label: "É urgente"},
    {value: "5", label: "Necessita ação imediata"},
];

export const DataTrend = [
    {value: "1", label: "Não irá piorar"},
    {value: "2", label: "Irá piorar a longo prazo"},
    {value: "3", label: "Irá piorar a médio prazo"},
    {value: "4", label: "Irá piorar a em pouco tempo"},
    {value: "5", label: "Irá piorar rapidamente"},
];

export const DataApplicant = [
    {value: "1", label: "Empresa"},
    {value: "2", label: "Pessoa física"},
    {value: "3", label: "Outro"},
];

export const DataLocation = [
    {value: "1", label: "Local de trabalho"},
    {value: "2", label: "Local de residência"},
    {value: "3", label: "Outro"},
];

export const DataHeritage = [
    {value: "1", label: "Patrimônio"},
    {value: "2", label: "Documento"},
    {value: "3", label: "Outro"},
    {value: "4", label: "Patrimônio 2"},
    {value: "5", label: "Patrimônio 3"},
    {value: "6", label: "Patrimônio 4"},
    {value: "7", label: "Patrimônio 5"},
];

export const DataCategory = [
    {value: "1", label: "Tecnologia da Informação"},
    {value: "2", label: "Projeto"},
    {value: "3", label: "IoT"},
    {value: "4", label: "Projetos Especiais"},
    {value: "5", label: "Administrativo"},
    {value: "6", label: "Patrimonial"},
    {value: "7", label: "Customer Success"},
];

export const DataCustomerService = [
    {value: "1", label: "Atendimento ao cliente"},
    {value: "2", label: "Interno"},
    {value: "3", label: "Manutenção"},
    {value: "4", label: "Reparo"},
    {value: "5", label: "Serviço"},
];

export const DataEvolitionInitial = [
    {value: "1", label: "Chamado Aberto"},
    {value: "2", label: "Em Espera"},
    {value: "3", label: "Aguardando Técnico"},
];

export const DataSS = [
    {
        idSS: 6522002,
        typeSS: "LIMPEZA",
        category: "LIMPEZA",
        openBy: "Master - LUCAS MONTEIRO",
        openingDate: "14/11/2024 16:01",
        closingDate: "18/11/2024 8:53",
        branch: "METALURGICA",
        applicant: "SETOR A",
        location: "LP-001",
        typeEquip: "BANHEIRO",
        item: [
            {
                idEquip: 1221055,
                brand: "SEM MARCA",
                model: "SEM MODELO",
            },
        ],
        designatedTechnician: "TECNICO ELETRONICO",
        title: "*PLANO* LIMPEZA BANHEIRO MASCULINO",
        urgency: "PODE ESPERAR",
        evolution: "CONCLUÍDO",
        gut: 1,
        status: "ENCERRADA",
        openToApp: false,
        rescheduleDate: "14/11/2024 0:00",
    },
    {
        idSS: 6521798,
        typeSS: "LIMPEZA",
        category: "LIMPEZA",
        openBy: "Master - THIAGO GROSSE",
        openingDate: "14/11/2024 14:28",
        closingDate: "18/11/2024 8:53",
        branch: "METALURGICA",
        applicant: "SETOR A",
        location: "LP-001",
        typeEquip: "BANHEIRO",
        item: [
            {
                idEquip: 1221055,
                brand: "SEM MARCA",
                model: "SEM MODELO",
            },
        ],
        designatedTechnician: "TECNICO ELETRONICO",
        title: "*PLANO* LIMPEZA BANHEIRO MASCULINO",
        urgency: "PODE ESPERAR",
        evolution: "CONCLUÍDO",
        gut: 1,
        status: "ENCERRADA",
        openToApp: false,
        rescheduleDate: "14/11/2024 15:00",
    },
    {
        idSS: 6517241,
        typeSS: "MANUTENÇÃO DE SEGURANÇA",
        category: "METALÚRGICA",
        openBy: "TECNICO MECANICO",
        openingDate: "13/11/2024 14:58",
        closingDate: "EM BRANCO",
        branch: "METALURGICA",
        applicant: "SETOR A",
        location: "LP-001",
        typeEquip: "PRENSA HIDRAULICA",
        item: [
            {
                idEquip: 1219278,
                brand: "SEM MARCA",
                model: "SEM MODELO",
            },
        ],
        designatedTechnician: "TECNICO MECANICO",
        title: "*CONTROLE 31527* - PLANO: MANUTENCAO PROGRAMADA 500H - PRENSA HIDRAULICA",
        urgency: "NECESSITA AÇÃO IMEDIATA",
        evolution: "CONCLUÍDO",
        gut: 15,
        status: "ABERTA",
        openToApp: false,
        rescheduleDate: "19/11/2024 12:00",
    },
    {
        idSS: 6517240,
        typeSS: "MANUTENÇÃO DE SEGURANÇA",
        category: "METALÚRGICA",
        openBy: "TECNICO MECANICO",
        openingDate: "13/11/2024 14:58",
        closingDate: "18/11/2024 8:51",
        branch: "METALURGICA",
        applicant: "SETOR A",
        location: "LP-001",
        typeEquip: "PRENSA HIDRAULICA",
        item: [
            {
                idEquip: 1219278,
                brand: "SEM MARCA",
                model: "SEM MODELO",
            },
        ],
        designatedTechnician: "TECNICO MECANICO",
        title: "*CONTROLE 31527* - Plano: MANUTENCAO PROGRAMADA 500H - PRENSA HIDRAULICA",
        urgency: "NECESSITA AÇÃO IMEDIATA",
        evolution: "CONCLUÍDO",
        gut: 15,
        status: "ENCERRADA",
        openToApp: true,
        rescheduleDate: "18/11/2024 12:00",
    },
    {
        idSS: 6517239,
        typeSS: "CORRETIVA",
        category: "METALÚRGICA",
        openBy: "TECNICO MECANICO",
        openingDate: "13/11/2024 14:58",
        closingDate: "13/11/2024 15:03",
        branch: "METALURGICA",
        applicant: "SETOR A",
        location: "LP-001",
        typeEquip: "PRENSA HIDRAULICA",
        item: [
            {
                idEquip: 1219278,
                brand: "SEM MARCA",
                model: "SEM MODELO",
            },
        ],
        designatedTechnician: "TECNICO MECANICO",
        title: "TESTE DE ENCERRADA",
        urgency: "NECESSITA AÇÃO IMEDIATA",
        evolution: "CONCLUÍDO",
        gut: 15,
        status: "ENCERRADA",
        openToApp: true,
        rescheduleDate: "13/11/2024 14:58",
    },
];
