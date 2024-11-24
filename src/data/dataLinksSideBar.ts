import {MenuItem} from "@/types/MenusTypes";
import {BadgeCheck, ChartCandlestick, ClipboardPen, Cog, Construction, Home} from "lucide-react";

export const items: MenuItem[] = [
    {
        // HOME
        id: 1,
        title: "Home",
        url: "/",
        icon: Home,
        label: "Página principal (home page)",
    },
    {
        // SSs
        id: 2,
        title: "SS's",
        url: "#",
        icon: Construction,
        label: "Menu de solicitações de serviço",
        subMenu: [
            {
                id: 7,
                title: "Chamado",
                url: "/ss/chamado",
                label: "Incluir novo chamado",
            },
            {
                id: 8,
                title: "Incluir SS",
                url: "/ss/incluir-ss",
                label: "Incluir nova Solicitação de Serviço",
            },
            {
                id: 9,
                title: "Listagem",
                url: "/ss/ss-listagem",
                label: "Listar SS's",
            },
        ],
    },
    {
        // CADASTRO
        id: 3,
        title: "Cadastro",
        url: "#",
        icon: ClipboardPen,
        label: "Menu de cadastros",
        subMenu: [
            {
                id: 10,
                title: "Patrimônio",
                url: "#",
                label: "Menu de patrimônio",
                subMenu: [
                    {
                        id: 48,
                        title: "Listagem",
                        url: "/cadastro/patrimonio/listagem",
                        label: "Listar patrimônios",
                    },
                    {
                        id: 49,
                        title: "Movimentações",
                        url: "/cadastro/patrimonio/movimentacoes",
                        label: "Listar movimentações",
                    },
                    {
                        id: 50,
                        title: "Árvore de Patrimônio",
                        url: "/cadastro/patrimonio/arvore-de-patrimonio",
                        label: "Visualizar árvore de patrimônio",
                    },
                    {
                        id: 51,
                        title: "Inventário",
                        url: "/cadastro/patrimonio/inventario",
                        label: "Gerenciar inventário",
                    },
                    {
                        id: 52,
                        title: "SISMETRO IoT",
                        url: "/cadastro/patrimonio/sismetro-iot",
                        label: "Gerenciar SISMETRO IoT",
                    },
                    {
                        id: 53,
                        title: "Listener",
                        url: "/cadastro/patrimonio/listener",
                        label: "Gerenciar listener",
                    },
                ],
            },
            {
                id: 11,
                title: "Solicitante",
                url: "/cadastro/solicitante",
                label: "Gerenciar solicitantes",
            },
            {
                id: 12,
                title: "Localização",
                url: "/cadastro/localizacao",
                label: "Gerenciar localizações",
            },
            {
                id: 13,
                title: "Usuários",
                url: "#",
                label: "Menu de usuários",
                subMenu: [
                    {
                        id: 54,
                        title: "Listagem",
                        url: "/cadastro/usuarios/listagem",
                        label: "Listar usuários",
                    },
                    {
                        id: 55,
                        title: "Ocupações",
                        url: "/cadastro/usuarios/ocupacoes",
                        label: "Listar ocupações",
                    },
                    {
                        id: 56,
                        title: "Funcionários",
                        url: "/cadastro/usuarios/funcionarios",
                        label: "Listar funcionários",
                    },
                    {
                        id: 57,
                        title: "Equipes",
                        url: "/cadastro/usuarios/equipes",
                        label: "Listar equipes",
                    },
                    {
                        id: 58,
                        title: "Jornada de Trabalho",
                        url: "/cadastro/usuarios/jornada-de-trabalho",
                        label: "Listar jornadas de trabalho",
                    },
                ],
            },
            {
                id: 14,
                title: "Produtos",
                url: "/cadastro/produtos",
                label: "Gerenciar produtos",
            },
            {
                id: 15,
                title: "Serviços",
                url: "/cadastro/servicos",
                label: "Gerenciar serviços",
            },
            {
                id: 16,
                title: "Fornecedores",
                url: "/cadastro/fornecedores",
                label: "Gerenciar fornecedores",
            },
            {
                id: 17,
                title: "Projetos",
                url: "/cadastro/rojetos",
                label: "Gerenciar projetos",
            },
            {
                id: 18,
                title: "Fases",
                url: "/cadastro/fases",
                label: "Gerenciar fases",
            },
            {
                id: 19,
                title: "Marcas",
                url: "/cadastro/marcas",
                label: "Gerenciar marcas",
            },
            {
                id: 20,
                title: "Modelos",
                url: "/cadastro/modelos",
                label: "Gerenciar modelos",
            },
            {
                id: 21,
                title: "Padrões",
                url: "/cadastro/padroes",
                label: "Gerenciar padrões",
            },
            {
                id: 22,
                title: "Padrões FAC",
                url: "/cadastro/padroes-fac",
                label: "Gerenciar padrões FAC",
            },
        ],
    },
    {
        // CQ
        id: 4,
        title: "CQ",
        url: "#",
        icon: BadgeCheck,
        label: "Menu de Controle Qualidade",
        subMenu: [
            {
                id: 23,
                title: "Controles",
                url: "#",
                label: "Menu de Controles",
                subMenu: [
                    {
                        id: 59,
                        title: "Listagem",
                        url: "/cq/controles/listagem",
                        label: "Listar controles",
                    },
                    {
                        id: 60,
                        title: "Fórmulas de Controles",
                        url: "/cq/controles/formulas-de-controles",
                        label: "Listar fórmulas de controles",
                    },
                    {
                        id: 61,
                        title: "Abastecimento",
                        url: "/cq/controles/abastecimento",
                        label: "Listar abastecimento",
                    },
                    {
                        id: 62,
                        title: "Leituras Manuais",
                        url: "/cq/controles/leituras-manuais",
                        label: "Listar leituras manuais",
                    },
                    {
                        id: 63,
                        title: "Leituras Automáticas",
                        url: "/cq/controles/leituras-automaticas",
                        label: "Listar leituras automáticas",
                    },
                ],
            },
            {
                id: 24,
                title: "Biblioteca",
                url: "#",
                label: "Menu Biblioteca",
                subMenu: [
                    {
                        id: 64,
                        title: "Listagem",
                        url: "/cq/biblioteca/listagem",
                        label: "Listar biblioteca",
                    },
                    {
                        id: 65,
                        title: "Categorias",
                        url: "/cq/biblioteca/categorias",
                        label: "Listar categorias de biblioteca",
                    },
                ],
            },
            {
                id: 25,
                title: "Plano de Serviço",
                url: "#",
                label: "Menu Plano de Serviço",
                subMenu: [
                    {
                        id: 66,
                        title: "Listagem",
                        url: "/cq/plano-de-servico/listagem",
                        label: "Listar plano de serviço",
                    },
                    {
                        id: 67,
                        title: "Análise Diária de Planos",
                        url: "/cq/plano-de-servico/analise-diaria-de-planos",
                        label: "Listar análise diária de planos",
                    },
                    {
                        id: 68,
                        title: "Gestor de Parada de Planos",
                        url: "/cq/plano-de-servico/gestor-de-parada-de-planos",
                        label: "Listar gestor de parada de planos",
                    },
                ],
            },
            {
                id: 26,
                title: "Gestor de Documentos",
                url: "#",
                label: "Menu Gestor de Documentos",
                subMenu: [
                    {
                        id: 69,
                        title: "Listagem",
                        url: "/cq/gestor-de-documentos/listagem",
                        label: "Listagem de documentos",
                    },
                    {
                        id: 70,
                        title: "Categorias",
                        url: "/cq/gestor-de-documentos/categorias",
                        label: "Listar categorias de gestor de documentos",
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
        label: "Menu Administração",
        subMenu: [
            {
                id: 27,
                title: "Unidades",
                url: "/adm/unidades",
                label: "Gerenciar unidades",
            },
            {
                id: 28,
                title: "WebMaster",
                url: "/adm/webmaster",
                label: "Gerenciar webmaster",
            },
            {
                id: 29,
                title: "Perfil",
                url: "/adm/perfil",
                label: "Gerenciar perfis",
            },
            {
                id: 30,
                title: "Direitos",
                url: "/adm/direitos",
                label: "Gerenciar direitos",
            },
            {
                id: 31,
                title: "Tipo de Tecnologia",
                url: "/adm/tipo-de-tecnologia",
                label: "Gerenciar tipo de tecnologia",
            },
            {
                id: 32,
                title: "Tipo de Medida",
                url: "/adm/tipo-de-medida",
                label: "Gerenciar tipo de medida",
            },
            {
                id: 33,
                title: "Manual",
                url: "/adm/manual",
                label: "Gerenciar manuais",
            },
        ],
    },
    {
        // Configuração
        id: 6,
        title: "Configurações",
        url: "#",
        icon: Cog,
        label: "Menu Configurações",
        subMenu: [
            {
                id: 34,
                title: "Perfil de Segurança",
                url: "/configuracoes/perfil-de-seguranca",
                label: "Gerenciar perfil de segurança",
            },
            {
                id: 35,
                title: "Gestor de Garantia",
                url: "/configuracoes/gestor-de-garantia",
                label: "Gerenciar gestor de garantia",
            },
            {
                id: 36,
                title: "Biblioteca de Respostas",
                url: "/configuracoes/biblioteca de respostas",
                label: "Gerenciar biblioteca de respostas",
            },
            {
                id: 37,
                title: "Empresa",
                url: "/configuracoes/empresa",
                label: "Gerenciar empresa",
            },
            {
                id: 38,
                title: "Filial",
                url: "/configuracoes/filial",
                label: "Gerenciar filiais",
            },
            {
                id: 39,
                title: "Centro de Custo",
                url: "/configuracoes/centro-de-custo",
                label: "Gerenciar centros de custo",
            },
            {
                id: 40,
                title: "Classes/Categorias",
                url: "/configuracoes/classes-categorias",
                label: "Gerenciar classes/categorias",
            },
            {
                id: 41,
                title: "Diagnóstico Itens",
                url: "/configuracoes/diagnostico-itens",
                label: "Gerenciar diagnóstico itens",
            },
            {
                id: 42,
                title: "Gestor de Medidas",
                url: "/configuracoes/gestor-de-medidas",
                label: "Gerenciar gestor de medidas",
            },
            {
                id: 43,
                title: "Parametros da SS",
                url: "/configuracoes/parametros-da-ss",
                label: "Gerenciar parâmetros da SS",
            },
            {
                id: 44,
                title: "Tipos de Tecnologia",
                url: "/configuracoes/tipos-de-tecnologia",
                label: "Gerenciar tipos de tecnologia",
            },
            {
                id: 45,
                title: "Importador",
                url: "/configuracoes/importador",
                label: "Gerenciar importador",
            },
            {
                id: 46,
                title: "Endpoints de Integração",
                url: "/configuracoes/endpoints-de-integracao",
                label: "Gerenciar endpoints de integração",
            },
            {
                id: 47,
                title: "Consumo de Infraestrutura",
                url: "/configuracoes/consumo-de-infraestrutura",
                label: "Gerenciar consumo de infraestrutura",
            },
        ],
    },
];
