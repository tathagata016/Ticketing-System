import { useEffect, useState } from 'react'
import type { TicketModel } from '../types/TicketModel'
import { createTicket,getTickets } from '../services/TicketService';
// import Dashboard from './Dashboard';

function Tickets() {
 const[tickets,setTickets]=useState<TicketModel[]>([]);
 const[title,setTitle]=useState("");
 const [description,setDescription]=useState("");

 useEffect(()=>{
  setTickets(getTickets())
 },[])

 const handleCreate=()=>{

  if(!title && !description)
    return ;

  const newTicket:TicketModel={
    id:`INC${Math.floor(Math.random()*10000)}`,
    title,
    description,
    status:"Open",
    date:new Date().toISOString()
  }
  
  createTicket(newTicket);
  setTickets(getTickets());

  setTitle("");
  setDescription("");


 }

  return (
     <div>
      <h1 className="text-2xl font-bold mb-4">Tickets</h1>

      {/* Create Ticket */}
      <div className="text-2xl font-bold p-2 rounded shadow mb-6">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          className="border p-2 mr-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>

      <table className="w-full border border-gray-200 bg-white shadow rounded">
 <thead>
    <tr className="bg-gray-100">
      <th className="p-2 border">Title</th>
      <th className="p-2 border">Description</th>
      <th className="p-2 border">Status</th>
      <th className="p-2 border">Created</th>
    </tr>
  </thead>

  <tbody>
    {tickets.map((ticket) => (
      <tr key={ticket.id} className="border-b">
        <td className="p-3 font-semibold text-center">{ticket.title}</td>
        <td className="p-3 text-center">{ticket.description}</td>
        <td className="p-3 text-center">{ticket.status}</td>
        <td className="p-3 text-sm text-gray-500 text-center">{ticket.date}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Tickets
