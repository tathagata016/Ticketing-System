export type TicketStatus="Open"|"In Progress"|"Closed"

export interface TicketModel{
    id:string;
    title:string;
    description:string;
    status:TicketStatus;
    date:string;
}