import { TodosStore } from './todos';

export function createStore() {
  return {
    todos: new TodosStore(),
  };
}
export type Store = ReturnType<typeof createStore>;