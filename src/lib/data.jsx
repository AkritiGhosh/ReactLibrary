import Dropdown from "../topics/dropdown/BasicDropdown";
import SearchAddNewSelect from "../topics/dropdown/searchAddNewSelect/SearchSelect";
import SearchSelect from "../topics/dropdown/searchSelect/SearchSelect";
import SimpleTabs from "../topics/tabs/SimpleTabs";

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
    nextId: "search_add_new",
  },

  {
    heading: "Search Select Dropdown",
    id: "search_add_new",
    file: <SearchAddNewSelect />,
    code: null,
    article: null,
    backId: "search_select",
    nextId: "tabs",
  },
  {
    heading: "Tabs",
    id: "tabs",
    file: <SimpleTabs />,
    code: null,
    article: null,
    backId: "search_add_new",
    nextId: null,
  },
];

export default data;
