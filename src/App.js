import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import BlogContextProvider from "./Context/BlogContextProvider";
import Layout from "./Layout/Layout";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <UserContextProvider>
      <BlogContextProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </BlogContextProvider>
    </UserContextProvider>
  );
};

export default App;
