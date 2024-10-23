import { useState, useEffect } from 'react';
import './Leads.css'; // Custom CSS for extra styling (optional)

//list all the lead generate or get through various campaigns
const Leads = () => {
 let [leads, setLeads] = useState(null);
  useEffect(() => {
    const getLeads = async () => {
      const res = await fetch("http://localhost:3012/lead/info", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });

      const parsedRes = await res.json();
      setLeads(parsedRes);
    };
    getLeads();
  }, []);

  return (
    
    <div className="container my-4 d-flex justify-content-center flex-wrap ">
       <h1 className="text-center text-decoration-underline lh-lg w-100">
        Leads Generated
      </h1>
            {leads !== null &&
            leads.map((lead, idx)=>
            <div className="card m-2" style={{ width: '22rem' }} key={idx}>
            <div className="card-body">
            <h5 className="card-title">{lead.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Status: {lead.status}</h6>
            <p className="card-text"><strong>Email:</strong> {lead.email}</p>
            <p className="card-text"><strong>Phone:</strong> {lead.phone}</p>
            <p className="card-text"><strong>Assigned To:</strong> {lead.assigned_to}</p>
            <p className="card-text"><strong>Last Contacted:</strong> {new Date(lead.last_contacted).toLocaleString()}</p>
            <p className="card-text"><strong>Notes:</strong> {lead.notes}</p>
            </div>
            <div className="card-footer text-muted">
            Created on: {new Date(lead.created_at).toLocaleDateString()}
            </div>
        </div>
            )
        }
      
    </div>
  );
};

export default Leads;


