import { useEffect, useRef, useState } from "react";
import { Delivery, getDeliveries } from "./network";

type statuses = "active" | "upcoming" | "pending" | "unknown";

const sortDeliveriesOld = (data: Delivery[]) => {
  const grouped = data.reduce<Record<statuses, Delivery[]>>(
    (a, b) => {
      const arr =
        "active" === b.status ||
        "upcoming" === b.status ||
        "pending" === b.status
          ? a[b.status]
          : a.unknown;
      arr.push(b);
      return a;
    },
    { active: [], upcoming: [], pending: [], unknown: [] }
  );

  const sorter = (a: Delivery, b: Delivery) =>
    (a.eta ?? Number.MAX_SAFE_INTEGER) - (b.eta ?? Number.MAX_SAFE_INTEGER);

  return [
    ...grouped.active.sort(sorter),
    ...grouped.upcoming.sort(sorter),
    ...grouped.pending.sort(sorter),
    ...grouped.unknown.sort(sorter)
  ];
};

const getStatusPriority = (status: string) => {
  switch (status) {
    case "active":
      return 0;
    case "upcoming":
      return 1;
    case "pending":
      return 2;
    default:
      return 3;
  }
};

const statusPriority:Record<statuses>

const sortDeliveries = (data: Delivery[]) =>
  data.sort(
    (a, b) =>
      getStatusPriority(a.status) - getStatusPriority(b.status) ||
      (a.eta ?? Number.MAX_SAFE_INTEGER) - (b.eta ?? Number.MAX_SAFE_INTEGER)
  );

const useSortedDeliveries = (): [Delivery[], boolean] => {
  const [state, setState] = useState<[Delivery[], boolean]>([[], true]); // [data, loading]
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await getDeliveries();
      if (mounted.current) {
        setState([sortDeliveries(response), false]);
      }
    };
    mounted.current = true;
    fetch();
    return () => {
      mounted.current = false;
    };
  }, []);

  return state;
};

export default useSortedDeliveries;
