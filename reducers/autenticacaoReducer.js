const INITIAL_STATE = {
    key: '',
    text: 'vai la',
    itens: [
      {key:'0', desc:'Item 1', done: false},
      {key:'1', desc:'Item 2', done: false}
    ],
}
export default (state = INITIAL_STATE, action) => {
    if (action.type == 'modifica_nome') {
        return { ...state, text: action.payload }
    }
    if (action.type == 'inserir_Lista') {
      if (state.key === '') {
        let newItem = {
          key: state.itens.length.toString(),
          desc: state.text,
          done: false,
        }
        let itens = state.itens;
        itens.push(newItem)
        state.key =  '',
        state.text =  '',
        alert(JSON.stringify(itens))
        return { ...state, itens: itens }
      }
      else{
        let key = state.key
        let newItem = {
          key: state.key,
          desc: state.text,
          done: false,
        }
        let itens = state.itens
        itens.splice(key, 1)
        itens.push(newItem)
        state.key =  '',
        state.text =  '',
        alert(JSON.stringify(itens))
        return { ...state, itens: itens }
      }
    }
    if (action.type == 'acessar_Dados') {
      let key = state.itens[action.payload]
      let newState = {
        key: key.key,
        text: key.desc,
        itens: state.itens,
      }
      state = newState
      alert(JSON.stringify(state))
  }
    return state;
}


/*let newItem = {
    key: this.state.itens.length.toString(),
    desc: this.state.text,
    done: false,
  }

  let itens = this.state.itens;
      let itens = this.state.itens;
    itens.push(newItem)
    this.setState({itens})

    let text = ""
    this.setState({text})*/