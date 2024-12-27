import Dropdown from "../topics/dropdown/BasicDropdown";
import SearchSelect from "../topics/dropdown/searchSelect/SearchSelect";

const data = [
  {
    heading: "Custom Select Dropdown",
    id: "select_dropdown",
    file: <Dropdown />,
    code: null,
    article: null,
    backId: null,
    nextId: "search_select",
  },
  {
    heading: "Search Select Dropdown",
    id: "search_select",
    file: <SearchSelect />,
    code: null,
    article: null,
    backId: "select_dropdown",
    nextId: null,
  },
];

export default data;
