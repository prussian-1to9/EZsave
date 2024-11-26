import mock from "./mock.json";

interface MockData {
  date: string;
  in: number;
  out: number;
}
interface Mock {
  month: string;
  predicted: {
    day: MockData[];
    week: MockData[];
  };
  real: MockData[];
}
const data: Mock = mock;

export default data;
