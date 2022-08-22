import { TipoNotificacao } from "@/interfaces/INotificacao"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutacoes"

type notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void
}

export default () : notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string) :void => {
        store.commit(NOTIFICAR, {
          titulo,
          texto,
          tipo,
        });
      }

      return {
        notificar
      }
}