import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer } from '../../store'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                 <span className="text">{state.user.name}</span>
                :  <span className="text">sem usuário</span>}
               
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'add2ToNumber'})}>+2</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberMult7'})}>*72</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberDiv25'})}>/25</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberInt'})}>Int</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', payload: -9})}>-9</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', payload: +11})}>+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
