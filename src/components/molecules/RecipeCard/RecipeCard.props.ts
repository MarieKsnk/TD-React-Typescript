export interface IRecipeCard {
    id: string;
    title: string;
    image: string;
    onClick?: () => void;
}