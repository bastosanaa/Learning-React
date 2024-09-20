import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClose: () => void;
}

const Alert = ({ children, handleClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default Alert;
