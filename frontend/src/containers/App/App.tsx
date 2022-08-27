import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => console.log("mounted"), []);

  return <main role="main">This is working!</main>;
};
