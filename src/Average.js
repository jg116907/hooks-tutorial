import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log("계산중..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null); // ref 안의 값은 바뀌어도 컴포넌트 렌더링이 되지 않는다.

    const onChange = useCallback(e => {
        setNumber(e.target.value)
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus(); // 등록 버튼을 누르면 포커스가 input쪽으로 이동
    }, [number, list]); // numbers, list 가 바뀌었을 때만 함수 생성

    // 렌더링 과정에서 특정 값이 바뀌었을 때만 연산을 실행
    const avg = useMemo(() => getAverage(list), [list]); 

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b> {avg}
            </div>
        </div>
    );
};

export default Average;