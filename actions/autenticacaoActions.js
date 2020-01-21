export const modificaNome = (texto) => {

    return {

        type: 'modifica_nome',
        payload: texto
    }
}

export const inserirNaLista = (texto) => {

    return {

        type: 'inserir_Lista',
    }
}

export const acessarDados = (key) => {

    return {

        type: 'acessar_Dados',
        payload: key
    }
}

