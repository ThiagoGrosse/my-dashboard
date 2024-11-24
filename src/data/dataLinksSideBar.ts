import {MenuItem} from "@/types/MenusTypes";
import {BadgeCheck, ChartCandlestick, ClipboardPen, Cog, Construction, Home} from "lucide-react";

export const items: MenuItem[] = [
    {
        // HOME
        id: 1,
        title: "Home",
        url: "",
        icon: Home,
    },
    {
        // SSs
        id: 2,
        title: "SS's",
        url: "#",
        icon: Construction,
        subMenu: [
            {
                id: 7,
                title: "Chamado",
                url: "/ss/chamado",
            },
            {
                id: 8,
                title: "Incluir SS",
                url: "/ss/incluir-ss",
            },
            {
                id: 9,
                title: "Listagem",
                url: "/ss/ss-listagem",
            },
        ],
    },
    {
        // CADASTRO
        id: 3,
        title: "Cadastro",
        url: "#",
        icon: ClipboardPen,
        subMenu: [
            {
                id: 10,
                title: "Patrimônio",
                url: "#",
                subMenu: [
                    {
                        id: 48,
                        title: "Listagem",
                        url: "/cadastro/patrimonio/listagem",
                    },
                    {
                        id: 49,
                        title: "Movimentações",
                        url: "/cadastro/patrimonio/movimentacoes",
                    },
                    {
                        id: 50,
                        title: "Árvore de Patrimônio",
                        url: "/cadastro/patrimonio/arvore-de-patrimonio",
                    },
                    {
                        id: 51,
                        title: "Inventário",
                        url: "/cadastro/patrimonio/inventario",
                    },
                    {
                        id: 52,
                        title: "SISMETRO IoT",
                        url: "/cadastro/patrimonio/sismetro-iot",
                    },
                    {
                        id: 53,
                        title: "Listener",
                        url: "/cadastro/patrimonio/listener",
                    },
                ],
            },
            {
                id: 11,
                title: "Solicitante",
                url: "/cadastro/solicitante",
            },
            {
                id: 12,
                title: "Localização",
                url: "/cadastro/localizacao",
            },
            {
                id: 13,
                title: "Usuários",
                url: "#",
                subMenu: [
                    {
                        id: 54,
                        title: "Listagem",
                        url: "/cadastro/usuarios/listagem",
                    },
                    {
                        id: 55,
                        title: "Ocupações",
                        url: "/cadastro/usuarios/ocupacoes",
                    },
                    {
                        id: 56,
                        title: "Funcionários",
                        url: "/cadastro/usuarios/funcionarios",
                    },
                    {
                        id: 57,
                        title: "Equipes",
                        url: "/cadastro/usuarios/equipes",
                    },
                    {
                        id: 58,
                        title: "Jornada de Trabalho",
                        url: "/cadastro/usuarios/jornada-de-trabalho",
                    },
                ],
            },
            {
                id: 14,
                title: "Produtos",
                url: "/cadastro/produtos",
            },
            {
                id: 15,
                title: "Serviços",
                url: "/cadastro/servicos",
            },
            {
                id: 16,
                title: "Fornecedores",
                url: "/cadastro/fornecedores",
            },
            {
                id: 17,
                title: "Projetos",
                url: "/cadastro/rojetos",
            },
            {
                id: 18,
                title: "Fases",
                url: "/cadastro/fases",
            },
            {
                id: 19,
                title: "Marcas",
                url: "/cadastro/marcas",
            },
            {
                id: 20,
                title: "Modelos",
                url: "/cadastro/modelos",
            },
            {
                id: 21,
                title: "Padrões",
                url: "/cadastro/padroes",
            },
            {
                id: 22,
                title: "Padrões FAC",
                url: "/cadastro/padroes-fac",
            },
        ],
    },
    {
        // CQ
        id: 4,
        title: "CQ",
        url: "#",
        icon: BadgeCheck,
        subMenu: [
            {
                id: 23,
                title: "Controles",
                url: "#",
                subMenu: [
                    {
                        id: 59,
                        title: "Listagem",
                        url: "/cq/controles/listagem",
                    },
                    {
                        id: 60,
                        title: "Fórmulas de Controles",
                        url: "/cq/controles/formulas-de-controles",
                    },
                    {
                        id: 61,
                        title: "Abastecimento",
                        url: "/cq/controles/abastecimento",
                    },
                    {
                        id: 62,
                        title: "Leituras Manuais",
                        url: "/cq/controles/leituras-manuais",
                    },
                    {
                        id: 63,
                        title: "Leituras Automáticas",
                        url: "/cq/controles/leituras-automaticas",
                    },
                ],
            },
            {
                id: 24,
                title: "Biblioteca",
                url: "#",
                subMenu: [
                    {
                        id: 64,
                        title: "Listagem",
                        url: "/cq/biblioteca/listagem",
                    },
                    {
                        id: 65,
                        title: "Categorias",
                        url: "/cq/biblioteca/categorias",
                    },
                ],
            },
            {
                id: 25,
                title: "Plano de Serviço",
                url: "#",
                subMenu: [
                    {
                        id: 66,
                        title: "Listagem",
                        url: "/cq/plano-de-servico/listagem",
                    },
                    {
                        id: 67,
                        title: "Análise Diária de Planos",
                        url: "/cq/plano-de-servico/analise-diaria-de-planos",
                    },
                    {
                        id: 68,
                        title: "Gestor de Parada de Planos",
                        url: "/cq/plano-de-servico/gestor-de-parada-de-planos",
                    },
                ],
            },
            {
                id: 26,
                title: "Gestor de Documentos",
                url: "#",
                subMenu: [
                    {
                        id: 69,
                        title: "Listagem",
                        url: "/cq/gestor-de-documentos/listagem",
                    },
                    {
                        id: 70,
                        title: "Categorias",
                        url: "/cq/gestor-de-documentos/categorias",
                    },
                ],
            },
        ],
    },
    {
        // ADM
        id: 5,
        title: "ADM",
        url: "#",
        icon: ChartCandlestick,
        subMenu: [
            {
                id: 27,
                title: "Unidades",
                url: "/adm/unidades",
            },
            {
                id: 28,
                title: "WebMaster",
                url: "/adm/webmaster",
            },
            {
                id: 29,
                title: "Perfil",
                url: "/adm/perfil",
            },
            {
                id: 30,
                title: "Direitos",
                url: "/adm/direitos",
            },
            {
                id: 31,
                title: "Tipo de Tecnologia",
                url: "/adm/tipo-de-tecnologia",
            },
            {
                id: 32,
                title: "Tipo de Medida",
                url: "/adm/tipo-de-medida",
            },
            {
                id: 33,
                title: "Manual",
                url: "/adm/manual",
            },
        ],
    },
    {
        // Configuração
        id: 6,
        title: "Configurações",
        url: "#",
        icon: Cog,
        subMenu: [
            {
                id: 34,
                title: "Perfil de Segurança",
                url: "/configuracoes/perfil-de-seguranca",
            },
            {
                id: 35,
                title: "Gestor de Garantia",
                url: "/configuracoes/gestor-de-garantia",
            },
            {
                id: 36,
                title: "Biblioteca de Respostas",
                url: "/configuracoes/biblioteca de respostas",
            },
            {
                id: 37,
                title: "Empresa",
                url: "/configuracoes/empresa",
            },
            {
                id: 38,
                title: "Filial",
                url: "/configuracoes/filial",
            },
            {
                id: 39,
                title: "Centro de Custo",
                url: "/configuracoes/centro-de-custo",
            },
            {
                id: 40,
                title: "Classes/Categorias",
                url: "/configuracoes/classes-categorias",
            },
            {
                id: 41,
                title: "Diagnóstico Itens",
                url: "/configuracoes/diagnostico-itens",
            },
            {
                id: 42,
                title: "Gestor de Medidas",
                url: "/configuracoes/gestor-de-medidas",
            },
            {
                id: 43,
                title: "Parametros da SS",
                url: "/configuracoes/parametros-da-ss",
            },
            {
                id: 44,
                title: "Tipos de Tecnologia",
                url: "/configuracoes/tipos-de-tecnologia",
            },
            {
                id: 45,
                title: "Importador",
                url: "/configuracoes/importador",
            },
            {
                id: 46,
                title: "Endpoints de Integração",
                url: "/configuracoes/endpoints-de-integracao",
            },
            {
                id: 47,
                title: "Consumo de Infraestrutura",
                url: "/configuracoes/consumo-de-infraestrutura",
            },
        ],
    },
];
