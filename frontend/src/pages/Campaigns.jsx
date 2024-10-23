import useFetchCampaign from "../hooks/useFetchCampaign";

// to list all the campaign either active | hold | end
const Campaign = () => {
  const camps = useFetchCampaign();

  return (
    <div>
      <h1 className="text-center text-decoration-underline lh-lg">
        All Campaigns
      </h1>
      {camps !== null && camps.map((camp, idx)=><div className="card m-4"  key={idx}>
        <div className="card-header">
          <span className="badge rounded-pill text-bg-success float-end">
            status: {camp.status}
          </span>
        </div>
        <div className="card-body">
          <h2 className="card-title">{camp.campaign_name}</h2>
          <ul className="camp-stats m-0 p-2 bg-primary-subtle rounded-2">
            <li>
              <h5>Clicks</h5>
              <h5>{camp.clicks}</h5>
            </li>
            <li>
              <div className="HR h-100 mx-2 shadow-lg"></div>
            </li>
            <li>
              <h5>Impressions</h5>
              <h5>{camp.impressions}</h5>
            </li>
            <li>
              <div className="HR h-100 mx-2 shadow-lg"></div>
            </li>
            <li>
              <h5>Conversions</h5>
              <h5>{camp.conversions}</h5>
            </li>
          </ul>
          <div className="clearfix my-2">
            <span className="float-start ">
              Created at <span className="badge text-bg-dark">{new Date(camp.created_at).toString().split(" ").splice(0,4).join(" ")}</span>
            </span>
            <span className="float-end">
              End on<span className="badge text-bg-dark">{new Date(camp.end_date).toString().split(" ").splice(0,4).join(" ")}</span>
            </span>
          </div>

       
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>platform:</b> {camp.platform}</li>
            <li className="list-group-item">
              <b>target_audience:</b> {camp.target_audience}
            </li>
            <li className="list-group-item"><b>budget:</b> {camp.budget}</li>
            <li className="list-group-item"><b>spent:</b> {camp.spent}</li>
          </ul>
        </div>
      </div>)}
      
    </div>
  );
};

export default Campaign;
