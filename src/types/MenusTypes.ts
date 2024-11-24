export type SubMenuItem = {
    id: number;
    title: string;
    url: string;
    label: string;
    subMenu?: SubMenuItem[];
};

export type MenuItem = {
    id: number;
    title: string;
    url: string;
    icon: React.ElementType;
    label: string;
    subMenu?: SubMenuItem[];
};
