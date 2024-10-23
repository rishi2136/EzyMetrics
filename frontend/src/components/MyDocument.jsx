import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import UseFetchCampaign from "../hooks/useFetchCampaign"

//layout of the report document to be printed

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#cfe2ff",
    borderRadius: 8
  },
  title: {
    color: "red",
    fontSize: "24px",
     marginBottom: "12px",
    textDecoration: "underline"
  },
  docHeading: {
    fontSize: "36px",
    color:"white",
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "navy-blue",
   
  }, 
  dataset: {
    backgroundColor: "white", 
    borderRadius: "30px",
    margin: "8px 0"
  }
});

// Create Document Component
const MyDocument = () => {
  const camps = UseFetchCampaign() || null; 
  return(
 <Document style={styles.document} title="campaign report" >
<Page size="A4" style={styles.page} >
<View>
  <Text style={styles.docHeading}>{"Campaign Reprot".toUpperCase()}</Text>
</View>
{camps !== null && camps.map((el,idx)=>(
      <View style={styles.section} key={idx}>
        <Text style={styles.title}>{el.campaign_name}</Text>
        <Text style={styles.subtitle}>Start date:{new Date(el.start_date).toString().split(" ").splice(0,4).join(" ")} &nbsp;  | &nbsp; End date: {new Date(el.end_date).toString().split(" ").splice(0,4).join(" ")}</Text>
        {/* <Text style={styles.craetedAt}>createdAt :{el}</Text> */}
        <Text style={styles.dataset}>
        budget: { el.budget }
        </Text>
        <Text style={styles.dataset}>
        spent: { el.spent }
        </Text>
        <Text style={styles.dataset}>
        impressions: { el.impressions }
        </Text>
        <Text style={styles.dataset}>
        clicks: { el.clicks }
        </Text>
        <Text style={styles.dataset}>
        conversions: { el.conversions }
        </Text>
        <Text style={styles.dataset}>
        status: { el.status }
        </Text>
        <Text style={styles.dataset}>
        platform: { el.platform }
        </Text>
        <Text style={styles.dataset}>
        target_audience: { el.target_audience }
        </Text>
      </View>
))}
    </Page>  
  </Document>
  )};

export default MyDocument;
