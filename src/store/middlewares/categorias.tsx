import { createListenerMiddleware } from '@reduxjs/toolkit';
import { adicionarTodasAsCategorias, carregarCategorias } from '../reducers/categorias';
import categoriasService from '../../services/categorias';

export const listenerCategorias = createListenerMiddleware();

listenerCategorias.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork }) => {
    const tarefa = fork(async api => {
      return await categoriasService.buscar();
    });

    const resposta = await tarefa.result;

    if (resposta.status === 'ok') {
      dispatch(adicionarTodasAsCategorias(resposta.value));
    }
  }
});
