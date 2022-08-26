import INotificacao from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseSore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, GET_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import { ADD_TAREFAS, GET_PROJETOS, GET_TAREFAS } from "./tipo-acoes";
import http from "@/http";
import ITarefa from "@/interfaces/ITarefa";


interface Estado {
    projetos: IProjeto[],
    tarefas: ITarefa[],

    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
        ],
        tarefas: [
        ],
        notificacoes: [
        ]
    },
    mutations: {
        [ADICIONA_PROJETO] (state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO] (state, id: string){
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },

        [NOTIFICAR] (state, novaNotificacao: INotificacao) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)
            
            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        },

        [GET_PROJETO] (state, projetos: IProjeto[]){
            state.projetos = projetos
        },
        [GET_TAREFAS] (state, tarefas: ITarefa[]){
            state.tarefas = tarefas
        },

        [ADD_TAREFAS] (state, tarefa: ITarefa){
            state.tarefas.push(tarefa)
        },        
    },
    actions: {
        [GET_PROJETOS] ({ commit }) {
            http.get('projetos')
            .then(resp => commit(GET_PROJETO, resp.data))
        },
        [GET_TAREFAS] ({ commit }) {
            http.get('tarefas')
            .then(resp => commit(GET_TAREFAS, resp.data))
        },
        [ADD_TAREFAS] ({commit}, tarefa:ITarefa) {
            return http.post('/tarefas', tarefa)
            .then(resp => commit(ADD_TAREFAS, resp.data))
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseSore(key)
}