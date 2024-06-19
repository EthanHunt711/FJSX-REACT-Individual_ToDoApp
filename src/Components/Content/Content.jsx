import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import ColumnsList from "./Columns/ColumnsList";

const Content = () => {
  const { columns } = useContext(DataContext);

  return (
    <>
      {columns.length ? (
        <ColumnsList columns={columns} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Finns inga planeringar</p>
      )}
    </>
  );
};

export default Content;
