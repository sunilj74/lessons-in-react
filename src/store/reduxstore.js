import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put, all} from "redux-saga/effects"

// URL Prefix
const RAWURL = 'https://raw.githubusercontent.com/sunilj74/lessons-in-react/master/';
const SOURCEURL ='https://github.com/sunilj74/lessons-in-react/blob/master/';

// Middleware
const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Actions
const GET_SOURCE_CODE = "GET_SOURCE_CODE";
export const getSourceCodeAction = (path) => {
    return {
        type: GET_SOURCE_CODE,
        payload: {
            path
        }
    };
}

const LOAD_SOURCE_CODE = "LOAD_SOURCE_CODE";
export const loadSourceCodeAction = (code, url, rawUrl) => {
    return {
        type: LOAD_SOURCE_CODE,
        payload: {
            code,
            url,
            rawUrl
        }
    };
}

const FAIL_SOURCE_CODE = "ERROR_SOURCE_CODE";
export const failSourceCodeAction = (error, url, rawUrl) => {
    return {
        type: FAIL_SOURCE_CODE,
        payload: {
            error,
            url,
            rawUrl
        }
    };
}

// Default State
const defaultSourceCode = {
    url: '',
    rawUrl: '',
    code: '',
    error: ''
}

// Reducers
const sourceCodeReducer = (state = defaultSourceCode, action) => {
    switch(action.type){
        case LOAD_SOURCE_CODE:
            return {
                ...state,
                error: '',
                code: action.payload.code,
                url: action.payload.url,
                rawUrl: action.payload.rawUrl
            };

        case FAIL_SOURCE_CODE:
            return {
                ...state,
                code: '',
                error: action.payload.error,
                url: action.payload.url,
                rawUrl: action.payload.rawUrl
            };
    }
    return state;
}

// Combined Reducers
const allReducers = combineReducers({
    sourceCode: sourceCodeReducer
});

// Fetch Method
function fetchSourceCode(url) {
    return fetch(url)
        .then(response => response.text());
}

// Saga Worker
function* workerGetSourceCode(action){
    const {path} = action.payload;
    const rawUrl = `${RAWURL}${path}`;
    const url = `${SOURCEURL}${path}`;
    try {
        const text = yield call(()=>fetchSourceCode(rawUrl));
        yield put(loadSourceCodeAction(text, url, rawUrl));
    }
    catch(error) {
        yield put(failSourceCodeAction(error, url, rawUrl));
    }
}

function* watcherAll() {
    yield all([
        takeEvery(GET_SOURCE_CODE, workerGetSourceCode)
    ]);
}

export const selectSourceCode = (state) => {
    const {sourceCode} = state;
    return {
        url: sourceCode.url,
        rawUrl: sourceCode.rawUrl,
        code: sourceCode.code,
        error: sourceCode.error
    };
};

export const store = createStore(allReducers, storeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherAll);
