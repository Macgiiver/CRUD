export interface User {
    _id?: string;
    Id: any;
    Nombre: string;
    Edad: number;
    CorreoElectronico: string;
    Direccion: {
        Calle: string;
        Numero: number;
        Ciudad: string;
        Pais: string;
    };
    Telefono: string;
    Ocupacion: string;
    Intereses: string[];
    eliminado?: boolean;
}
