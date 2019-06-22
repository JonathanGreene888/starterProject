import { runSaga } from 'redux-saga';

process.env = {
    ...process.env,
    API_ROOT: 'test',
};

// TODO: Type saga, initialAction, and dispatched
export const recordSaga = async (saga: any, action?: any) => {
    const dispatched: any[] = [];

    await runSaga(
        {
            dispatch: putAction => dispatched.push(putAction),
        },
        saga,
        action
    );

    return dispatched;
};
