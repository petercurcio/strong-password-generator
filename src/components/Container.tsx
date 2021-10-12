import React from "react";

type ContainerProps = {
  children: string;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="container">{children}</div>;
};

export default Container;
