const CustomOffcanvasFooter = (props) => {
  return (
    <div className="border-top py-4 px-4" {...props}>
      {props.children}
    </div>
  );
};

export default CustomOffcanvasFooter;
