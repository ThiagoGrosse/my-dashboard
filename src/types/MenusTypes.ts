export type SubMenuItem = {
    id: number;
    title: string;
    url: string;
    subMenu?: SubMenuItem[];
};

export type MenuItem = {
    id: number;
    title: string;
    url: string;
    icon: React.ElementType;
    subMenu?: SubMenuItem[];
};
