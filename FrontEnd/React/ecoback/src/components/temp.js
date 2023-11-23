// App.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// AuthContext.js
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const login = (token) => {
    setAccessToken('2375903e9149e04c2af6ec0ef8173c3ba83eb1f7');
  };

  const logout = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

// LoginForm.js
const LoginForm = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://52.79.233.106:8000/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'temp',
          password: 'qwer12345678',
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const accessToken = data.access_token; // Update this based on the actual structure of the response data

      // Set the access token after successful login
      login(accessToken);

    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button type="button" style={{border: 'black solid 1px'}} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

// EventComponent.js
const EventComponent = () => {
  const { accessToken } = useAuth();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      setError('Unauthorized');
      return;
    }

    // Your API endpoint for events
    const apiUrl = 'http://52.79.233.106:8000/events/';

    // HTTP request headers
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    // Fetch events
    fetch(apiUrl, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [accessToken]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Combined App Component
const App = () => {
  return (
    <AuthProvider>
      <LoginForm />
      <EventComponent />
    </AuthProvider>
  );
};

export default App;
