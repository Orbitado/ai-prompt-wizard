export interface InputP {
    labelTitle?: string;
    placeholder: string;
    name: string;
    type?: "text" | "email" | "number" | "password" | "date";
    required?: boolean;
}

export interface TextAreaP extends InputP {
    rows?: number;
    disabled?: boolean;
    noResize?: boolean;
}

export interface RadioSelectP {
    name: string;
    options: string[];
}