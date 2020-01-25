import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try {
            const result = await promiseCreator();
            setResolved(result);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => { // async 사용 x => 함수가 아닌 프로미스를 반환하기 때문
        process();
    }, deps);

    return [loading, resolved, error];
}