
import React from "react"
import { useForm } from "react-hook-form"
import {useNavigate, useOutletContext} from "react-router-dom"
import emailJS from "@emailjs/browser"; 
const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;


const AddCampaign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate();
  let email = useOutletContext();

  const emailObject = {
    from_name: "Rishi",
    to_name: email,
    message:
      "hello their your are creating your own campaign through our website",
  };

  (function () {
    // https://dashboard.emailjs.com/admin/account
    emailJS.init({
      publicKey: VITE_PUBLIC_KEY,
    });
  })();

  const autoEmail = () => {
    if (email !== null) {
      // sendForm template as sendForm('service_id', 'template_id', emailObject, "public key")
      emailJS
        .sendForm(
          VITE_SERVICE_ID,
          VITE_TEMPLATE_ID,
          emailObject,
          VITE_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Email sended to you");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      // console.log("I am exceuted");
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch("http://localhost:3012/camp/add", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const parsedData = await res.json();
    console.log(parsedData);
    autoEmail();
    navigate("/");
  };

  console.log(email);
  return (
    <>
    <h1 className="text-center fw-semibolder text-decoration-underline">Create A Campaign</h1>
     <form  className="col-6 offset-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <figcaption className="text-center">Fill the listed field details </figcaption>
    <input type="text" className="form-control mb-3" {...register("campaign_name")} placeholder="campaign_name"/>
    <input type="date" className="form-control mb-3" {...register("start_date")} placeholder="start_date"/>
    <input type="date" className="form-control mb-3" {...register("end_date")} placeholder="end_date"/>
    <input type="number" className="form-control mb-3" {...register("budget")} placeholder="budget"/>
    <input type="number" className="form-control mb-3" {...register("spent")} placeholder="spent"/>
    <input type="number" className="form-control mb-3" {...register("impressions")} placeholder="impressions"/>
    <input type="number" className="form-control mb-3" {...register("clicks")} placeholder="clicks"/>
    <input type="number" className="form-control mb-3" {...register("conversions")} placeholder="conversions"/>
    <input type="text" className="form-control mb-3" {...register("status")} placeholder="status"/>
    <input type="text" className="form-control mb-3" {...register("platform")} placeholder="platform"/>
    <input type="text" className="form-control mb-3" {...register("target_audience")} placeholder="target_audience"/>
   <input type="submit" className="btn btn-primary" />
    </form>
    </>
   
  )
}


export default AddCampaign;
