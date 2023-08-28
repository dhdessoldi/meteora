import { createListenerMiddleware } from '@reduxjs/toolkit';
import { adicionarTodosOsItens, carregarItens } from '../reducers/itens';
import itensService from '../../services/itens';

export const listenerItens = createListenerMiddleware();

listenerItens.startListening({
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
});
