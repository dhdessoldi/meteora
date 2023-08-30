import { createListenerMiddleware } from '@reduxjs/toolkit';
import { adicionarTodosOsItens, carregarItens, carregarItensDeCategoria } from '../reducers/itens';
import itensService from '../../services/itens';

export const listenerTodosOsItens = createListenerMiddleware();
export const listenerItensDeCategoria = createListenerMiddleware();

listenerTodosOsItens.startListening({
  actionCreator: carregarItens,
  effect: async (action, { dispatch, fork }) => {
    const tarefa = fork(async api => {
      return await itensService.buscar();
    });
    const resposta = await tarefa.result;

    if (resposta.status === 'ok') {
      dispatch(adicionarTodosOsItens(resposta.value));
    }
  }
}
);
listenerItensDeCategoria.startListening({
  actionCreator: carregarItensDeCategoria,
  effect: async ({ payload }, { dispatch, fork }) => {
    const nomeCategoria = payload;
    const tarefa = fork(async api => {
      return await itensService.buscarDeCategorias(nomeCategoria);
    });
    const resposta = await tarefa.result;

    if (resposta.status === 'ok') {
      dispatch(adicionarTodosOsItens(resposta.value));
    }
  }
}
);
