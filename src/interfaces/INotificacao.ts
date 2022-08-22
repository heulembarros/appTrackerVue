export enum TipoNotificacao{
    SUCESSO,
    FALHA,
    ATENCAO
}

export default interface INotificacao {
    tipo: TipoNotificacao;
    titulo: string;
    texto: string;
    id: number
}