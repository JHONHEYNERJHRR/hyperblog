import { createStore } from 'redux'

const contador = document.getElementById('Contador')
const decrementar = document.getElementById('decrementar')
const incrementar = document.getElementById('incrementar')

const INITIAL_STATE = {
    counter: 0
}

// Reducers
function counterApp(state = INITIAL_STATE, action) {
    console.log(state, action)
    return state
}

const store = createStore(counterApp)

incrementar.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

decrementar.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
})