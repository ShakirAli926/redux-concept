import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const addBtn = () =>{
        dispatch({
            type : 'increment'
        })
    }
    const addBtnBy25 = () =>{
        dispatch({
            type : 'incrementByValue',
            payload : 25,
        })
    }
    const subBtn = () =>{
        dispatch({
            type : 'decrement'
        })
    }

    return (
        <div>

            <button onClick={addBtn}>Increament</button>
            <button onClick={addBtnBy25}>Increament By 25</button>
            <button onClick={subBtn}>Decreament</button>
        </div>
    );
};

export default Home;