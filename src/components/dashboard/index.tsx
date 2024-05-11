import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { logout } from '../../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useStyles from './style';
import { WEBSITE_NAME } from '../../utils/appData';
import Spinner from '../../layouts/spinner';
import { addTodo } from '../../redux/todoSlice';
import Card from '../../layouts/card';

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todoSlice);
  const { isAuth, loading } = useAppSelector((state) => state.authSlice);
  const [todoList, setTodoList] = useState<string[]>(todos);

  const [todoContent, setTodoContent] = useState<string>('');
  const [addMode, setAddMode] = useState<boolean>(false);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    if (search.length < 1) {
      setTodoList(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.toLowerCase().includes(search.toLowerCase())
      );
      setTodoList(filtered);
    }
  };

  const onEnableAddMode = () => {
    if (addMode) {
      setAddMode(false);
      setTodoContent('');
    } else {
      setAddMode(true);
    }
  };

  const onAddTodo = () => {
    if (todoContent.length < 1) {
      return;
    }
    dispatch(addTodo(todoContent));
    setTodoContent('');
    setAddMode(false);
  };

  useEffect(() => {
    setTodoList(todos);
  }, [todos]);

  useEffect(() => {
    if (!isAuth) {
      window.location.href = '/';
    }
  }, [isAuth]);

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Todo`}</title>
      </Helmet>
      <div className={classes.page}>
        <header className="header">
          <div className="head">
            <h3 className="title">My Todo List</h3>
            <h6 className="subtitle">Here you can find your todos</h6>
          </div>
          <button
            type="button"
            className="button-primary"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </header>

        <div className="card-shadow">
          <div className="search-todo">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              onChange={onSearch}
            />
            <button
              className="button-primary"
              type="button"
              onClick={onEnableAddMode}
            >
              New
            </button>
          </div>
          <h6 className="text-center">
            Todos ({todoList !== null && todoList.length})
          </h6>
          {todoList !== null && !loading ? (
            <div className="cards-list">
              {addMode ? (
                <div className="add-todo">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Add todo"
                    value={todoContent}
                    onChange={(e) => setTodoContent(e.target.value)}
                  />
                  <button
                    className="button-primary"
                    type="button"
                    onClick={onAddTodo}
                  >
                    Add
                  </button>
                </div>
              ) : null}
              {todoList.length < 1 ? (
                <div className="no-todos">
                  <h5>No Todos!</h5>
                </div>
              ) : (
                todoList.map((todo, index) => (
                  <Card content={todo} index={index} key={index} />
                ))
              )}
            </div>
          ) : (
            <div className="content">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
