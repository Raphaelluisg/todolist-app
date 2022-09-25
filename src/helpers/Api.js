const tarefaContext = {
    tarefaEndpoint: () => `${Api.baseUrl}/tarefas`,
    tarefaLista: () => `${TarefaContext.tarefaEndpoint()}`
}

export const Api = {
    baseUrl: 'http://localhost:3002',
    ...TarefaContext
}