import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { logout } from '../../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useStyles from './style';
import { WEBSITE_NAME } from '../../utils/appData';
import Spinner from '../../layouts/spinner';

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { isAuth, token, loading, todos } = useAppSelector(
    (state) => state.authSlice
  );

  useEffect(() => {
    if (!isAuth || !token) {
      dispatch(logout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, token]);

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Messages`}</title>
      </Helmet>
      <div className={classes.page}>
        <h3 className="title">Messages</h3>
        <h6 className="subtitle">Here you can find your messages</h6>
      </div>

      <div className={classes.page}>
        <div className="row">
          <div className="col-12 col-lg-9">
            <h6 className="text-left">
              Messages ({todos !== null && todos.length})
            </h6>
            {todos !== null && !loading ? (
              <div className="messages mt-3">
                {todos.length < 1 ? (
                  <div className="no-requests mt-5">
                    <h5>No messages!</h5>
                  </div>
                ) : //   todos.map((todo) => (
                //     // <MessageItem
                //     //   key={conversation.id}
                //     //   conversation={conversation}
                //     // />
                //     <h1>{todo}</h1>
                //   ))
                null}
              </div>
            ) : (
              <div className="content text-center mt-5">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
