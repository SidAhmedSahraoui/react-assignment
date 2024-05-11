import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';

// react hot toast
import toast from 'react-hot-toast';

// ant design
import type { FormProps } from 'antd';
import { Form, Input } from 'antd';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// utils
import { WEBSITE_NAME } from '../../utils/appData';

// styles
import useStyles from './style';
import { login } from '../../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Spinner from '../../layouts/spinner';

type FieldType = {
  email?: string;
  password?: string;
};

const Login: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, token, loading } = useAppSelector((state) => state.authSlice);
  const [form] = Form.useForm<FieldType>();

  const [disabled, setDisabled] = useState<boolean>(true);
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    dispatch(login(values.email || '', values.password || ''));
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
    toast.error('Please enter valid credentials');
  };

  useEffect(() => {
    if (isAuth && token) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, token]);

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} | Login`}</title>
      </Helmet>
      <div className={`${classes.root} card-shadow text-center`}>
        <h3 className="title">Rapptr Labs</h3>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
          layout="vertical"
          form={form}
          onValuesChange={() => {
            // enable submit button if form is valid
            if (form.getFieldValue('email') && form.getFieldValue('password')) {
              if (
                form.getFieldValue('email').match(/@/) &&
                form.getFieldValue('password').length >= 4
              )
                setDisabled(false);
            } else {
              setDisabled(true);
            }
          }}
        >
          <Form.Item
            name="email"
            className="form-item"
            rules={[
              {
                required: true,
                message: 'Please enter a valid email',
                type: 'email',
                max: 50,
              },
            ]}
            label={<span className="label">Email</span>}
          >
            <Input
              id="email"
              placeholder="user@rapptrlabs.com"
              className="input-text"
              prefix={<FontAwesomeIcon icon={faUser} />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            className="form-item"
            rules={[
              {
                required: true,
                message: 'Please enter a valid password',
                type: 'string',
                min: 4,
                max: 16,
              },
            ]}
            label={<span className="label">Password</span>}
          >
            <Input.Password
              placeholder="Must be at least 4 characters"
              className="input-text"
              prefix={<FontAwesomeIcon icon={faLock} />}
            />
          </Form.Item>

          <Form.Item className="form-item">
            {loading ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className={disabled ? 'button-disabled' : 'button-primary'}
                disabled={disabled}
              >
                Submit
              </button>
            )}
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
