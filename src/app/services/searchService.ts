import MiniSearch from "minisearch";
import { Shop } from "../types/Shop";

let data: Shop[] = [];
let searchInstance: MiniSearch;

const initialize = () => {
  searchInstance = new MiniSearch<Shop[]>({
    idField: "tax",
    fields: ["name", "isVat", "tax"],
    storeFields: ["name", "isVat", "tax", "docTaxInvoiceFlag", "docRecieptFlag", "regisDateTh", "startDateTh", "endDateTh", "isicCode", "isicName", "sourceFlag"],
    searchOptions: {
      prefix: true,
      fuzzy: true,
      boost: {
        name: 2,
      },
    },
  });
};

const setData = (newData: Shop[]) => {
  data = newData;
  searchInstance.removeAll();
  searchInstance.addAll(newData);
};

const searchText = (text: string) => {
  if (!searchInstance) return data;
  if (text === null || text === undefined || text.length === 0) return data;
  return data.filter(x => x.name.includes(text) || x.tax.includes(text));
  // Search result actually contains extra fields, but is not used
  // return searchInstance.search(text) as unknown as Shop[];
};

const searchService = {
  initialize,
  setData,
  searchText,
};

export default searchService;
