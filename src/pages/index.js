import {
  Pie,
  PieChart,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import fetch from "isomorphic-unfetch";
import styles from "../styles/dashboard.module.css";

function Dashboard(props) {
    console.warn(props.data);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Book Sales Data In Graph Representation</h1>
      <div classbook={styles.graph}>
        <h1>Price Data</h1>
       
        <BarChart
          width={500}
          height={300}
          data={props.data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="Year"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="Fiction"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
        </BarChart>
        <PieChart width={400} height={400}>
        <Pie data={props.data1} dataKey="Year" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
        <Pie data={props.data1} dataKey="Fiction" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
      </div>
    </div>
  );
}

Dashboard.getInitialProps = async function () {
  const res = await fetch(
    "https://books-api-data.herokuapp.com/datasets"
  );
  const book=await fetch("https://books-api-data.herokuapp.com/books");
  const data = await res.json();
  const data1 = await book.json();
  console.log(data);

  return {
    data,data1
  };
};

export default Dashboard;
