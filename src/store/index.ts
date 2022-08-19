import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'TESTE 1'
            },
            {
                id: new Date().toISOString(),
                nome: 'TESTE 2'
            },
            {
                id: new Date().toISOString(),
                nome: 'TESTE 3'
            },
            {
                id: new Date().toISOString(),
                nome: 'TESTE 4'
            },
        ]
    }
})