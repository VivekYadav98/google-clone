import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutRoutes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {LayoutRoutes.map(({ id, path, Component }) => (
          <Route 
          key={id} 
          path={path} 
          element={
            <Suspense fallback={<h2>loading...</h2>}>
              <Component />
            </Suspense>
          }
          >
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
