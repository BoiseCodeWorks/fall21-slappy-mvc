import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addValue() {
    // TODO explain spread operator
    ProxyState.values = [...ProxyState.values, new Value({ 
      title: Math.random(),
      color: 'green'
    })]
  }
}

export const valuesService = new ValuesService();

