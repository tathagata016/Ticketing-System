import type { TicketModel } from "../types/TicketModel";

const Storage_Keys="tickets";

export const saveTickets=(tickets:TicketModel[])=>{
    localStorage.setItem(Storage_Keys,JSON.stringify(tickets));
}

export const getTickets=():TicketModel[]=>{
  const data=localStorage.getItem(Storage_Keys);
  return data?JSON.parse(data):[];
}

export const createTicket=(ticket:TicketModel)=>{
   const tickets=getTickets();
   tickets.push(ticket)
   saveTickets(tickets)
}