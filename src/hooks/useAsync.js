import * as React from 'react';

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);
  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);
  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

function useAsync() {
  const [{ status, data, error }, unsafeSetState] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const setState = useSafeDispatch(unsafeSetState);

  const setData = React.useCallback(
    (data) => setState({ data, status: 'resolved' }),
    [setState]
  );

  const setError = React.useCallback(
    (error) => setState({ error, status: 'rejected' }),
    [setState]
  );

  const run = React.useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          'The argument passed to useAsync().run must be a promise.'
        );
      }

      setState({ status: 'pending' });

      return promise.then(
        (res) => {
          setData(res.data);
          return res.data;
        },
        (error) => {
          setError(error);
          return Promise.reject(error);
        }
      );
    },
    [setState, setData, setError]
  );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
  };
}

export default useAsync;
