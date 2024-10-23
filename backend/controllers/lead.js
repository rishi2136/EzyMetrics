import Lead from "../models/leadSchema.js";

export const getAllLead = async (req, res) => {
  try {
    const leads = await Lead.find().populate({path: "campaigns", strictPopulate: false});
    // console.log(leads);
    res.json(leads);
  } catch (err) {
    console.log(err);
  }
};

export const getLeadWithId = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    res.json(lead);
  } catch (err) {
    console.log(err);
  }
};
