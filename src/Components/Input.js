import React from 'react'
import { useState, useEffect, useRef } from 'react';
import "./input.css";
export default function Input(props) {

    const [text, settext] = useState("");
    const [item, setitem] = useState([]);
    const focusPoint = useRef(null);

    useEffect(() => {
        if (localStorage.getItem("items") === null) {
            setitem([]);
        }
        else {
            const string = localStorage.getItem("items");
            setitem(JSON.parse(string));
        }
    }, [])
    function useMounted() {
        const [isMounted, setIsMounted] = useState(false)
        React.useEffect(() => {
            setIsMounted(true)
        }, [])
        return isMounted
    }

    const isMounted = useMounted();


    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('items', JSON.stringify(item));
        }
    }, [item]);

    const handleChange = (e) => {
        let text2 = e.target.value;
        settext(text2);
    }

    const addItem = () => {
        if (text !== "") {
            const listItem = {
                id: Math.floor(Math.random() * 1000),
                text1: text,
                done: false
            }
            setitem(Oldlist => [...Oldlist, listItem]);
            settext("");
            focusPoint.current.focus();
        }
    }

    const handleDelete = (id) => {
        const arr = item.filter((x) => { return x.id !== id });
        setitem(arr);
    }

    const handleDone = (ID) => {
        const newArray = [...item];
        const match = newArray.find((i, index) => { return i.id === ID });
        match.done = true;
        setitem(newArray);
    }

    const handleClear = () => {
        const newArray = [...item].filter((e) =>
            e.done !== true
        );
        setitem(newArray);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    }

    return <>
        <div className="container form-group my-5">
            <h1 style={{ textAlign: "center", marginBottom: "15px" }}>To-Do List</h1>
            {/* <label htmlFor="">Enter a Task</label> */}
            <input type="text" className="form-control" id="search" placeholder="Enter a Task" onChange={handleChange} autoComplete="off" value={text} onKeyDown={handleKeyDown} ref={focusPoint} />
            <button type="button" id="add" className="btn  btn-success float-end my-1 md-3" onClick={addItem}>Add Task</button>
        </div>


        <div className="container mt-5">
            <h2 className="my-3">Your todos</h2>
            <ul className="list-group">
                {item.filter((element) => {
                    if (props.searchterm === "") {
                        return element;
                    }
                    else {
                        return element.text1.toLowerCase().includes(props.searchterm.toLowerCase());
                    }
                }).map((elem) => {
                    return <>
                        <li className={`list-group-item mb-1 ${elem.done? "done": ""}`} key={elem.id}>
                            <label class="custom-control-label mx-2" htmlFor={elem.id}>{elem.text1}</label>
                            <button onClick={() => handleDelete(elem.id)} className="btn btn-danger float-end mx-1"><i class="bi bi-trash"></i></button>
                            <button onClick={() => handleDone(elem.id)} className="btn btn-warning float-end"><i class="bi bi-check-lg"></i></button>
                            {/* <input type="checkbox" class="custom-control-input float-end" name="example1" id={elem.id} checked={elem.check} onChange={() => handleDone(elem.id)} /> */}
                        </li>
                    </>
                })
                }
            </ul>
        </div>
        <div className="container">
            {item.length != 0 ? <button className="btn btn-primary my-2" onClick={() => { handleClear() }}>Clear Tasks done</button> : "No Todos For now"}
        </div>
    </>
}
