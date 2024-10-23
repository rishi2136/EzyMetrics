import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../components/MyDocument";  //to get the layout of the pdf which we have to print or download

//to print the campaign sales report from reportive campaign
const Report = () => {
  return (
    <PDFViewer style={{ height: "100vh" }}>
      <MyDocument />
    </PDFViewer>
  );
};

export default Report;
