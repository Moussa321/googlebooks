import React from "react";
import MyRouts from "./routers/routes";
import ErrorBoundary from "./components/ErrorBoundry";
function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <div>
        <MyRouts />
      </div>
    </ErrorBoundary>
  );
}

export default App;

const FallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
