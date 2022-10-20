import React from "react";
import useSortedDeliveries from "./useSortedDeliveries";
import Skeleton from "./Skeleton";

export const Question2: React.FC = () => {
  const [data, loading] = useSortedDeliveries();

  return (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">ETA</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        {!loading ? (
          <>
            {data.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.amount}</td>
                <td>{a.eta}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </>
        ) : (
          Array.from(Array(3)).map((_, b) => (
            <tr key={b}>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
