import Campaign from "../models/campaignSchema.js";


export const getAllCampaign = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    console.log(err);
  }
};
//for further scalablity and work
export const getCampaignWithId = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    res.json(campaign);
  } catch (err) {
    console.log(err);
  }
};


export const addCampaign = async (req, res)=>{
  try{
    const newCampaign =  new Campaign(req.body);
    const savedCamp = await newCampaign.save()
    console.log(savedCamp);
    res.json({msg:"We go the data"}).status(201);
  } catch (err) {
    console.log(err);
    res.json({ err})
  }
}
