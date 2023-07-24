const CustomOffcanvasFooter = ({
  children,
  ...props
}: {
  children: JSX.Element | JSX.Element[] | string | React.ReactNode;
}) => {
  return (
    <div className="border-top py-4 px-4" {...props}>
      {children}
    </div>
  );
};

export default CustomOffcanvasFooter;
