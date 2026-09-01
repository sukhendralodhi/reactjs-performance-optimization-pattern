export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Products {
    products: Product[];
}

export interface ApiResponse {
    success: boolean;
    message: string;
    data: Products;
}