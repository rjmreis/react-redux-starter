import React from 'react';
import { Card, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import style from './style.scss'; // eslint-disable-line

const LoginForm = ({creds, login, onChange}) => {

  return (
    <form onSubmit={login}>
      <div className={style.group}>
        <Card className={style.dashboardCard}>
          <Input type="text" label="Username" name="username" value={creds.username} onChange={onChange} floating={false} />
          <Input type="password" label="Password" name="password" value={creds.password} onChange={onChange} floating={false} />

          <CardActions className={style.cardActions}>
            <Button type="submit" label="Login" raised primary />
          </CardActions>
        </Card>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  creds: React.PropTypes.object.isRequired,
  login: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default LoginForm;
