import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');
    // useEffect(() => {  // componentDidUpdate
    //     console.log('렌더링 완료')
    //     console.log({
    //         name,
    //         nickname,
    //     });
    // });

    // useEffect(() => { // componentDidMount
    //     console.log('마운트 될 때만 실행')
    // }, []);

    // useEffect(() => {
    //     console.log(name);
    // }, [name]); // name이 변경될 때만 호출

    useEffect(() => { 
        console.log('effect');
        console.log(name);
        return () => { // unmount 혹은 update 되기 전에 작업을 수행
            console.log('cleanup');
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickName(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;